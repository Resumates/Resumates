import styled from 'styled-components';

export const A4Container = styled.form`
  width: 566px;
  min-height: 752px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 4rem;
  background-color: #fff;
  font-size: 1.2rem;
`;

export const ProfileHeader = styled.header`
  display: flex;
  margin-bottom: 1rem;
`;

export const ProfileImage = styled.img`
  width: 128px;
  height: 171px;
  border-radius: 10px;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: bold;
  color: #637dcb;
  margin-top: 0.5rem;
`;
export const ProfileInfo = styled.div`
  margin-left: 29px;
`;

export const UserInfo = styled.div`
  margin-top: 16px;
  font-size: 1.2rem;
  color: #454545;
  .name {
    color: #637dcb;
    font-size: 16px;
    font-weight: bold;
    margin-right: 1rem;
  }
  p {
    margin-bottom: 0.4rem;
    img {
      width: 1.2rem;
      margin-right: 0.8rem;
    }
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
  margin: 14px 0 3px 0;
`;

export const LineContainer = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  margin: 7px 0;
`;

export const ThickLine = styled.div`
  width: 30px;
  height: 4px;
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

export const SkillsSection = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    flex-wrap: wrap;
  }
  margin-bottom: 4rem;
`;

export const SkillItem = styled.li`
  background-color: #637dcb;
  color: white;
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
  border-radius: 5px;
  padding: 0.8rem 1.6rem;
`;

export const WorkExperienceSection = styled.div`
  ul {
    li {
      margin-bottom: 10px;
    }
  }
  margin-bottom: 4rem;
`;

export const ListItem = styled.div`
  margin: 2rem 1rem;
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid #637dcb;
  line-height: 1.2;

  vertical-align: calc();
  .company {
    width: 13rem;
  }
  .desc {
    width: 18rem;
    margin-right: 2rem;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .category {
    width: 5rem;
  }
  .organization {
    width: 9rem;
  }
  .subject {
    width: 16rem;
  }
  .score {
    width: 4rem;
  }
  .rank {
    width: 4rem;
  }
`;

export const Company = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const CompanyDesc = styled.div`
  display: flex;
  .department {
    margin: 0 0.3rem;
  }
`;

export const ExperienceSection = styled.div`
  margin-bottom: 4rem;
`;
export const PortfolioSection = styled.div`
  margin-bottom: 3rem;
`;

export const ExperienceDesc = styled.p`
  /* padding-left: 0.6rem; */
`;
