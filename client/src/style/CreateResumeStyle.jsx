import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  // max-width: 1500px;
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--bgColor);
  max-width: var(--large);
`;

export const ResumeWrap = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 70px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  //width: 15.24%;
  width: 220px;
`;

export const InfoList = styled.div`
  font-size: 1.6rem;
  background-color: #fff;
  margin-top: 1.2rem;
  padding: 1.8rem;
  border-radius: 10px;
  ul {
    li {
      margin-bottom: 1.2rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

// 이력서 작성 전체 틀
export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// 인적사항, 경력, 스킬, 경험/활동/교육, 자격/어학/수상, 포트폴리오 세션
export const ResumeSection = styled.div`
  width: 40%;
  height: max-content;
  margin: 0 2.8rem 0;
  padding: 3rem 3.5rem;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const TemplateContainer = styled.div`
  width: 44%;
`;
export const Template = styled.div`
  background-color: #ffff;
  height: 800px;
`;
export const TemplateBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 12px;
`;

export const TemplateChangeBtn = styled.a`
  display: flex;
  font-size: 2rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const TemplateText = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: #767676;
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 12px;
`;

export const InfoTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: #04438b;
`;
export const LabeledInput = styled.div`
  margin: 0;
  padding: 10px 8px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid #acacac;

  label {
    margin-left: 2px;
    color: #acacac;
  }
  input {
    margin-top: 7px;
    font-size: 1.6rem;
    color: #000000;
    font-weight: 600;
  }
  input:focus {
    outline: none;
    background-color: transparent;
  }
`;

export const GenderSelect = styled.select`
  margin: 0;
  padding: 10px 8px 10px;
  border-radius: 5px;
  display: flex;
  text-align: center;
  border: 1px solid #acacac;
`;

export const UserProfile = styled.div`
  display: grid;
  grid-template-columns: 18.25% 32.85% 32.85% 16.06%;
  grid-template-rows: 60px 60px 60px;
  margin-top: 15px;
  font-size: 1.2rem;
  gap: 12px;
  margin-right: 36px;
  .photo {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .name {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .birth {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .gender {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .phone {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
  }
  .email {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .address {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;
