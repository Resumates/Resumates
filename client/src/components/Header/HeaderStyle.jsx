import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #fff;
  height: 9.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const HeaderInner = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const StyledImage = styled.img`
  width: 14.8rem;
  height: 3.6rem;
  margin-right: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 500;
  position: relative;
`;

export const UserIcon = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  border-radius: 50%;
  font-size: 1.5rem;
  color: #04438b;
  cursor: pointer;
  font-weight: 700;
`;
