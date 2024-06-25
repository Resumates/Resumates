const mongoose = require('mongoose');

const Schema = mongoose.Schema; // Schema 생성

const userSchema = mongoose.Schema(
  //user schema todtjd
  {
    userId: { type: String, required: true }, // type  string , required: true 필수 항목
    email: { type: String, required: true },
    userPw: { type: String, required: true },
  },
);
//   { collection: 'users' },
//collection 이름

module.exports = mongoose.model('User', userSchema);
