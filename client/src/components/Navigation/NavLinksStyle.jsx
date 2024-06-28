import styled from 'styled-components';

export const MainHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
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
  font-size: 16px;
`;

// export const Button = styled.button`
//   background-color: #04438b;
//   color: #fff;
//   border: none;
//   padding: 0.5rem 1rem;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #033369;
//   }

//   a {
//     color: inherit;
//     text-decoration: none;
//   }
// `;

export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
  border-radius: 50%;
  font-size: 1.5rem;
  color: #04438b;
  cursor: pointer;
`;
