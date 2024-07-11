import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavList, NavItem, UserIcon } from './HeaderStyle';
import Button from '../common/Button';
import ModalUser from '../Modal/ModalUser';
import { getUserData } from '../../api/commonAPI';

export default function NavLinks() {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const id = userId?.slice(0, 2);
  const [userInfo, setUserInfo] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(userId);
        setUserInfo(data.user);
      } catch (error) {
        console.error('유저데이터 조회 실패', error);
      }
    };

    fetchUserData();
  }, [userId, token]);

  return (
    <NavList>
      {!token && (
        <NavItem>
          <NavLink to={`/resume/sample`}>
            <Button type='button' color='#04438B' padding='14px 23px' fontSize='16px'>
              이력서 만들기 체험하기
            </Button>
          </NavLink>
        </NavItem>
      )}
      {token && id && (
        <>
          <NavItem>
            <NavLink to='/list'>이력서 템플릿 보기</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`/mypage/${userId}`}>마이페이지</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/createResume'>
              <Button type='button' color='#04438B' padding='14px 23px' fontSize='16px'>
                내 이력서 만들기
              </Button>
            </NavLink>
          </NavItem>
          <NavItem>
            <UserIcon type='button' onClick={() => setModalOpen(!modalOpen)}>
              {id}
            </UserIcon>
            {modalOpen && <ModalUser userInfo={userInfo} />}
          </NavItem>
        </>
      )}
    </NavList>
  );
}
