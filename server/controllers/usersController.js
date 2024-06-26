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
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(userPw, existingUser.userPw);
  } catch (err) {
    const error = new HttpError(
      'Could not log you in, please check your credentials and try again.',
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.userId, email: existingUser.userPw },
      'supersecret_dont_share',
      { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  res.json({
    userId: existingUser.userId,
    userPw: existingUser.userPw,
    token: token
  });
};

// 아이디 검증
const useridvaild = async (req, res) => {
  const { userId } = req.body;
  console.log(userId);

  try {
    const user = await User.findOne({ userId: userId });
    if (user) {
      return res.status(200).json({ valid: false, message: '사용중인 아이디입니다.' });
    }
    return res.status(200).json({ valid: true, message: '사용 가능한 아이디입니다.' });
  } catch (error) {
    console.error('서버에러', error);
    return res.status(500).json({ message: '서버 에러' });
  }
};

// 이메일 검증
const emailvalid = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const validEmail = await User.findOne({ email: email });
    if (validEmail) {
      return res.status(200).json({ valid: false, message: '사용중인 이메일입니다.' });
    }
    return res.status(200).json({ valid: true, message: '이메일로 인증코드가 발송되었습니다.' });
  } catch (error) {
    console.error('서버에러', error);
    return res.status(500).json({ message: '서버 에러' });
  }
};

// 회원가입
const signup = async (req, res) => {
  const { userId, userPw, email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: '이미 존재하는 아이디입니다.' });
    }

    const user = new User({ userId, userPw, email });
    const savedUser = await user.save();

    return res.status(201).json({ user: savedUser ,message:'회원가입 성공' });
  } catch (error) {
    console.error('서버에러', error);
    return res.status(500).json({ message: '서버 에러' });
  }
};

exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;
exports.useridvaild = useridvaild;
exports.emailvalid = emailvalid;
