const { default: mongoose } = require('mongoose');
const { Resumes } = require('../models/resumes');

const resumeController = {
  // 이력서 작성
  async insertResume(req, res) {
    let data = {
      name: req.body.name,
      image: req.body.image,
      birth: req.body.birth,
      gender: req.body.gender,
      phone: req.body.phone,
      email: req.body.email,
    };

    try {
      if (!req.body.name) return res.status(400).send({ err: 'name is required' });
      const newResume = new Resumes(req.body);
      await newResume.save();
      return res.send({ '이력서 저장 성공': newResume });
    } catch (err) {
      return res.status(500).send({ '이력서 저장 실패': err.message });
    }
  },

  // 이력서 수정
  async editResume(req, res) {
    try {
      const { resumeId } = req.params;
      if (!mongoose.isValidObjectId(resumeId))
        return res.status(400).send({ err: '유효한 ObjectId가 아닙니다.' });
      const { name, image, gender, phone } = req.body;
      if (!name && !image && !gender && !phone)
        return res.status(400).send({ err: '정보를 수정하지 않았습니다.' });

      let updateBody = {};
      if (name) updateBody.name = name;
      if (image) updateBody.image = image;
      if (gender) updateBody.gender = gender;
      if (phone) updateBody.phone = phone;

      const resume = await Resumes.findByIdAndUpdate(resumeId, updateBody, { new: true });
      return res.send({ '이력서 수정': resume });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ '이력서 수정 실패': err.message });
    }
  },

  // 이력서 삭제
  async deleteResume(req, res) {
    try {
      const { resumeId } = req.params;
      if (!mongoose.isValidObjectId(resumeId))
        return res.status(400).send({ err: '유효한 ObjectId가 아닙니다.' });
      // deleteOne
      const resume = await Resumes.findOneAndDelete({
        _id: resumeId,
      }).collation({
        locale: 'en',
        strength: 2,
      });
      return res.send({ '이력서 삭제': resume });
    } catch (err) {
      console.log('error: ', err);
      return res.status(500).send({ err: err.message });
    }
  },
};

module.exports = resumeController;
