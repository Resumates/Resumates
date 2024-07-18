const { default: mongoose } = require('mongoose');
const { Resumes } = require('../models/resumes');
const User = require('../models/user');
const multer = require('multer');
const path = require('path');

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
  const { userId } = req.params;
  try {
    const findUser = await User.findOne({ userId: userId });
    if (!findUser) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }
    const user = {
      userId: findUser.userId,
      email: findUser.email,
    };
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
    const resume = await Resumes.findOne({ _id: resumeId }).collection({
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

// 마이페이지
exports.mypage = async (req, res) => {
  try {
    const { userId } = req.params;
    const resume = await Resumes.find({ userId: userId });
    if (!resume) {
      return res.status(404).send('이력서가 존재하지 않습니다.');
    }
    res.json(resume);
  } catch (err) {
    console.log('서버에러');
    res.status(500).send(err.message);
  }
};

// 이미지 업로드
const storage = multer.diskStorage({
  destination: './upload/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single('image');

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('이미지만 등록 가능합니다.');
  }
}

exports.uploadImg = async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      upload(req, res, (err) => {
        if (err) {
          reject(err);
        } else if (req.file === undefined) {
          reject('파일이 선택되지 않았습니다.');
        } else {
          resolve();
        }
      });
    });

    res.status(200).json({
      message: '파일 업로드 성공',
      file: `upload/${req.file.filename}`,
    });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};
