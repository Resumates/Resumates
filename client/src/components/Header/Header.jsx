import React from 'react';
import { NavLink } from 'react-router-dom';
import { BgCont, MainHeaderContainer, HeaderInner, StyledImage, Nav } from './HeaderStyle';
import logo from '../../asset/images/logo.png';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <BgCont>
      <MainHeaderContainer>
        <HeaderInner>
          <NavLink to='/'>
            <StyledImage src={logo} alt='Resumates Logo' />
          </NavLink>
          <Nav>
            <NavLinks />
          </Nav>
        </HeaderInner>
      </MainHeaderContainer>
    </BgCont>
  );
}
