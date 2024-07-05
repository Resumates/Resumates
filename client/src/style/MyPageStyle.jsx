import styled from 'styled-components';

export const MainBg = styled.div`
  position: absolute;
  displat: flex;
  width: 132rem;
  height: auto;
  left: 0px;
  top: 95px;
  background: #eff2f6;
`;

export const ResumeSection = styled.div`
  position: absolute;
  border: 1px solid #acacac;
  width: 39rem;
  height: 140rem;
  left: 300px;
  top: 230px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const Title = styled.h2`
  position: absolute;
  right: 0rem;
  top: 18rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #04438b;
`;

export const MyTitle = styled.h2`
  position: absolute;
  left: 80px;
  // top: 0px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 252px;
  height: 340px;
  margin-top: 40px;
  background: url(${(props) => props.src});
  background-size: cover;
  border: 1px solid #acacac;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 180px;
  height: 50px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #04438b;
  cursor: pointer;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #04438b;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 20px;
`;

export const LargeButton = styled(Button)`
  background: #04438b;
  color: #ffffff;
  border: none;
  position: relative;
  margin: 20px 10px;
`;

export const TemplateSection = styled.div`
  position: absolute;
  width: 898px;
  border: 1px solid #acacac;
  height: 1332px;
  left: 820px;
  top: 230px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  width: 898px;
  left: 830px;
  top: 1520px;
  display: flex;
  justify-content: right;
  margin-top: 20px;
`;
