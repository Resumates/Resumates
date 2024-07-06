import React from 'react';
import Button from '../common/Button';
import { EditCont, UserInfoSet, InfoItem, EmailLabel, InputBox } from './EditAccountStyle';
import useSignup from '../../hooks/useSignup';
import { resetEmailAPI } from '../../api/authAPI';
import { useNavigate } from 'react-router-dom';

export default function EditEmail() {
  const navigate = useNavigate();
  const { values, emailErrorMsg, codeError, correctCode, setValues, sendMail, validCode } =
    useSignup();
  const userId = localStorage.getItem('userId');
  const handleChange = (e) => {
    return setValues({ ...values, [e.target.name]: e.target.value });
  };

  const changeEmail = async () => {
    if (correctCode === values.code) {
      const resetEmail = await resetEmailAPI(userId, values.email);
      if (resetEmail) navigate(`/user/account/${userId}`);
      window.alert('이메일 변경이 완료되었습니다.');
    }
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
        <Button type='button' padding='16px 14px' onClick={changeEmail}>
          이메일 변경하기
        </Button>
      </EditCont>
    </>
  );
}
