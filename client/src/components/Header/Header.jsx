import React from 'react';
import { BgCont, MainHeaderContainer, HeaderInner, StyledImage, Nav } from './HeaderStyle';
import logo from '../../asset/images/logo.png';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <BgCont>
      <MainHeaderContainer>
        <HeaderInner>
          <StyledImage src={logo} alt='Resumates Logo' />
          <Nav>
            <NavLinks />
          </Nav>
        </HeaderInner>
      </MainHeaderContainer>
    </BgCont>
  );
}
