import styled from 'styled-components';

export const A4Container = styled.form`
  width: 800px;
  min-height: 1130px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 4rem;
  background-color: #fff;
`;

export const ProfileHeader = styled.header`
  display: flex;
`;

export const ProfileImage = styled.img`
  width: 153px;
  height: 204px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 3rem;
  line-height: 1.3;
  font-weight: bold;
  color: #637dcb;
  margin-top: 1rem;
`;
export const ProfileInfo = styled.div`
  margin-left: 29px;
`;

export const UserInfo = styled.div`
  margin-top: 24px;
  font-size: 1.6rem;
  color: #454545;
  .name {
    color: #637dcb;
    font-size: 20px;
    font-weight: bold;
    margin-right: 1rem;
  }
  p {
    margin-bottom: 0.8rem;
  }
`;

export const GradientLine = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, black 0%, black 30%, transparent 100%);
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 30%;
    width: 70%;
    height: 1px;
    background: black;
    transform: translateY(-50%);
  }
`;

export const ProfileTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: #637dcb;
  margin: 11px 0 7px 0;
`;

export const LineContainer = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  margin: 11px 0;
`;

export const ThickLine = styled.div`
  width: 30px;
  height: 6px;
  background-color: #6380d2;
  border-radius: 3px;
`;

export const ThinLine = styled.div`
  position: absolute;
  top: 50%;
  left: 30px; /* ThickLine의 너비와 동일 */
  width: calc(100% - 30px);
  height: 1px;
  background-color: #6c86d4;
  transform: translateY(-50%);
`;

export const ContentSection = styled.section`
  /* color: #d9d9d9; */
  font-size: 1.4rem;
  line-height: 1.3;
`;

export const SkillsSection = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    li {
      font-size: 1.4rem;
      margin-bottom: 5px;
      padding-right: 8px;
    }
  }
`;

export const ExperienceSection = styled.div`
  ul {
    li {
      font-size: 1.4rem;
      margin-bottom: 14px;
      h2 {
        font-weight: bold;
        margin-bottom: 5px;
      }
      h3 {
      }
    }
  }
`;
export const EducationSection = styled.div`
  color: green;
`;
export const PortfolioSection = styled.div`
  font-size: 1.4rem;
`;

export const ExperienceDesc = styled.p`
  margin-top: 0.5rem;
  padding-left: 0.6rem;
`;
