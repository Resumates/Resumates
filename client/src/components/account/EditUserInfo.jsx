import React, { useContext, useState } from 'react';
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
import ModalDelete from '../Modal/ModalDelete';
import { deleteAccountAPI } from '../../api/authAPI';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../common/context/auth-context';

EditUserInfo.propTypes = {
  userInfo: PropTypes.object,
  setModalOpen: PropTypes.func,
  modalOpen: PropTypes.bool,
};

export default function EditUserInfo({ userInfo, setModalOpen, modalOpen }) {
  const { userId, email } = userInfo;
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const deleteAccount = await deleteAccountAPI(userId);
    console.log(deleteAccount);
    if (deleteAccount.valid) {
      auth.logout();
      alert('계정이 삭제되었습니다.');
      navigate('/');

      // setSelectedResume(null);
      // window.scrollTo(0, 0);
    }
  };

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
        <DeleteBtn onClick={() => setDeleteModalOpen(!deleteModalOpen)}>계정 삭제</DeleteBtn>
        <DelComment>계정 삭제시 작성했던 모든 이력서가 삭제됩니다.</DelComment>
        {deleteModalOpen && (
          <ModalDelete setModalOpen={setDeleteModalOpen} handleDelete={handleDelete} />
        )}
      </EditCont>
    </>
  );
}
