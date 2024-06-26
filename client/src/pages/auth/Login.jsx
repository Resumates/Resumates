import React from 'react';
import Input from '../../components/common/input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../utill/validator';
import { useForm } from '../../hooks/FormHook';
export default function Login() {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <>
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          element='input'
          id='userId'
          type='id'
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
          errorText='6자이상의 비밀번호를 입력해주세요.'
          onInput={inputHandler}
        />
        <button type='submit' disabled={!formState.isValid}>
          LOGIN
        </button>
      </form>
    </>
  );
}
