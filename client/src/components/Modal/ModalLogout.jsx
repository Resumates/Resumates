import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/common/Button';
import { Container, ModalWrapper, ModalContent, ModalTitle, Modal } from './ModalStyle';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/common/context/auth-context';

export default function ModalLogout({ setModalOpen }) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    auth.logout();
    setModalOpen(false);
    navigate('/user/login');
  };

  return (
    <Container>
      <ModalWrapper>
        <Modal>
          <ModalTitle>로그아웃</ModalTitle>
          <ModalContent>로그아웃 하시겠습니까?</ModalContent>
          <Button
            type='button'
            onClick={() => setModalOpen(false)}
            padding='1.2rem 6.7rem'
            marginLeft='1.2rem'
            fontSize='1.4rem'
            color='#aba9a9'
          >
            취소
          </Button>
          <Button
            type='button'
            onClick={logoutHandler}
            color='#3D79BF'
            marginLeft='1.2rem'
            padding='1.2rem 6.7rem'
            fontSize='1.4rem'
          >
            확인
          </Button>
        </Modal>
      </ModalWrapper>
    </Container>
  );
}
