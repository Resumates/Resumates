import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  flex: 1;
  height: 985px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #eff2f6;
  max-width: 1320px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.img`
  height: 40px;
  margin-right: 1rem;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 2rem;
`;

export const TextSection = styled.div`
  max-width: 500px;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  color: #04438b;
`;

export const Description = styled.p`
  font-size: 3.2rem;
  font-weight: bold;
  color: #333;
  margin: 1rem 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
