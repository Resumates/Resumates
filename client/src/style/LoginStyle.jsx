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

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    min-height: 100vh;
    gap: 2rem;
    padding: 2rem;
    padding-top: 50.5rem;
  }
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
  width: 40rem;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  
    
    /* LoginForm 내부의 모든 버튼에 스타일 적용 */
    button {
      padding: 1.8rem 14.4rem;
      
    }
  }
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
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 35rem;
    
    /* input 요소들 중앙 정렬 */
    input {
      width: 100%;
      padding: 1.5rem;
      font-size: 1.6rem;
    }
    
    /* label 중앙 정렬 */
    label {
      text-align: left;
      font-size: 1.6rem;
    }

    button {
        padding: 1.8rem 14.4rem;
        width: 100%;
    }
  }
`;
