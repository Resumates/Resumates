const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');
const { commonRouter, resumeRouter } = require('./routes');
const path = require('path');
require('dotenv').config();
const { PORT, MONGO_URL } = process.env;

// MongoURI 연결
mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT);
    console.log(`Connecting MongoDB ${PORT}포트 실행`);
  })
  .catch((err) => {
    console.log(err);
  });

const HttpError = require('./models/http-error');

const userRoutes = require('./routes/userRoute');
const app = express();

// CORS 허용 미들웨어
app.use(cors());

app.use(bodyParser.json({ limit: '100mb' })); // 이 파서는 요청이 들어오면 본문을 파싱하고, 본문에 있는 JSON 데이터를 추출해서 객체나 배열과 같이 일반적인 JavaScript 데이터 구조로 반환 한다.
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
//네이버 로그인
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// // app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect(
//   'mongodb+srv://SuccessOmen:M3hEQdH1qf5LoXsi@resumatescluster.qk9v1ms.mongodb.net/?retryWrites=true&w=majority&appName=resumatesCluster',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
// );

// 라우터 등록
app.use('/', commonRouter);
app.use('/user', userRoutes);
app.use('/resume', resumeRouter);
// app.use('/auth', authRoutes);
app.use('/upload', express.static(path.join(__dirname, 'upload')));

app.use((error, req, res, next) => {
  // 오류가 일어야만 실행되는 함수
  if (res.headerSent) {
    // res.heaserSent가 참인지, 응답이 이미 전송되었는지 확인
    return next(error); //응답이 전송된 상태이므로 응답을 전송하지 않도록 설정
  }
  res.status(error.code || 500); // 응답이 아직 전송되지 않은경우 상태 코드 설정 다른 미들웨어 중에서 발생한 오류 객체 상태 코드를 설정할수 있게함
  res.json({ message: error.message || 'An unkown error occurred!' }); //메세지 프로퍼티 추가
});
