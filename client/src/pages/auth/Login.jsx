import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/common/input';
import { VALIDATOR_MINLENGTH } from '../../utils/validator';
import { useForm } from '../../hooks/FormHook';
import { AuthContext } from '../../components/common/context/auth-context';

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
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

      auth.login(responseData.token);
      navigate('/mainLogin'); // 로그인 성공 시 mypage로 리다이렉트
    } catch (err) {
      console.error(err.message || 'Something went wrong, please try again.');
      // 에러 상태를 설정하거나 사용자에게 메시지를 보여주는 로직 추가 가능
    }
  };

  return (
    <>
      <h2>Login Required</h2>

      <form onSubmit={authSubmitHandler}>
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
        <button type='submit' disabled={!formState.isValid}>
          LOGIN
        </button>
      </form>
    </>
  );
};

export default Login;
