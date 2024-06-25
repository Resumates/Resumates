const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(
  'mongodb+srv://SuccessOmen:M3hEQdH1qf5LoXsi@resumatescluster.qk9v1ms.mongodb.net/?retryWrites=true&w=majority&appName=resumatesCluster',
);

const HttpError = require('./models/http-error');

const userRoutes = require('./routes/userRoute');
const app = express();

app.use(bodyParser.json()); // 이 파서는 요청이 들어오면 본문을 파싱하고, 본문에 있는 JSON 데이터를 추출해서 객체나 배열과 같이 일반적인 JavaScript 데이터 구조로 반환 한다.

// CORS 허용 미들웨어
app.use(cors());

//미들웨어 등록
app.use('/api/users', userRoutes);

app.use((error, req, res, next) => {
  // 오류가 일어야만 실행되는 함수
  if (res.headerSent) {
    // res.heaserSent가 참인지, 응답이 이미 전송되었는지 확인
    return next(error); //응답이 전송된 상태이므로 응답을 전송하지 않도록 설정
  }
  res.status(error.code || 500); // 응답이 아직 전송되지 않은경우 상태 코드 설정 다른 미들웨어 중에서 발생한 오류 객체 상태 코드를 설정할수 있게함
  res.json({ message: error.message || 'An unkown error occurred!' }); //메세지 프로퍼티 추가
});

app.use('/test', function (req, res) {
  res.send('홈입니다.');
});

app.listen(5000);
