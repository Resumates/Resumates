import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  background-color: #eff2f6;
  padding: 20px;
  border-radius: 10px;
  height: 880px;
  max-width: 1200px;
  margin: 50px auto;
`;

export const TextContainer = styled.div`
  text-align: left;
  margin-right: 50px;
`;

export const Title = styled.h3`
  color: var(--mainColor);
  font-size: 3.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.6rem;
  color: var(--mainColor);
  font-weight: 500;
  margin-bottom: 2rem;
  line-height: 1.2;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 67rem;
  height: auto;
  margin-left: 20px;
`;

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e2ecfa;
  height: 880px;
  padding: 10rem 0;
`;

export const SectDiv = styled.div`
  display: flex;
  gap: 7rem;
`;

export const TitleTwo = styled.span`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--mainColor);
`;

export const TitleThree = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  margin: 5rem 0;
  color: #000000;
`;

export const IConContainer = styled.div`
  text-align: left;
  margin-right: 50px;
  max-width: 515px;
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: rem;
  margin-top: 10rem;
  position: relative;
`;

export const StepOne = styled.div`
  width: 60rem;
  height: 11.2rem;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
`;
export const NumberContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Number = styled.h1`
  color: #1e81ce;
  font-size: 3.8rem;
  font-weight: bold;
  margin: 20px;
`;
export const StepOneDes = styled.h1`
  color: #000000;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
`;

export const StepTwo = styled(StepOne)`
  margin-left: 60px;
  background-color: #d4e6ff;
`;

export const StepThree = styled(StepOne)`
  margin-left: 100px;
  background-color: #a3c9ff;
`;
