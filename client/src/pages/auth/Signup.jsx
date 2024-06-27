import React, { useState } from 'react';
import axios from 'axios';
import { Container } from '../../style/Container';
import Button from '../../components/common/Button';
import Input from '../../components/InputBox';
import resumes from '../../asset/images/resumes.png';
import {
  H2,
  Label,
  InputDiv,
  SignupForm,
  SignupContainer,
  ResumeImg,
  SignupBtn,
} from '../../style/SignupStyle';

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

  const validId = async (e) => {
    e.preventDefault();
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
      console.log('서버 error', error);
      console.log('ID 검증오류:', error.response.status);
    }
  };

  const validEmail = async (e) => {
    e.preventDefault();
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
      console.log('서버 error', error);
      console.log('이메일 검증오류:', error.response.status);
    }
  };

  const sendMail = async (e) => {
    e.preventDefault();
    const { email } = values;
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/sendmail', {
        email,
      });
      console.log(data);
    } catch (error) {
      console.log('이메일 인증 오류:', error);
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
      console.log('서버 error');
      console.error('회원가입오류', error);
    }
  };

  return (
    <>
      <Container>
        <SignupContainer>
          <ResumeImg src={resumes} alt='이력서 양식' />
          <SignupForm onSubmit={handleSubmit}>
            <H2>회원가입</H2>
            <Label>아이디</Label>
            <InputDiv>
              <Input
                width='40.7rem'
                type='text'
                name='userId'
                onChange={(e) => hadleChange(e)}
                autoComplete='username'
              />
              <Button
                type='button'
                onClick={validId}
                color='#04438B'
                padding='1.8rem 2.4rem'
                marginLeft='1.2rem'
                fontSize='1.6rem'
              >
                중복확인
              </Button>
              {isIdValue ? <p>아이디를 입력해주세요.</p> : null}
            </InputDiv>
            <Label>비밀번호</Label>
            <InputDiv>
              <Input
                type='password'
                name='userPw'
                onChange={(e) => hadleChange(e)}
                autoComplete='new-password'
              />
            </InputDiv>
            <Label>비밀번호 확인</Label>
            <InputDiv>
              <Input
                type='password'
                name='confirmPw'
                onChange={(e) => hadleChange(e)}
                autoComplete='new-password'
              />
            </InputDiv>
            <Label>이메일</Label>
            <InputDiv>
              <Input type='email' name='email' width='40.7rem' onChange={(e) => hadleChange(e)} />
              <Button
                type='button'
                onClick={sendMail}
                color='#04438B'
                padding='1.8rem 1rem'
                marginLeft='1.2rem'
                fontSize='1.6rem'
              >
                인증코드받기
              </Button>
              {isEmailValue ? <p>이메일을 입력해주세요.</p> : null}
            </InputDiv>
            <Label>인증코드</Label>
            <InputDiv>
              <Input type='text' name='code' width='40.7rem' onChange={(e) => hadleChange(e)} />
              <Button
                type='button'
                onClick={validEmail}
                color='#04438B'
                padding='1.8rem 2.4rem'
                marginLeft='1.2rem'
                fontSize='1.6rem'
              >
                인증하기
              </Button>
            </InputDiv>
            <SignupBtn
              color='#04438B'
              padding='1.8rem 23.4rem'
              marginTop='5rem'
              fontSize='1.6rem'
              disabled='ture'
            >
              가입하기
            </SignupBtn>
          </SignupForm>
        </SignupContainer>
      </Container>
    </>
  );
}
