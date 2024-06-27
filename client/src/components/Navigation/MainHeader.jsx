import React from 'react';
import { MainHeaderContainer, LogoContainer, StyledImage, Button } from './MainHeaderStyle';
import logo from '../../asset/images/logo.png';

const MainHeader = ({ children }) => {
  return (
    <MainHeaderContainer>
      {children}
      <LogoContainer>
        <StyledImage src={logo} alt='Resumates Logo' />
      </LogoContainer>
    </MainHeaderContainer>
  );
};

export default MainHeader;
