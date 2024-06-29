import React, { useEffect, useState } from 'react';
import { getUserData } from '../../api/commonAPI';
import EditUserInfo from '../../components/account/EditUserInfo';
import EditUserPassword from '../../components/account/EditUserPassword';

export default function Account() {
  const [userInfo, setUserInfo] = useState([]);
  const userId = window.localStorage.getItem('userId');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(userId);
        console.log(data);
        setUserInfo(data);
      } catch (error) {
        console.error('유저데이터 조회 실패', error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      <h2>계정관리</h2>
      <EditUserInfo userInfo={userInfo} />
      <EditUserPassword userInfo={userInfo} />
    </div>
  );
}
