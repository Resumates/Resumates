import React, { useState } from 'react';
import axios from 'axios';
import { Container } from '../../style/Container';

export default function Signup() {
  const [values, setValues] = useState({
    userId: '',
    userPw: '',
    confirmPw: '',
    email: '',
    code: '',
  });

  const hadleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const validId = async () => {
    console.log('중복확인 클릭');
    const { userId } = values;
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/userIdvaild', {
        userId,
      });
      console.log(data);
    } catch (error) {
      console.error('Error validating user ID:', error);
      console.log('서버 error');
    }
  };

  const validEmail = async () => {
    console.log('중복확인 클릭');
    const { email } = values;
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/emailvalid', {
        email,
      });
      console.log(data);
    } catch (error) {
      console.error('Error validating user ID:', error);
      console.log('서버 error');
    }
  };

  return (
    <>
      <Container>
        <form>
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
