import styled from 'styled-components';
export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--bgColor);
  max-width: var(--large);
`;

export const ResumeWrap = styled.div`
  width: 1500px;
  height: max-content;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 70px;
  padding: 0 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  // position: ${({ isFixed }) => (isFixed ? 'sticky' : 'static')};
  // top: ${({ isFixed }) => (isFixed ? '70px' : 'auto')};
  position: sticky;
  height: max-content;
  top: 70px;
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
  width: 600px;
  height: max-content;
  margin: 0 25px 0;
`;

// 인적사항, 경력, 스킬, 경험/활동/교육, 자격/어학/수상, 포트폴리오 세션
export const ResumeSection = styled.div`
  padding: 3rem 3.5rem;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const TemplateContainer = styled.div`
  width: 566px;
  height: max-content;
  top: 70px;
  position: sticky;
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
    font-weight: 500;
  }
  input:focus {
    outline: none;
    background-color: transparent;
  }

  // input 태그 자동완성시 배경색
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  #photo {
    display: none;
  }
`;

export const StyledLabel = styled.label`
  &.photo {
    cursor: pointer;
  }
`;

export const LabeledSelect = styled.div`
  margin: 0;
  padding: 10px 8px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid #acacac;
  border-radius: 4px;
  p {
    margin-left: 4px;
    color: #acacac;
  }
  select {
    display: inline-block;
    width: 100%;
    height: 40px;
    margin-top: 7px;
    border: 0px solid #8491a7;
    border-radius: 7px;
    font-size: 1.6rem;
    font-weight: bold;
    /* font-weight: 600; */
    cursor: pointer;
    -webkit-appearance: none; /* 크롬 화살표 없애기 */
    -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
    appearance: none;
    padding: 3px;

    // 화살표
    background: url('https://img.icons8.com/ios-filled/50/sort-down.png');
    background-repeat: no-repeat;
    background-position: 96% center;
    background-size: 1rem;
  }
  select:hover {
    color: black;
    background-color: #f4f6fa;
  }

  // 사진업로드
  .btn-upload {
  }
`;

// 추가 버튼 컴포넌트 예정
export const addButton = styled.button`
  display: 'flex';
  width: 53px;
  flex-direction: 'row';
  text-align: 'center';
  font-size: 1.6rem;
  color: '#04438B';
  align-items: center;
  margin: '30px auto 0';
`;

export const UserProfile = styled.div`
  display: grid;
  font-size: 1.2rem;
  gap: 12px;

  width: ${({ className }) => (className === 'personalInfo' ? '350px' : null)};

  justify-content: ${({ className }) => (className === 'personalInfo' ? 'end' : null)};

  grid-template-columns: ${({ className }) =>
    className === 'personalInfo'
      ? '18% 17% 29% 24%;'
      : className === 'career'
        ? '27% 18% 16% 16% 14%;'
        : className === 'skills'
          ? '100%;'
          : className === 'activity'
            ? '18% 43% 16% 16%;'
            : className === 'qualification'
              ? '20% 37% 16% 16%;'
              : className === 'qualification certification'
                ? '20% 39% 18% 16%;'
                : className === 'qualification languageTest'
                  ? '20% 15% 20% 9% 9% 15%;'
                  : className === 'qualification wards'
                    ? '20% 39% 18% 16%;'
                    : className === 'portfolio'
                      ? '100%;'
                      : 'auto;'};

  grid-template-rows: ${({ className }) =>
    className === 'personalInfo'
      ? '60px 60px 60px;'
      : className === 'career'
        ? '60px 60px 60px;'
        : className === 'skills'
          ? '188px 60px;'
          : className === 'activity'
            ? '60px 120px;'
            : className === 'qualification'
              ? '60px;'
              : className === 'qualification certification'
                ? '60px;'
                : className === 'qualification languageTest'
                  ? '60px;'
                  : className === 'qualification wards'
                    ? '60px;'
                    : className === 'portfolio'
                      ? '79px;'
                      : '60px 60px 60px;'};
  // 인적사항
  .image {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }
  .name {
    grid-column-start: 1;
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
    grid-column-start: 1;
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
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  // 경력
  .company {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .department {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    width: 60%;
  }
  .position {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .salary {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .employmentStartDate {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .employmentEndDate {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .workStatus {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .taskDescription {
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .skillsBox {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .skill {
    height: max-content;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  // 경험 & 활동 & 교육
  .category {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .desc {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .startDate {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .endDate {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .description {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  // 자격 & 어학 & 수상
  .certificateName {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .organization {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .getDate {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  //어학시험

  .language {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .testName {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .level {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .score {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .getyear {
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  // 수상내역
  .awardName {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .issuer {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .awardDate {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  // 포트폴리오
  .portfolioURL {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
