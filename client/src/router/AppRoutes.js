import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from '../pages/auth/Signup';

export default function AppRoutes() {
  return (
    <Routes>
      {/* 회원가입 */}
      <Route path='/user/signup' element={<Signup />}></Route>
    </Routes>
  );
}
