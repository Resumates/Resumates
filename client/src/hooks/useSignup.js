import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    if (!validateId(userId)) return;
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/userIdvaild', {
        userId,
      });
      console.log(data);
    } catch (error) {
      console.log('서버 error', error);
      console.log('ID 검증오류:', error.response.status);
    }
  };

  const sendMail = async (e) => {
    e.preventDefault();
    setIsEmailValue(false);
    const { email } = values;
    if (email === '') {
      setIsEmailValue(true);
      return;
    }
    try {
      const { data: validData } = await axios.post('http://localhost:5000/api/users/emailvalid', {
        email,
      });
      console.log(validData);
      if (validData.valid) {
        try {
          const { data } = await axios.post('http://localhost:5000/api/users/sendmail', {
            email,
          });
          console.log(data);
          console.log(data.message);
          setEmailErrorMsg(data.message);
          setCorrectCode(data.code);
        } catch (error) {
          console.log('이메일 인증 오류:', error);
        }
      } else {
        setEmailErrorMsg(validData.message);
      }
    } catch (error) {
      console.log('서버 error', error);
      console.log('이메일 검증오류:', error.response.status);
      setEmailErrorMsg('');
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

    try {
      const { data } = await axios.post('http://localhost:5000/api/users/signup', {
        userId,
        userPw,
        email,
      });
      console.log(data);
      navigate('/');
    } catch (error) {
      console.log('서버 error');
      console.error('회원가입오류', error);
    }
  };

  return {
    values,
    isIdValue,
    isEmailValue,
    idError,
    pwError,
    confirmPwError,
    emailErrorMsg,
    codeError,
    handleChange,
    validId,
    validCode,
    sendMail,
    handleSubmit,
  };
};

export default useSignup;
