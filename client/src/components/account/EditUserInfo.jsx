import React from 'react';
import Button from '../common/Button';
import {
  UserInfoSet,
  InfoItem,
  InfoLabel,
  InfoBox,
  DeleteBtn,
  DelComment,
} from './EditAccountStyle';

export default function EditUserInfo({ userInfo }) {
  const { userId, email } = userInfo;
  console.log(userId, email);
  return (
    <>
      <UserInfoSet>
        <InfoItem>
          <InfoLabel>아이디</InfoLabel>
          <InfoBox>{userId}</InfoBox>
        </InfoItem>
        <InfoItem>
          <InfoLabel>이메일</InfoLabel>
          <InfoBox>{email}</InfoBox>
          <Button padding={'16px 14px'}>변경하기</Button>
        </InfoItem>
      </UserInfoSet>
      <DeleteBtn>계정 삭제</DeleteBtn>
      <DelComment>계정 삭제시 작성했던 모든 이력서가 삭제됩니다.</DelComment>
    </>
  );
}
