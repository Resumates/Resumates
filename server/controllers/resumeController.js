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
      const newResume = new Resumes(data);
      await newResume.save();
      res.send('이력서 저장 성공');
    } catch (error) {
      res.status(500).send('이력서 저장 실패:' + error.message);
    }
  },

  // 이력서 수정
  async editResume(req, res) {
    // const {resumeId} = req.params;
    res.send('이력서 수정');
  },

  async deleteResume(req, res) {
    try {
      const { resumeId } = req.params;

      await Resumes.deleteOne({
        _id: resumeId,
      }).exec();
      res.send('이력서 삭제');
    } catch (error) {
      console.log('error: ', error);
      res.status(500).send({ message: 'server Error' });
    }
  },
};

module.exports = resumeController;
