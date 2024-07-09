import styled from 'styled-components';

export const A4Container = styled.form`
  width: 566px;
  height: 752px;
  /* width: 794px;
  height: 1123px; */
  margin: 0 auto;
  // padding: 2rem;
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
`;

export const ImagePro = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  background-color: whilte;
  justify-content: space-between;
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 2em;
  line-height: 2;
`;

export const ContactInfo = styled.div`
  font-size: 0.9em;
  text-align: right;
  line-height: 2;
`;

export const Section = styled.section`
  margin: 0 20px 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5em;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
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
  padding: 5px 10px;
  border: 1px solid #007bff;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #007bff;
  font-size: 1em;
`;

export const ExperienceList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const ExperienceItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  padding: 0.05rem;

  background-color: #f9f9f9;
`;
export const ExperienceDetail = styled.p`
  margin: 0 10px 0 0; /* Right margin for spacing between items */
  font-size: 0.9em;
  color: #555;
  white-space: nowrap; /* Prevents text from wrapping */
`;
export const List = styled.ul`
  list-style: none;

  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #333;
  }
`;
