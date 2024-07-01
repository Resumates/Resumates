import axios from 'axios';
import { getUserAccount } from './APIRoutes';

// 유저 데이터
export const getUserData = async (userId) => {
  try {
    const { data } = await axios.get(`${getUserAccount}/${userId}`);
    return data.user;
  } catch (error) {
    console.error('유저 데이터 불러오기 오류', error);
  }
};
