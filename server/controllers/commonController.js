const { default: mongoose } = require('mongoose');
const { Resumes } = require('../models/resumes');
const User = require('../models/user');

// 메인
exports.main = async (req, res) => {
  res.send('메인페이지 입니다.');
};

// 인트로
exports.intro = async (req, res) => {
  res.send('인트로페이지 입니다.');
};

// 템플릿 페이지
exports.templateList = async (req, res) => {
  res.send('템플릿 목록 페이지');
};

// 유저 데이터
exports.userInfo = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findOne({ userId: userId });
    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error('서버 연결 에러', error);
    return res.status(500).json({ message: '서버 연결 실패' });
  }
};

// 이력서 작성
exports.writeResume = async (req, res) => {
  res.send('이력서 작성');
};
// 이력서 상세
exports.detailResume = async (req, res) => {
  try {
    const { resumeId } = req.params;
    if (!mongoose.isValidObjectId(resumeId))
      return res.status(400).send({ err: '유효한 ObjectId가 아닙니다.' });
    const resume = await Resumes.findOne({ _id: resumeId }).collation({
      locale: 'en',
      strength: 2,
    });
    if (!resume) {
      return res.status(404).send({ err: '해당 이력서가 없습니다.' });
    }
    return res.send({ detail: resume });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
};

exports.mypage = async (req, res) => {
  res.send('마이페이지');
};
