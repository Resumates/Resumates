import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/common/input';
import { VALIDATOR_MINLENGTH } from '../../utils/validator';
import { useForm } from '../../hooks/FormHook';
import Resumes from '../../asset/images/resumes.png';
import { AuthContext } from '../../components/common/context/auth-context';
import { useLocation } from 'react-router-dom';
import {
  LoginPage,
  LoginContainer,
  LoginImage,
  LoginForm,
  Title,
  StyledForm,
  KaKaoButton,
  GoogleButton,
} from '../../style/LoginStyle';
import Button from '../../components/common/Button';

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [formState, inputHandler] = useForm(
    {
      userId: {
        value: '',
        isValid: false,
      },
      userPw: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: formState.inputs.userId.value,
          userPw: formState.inputs.userPw.value,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || '로그인에 실패했습니다.');
      }

      auth.login(responseData.userId, responseData.token);
      navigate('/mainLogin'); // 로그인 성공 시 mypage로 리다이렉트
    } catch (err) {
      console.error(err.message || 'Something went wrong, please try again.');
      // 에러 상태를 설정하거나 사용자에게 메시지를 보여주는 로직 추가 가능
    }
  };

  // const handleNaverLogin = () => {
  //   window.location.href = 'http://localhost:5000/auth/naver';
  // };

  // useEffect(() => {
  //   console.log('useEffect executed'); // useEffect 실행 확인
  //   const params = new URLSearchParams(location.search);
  //   const token = params.get('token');
  //   console.log('Token from URL:', token); // 콘솔 로그 추가
  //   if (token) {
  //     localStorage.setItem('accessToken', token);
  //     console.log('Token set in localStorage:', localStorage.getItem('accessToken')); // 추가 콘솔 로그
  //     auth.login(null, token); // auth context에도 로그인 상태 업데이트
  //     navigate('/mainLogin'); // 토큰이 있을 경우 mainLogin으로 리다이렉트
  //   }
  // }, [location, navigate, auth]);

  // 네이버 로그인

  // const NaverLogin =({setGetToke,setUserInfo}) =>
  //   {}

  return (
    <>
      <LoginPage>
        <LoginContainer>
          <LoginImage>
            <img src={Resumes} alt='Login illustration' />
          </LoginImage>
          <LoginForm>
            <Title>로그인</Title>
            <StyledForm onSubmit={authSubmitHandler}>
              <Input
                element='input'
                id='userId'
                type='text'
                label='아이디'
                validators={[VALIDATOR_MINLENGTH(6)]}
                errorText='유효한 아이디 형식을 입력해주세요'
                onInput={inputHandler}
              />
              <Input
                element='input'
                id='userPw'
                type='password'
                label='비밀번호'
                validators={[VALIDATOR_MINLENGTH(6)]}
                errorText='6자 이상의 비밀번호를 입력해주세요.'
                onInput={inputHandler}
              />
              <Button
                color='#04438B'
                padding='1.8rem 2.4rem'
                fontSize='1.8rem'
                fontWeight='bold'
                margin-top='20rem'
                type='submit'
                disabled={!formState.isValid}
              >
                로그인
              </Button>
            </StyledForm>
            <KaKaoButton
              padding='1.8rem 2.4rem'
              margintop='1rem'
              fontSize='1.8rem'
              fontWeight='bold'
              className='kakao'
            >
              카카오 계정으로 로그인
            </KaKaoButton>
            <GoogleButton
              padding='1.8rem 2.4rem'
              margintop='1rem'
              fontSize='1.8rem'
              fontWeight='bold'
              className='google'
            >
              구글 계정으로 로그인
            </GoogleButton>
            <Button
              color='#03c75a'
              padding='1.8rem 2.4rem'
              margintop='1rem'
              fontSize='1.8rem'
              fontWeight='bold'
              className='Naver'
              // onClick={handleNaverLogin}
            >
              네이버 계정으로 로그인
            </Button>
          </LoginForm>
        </LoginContainer>
      </LoginPage>
    </>
  );
};

export default Login;
