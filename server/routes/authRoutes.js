const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/naver', passport.authenticate('naver', { authType: 'reprompt' }));

router.get(
  '/naver/callback',
  passport.authenticate('naver', { failureRedirect: 'http://localhost:3000/', session: false }), // session: false 옵션 추가
  (req, res) => {
    const accessToken = req.user.accessToken; // req.user에서 accessToken 가져오기
    res.redirect(`http://localhost:3000/mainLogin?token=${accessToken}`); // 클라이언트의 로그인 성공 경로로 액세스 토큰 전달
  },
);

module.exports = router;
