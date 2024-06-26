import React, { useState } from 'react';
import axios from 'axios';
// import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_MAXLENGTH } from '../../util/validator';
import { Container } from '../../style/Container';

export default function Signup() {
  const [values, setValues] = useState({
    userId: '',
    userPw: '',
    confirmPw: '',
    email: '',
    code: '',
  });

  const [isIdValue, setIsIdValue] = useState(false);
  const [isEmailValue, setIsEmailValue] = useState(false);

  const hadleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const validId = async () => {
    console.log('중복확인 클릭');
    const { userId } = values;
    if (userId === '') {
      setIsIdValue(true);
      return;
    }
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/userIdvaild', {
        userId,
      });
      console.log(data);
    } catch (error) {
      console.error('ID 검증오류:', error);
      console.log('서버 error');
    }
  };

  const validEmail = async () => {
    console.log('인증하기 클릭');
    const { email } = values;
    if (email === '') {
      setIsEmailValue(true);
      return;
    }
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/emailvalid', {
        email,
      });
      console.log(data);
    } catch (error) {
      console.error('이메일 검증 오류:', error);
      console.log('서버 error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userId, email, userPw, confirmPw } = values;
    if (userPw !== confirmPw) {
      console.log('비밀번호를 확인해주세요.');
      return;
    }
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/signup', {
        userId,
        userPw,
        email,
      });
      console.log(data);
    } catch (error) {
      console.error('회원가입오류', error);
      console.log('서버 error');
    }
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <label>
            아이디
            <input
              type='text'
              name='userId'
              onChange={(e) => hadleChange(e)}
              autoComplete='username'
            />
          </label>
          <button type='button' onClick={validId}>
            중복확인
          </button>
          {isIdValue ? <p>아이디를 입력해주세요.</p> : null}
          <label>
            비밀번호
            <input
              type='password'
              name='userPw'
              onChange={(e) => hadleChange(e)}
              autoComplete='new-password'
            />
          </label>
          <label>
            비밀번호 확인
            <input
              type='password'
              name='confirmPw'
              onChange={(e) => hadleChange(e)}
              autoComplete='new-password'
            />
          </label>
          <label>
            이메일
            <input type='email' name='email' onChange={(e) => hadleChange(e)} />
          </label>
          <button type='button' onClick={validEmail}>
            인증코드받기
          </button>
          {isEmailValue ? <p>이메일을 입력해주세요.</p> : null}
          <label>
            인증코드
            <input type='text' name='code' onChange={(e) => hadleChange(e)} />
          </label>
          <button type='button'>인증하기</button>
          <button>가입하기</button>
        </form>
      </Container>
    </>
  );
}
