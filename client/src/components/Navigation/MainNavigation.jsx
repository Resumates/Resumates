import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../common/context/auth-context';
import { MainHeaderContainer, LogoContainer, StyledImage, Nav } from './MainHeaderStyle';
import logo from '../../asset/images/logo.png'; // 로고 이미지 경로
import NavLinks from './NavLinks';

const MainNavigation = () => {
  const auth = useContext(AuthContext);

  return (
    <MainHeaderContainer>
      <LogoContainer>
        <StyledImage src={logo} alt='Resumates Logo' />
      </LogoContainer>
      <Nav>
        <NavLinks />
      </Nav>
    </MainHeaderContainer>
  );
};

export default MainNavigation;
