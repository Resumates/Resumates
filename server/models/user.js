const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Schema 생성
const Schema = mongoose.Schema;

//user schema 생성
const userSchema = mongoose.Schema(
  {
    // type  string , required: true 필수 항목
    userId: { type: String },
    email: { type: String, required: true },
    userPw: { type: String },
    snsId: { type: String }, // 소셜 로그인 사용자 ID
    provider: { type: String, default: 'local' }, // 제공자 정보 (local, naver 등)
    accessToken: { type: String },
  },
  {
    versionKey: false,
  },
  {
    collection: 'users',
  },
);

// 비밀번호 암호화
userSchema.pre('save', async function (next) {
  if (this.isModified('userPw')) {
    this.userPw = await bcrypt.hash(this.userPw, 10);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
