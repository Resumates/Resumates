import { Route, Routes } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
// import { useAuth } from '../hooks/hookAuth';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';
import Main from '../pages/home/Main';
import MainLogin from '../pages/home/MainLogin';
import TemplateList from '../pages/resume/TemplateList';
import CreateResume from '../pages/resume/CreateResume';
import Mypage from '../pages/user/Mypage';
import Account from '../pages/user/Account';
import { AuthContext } from '../components/common/context/auth-context';
import { useAuth } from '../hooks/hookAuth';
export default function AppRoutes() {
  const { token, login, logout, userId } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        userId: userId,
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

        {/* 메인 로그인*/}
        <Route path='/mainLogin' element={<MainLogin />} />

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
