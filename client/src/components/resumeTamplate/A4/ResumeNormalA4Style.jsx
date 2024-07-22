import styled from 'styled-components';

export const A4Container = styled.form`
  width: 800px;
  min-height: 1130px;
  margin: 0 auto;
  background-color: #fff;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  color: white;
  padding: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
  padding: 30px;
`;

export const ImagePro = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  background-color: white;
  justify-content: space-between;
`;

export const Name = styled.h2`
  font-size: 28px;
  margin-left: 20px;
  line-height: 2;
`;

export const Title = styled.h2`
  font-size: 20px;
`;

export const ContactInfo = styled.div`
  font-size: 16px;
  text-align: right;
  line-height: 2;
`;

export const Section = styled.section`
  margin: 0 20px 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
  margin-top: 20px;
  color: #333;
  margin-bottom: 10px;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
`;

export const SkillItem = styled.li`
  margin-right: 15px;
  margin-bottom: 10px;
  padding: 5px 12px;
  margin-right: 18px;
  border: 1px solid #007bff;
  border-radius: 5px;
  color: #007bff;
  font-size: 16px;
`;

export const ExperienceList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ExperienceItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-top: 15px;
  padding: 0.05rem;
  font-size: 16px;
  // white-space: pre-wrap;
`;

export const ExperienceDetail = styled.p`
  margin: 3px 3px;
  font-size: 0.9em;
  color: #555;
  flex: 1 1 20%;
  max-width: 150px;
  padding-right: 10px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  width: 200px; /* 고정된 너비 설정 */
  border: 1px solid #ddd;
  border-radius: 5px;
  position: relative;
 
  }
`;
