import React from 'react';
import Button from '../common/Button';
import { EditCont, UserInfoSet, InfoItem, EmailLabel, InputBox } from './EditAccountStyle';
import useSignup from '../../hooks/useSignup';
import PropTypes from 'prop-types';

EditEmail.propTypes = {
  userInfo: PropTypes.object,
};

export default function EditEmail({ userInfo }) {
  const { values, emailErrorMsg, codeError, setValues, sendMail, validCode } = useSignup();
  // const { email } = userInfo;
  const handleChange = (e) => {
    return setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <EditCont>
        <UserInfoSet>
          <InfoItem>
            <EmailLabel>이메일</EmailLabel>
            <InputBox type='email' name='email' onChange={handleChange}></InputBox>
            <Button type='button' padding='16px 14px' onClick={sendMail}>
              인증 메일 발송
            </Button>
          </InfoItem>
          <p>{emailErrorMsg}</p>
          <InfoItem>
            <EmailLabel>인증코드입력</EmailLabel>
            <InputBox type='text' name='code' onChange={handleChange}></InputBox>
            <Button type='button' padding='16px 31px' onClick={validCode}>
              인증하기
            </Button>
          </InfoItem>
          <p>{codeError}</p>
        </UserInfoSet>
        <Button type='button' padding='16px 14px'>
          이메일 변경하기
        </Button>
      </EditCont>
    </>
  );
}
