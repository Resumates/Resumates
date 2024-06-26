import axios from 'axios';
import { signupRoute, validIdRoute, validEmailRoute, sendMailRoute } from './APIRoutes';

// 아이디 검증
export const vaildIdAPI = async (userId) => {
  try {
    const { data } = await axios.post(validIdRoute, {
      userId,
    });
    return data;
  } catch (error) {
    console.log('서버 error', error);
    console.log('ID 검증오류:', error.response.status);
  }
};

// 이메일 검증
export const validEmailAPI = async (email) => {
  try {
    const { data } = await axios.post(validEmailRoute, {
      email,
    });
    return data;
  } catch (error) {
    console.log('서버 error', error);
    console.log('이메일 검증오류:', error.response.status);
  }
};

// 이메일 발송
export const sendEmailAPI = async (email) => {
  try {
    const { data } = await axios.post(sendMailRoute, {
      email,
    });
    console.log(data);
    console.log(data.message);
    return data;
  } catch (error) {
    console.log('이메일 인증 오류:', error);
  }
};

// 회원가입
export const signupAPI = async (userId, userPw, email) => {
  try {
    const { data } = await axios.post(signupRoute, {
      userId,
      userPw,
      email,
    });
    return data;
  } catch (error) {
    console.log('서버 error');
    console.error('회원가입오류', error);
  }
};
