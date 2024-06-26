const { Resumes } = require('../models/resumes');

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

// 이력서 작성
exports.writeResume = async (req, res) => {
  res.send('이력서 작성');
};

exports.mypage = async (req, res) => {
  res.send('마이페이지');
};
