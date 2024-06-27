import React, { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';
import MainNavigation from '../components/Navigation/MainNavigation';
import { AuthContext } from '../components/common/context/auth-context';

export default function AppRoutes() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <MainNavigation />
      <Routes>
        <Route path='/user/signup' element={<Signup />} />
        <Route path='/user/login' element={<Login />} />
      </Routes>
    </AuthContext.Provider>
  );
}
