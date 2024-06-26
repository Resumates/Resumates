import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 9.5rem;
  background: #ffffff;
`;

export const MainHeaderContainer = styled.header`
  position: relative;
  max-width: 1320px;
  width: 100%;
  height: 95px;
  background: #ffffff;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 0%;
  right: 88.74%;
  top: 30.53%;
  bottom: 31.58%;
`;
export const StyledImage = styled.img`
  width: 14.8rem;
  height: 3.6rem;
`;
export const Subtract1 = styled.div`
  position: absolute;
  left: 1.98%;
  right: 96.43%;
  top: 30.53%;
  bottom: 42.3%;
  background: #04438b;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const Subtract2 = styled.div`
  position: absolute;
  left: 1.06%;
  right: 97.35%;
  top: 36.96%;
  bottom: 35.87%;
  background: #8d9fb5;
`;

export const Subtract3 = styled.div`
  position: absolute;
  left: 1.59%;
  right: 96.82%;
  top: 41.25%;
  bottom: 31.58%;
  background: #3d79bf;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const ResumatesText = styled.div`
  position: absolute;
  left: 3.18%;
  right: 88.74%;
  top: 41.52%;
  bottom: 42.44%;
  font-size: 24px;
  font-weight: bold;
`;

export const Vector = styled.div`
  position: absolute;
  background: #3d79bf;
`;

export const Vectors = styled.div`
  position: absolute;
  top: 41.52%;
  bottom: 42.67%;
  display: flex;
  left: 4.16%;
  right: 88.74%;

  & > div {
    margin-right: 0.1rem;
    width: 1.5%;
  }
`;

export const Button = styled.button`
  position: absolute;
  left: 85.23%;
  right: 0%;
  top: 28.42%;
  bottom: 27.37%;
  background: #04438b;
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  padding: 10px 20px;
`;

export const Icon = styled.div`
  position: absolute;
  left: 97.27%;
  right: 1.81%;
  top: 43.66%;
  bottom: 42.78%;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    margin-right: 0.1rem;
    width: 0.5rem;
    height: 0.5rem;
    background: #ffffff;
  }
`;
