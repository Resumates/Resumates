import axios from 'axios';
import {
  signupRoute,
  validIdRoute,
  validEmailRoute,
  sendMailRoute,
  confirmPassword,
  setUserEmail,
  setUserPassword,
  deleteAccount,
} from './APIRoutes';

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
    console.log('서버 error', error.response.data);

    console.log('이메일 검증오류:', error.response.status);
    if (error.response.status === 409) {
      return error.response.data;
    }
  }
};

// 이메일 발송
export const sendEmailAPI = async (email) => {
  try {
    const { data } = await axios.post(sendMailRoute, {
      email,
    });
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

// 비밀번호 확인
export const confirmPasswordAPI = async (email, userPw) => {
  try {
    const { data } = await axios.post(confirmPassword, {
      email,
      userPw,
    });
    return data;
  } catch (error) {
    console.error('비밀번호 확인 오류', error);
  }
};

// 이메일 재설정
export const resetEmailAPI = async (userId, email) => {
  console.log(userId);
  try {
    const { data } = await axios.post(setUserEmail, {
      userId,
      email,
    });
    return data;
  } catch (error) {
    console.log('이메일 재설정 오류', error);
  }
};

// 비밀번호 재설정
export const resetPasswordAPI = async (userId, currentPw, userPw, confirmPw) => {
  console.log(currentPw, userPw, confirmPw);
  try {
    const { data } = await axios.post(setUserPassword, {
      userId,
      currentPw,
      userPw,
      confirmPw,
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
};

// 계정 삭제
export const deleteAccountAPI = async (userId) => {
  try {
    const { data } = await axios.delete(`${deleteAccount}/${userId}`, {
      data: { userId },
    });
    return data;
  } catch (error) {
    console.error('계정 삭제 오류', error);
  }
};
