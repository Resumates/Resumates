import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavList, NavItem, UserIcon } from './HeaderStyle';
import Button from '../common/Button';
import ModalUser from '../Modal/ModalUser';

export default function NavLinks() {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const id = userId?.slice(0, 2);

  return (
    <NavList>
      {!token && (
        <NavItem>
          <NavLink to='/'>
            <Button type='button' color='#04438B' padding='14px 23px' fontSize='16px'>
              이력서 만들기 체험하기
            </Button>
          </NavLink>
        </NavItem>
      )}
      {token && id && (
        <>
          <NavItem>
            <NavLink to='/mypage'>이력서 템플릿 보기</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/mypage'>마이페이지</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/createResume'>
              <Button type='button' color='#04438B' padding='14px 23px' fontSize='16px'>
                내 이력서 만들기
              </Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <UserIcon type='button'>{id}</UserIcon>
            <ModalUser />
          </NavItem>
        </>
      )}
    </NavList>
  );
}
