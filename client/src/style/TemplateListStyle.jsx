import styled from 'styled-components';

export const TemplateCont = styled.div`
  box-sizing: border-box;
  max-width: 86rem;
  background-color: white;
  margin: 7rem auto;
  padding: 10rem 5rem;
  border-radius: 1rem;
`;

export const TemplateText = styled.p`
  margin-bottom: 7rem;
  text-align: center;
  font-size: 2rem;
  padding-bottom: 7rem;
  border-bottom: 2px solid var(--subColor);
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const ListItem = styled.button`
  padding: 1rem;
  border: 1px solid #dddddd;
  border-radius: 0.5rem;
  letter-spacing: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: var(--bgColor);
  }
`;

export const CasualTemplate = styled.p`
  padding: 2rem;
  font-size: 1.4rem;
  color: white;
  background-color: #637dcb;
  text-align: center;
  margin-bottom: 1rem;
`;

export const NormalTemplate = styled(CasualTemplate)`
  background-color: #027bff;
`;

export const SimpleTemplate = styled(CasualTemplate)`
  background-color: #3582a9;
`;

export const TemplateImg = styled.img`
  width: 18rem;
  height: 24.3rem;
  border: 1px solid #dddddd;
`;
