import React, { useEffect, useState } from 'react';
// import check from '../../asset/images/icon-check.png';`
import useSignup from '../../hooks/useSignup';
import { confirmPasswordAPI, resetPasswordAPI } from '../../api/authAPI';
import Button from '../common/Button';
import {
  EditCont,
  UserInfoSet,
  InfoItem,
  InfoBox,
  BtnCont,
  PasswordLabel,
  InputPassword,
  // CheckBox,
  // CheckImg,
  // CheckBoxText,
  PwAlertText,
} from './EditAccountStyle';

export default function EditUserPassword({ userInfo }) {
  const {
    values,
    setValues,
    validateConfirmPassword,
    confirmPwError,
    setConfirmPwError,
    pwError,
    setPwError,
    validatePassword,
  } = useSignup();
  const { userId, email } = userInfo;
  const { currentPw, userPw, confirmPw } = values;
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [confrimPw, setConfirmPw] = useState('');
  const [status, setStatus] = useState({
    currentPw: false,
    userPw: false,
    confirmPw: false,
  });

  useEffect(() => {
    if (currentPw && userPw && confirmPw) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [currentPw, userPw, confirmPw]);

  const handleChange = (e) => {
    setConfirmPw('');
    return setValues({ ...values, [e.target.name]: e.target.value });
  };

  const checkCurrentPwInput = async (e) => {
    const pwConfirm = await confirmPasswordAPI(email, currentPw);
    if (!pwConfirm.valid) {
      setConfirmPw('비밀번호가 올바르지 않습니다.');
    } else {
      setStatus({ ...status, [e.target.name]: true });
    }
  };
  const checkPwValid = async (e) => {
    const vaildPw = validatePassword(userPw);
    if (!vaildPw) {
      return;
    } else {
      setStatus({ ...status, [e.target.name]: true });
    }
  };

  const checkNewPwInput = async (e) => {
    const confirmResult = validateConfirmPassword(userPw, confirmPw);
    if (!confirmResult) {
      setConfirmPwError('비밀번호가 일치하지 않습니다.');
    } else {
      setStatus({ ...status, [e.target.name]: true });
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();
    if (status.currentPw && status.userPw && status.confirmPw) {
      const changeResult = await resetPasswordAPI(userId, currentPw, userPw, confirmPw);
      if (changeResult.valid) {
        window.alert('비밀번호가 변경되었습니다.');
        window.location.reload();
      }
    }
  };

  return (
    <EditCont>
      <UserInfoSet>
        <InfoItem>
          <PasswordLabel>아이디</PasswordLabel>
          <InfoBox>{userId}</InfoBox>
        </InfoItem>
        <InfoItem>
          <PasswordLabel>현재비밀번호</PasswordLabel>
          <InputPassword
            name='currentPw'
            type='password'
            autoComplete='new-password'
            onChange={handleChange}
            onBlur={checkCurrentPwInput}
          />
        </InfoItem>
        <PwAlertText>{confrimPw}</PwAlertText>
        <InfoItem>
          <PasswordLabel>새 비밀번호</PasswordLabel>
          <InputPassword
            name='userPw'
            type='password'
            autoComplete='new-password'
            onChange={handleChange}
            onBlur={checkPwValid}
          />
        </InfoItem>
        <PwAlertText>{pwError}</PwAlertText>
        <InfoItem>
          <PasswordLabel>새 비밀번호 확인</PasswordLabel>
          <InputPassword
            name='confirmPw'
            type='password'
            autoComplete='new-password'
            onChange={handleChange}
            onBlur={checkNewPwInput}
          />
        </InfoItem>
        <PwAlertText>{confirmPwError}</PwAlertText>
        <BtnCont>
          {/* <CheckBox>
            <CheckImg src={check} alt='체크' />
            <CheckBoxText>비밀번호보기</CheckBoxText>
          </CheckBox> */}
          <Button
            padding='16px 14px'
            marginLeft='18rem'
            onClick={changePassword}
            disabled={isButtonDisabled}
          >
            변경하기
          </Button>
        </BtnCont>
      </UserInfoSet>
    </EditCont>
  );
}
