import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';
import Main from '../pages/home/Main';
import TemplateList from '../pages/resume/TemplateList';
import CreateResume from '../pages/resume/CreateResume';
import Mypage from '../pages/user/Mypage';
import Account from '../pages/user/Account';

export default function AppRoutes() {
  return (
    <>
      <Header />
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
    </>
  );
}
