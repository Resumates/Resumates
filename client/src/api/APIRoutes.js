// 환경에 따른 API URL 설정
const isDevelopment = process.env.NODE_ENV === 'development';
export const host = isDevelopment 
  ? 'http://localhost:5000' 
  : 'https://resumates-backend.onrender.com';

// 로그인
export const loginRoute = `${host}/user/login`;

// 로그아웃
export const logoutRoute = `${host}/user/reject`;

// 회원가입
export const signupRoute = `${host}/user/signup`;

// 이메일 발송
export const sendMailRoute = `${host}/user/sendmail`;

// 이메일 검증
export const validEmailRoute = `${host}/user/emailvalid`;

// 아이디 검증
export const validIdRoute = `${host}/user/useridvaild`;

// 이력서 작성
export const createResume = `${host}/resume`;

// 프로필 이미지 등록
export const uploadImage = `${host}/upload`;

// 이력서 상세
export const resumeDetail = `${host}/resume`;

// 이력서 수정
export const editResume = `${host}/resume/edit`;

// 이력서 삭제
export const deleteResume = `${host}/resume/delete`;

// 작성 이력서 목록
export const myResumeList = `${host}/user/resume`;

// 회원 정보
export const getUserAccount = `${host}/user/account`;

// 비밀번호 확인
export const confirmPassword = `${host}/user/userpwvaild`;

// 회원 정보 수정
export const setUserAccount = `${host}/user/edit`;

// 이메일 재설정
export const setUserEmail = `${host}/user/emailreset`;

// 비밀번호 재설정
export const setUserPassword = `${host}/user/passwordreset`;

// 회원 탈퇴
export const deleteAccount = `${host}/user/delete`;
