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

export const StyledButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const SocialLoginButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1.25rem;
  cursor: pointer;

  &.kakao {
    background-color: #fee500;
    color: #3c1e1e;
  }

  &.google {
    background-color: #4285f4;
    color: white;
  }
`;
