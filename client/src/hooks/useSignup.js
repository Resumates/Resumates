import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupAPI, vaildIdAPI, validEmailAPI, sendEmailAPI } from '../api/authAPI';

const useSignup = () => {
  const [values, setValues] = useState({
    userId: '',
    userPw: '',
    confirmPw: '',
    email: '',
    code: '',
  });

  const [isIdValue, setIsIdValue] = useState(false);
  const [isEmailValue, setIsEmailValue] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [idError, setIdError] = useState('');
  const [pwError, setPwError] = useState('');
  const [confirmPwError, setConfirmPwError] = useState('');
  const [correctCode, setCorrectCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateId = (id) => {
    if (id.length < 6) {
      setIdError('아이디는 최소 6자 이상이어야 합니다.');
      return false;
    }
    setIdError('사용 가능한 아이디입니다.');
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPwError('비밀번호는 최소 8자 이상이어야 합니다.');
      return false;
    }
    if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
      setPwError('비밀번호는 문자와 숫자를 포함해야 합니다.');
      return false;
    }
    setPwError('');
    return true;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPwError('비밀번호가 일치하지 않습니다.');
      return false;
    }
    setConfirmPwError('');
    return true;
  };

  const validId = async (e) => {
    e.preventDefault();
    setIsIdValue(false);
    const { userId } = values;
    if (userId === '') {
      setIsIdValue(true);
      return;
    }
    const idStatus = await vaildIdAPI(userId);
    if (idStatus) {
      if (!validateId(userId)) return;
    } else {
      setIdError('이미 사용중인 아이디입니다.');
    }
  };

  const sendMail = async (e) => {
    console.log('메일발송');
    e.preventDefault();
    setIsEmailValue(false);
    const { email } = values;
    if (email === '') {
      setIsEmailValue(true);
      setEmailErrorMsg('');
      return;
    }
    if (!validateEmail(email)) {
      setEmailErrorMsg('이메일 형식이 올바르지 않습니다.');
      return;
    }

    const validData = await validEmailAPI(email);
    console.log(validData);
    if (validData.valid === true) {
      const sendEmail = await sendEmailAPI(email);
      if (sendEmail) {
        setEmailErrorMsg(sendEmail.message);
        setCorrectCode(sendEmail.code);
      } else {
        setEmailErrorMsg(validData.message);
      }
    } else {
      setEmailErrorMsg(validData.message);
    }
  };

  const validCode = (e) => {
    e.preventDefault();

    const { code } = values;

    if (code !== correctCode || code === '') {
      setCodeError('인증 코드가 올바르지 않습니다.');
      return;
    } else {
      setCodeError('인증 코드가 일치합니다.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userId, email, userPw, confirmPw, code } = values;
    if (
      !validateId(userId) ||
      !validatePassword(userPw) ||
      !validateConfirmPassword(userPw, confirmPw) ||
      code !== correctCode
    ) {
      return;
    }
    const result = signupAPI(userId, userPw, email);
    if (result) navigate('/');
  };

  return {
    values,
    setValues,
    isIdValue,
    isEmailValue,
    idError,
    pwError,
    confirmPwError,
    emailErrorMsg,
    codeError,
    correctCode,
    handleChange,
    validId,
    validCode,
    sendMail,
    handleSubmit,
  };
};

export default useSignup;
