import React, { useEffect } from 'react';
import { getUserAccount } from '../../api/APIRoutes';
import axios from 'axios';

export default function Account() {
  
  const getUserData = async (userId) => {
    try {
      const { data } = await axios.get(`${getUserAccount}/${userId}`);
      console.log(data);
    } catch (error) {
      console.log('서버 error');
      console.error('불러오기 오류', error);
    }
  };

  useEffect(() => {
    const userId = window.localStorage.getItem('userId');
    getUserData(userId);
  }, []);

  return <div>Account</div>;
}
