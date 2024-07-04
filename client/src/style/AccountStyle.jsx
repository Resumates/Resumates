import styled from 'styled-components';

export const AccountCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 7rem;
`;

export const EditCont = styled.div`
  width: 77rem;
  min-height: 40rem;
  box-sizing: border-box;
  background-color: white;
  border-radius: 1rem;
  padding: 6rem 10rem;
  position: relative;
`;

export const Tab = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TabButton = styled.button`
  width: 38rem;
  font-size: 1.6rem;
  background-color: ${(props) => (props.$active ? '#04438B' : '#f8f9fa')};
  color: ${(props) => (props.$active ? '#fff' : '#04438B')};
  border: 1px solid ${(props) => (props.$active ? '#04438B' : '#ACACAC')};
  padding: 1.4rem 2rem;
  cursor: pointer;
  border-radius: 1rem;
  &:focus {
    outline: none;
  }
`;
