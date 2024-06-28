import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../common/context/auth-context';
import { NavList, NavItem, UserIcon } from './NavLinksStyle';

import Button from '../../components/common/Button';
const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <NavList>
      {!auth.isLoggedIn && (
        <NavItem>
          <NavLink to='/'>
            <Button type='button' color='#04438B' padding='14px 23px' fontSize='16px'>
              이력서 만들기 체험하기
            </Button>
          </NavLink>
        </NavItem>
      )}
      {auth.isLoggedIn && (
        <NavItem>
          <NavLink to='/mypage'>이력서 템플릿 보기</NavLink>
        </NavItem>
      )}
      {auth.isLoggedIn && (
        <NavItem>
          <NavLink to='/mypage'cla>마이페이지</NavLink>
        </NavItem>
      )}

      {auth.isLoggedIn && (
        <NavItem>
          <NavLink to='/createResume'>
            <Button type='button' color='#04438B' padding='14px 23px' fontSize='16px'>
              내 이력서 만들기
            </Button>
          </NavLink>
        </NavItem>
      )}
      {auth.isLoggedIn && (
        <NavItem>
          <NavLink to='/user/account'>
            <UserIcon>tn</UserIcon>
          </NavLink>
        </NavItem>
      )}
    </NavList>
  );
};

export default NavLinks;
