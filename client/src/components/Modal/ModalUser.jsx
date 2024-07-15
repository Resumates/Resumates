import React, { useState } from 'react';
import styled from 'styled-components';
import logOut from '../../asset/images/icon-logout.png';
import userSet from '../../asset/images/icon-userset.png';
import ModalLogout from './ModalLogout';
import { useNavigate } from 'react-router-dom';

export default function ModalUser({ userInfo }) {
  const { userId, email } = userInfo;
  const userName = userId?.slice(0, 2);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const moveUserSet = () => {
    navigate(`/user/account/${userId}`);
    window.location.reload();
  };

  return (
    <UserModal>
      <UserInfo onClick={moveUserSet}>
        <UserIcon>{userName}</UserIcon>
        <div>
          <UserId>{userId}</UserId>
          <UserEmail>{email}</UserEmail>
        </div>
      </UserInfo>
      <UserBtn>
        <Btncont onClick={moveUserSet}>
          <BtnIconImg src={userSet} alt='' width='20px' />
          <p>계정관리</p>
        </Btncont>
        <Btncont onClick={() => setModalOpen(!modalOpen)}>
          <BtnIconImg src={logOut} alt='' width='16px' />
          <p>로그아웃</p>
          {modalOpen && <ModalLogout setModalOpen={setModalOpen} />}
        </Btncont>
      </UserBtn>
    </UserModal>
  );
}

const UserModal = styled.div`
  width: 320px;
  height: 144px;
  border: 2px solid #ddd;
  background-color: white;
  position: absolute;
  right: 0;
  top: 50px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  box-sizing: border-box;
  z-index: 10;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;
  padding: 0 2rem;
  margin-bottom: 2rem;
`;

const UserId = styled.p`
  color: var(--mainColor);
  margin-bottom: 0.4rem;
`;
const UserEmail = styled.p`
  color: #acacac;
  font-size: 1.2rem;
`;

const UserIcon = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  text-align: center;
  line-height: 4.2rem;
  font-size: 1.6rem;
  color: var(--mainColor);
  font-weight: 700;
  background-color: #eff2f6;
  border-radius: 100%;
  border: 2px solid #ddd;
`;

const UserBtn = styled.div`
  height: 42px;
  border-top: 2px solid #ddd;
  display: flex;
`;

const BtnIconImg = styled.img`
  padding-right: 0.8rem;
`;

const Btncont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 150px;
  cursor: pointer;
  &:first-child {
    border-right: 2px solid #ddd;
  }
  p {
    color: #3482a9;
    &:hover {
      font-weight: 700;
    }
  }
`;
