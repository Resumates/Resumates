import styled from 'styled-components';

export const TemplateCont = styled.div`
  width: 800px;
  min-height: 1130px;
  background-color: white;
  border: 1px solid #eee;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const TitleCont = styled.div`
  width: 800px;
  height: 190px;
  background-color: #f0faff;
  position: relative;
`;

export const ContentDiv = styled.div`
  margin-bottom: 50px;
  padding: 0 40px;
  H4 {
    padding-bottom: 1.3rem;
    border-bottom: 2px solid #3482a9;
  }
`;

export const InfoCont = styled.div`
  margin-bottom: 50px;
  padding: 0 40px;
  margin-top: 50px;
  H4 {
    margin-bottom: 1.1rem;
  }
`;

export const Text = styled.p`
  font-size: 1.6rem;
  margin-right: 3rem;
`;
export const DurationText = styled(Text)`
  width: 14rem;
  margin-right: 4rem;
`;

export const CompanyCont = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// export const CompanyItem = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 1rem;
// `;

export const DescText = styled(Text)`
  width: 26rem;
  line-height: 1.4;
`;

export const CategoryText = styled(Text)`
  width: 5rem;
`;

export const CertificateText = styled(Text)`
  width: 16rem;
`;

export const OrganizationText = styled(Text)`
  width: 14rem;
`;

export const GetDateText = styled(Text)`
  text-align: right;
`;

export const ScoreText = styled.p`
  width: 8rem;
  font-size: 1.6rem;
`;

export const LastText = styled.p`
  font-size: 1.6rem;
`;

export const SalaryCont = styled.div`
  margin-right: 0;
  width: 8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const H3 = styled.h3`
  color: #3482a9;
  font-size: 3.2rem;
  padding: 0 40px;
  padding-top: 80px;
  font-weight: 600;
`;

export const H4 = styled.h4`
  color: #3482a9;
  font-size: 2rem;
  font-weight: bold;
`;

export const ProfileImg = styled.img`
  width: 180px;
  height: 180px;
  background-color: #eee;
  border-radius: 100%;
  position: absolute;
  right: 0;
  top: 10rem;
  transform: translate(-50%, 0);
  object-fit: cover;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

export const UserInfoIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

export const EmailIcon = styled(UserInfoIcon)`
  height: 1rem;
`;

export const HomelIcon = styled(UserInfoIcon)`
  height: 1.2rem;
`;

export const WorkItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1.4rem;
  border-bottom: 1px solid #ddd;
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #ddd;
  padding: 1.4rem 0;
`;

export const SkillItem = styled.li`
  padding: 1.2rem;
  font-size: 1.6rem;

  background-color: #f0faff;
  color: #3482a9;
  border: 1px solid #cfe0e9;
  border-radius: 5px;
  margin-right: 1.2rem;
  margin-bottom: 1.2rem;
`;

export const ContentItem = styled(WorkItem)`
  flex-direction: row;
`;
