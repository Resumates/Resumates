import styled from 'styled-components';

export const TemplateCont = styled.div`
  width: 566px;
  background-color: white;
  border: 1px solid #eee;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const TitleCont = styled.div`
  width: 566px;
  height: 134px;
  background-color: #f0faff;
  position: relative;
`;

export const ContentDiv = styled.div`
  margin-bottom: 36px;
  padding: 0 40px;
  line-height: 1.4;
  H4 {
    padding-bottom: 0.8rem;
    border-bottom: 2px solid #3482a9;
  }
`;

export const InfoCont = styled.div`
  margin-bottom: 36px;
  padding: 0 40px;
  margin-top: 36px;
  H4 {
    margin-bottom: 0.8rem;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  word-wrap: break-word;
`;
export const DurationText = styled(Text)`
  width: 10rem;
  margin-right: 2rem;
`;

export const CompanyCont = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-right: 1rem;
  white-space: normal; /* 글이 자동으로 줄바꿈되도록 설정 */
  word-wrap: break-word;
`;

export const CompanyItem = styled.div`
  display: flex;
  //   flex-direction: row;
  flex-direction: column;
  gap: 0.4rem;
  width: 180px;
  white-space: normal;
  word-wrap: break-word;
`;

export const DescText = styled(Text)`
  width: 180px;
  margin-right: 2rem;
  white-space: normal;
  word-wrap: break-word;
  flex-grow: 1;
`;

export const CategoryText = styled(Text)`
  width: 7rem;
`;

export const CertificateText = styled(Text)`
  width: 14rem;
`;

export const OrganizationText = styled(Text)`
  width: 10rem;
`;

export const GetDateText = styled(Text)``;

export const ScoreText = styled.p`
  width: 5rem;
`;

export const SalaryCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const H3 = styled.h3`
  color: #3482a9;
  font-size: 2.4rem;
  padding: 0 40px;
  padding-top: 60px;
`;

export const H4 = styled.h4`
  color: #3482a9;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const ProfileImg = styled.img`
  width: 124px;
  height: 124px;
  object-fit: cover;
  background-color: #eee;
  border-radius: 100%;
  position: absolute;
  right: 0;
  top: 10rem;
  transform: translate(-50%, 0);
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
`;

export const UserInfoIcon = styled.img`
  width: 0.8rem;
  height: 0.8rem;
`;

export const EmailIcon = styled(UserInfoIcon)`
  height: 0.7rem;
`;

export const HomelIcon = styled(UserInfoIcon)`
  height: 0.9rem;
`;

export const WorkItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border-bottom: 1px solid #ddd;
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #ddd;
  padding: 0.8rem 0;
`;

export const SkillItem = styled.li`
  padding: 0.8rem;
  background-color: #f0faff;
  color: #3482a9;
  border: 1px solid #cfe0e9;
  border-radius: 5px;
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
`;

export const ContentItem = styled(WorkItem)`
  flex-direction: row;
`;
