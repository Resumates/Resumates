import styled from 'styled-components';

export const ResumeCont = styled.div`
  margin: 0 auto;
  display: flex;
  justify-items: center;
  gap: 2rem;
  flex-direction: column;
`;

export const ResumeSection = styled.div`
  border: 1px solid #acacac;
  height: 20rem;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 20px;
`;

export const MyTitle = styled.h2`
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #04438b;
  margin-top: 70px;
  margin-bottom: 36px;
`;

export const ImgContanierSection = styled.div`
  display: flex;
  justify-content: center; /* 수평 정렬 */
  width: 566px;
  border: 1px solid #acacac;
  height: 752px;
  background: #ffffff;
  border-radius: 10px;
  padding-top: 20px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 160px;
  box-sizing: border-box;
  background: url(${(props) => props.src});
  background-size: cover;
  border: 1px solid #acacac;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  display: flex; /* 가로로 정렬 */
  gap: 20px; /* 아이템 간의 간격 */
  list-style-type: none; /* 리스트 스타일 제거 */
  padding: 0; /* 기본 패딩 제거 */
  margin: 0; /* 기본 마진 제거 */
`;

export const ListItem = styled.li`
  display: flex;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #04438b;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  color: #04438b;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 0;
`;

export const LargeButton = styled(Button)`
  background: #04438b;
  color: #ffffff;
  border: none;
  padding: 20px 0;
  margin: 0;
`;

export const TemplateSection = styled.div`
  position: relative;
  width: 566px;
  border: 1px solid #acacac;
  height: 752px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  width: 300px;
  top: 765px;
  right: 0;
  display: flex;
  gap: 2rem;
`;
