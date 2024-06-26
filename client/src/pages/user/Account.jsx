import React, { useEffect, useState } from 'react';
import { getUserData } from '../../api/commonAPI';
import EditUserInfo from '../../components/account/EditUserInfo';
import EditUserPassword from '../../components/account/EditUserPassword';
import { H2 } from '../../style/CommonStyle';
import { Container } from '../../style/Container';
import { AccountCont, EditCont, Tab, TabButton } from '../../style/AccountStyle';

export default function Account() {
  const [userInfo, setUserInfo] = useState({});
  const [tab, setTab] = useState('userEmail');
  const userId = window.localStorage.getItem('userId');

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
          <TabButton $active={tab === 'userEmail'} onClick={() => setTab('userEmail')}>
            회원 정보 수정
          </TabButton>
          <TabButton $active={tab === 'userPw'} onClick={() => setTab('userPw')}>
            비밀 번호 변경
          </TabButton>
        </Tab>
        <EditCont>
          {tab === 'userEmail' && <EditUserInfo userInfo={userInfo} />}
          {tab === 'userPw' && <EditUserPassword userInfo={userInfo} />}
        </EditCont>
      </AccountCont>
    </Container>
  );
}
