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

export const KakaoButton = styled.form`
    padding='1.8rem 2.4rem'
    margintop='1rem'
    fontSize='1.8rem'
    fontWeight='bold'
    className='kakao'
    border='1px solid yellow'
`;

export const KaKaoButton = styled.button`
  background-color: ${(props) => (props.disabled ? '' : props.color || '#fff')};
  color: ${(props) => (props.disabled ? 'black' : 'black')};
  padding: ${(props) => props.padding || '10px 20px'};
  margin-left: ${(props) => props.marginLeft || '0px'};
  margin-top: ${(props) => props.margintop || '0px'};
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: ${(props) => props.fontSize || '16px'};
  opacity: ${(props) => (props.disabled ? '0.6' : '1')};
  border: 1px solid yellow;
`;

export const GoogleButton = styled.button`
  background-color: ${(props) => (props.disabled ? '' : props.color || '#fff')};
  color: ${(props) => (props.disabled ? 'black' : 'black')};
  padding: ${(props) => props.padding || '10px 20px'};
  margin-left: ${(props) => props.marginLeft || '0px'};
  margin-top: ${(props) => props.margintop || '0px'};
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: ${(props) => props.fontSize || '16px'};
  opacity: ${(props) => (props.disabled ? '0.6' : '1')};
  border: 1px solid #04438b;
`;
