import React from 'react';
import styled from 'styled-components';
import { deleteResumeAPI } from '../../api/resumeAPI';

export default function ModalDelete({ resumeId, setModalOpen, setSelectedResume }) {
  const handleDelete = async () => {
    const deleteResume = await deleteResumeAPI(resumeId);
    if (deleteResume) {
      alert('이력서가 삭제되었습니다.');
      setSelectedResume(null);
      window.scrollTo(0, 0);
    }
  };
  return (
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
  );
}

const DelCont = styled.div`
  width: 200px;
  height: 120px;
  position: absolute;
  top: -125px;
  left: 115px;
  color: #000;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 1rem;
  box-sizing: border-box;
  box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
  padding: 3rem 0 0;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnCancel = styled.button`
  width: 12.5rem;
  height: 4.5rem;
  font-size: 1.4rem;
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
  font-size: 1.4rem;
  font-weight: 500;
  padding-bottom: 3rem;
  border-bottom: 1px solid #dbdbdb;
`;
