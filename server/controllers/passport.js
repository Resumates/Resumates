const passport = require('passport');
const { Strategy: NaverStrategy } = require('passport-naver-v2');
const User = require('../models/user');

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
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: 'naver' },
          });
          if (exUser) {
            exUser.accessToken = accessToken; // Access Token을 user 객체에 추가
            done(null, exUser);
          } else {
            const newUser = await User.create({
              email: profile.email,
              nick: profile.name,
              snsId: profile.id,
              provider: 'naver',
            });
            newUser.accessToken = accessToken; // Access Token을 user 객체에 추가
            done(null, newUser);
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

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
