import React from 'react';
import styled from 'styled-components';
import { ModalWrapper } from './ModalStyle';

export default function ModalDelete({ setModalOpen, handleDelete }) {
  return (
    <ModalWrapper>
      <DelCont>
        <Deltext>정말 삭제하시겠습니까?</Deltext>
        <Btn>
          <BtnDel onClick={() => handleDelete()}>삭제</BtnDel>
          <BtnCancel
            onClick={() => {
              setModalOpen(false);
            }}
          >
            취소
          </BtnCancel>
        </Btn>
      </DelCont>
    </ModalWrapper>
  );
}

const DelCont = styled.div`
  width: 400px;
  height: 175px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
  padding: 5rem 0 0;
  font-size: 1.6rem;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnCancel = styled.button`
  width: 20rem;
  height: 8rem;
  &:hover {
    font-weight: bold;
  }
`;

const BtnDel = styled(BtnCancel)`
  color: #eb5757;
  border-right: 1px solid #dbdbdb;
`;

const Deltext = styled.p`
  text-align: center;
  font-weight: 500;
  padding-bottom: 3rem;
  border-bottom: 1px solid #dbdbdb;
`;
