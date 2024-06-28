import React from 'react';
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

import useSignup from '../../hooks/useSignup';

export default function Signup() {
  const {
    isIdValue,
    isEmailValue,
    idError,
    pwError,
    confirmPwError,
    emailErrorMsg,
    codeError,
    handleChange,
    validId,
    validCode,
    sendMail,
    handleSubmit,
  } = useSignup();

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
                onChange={handleChange}
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
              {idError && <p>{idError}</p>}
            </InputDiv>
            <Label>비밀번호</Label>
            <InputDiv>
              <Input
                type='password'
                name='userPw'
                onChange={handleChange}
                autoComplete='new-password'
              />
              {pwError && <p>{pwError}</p>}
            </InputDiv>
            <Label>비밀번호 확인</Label>
            <InputDiv>
              <Input
                type='password'
                name='confirmPw'
                onChange={handleChange}
                autoComplete='new-password'
              />
              {confirmPwError && <p>{confirmPwError}</p>}
            </InputDiv>
            <Label>이메일</Label>
            <InputDiv>
              <Input type='email' name='email' width='40.7rem' onChange={handleChange} />
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
              {isEmailValue && <p>이메일을 입력해주세요.</p>}
              {emailErrorMsg && <p>{emailErrorMsg}</p>}
            </InputDiv>
            <Label>인증코드</Label>
            <InputDiv>
              <Input type='text' name='code' width='40.7rem' onChange={handleChange} />
              <Button
                type='button'
                onClick={validCode}
                color='#04438B'
                padding='1.8rem 2.4rem'
                marginLeft='1.2rem'
                fontSize='1.6rem'
              >
                인증하기
              </Button>
              {codeError && <p>{codeError}</p>}
            </InputDiv>
            <SignupBtn>가입하기</SignupBtn>
          </SignupForm>
        </SignupContainer>
      </Container>
    </>
  );
}
