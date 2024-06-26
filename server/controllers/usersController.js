const HttpError = require('../models/http-error');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const login = async (req, res, next) => {
  const { userId, userPw } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ userId: userId });
  } catch (err) {
    const error = new HttpError('Logging in failed, please try again later.', 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError('Invalid credentials, could not log you in.', 401);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(userPw, existingUser.userPw);
  } catch (err) {
    const error = new HttpError(
      'Could not log you in, please check your credentials and try again.',
      500,
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError('Invalid credentials, could not log you in.', 401);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.userId, email: existingUser.userPw },
      'supersecret_dont_share',
      { expiresIn: '1h' },
    );
  } catch (err) {
    const error = new HttpError('Logging in failed, please try again later.', 500);
    return next(error);
  }

  res.json({
    userId: existingUser.userId,
    userPw: existingUser.userPw,
    token: token,
  });
};

// 아이디 검증
const useridvaild = async (req, res) => {
  const { userId } = req.body;
  console.log(userId);

  try {
    const user = await User.findOne({ userId: userId });
    if (!user) {
      return res.status(200).json({ valid: true, message: '사용 가능한 아이디입니다.' });
    } else {
      return res.status(409).json({ valid: false, message: '사용중인 아이디입니다.' });
    }
  } catch (error) {
    console.error('서버 연결 에러', error);
    return res.status(500).json({ message: '서버 연결 실패' });
  }
};

// 이메일 검증
const emailvalid = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const validEmail = await User.findOne({ email: email });
    if (!validEmail) {
      return res.status(200).json({ message: '이메일로 인증코드가 발송되었습니다.' });
    } else {
      return res.status(409).json({ message: '사용중인 이메일입니다.' });
    }
  } catch (error) {
    console.error('서버 연결 에러', error);
    return res.status(500).json({ message: '서버 연결 실패' });
  }
};

// 메일 인증
const sendmail = () => async (req, res) => {
  const { email } = req.body;

  if (validation(email)) {
    try {
      const result = await send(email);

      res.send({ message: '인증 메일을 발송했습니다.', result });
    } catch (e) {
      res.send({ e });
    }
  } else {
    res.send({ message: '메일 전송에 실패했습니다.', data });
  }
};

const send = async (data) => {
  const transporter = nodeMailer.createTransport({
    service: 'naver',
    host: 'smtp.naver.com',
    port: 587,
    auth: {
      user: `${process.env.ADMIN_EMAIL}`,
      pass: `${process.env.ADMIN_PW}`,
    },
  });

  const sendNotification = async (recipientEmail, code) => {
    // 발신자, 수신자와 전송할 이메일 내용 설정
    const BUSINESS_NAME = 'Resumates';
    const mailOptions = {
      from: `${BUSINESS_NAME} <${process.env.ADMIN_EMAIL}>`,
      to: recipientEmail, // 수신자
      subject: `${BUSINESS_NAME} : 회원가입 이메일 인증 메일입니다.`, // 제목
      text: '', // 이메일 내용
      html: `
    <div>
      <p>${BUSINESS_NAME}</p>
      <p>Confirmation Code : ${code}</p>
    </div>
    `, // 이메일 본문에 html을 담아 전송
    };
    try {
      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('error occured sending email:', error);
        } else {
          console.log('success:', info.response);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const validation = (data) => {
  return (
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      data.email,
    ) &&
    data.title != undefined &&
    data.message != undefined
  );
};

// 회원가입
const signup = async (req, res) => {
  const { userId, userPw, email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: '이미 존재하는 아이디입니다.' });
    }

    const user = new User({ userId, userPw, email });
    const savedUser = await user.save();

    return res.status(201).json({ user: savedUser, message: '회원가입 성공' });
  } catch (error) {
    console.error('서버 연결 에러', error);
    return res.status(500).json({ message: '서버 연결 실패' });
  }
};

exports.getUsers = getUsers;
exports.login = login;
exports.useridvaild = useridvaild;
exports.emailvalid = emailvalid;
exports.sendmail = sendmail;
exports.signup = signup;
