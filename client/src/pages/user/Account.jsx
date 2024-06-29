import React, { useEffect } from 'react';
import { getUserData } from '../../api/commonAPI';

export default function Account() {
  useEffect(() => {
    const userId = window.localStorage.getItem('userId');
    getUserData(userId);
  }, []);

  return <div>Account</div>;
}
