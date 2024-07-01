import React from 'react';
import check from '../../asset/images/icon-check.png';
import Button from '../common/Button';
import {
  UserInfoSet,
  InfoItem,
  InfoLabel,
  InfoBox,
  BtnCont,
  PasswordLabel,
  InputPassword,
  CheckBox,
  CheckImg,
  CheckBoxText,
} from './EditAccountStyle';

export default function EditUserPassword({ userInfo }) {
  const { userId, userPw } = userInfo;
  return (
    <UserInfoSet>
      <InfoItem>
        <PasswordLabel>아이디</PasswordLabel>
        <InfoBox>{userId}</InfoBox>
      </InfoItem>
      <InfoItem>
        <PasswordLabel>현재비밀번호</PasswordLabel>
        <InputPassword type='password' autoComplete='new-password' />
      </InfoItem>
      <InfoItem>
        <PasswordLabel>새 비밀번호</PasswordLabel>
        <InputPassword type='password' autoComplete='new-password' />
      </InfoItem>
      <InfoItem>
        <PasswordLabel>새 비밀번호 확인</PasswordLabel>
        <InputPassword type='password' autoComplete='new-password' />
      </InfoItem>
      <BtnCont>
        <CheckBox>
          <CheckImg src={check} alt='체크' />
          <CheckBoxText>비밀번호보기</CheckBoxText>
        </CheckBox>
        <Button padding='16px 14px' marginLeft='18rem'>
          변경하기
        </Button>
      </BtnCont>
    </UserInfoSet>
  );
}
