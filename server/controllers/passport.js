const passport = require('passport');
const { Strategy: NaverStrategy } = require('passport-naver-v2');
const User = require('../models/user'); // User 모델을 가져옵니다.

module.exports = () => {
  passport.use(
    new NaverStrategy(
      {
        clientID: process.env.NAVER_ID,
        clientSecret: process.env.NAVER_SECRET,
        callbackURL: 'http://localhost:5000/auth/naver/callback', // 콜백 URL 설정
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('naver profile : ', profile);
        console.log('Access Token: ', accessToken); // 액세스 토큰 출력
        try {
          let user = await User.findOne({ snsId: profile.id, provider: 'naver' });

          if (user) {
            user.accessToken = accessToken; // Access Token을 user 객체에 추가
            await user.save(); // 사용자 객체를 MongoDB에 저장
            done(null, user);
          } else {
            user = new User({
              email: profile.email,
              nick: profile.name,
              snsId: profile.id,
              provider: 'naver',
              accessToken, // Access Token을 user 객체에 추가
            });
            await user.save(); // 사용자 객체를 MongoDB에 저장
            done(null, user);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      },
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
};
