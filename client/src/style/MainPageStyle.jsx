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

  @media (max-width: 1024px) {
    gap: 4rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding-top: 18rem;
    gap: 9rem;
  }
`;

export const TextSection = styled.div`
  max-width: 500px;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 600;
  color: var(--mainColor);
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: 2rem;
  color: var(--mainColor);
  margin: 4rem 0;
  font-weight: 500;
  line-height: 1.2;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
    button {
      width: 100%;
    }
  }
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 62rem;
    height: 52rem;
  }

  @media (max-width: 1024px) {
    img {
      width: 45rem;
      height: 38rem;
    }
  }
`;
