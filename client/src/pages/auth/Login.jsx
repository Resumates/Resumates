import React, { useContext } from 'react';
import Input from '../../components/common/input';
import { VALIDATOR_MINLENGTH } from '../../utils/validator';
import { useForm } from '../../hooks/FormHook';
import { AuthContext } from '../../components/common/context/auth-context';

export default function Login() {
  const auth = useContext(AuthContext);
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

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log('Form State Inputs:', formState.inputs);
    auth.login();
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
}
