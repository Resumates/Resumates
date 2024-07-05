import React, { useEffect, useState } from 'react';
import { getUserData } from '../../api/commonAPI';
import EditEmail from '../../components/account/EditEmail';
import EditUserPassword from '../../components/account/EditUserPassword';
import { H2 } from '../../style/CommonStyle';
import { Container } from '../../style/Container';
import { AccountCont, Tab, TabButton } from '../../style/AccountStyle';
import ModalPasswordConfirm from '../../components/Modal/ModalPasswordConfirm';
import { useNavigate } from 'react-router-dom';

export default function SetEmail() {
  const [userInfo, setUserInfo] = useState({});
  const [tab, setTab] = useState('userEmail');
  const userId = window.localStorage.getItem('userId');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(userId);
        setUserInfo(data);
      } catch (error) {
        console.error('유저데이터 조회 실패', error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <Container>
      <AccountCont>
        <H2>계정관리</H2>
        <Tab>
          <TabButton $active={tab === 'userEmail'} onClick={() => navigate('/user/settings')}>
            회원 정보 수정
          </TabButton>
          <TabButton $active={tab === 'userPw'} onClick={() => setTab('userPw')}>
            비밀 번호 변경
          </TabButton>
        </Tab>
        {tab === 'userEmail' && <EditEmail userInfo={userInfo} />}

        {tab === 'userPw' && <EditUserPassword userInfo={userInfo} />}
      </AccountCont>
    </Container>
  );
}
