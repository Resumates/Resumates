const { Resumes } = require('../models/resumes');

exports.resumeController = {
  // 이력서 작성
  async insertResume(req, res) {
    let temp = {
      name: req.body.name,
      image: req.body.image,
      birth: req.body.birth,
      gender: req.body.gender,
      phone: req.body.phone,
      email: req.body.email,
    };

    try {
      const newResume = new Resumes(temp);
      await newResume.save();
      res.send('이력서 저장 성공');
    } catch (error) {
      res.status(500).send('이력서 저장 실패:' + error.message);
    }
  },
};
