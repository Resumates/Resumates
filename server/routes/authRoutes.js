const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');

router.get('/naver', passport.authenticate('naver', { authType: 'reprompt' }));

router.get(
  '/naver/callback',
  passport.authenticate('naver', { failureRedirect: 'http://localhost:3000/', session: false }),
  (req, res) => {
    const accessToken = req.user.accessToken; // req.user에서 accessToken 가져오기
    res.redirect(`http://localhost:3000/mainLogin?token=${accessToken}`); // 클라이언트의 로그인 성공 경로로 액세스 토큰 전달
  },
);

router.get('/user', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.query.email }); // 이메일로 사용자 조회
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ accessToken: user.accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
