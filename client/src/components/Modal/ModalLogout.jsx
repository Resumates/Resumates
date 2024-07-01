import React from 'react';
import Button from '../../components/common/Button';
import { Container, ModalWrapper, ModalContent, ModalTitle, Modal } from './ModalStyle';
export default function ModalLogout({ setModalOpen }) {
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
          >
            취소
          </Button>
          <Button marginLeft='1.2rem' padding='1.2rem 6.7rem' fontSize='1.4rem'>
            확인
          </Button>
        </Modal>
      </ModalWrapper>
    </Container>
  );
}
