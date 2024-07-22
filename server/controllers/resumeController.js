const { default: mongoose } = require('mongoose');
const { Resumes } = require('../models/resumes');

const resumeController = {
  // 이력서 작성
  async insertResume(req, res) {
    try {
      let data = { ...req.body };

      // if (!data.name) return res.status(400).send({ err: 'name is required' });

      const newResume = new Resumes(data);
      await newResume.save();
      return res.status(201).send({ '이력서 저장 성공': newResume });
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

      const { name, image, birth, gender, phone } = req.body;

      // 문자열을 Date 객체로 변환
      const birthDate = new Date(req.body.birth);
      birthDate.setHours(0, 0, 0, 0);

      req.body.birth = birthDate;

      if (!name && !image && !birth && !gender && !phone)
        return res.status(400).send({ err: '정보를 수정하지 않았습니다.' });

      let updateBody = {};
      if (name) updateBody.name = name;
      if (image) updateBody.image = image;
      if (birth) updateBody.birth = birth;
      if (gender) updateBody.gender = gender;
      if (phone) updateBody.phone = phone;

      // 사용자 정보 업데이트
      const resume = await Resumes.findByIdAndUpdate(resumeId, updateBody, { new: true });
      return res.status(200).send({ '이력서 수정': resume });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ '이력서 수정 실패': err.message });
    }
  },

  // 이력서 삭제
  async deleteResume(req, res) {
    try {
      const { resumeId } = req.body;
      if (!mongoose.isValidObjectId(resumeId))
        return res.status(400).send({ err: '유효한 ObjectId가 아닙니다.' });
      const resume = await Resumes.findOneAndDelete({ _id: resumeId });
      return res.status(200).send({ '이력서 삭제': resume });
    } catch (err) {
      console.log('error: ', err);
      return res.status(500).send({ err: err.message });
    }
  },
};

module.exports = resumeController;
