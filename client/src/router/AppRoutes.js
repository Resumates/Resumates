import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../components/common/context/auth-context';
import { useAuth } from '../hooks/hookAuth';
import Header from '../components/Header/Header';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';
import Main from '../pages/home/Main';
import MainLogin from '../pages/home/mainLogin';
import TemplateList from '../pages/resume/TemplateList';
import CreateResume from '../pages/resume/CreateResume';
import Mypage from '../pages/user/Mypage';
import Account from '../pages/user/Account';
import SetEmail from '../pages/user/SetEmail';
import Error from '../pages/error/Error';
import EditResume from '../pages/resume/EditResume';
import SampleTemplate from '../pages/resume/SampleTemplate';
import SkillsSection from '../components/resumeForm/SkillsSection';

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
      <Header />
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
        <Route path='/resume/:type' element={<CreateResume />} />

        {/* 이력서 수정 */}
        <Route path='/resume/edit/:resumeId' element={<EditResume />} />

        {/* 이력서 체험 */}
        <Route path='/resume/sample' element={<SampleTemplate />} />

        {/* 마이페이지 */}
        <Route path='/mypage/:userId' element={<Mypage />} />

        {/* 계정 설정 */}
        <Route path='/user/account/:userId' element={<Account />} />

        {/* 이메일 설정 */}
        <Route path='/user/settings/email' element={<SetEmail />} />

        {/* 404 페이지 */}
        <Route path='/error' element={<Error />} />

        {/*Portofolio Info*/}
        <Route path='/resume/skill' element={<SkillsSection />} />
      </Routes>
    </AuthContext.Provider>
  );
}
