import React from 'react';
import check from '../../asset/images/icon-check.png';
import useSignup from '../../hooks/useSignup';
import Button from '../common/Button';
import {
  EditCont,
  UserInfoSet,
  InfoItem,
  InfoBox,
  BtnCont,
  PasswordLabel,
  InputPassword,
  CheckBox,
  CheckImg,
  CheckBoxText,
} from './EditAccountStyle';
import { resetPasswordAPI } from '../../api/authAPI';

export default function EditUserPassword({ userInfo }) {
  const { values, setValues } = useSignup();
  const { userId } = userInfo;
  const { currentPw, userPw, confirmPw } = values;

  const handleChange = (e) => {
    return setValues({ ...values, [e.target.name]: e.target.value });
  };

  const changePassword = async (e) => {
    e.preventDefault();
    // confirmPasswordAPI(userPw, confirmPw);
    const res = await resetPasswordAPI(userId, currentPw, userPw, confirmPw);
    console.log(res);
    console.log(res.message);
  };
  return (
    <EditCont>
      <UserInfoSet>
        <InfoItem>
          <PasswordLabel>아이디</PasswordLabel>
          <InfoBox>{userId}</InfoBox>
        </InfoItem>
        <InfoItem>
          <PasswordLabel>현재비밀번호</PasswordLabel>
          <InputPassword
            name='currentPw'
            type='password'
            autoComplete='new-password'
            onChange={handleChange}
          />
        </InfoItem>
        <InfoItem>
          <PasswordLabel>새 비밀번호</PasswordLabel>
          <InputPassword
            name='userPw'
            type='password'
            autoComplete='new-password'
            onChange={handleChange}
          />
        </InfoItem>
        <InfoItem>
          <PasswordLabel>새 비밀번호 확인</PasswordLabel>
          <InputPassword
            name='confirmPw'
            type='password'
            autoComplete='new-password'
            onChange={handleChange}
          />
        </InfoItem>
        <BtnCont>
          <CheckBox>
            <CheckImg src={check} alt='체크' />
            <CheckBoxText>비밀번호보기</CheckBoxText>
          </CheckBox>
          <Button padding='16px 14px' marginLeft='18rem' onClick={changePassword}>
            변경하기
          </Button>
        </BtnCont>
      </UserInfoSet>
    </EditCont>
  );
}
