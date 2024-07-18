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
  width: 1200px;
  height: 800px;
  gap: 50px;
  padding: 20px;
`;
export const LoginImage = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 29rem;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const LoginForm = styled.div`
  flex: 1;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 3rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
