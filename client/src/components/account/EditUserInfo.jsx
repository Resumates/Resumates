import React from 'react';
import Button from '../common/Button';
import {
  EditCont,
  UserInfoSet,
  InfoItem,
  InfoLabel,
  InfoBox,
  DeleteBtn,
  DelComment,
} from './EditAccountStyle';
import PropTypes from 'prop-types';

EditUserInfo.propTypes = {
  userInfo: PropTypes.object,
  setModalOpen: PropTypes.func,
  modalOpen: PropTypes.bool,
};

export default function EditUserInfo({ userInfo, setModalOpen, modalOpen }) {
  const { userId, email } = userInfo;

  return (
    <>
      <EditCont>
        <UserInfoSet>
          <InfoItem>
            <InfoLabel>아이디</InfoLabel>
            <InfoBox>{userId}</InfoBox>
          </InfoItem>
          <InfoItem>
            <InfoLabel>이메일</InfoLabel>
            <InfoBox>{email}</InfoBox>
            <Button type='button' onClick={() => setModalOpen(!modalOpen)} padding='16px 14px'>
              변경하기
            </Button>
          </InfoItem>
        </UserInfoSet>
        <DeleteBtn>계정 삭제</DeleteBtn>
        <DelComment>계정 삭제시 작성했던 모든 이력서가 삭제됩니다.</DelComment>
      </EditCont>
    </>
  );
}
