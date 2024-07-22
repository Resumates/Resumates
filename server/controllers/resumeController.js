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
    console.log(req.params);
    try {
      const { resumeId, formData } = req.body;
      console.log(resumeId);
      console.log(formData);

      if (!mongoose.isValidObjectId(resumeId))
        return res.status(400).send({ err: '유효한 ObjectId가 아닙니다.' });

      const resume = await Resumes.findById(resumeId);
      console.log(resume);

      if (!resume) {
        return res.status(404).send({ message: '이력서를 찾을 수 없습니다.', valid: false });
      }

      Object.assign(resume, formData);
      await resume.save();

      return res.status(200).send({ message: '이력서 수정 성공', valid: true });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: '이력서 수정 실패', valid: false });
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
