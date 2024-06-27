export const host = 'http://localhost:5000';

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
export const validIdRoute = `${host}/user/userIdvaild`;

// 이력서 작성
export const createResume = `${host}/resume`;

// 이력서 상세
export const resumeDetail = `${host}/resume`;

// 이력서 수정
export const editResume = `${host}/resume/edit`;

// 이력서 삭제
export const deleteResume = `${host}/resume/delete`;

// 회원 정보 수정
export const setUserAccount = `${host}/user/edit`;

// 이메일 재설정
export const setUserEmail = `${host}/user/email-reset`;

// 이메일 재설정
export const setUserPassword = `${host}/user/password-resett`;

// 회원 탈퇴
export const userDelete = `${host}/user/`;
