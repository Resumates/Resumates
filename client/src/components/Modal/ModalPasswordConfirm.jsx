import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import close from '../../asset/images/icon-close.png';
import PropTypes from 'prop-types';
import { EditCont } from '../../style/AccountStyle';
import { confirmPasswordAPI } from '../../api/authAPI';
import { useNavigate } from 'react-router-dom';

ModalPasswordConfirm.propTypes = {
  email: PropTypes.string,
  setModalOpen: PropTypes.func,
  modalOpen: PropTypes.bool,
};

export default function ModalPasswordConfirm({ email, setModalOpen, modalOpen }) {
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmErrorMsg, SetConfirmErrorMsg] = useState('');
  const navigate = useNavigate();

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleChange = (e) => {
    setPasswordValue(e.target.value);
    SetConfirmErrorMsg('');
  };

  const confirmPassword = async () => {

    const confirmData = await confirmPasswordAPI(email, passwordValue);
    
    if (confirmData.valid) {
      navigate('/user/settings/email');
    } else {
      SetConfirmErrorMsg(confirmData.message);
    }
  };

  return (
    <EditCont>
      <ModalBg onClick={closeModal} />
      <PasswordSetCont>
        <PasswordSetDiv>
          <BtnClose onClick={closeModal}>
            <CloseImg src={close} alt='닫기' />
          </BtnClose>
          <H4>비밀번호 확인</H4>
          <NoticeText>소중한 정보 보호를 위해, 비밀번호를 다시 한번 입력해주세요.</NoticeText>
          <UserEmail>{email}</UserEmail>
          <PasswordInput
            type='password'
            placeholder='비밀번호를 입력해주세요.'
            onChange={handleChange}
          />
          {confirmErrorMsg && <PasswordConfirmMsg>{confirmErrorMsg}</PasswordConfirmMsg>}
          {passwordValue ? (
            <Button color='#04438B' padding='14px 180px' margintop='30px' onClick={confirmPassword}>
              확인
            </Button>
          ) : (
            <Button color='#D9D9D9' padding='14px 180px' margintop='30px'>
              확인
            </Button>
          )}
        </PasswordSetDiv>
      </PasswordSetCont>
    </EditCont>
  );
}

const ModalBg = styled.div`
  width: 77rem;
  min-height: 40rem;
  box-sizing: border-box;
  background-color: white;
  border-radius: 1rem;
  padding: 6rem 10rem;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
`;

const PasswordSetCont = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
`;

const PasswordSetDiv = styled.div`
  box-sizing: border-box;
  width: 500px;
  height: 330px;
  background-color: white;
  border-radius: 10px;
  padding: 3rem 5.2rem;
  font-size: 1.4rem;
  text-align: center;
  position: relative;
`;

const H4 = styled.h4`
  font-size: 2rem;
  margin-bottom: 3.5rem;
`;

const BtnClose = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 1rem;
`;

const CloseImg = styled.img`
  width: 1.4rem;
`;

const NoticeText = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2.6rem;
`;

const UserEmail = styled.p`
  padding-left: 0.6rem;
  padding-bottom: 1.4rem;
  border-bottom: 1px solid #3d79bf;
  text-align: left;
  color: #acacac;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding-left: 0.6rem;
  margin-top: 1.4rem;
  padding: 0.4rem 0.4rem 1.4rem;
  border-bottom: 1px solid #3d79bf;

  &:placeholder-shown {
    padding-left: 0.4rem;
  }

  &:focus {
    outline: none;
  }
`;

const PasswordConfirmMsg = styled.p`
  margin-top: 12px;
  text-align: left;
  color: #e00000;
`;
