import React from 'react';
import { Container } from '../../style/Container';
import { LoginWrapper,ImageContainer,FormContainer,Title,Input,Button,SocialButton } from '../../style/LoginStyle';
// 스타일드 컴포넌트를 LoginPage에서 임포트

export default function Login() {
  return (
    <Container>
      <LoginWrapper>
        <ImageContainer>
          <img src='/asset/images/main-left.png' alt='Resume Examples' />
        </ImageContainer>
        <FormContainer>
          <Title>로그인</Title>
          <Input type='text' placeholder='아이디' />
          <Input type='password' placeholder='비밀번호' />
          <Button>로그인</Button>
          <SocialButton>카카오 계정으로 로그인</SocialButton>
          <SocialButton>구글 계정으로 로그인</SocialButton>
        </FormContainer>
      </LoginWrapper>
    </Container>
  );
}
