import styled from 'styled-components';
export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  overflow: hidden;
  width: 1320px;
  height: 800px;
  gap: 20.8rem;
`;
export const LoginImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  img {
    width: 62rem;
    height: 52rem;
  }
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  margin-top: 7rem;
  margin-bottom: 4rem;
  color: var(--mainColor);
  font-weight: 500;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
