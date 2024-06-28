import React, { useCallback, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
import { AuthContext } from '../components/common/context/auth-context';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';
import Main from '../pages/home/Main';
import TemplateList from '../pages/resume/TemplateList';
import CreateResume from '../pages/resume/CreateResume';
import Mypage from '../pages/user/Mypage';
import Account from '../pages/user/Account';

export default function AppRoutes() {
  const [token, setToken] = useState(false);

  const login = useCallback((token, expirationDate) => {
    setToken(token);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      }),
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.token && new Date(storedData.expiration) > new Date()
    ) {
      login(storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  let routes;

  if (token) {
    routes = <Route path='/mypage'></Route>;
  } else {
    routes = <Route path='/lgoin'></Route>;
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        login: login,
        logout: logout,
      }}
    >
      <MainNavigation />
      <Routes>
        {/* 회원가입 */}
        <Route path='/user/signup' element={<Signup />} />

        {/* 로그인 */}
        <Route path='/user/login' element={<Login />} />

        {/* 메인 */}
        <Route path='/' element={<Main />} />

        {/* 템플릿 목록 */}
        <Route path='/list' element={<TemplateList />} />

        {/* 이력서 작성 */}
        <Route path='/resume' element={<CreateResume />} />

        {/* 마이페이지 */}
        <Route path='/mypage' element={<Mypage />} />

        {/* 계정 설정 */}
        <Route path='/user/settings' element={<Account />} />
      </Routes>
    </AuthContext.Provider>
  );
}
