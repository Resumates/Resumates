import styled from 'styled-components';

export const A4Container = styled.form`
  width: 566px;
  height: 752px;
  margin: 0 auto;
  background-color: #fff;
  overflow-y: auto; /* 컨테이너를 넘어가는 내용이 있을 때 스크롤 가능하게 함 */
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
  background-color: white;
  justify-content: space-between;
`;

export const Name = styled.h2`
  margin: 0;
  margin-left: 20px;
  font-size: 2em;
  line-height: 2;
`;

export const Title = styled.h2`
  font-size: 20px;
`;

export const ContactInfo = styled.div`
  font-size: 14px;
  text-align: right;
  line-height: 2;
  width: 200px;
  flex-grow: 1; /* 공간을 채울 수 있도록 확장 */
`;

export const Section = styled.section`
  margin: 0 20px 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
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
`;

export const ExperienceDetail = styled.p`
  margin: 0 10px 0 0;
  font-size: 14px;
  max-width: 150px;
  color: #555;
  white-space: normal; /* 글이 자동으로 줄바꿈되도록 설정 */
  word-wrap: break-word; /* 길게 이어지는 단어가 있을 때 줄바꿈되도록 설정 */
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;
  width: 200px;
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #333;
  }
`;
