const User = require('../models/user');

// useridvaild
const useridvaild = async (req, res) => {
  const { userId } = req.body;
  console.log(userId);
  //console.log(res);
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

// emailvalid
const emailvalid = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  //console.log(res);
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

// Signup
const signup = (req, res, next) => {
  const { userId, password, email } = req.body;

  const createdUser = {
    userId,
    email,
    password,
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};

exports.signup = signup;
exports.useridvaild = useridvaild;
exports.emailvalid = emailvalid;
