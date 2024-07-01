import styled from 'styled-components';

export const ResumeWrap = styled.div`
  /* max-width: 1320px; */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 70px 0 0;
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

export const ResumeContainer = styled.div`
  width: 45.54%;
  height: max-content;
  margin: 0 2.8rem 0;
  padding: 3rem 3.5rem;
  background-color: #ffffff;
`;

export const TemplateContainer = styled.div`
  width: 39.2%;
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
  }
  input {
    margin-top: 5px;
    font-size: 1.6rem;
    color: #000000;
    font-weight: 600;
  }
  input:focus {
    outline: none;
    background-color: transparent;
  }
`;

export const UserProfile = styled.div`
  display: grid;
  grid-template-columns: 18.25% 32.85% 32.85% 16.06%;
  grid-template-rows: 60px 60px 60px;
  margin-top: 1.5rem;
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
