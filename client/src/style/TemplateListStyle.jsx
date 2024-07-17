import styled from 'styled-components';

export const TemplateCont = styled.div`
  box-sizing: border-box;
  max-width: 120rem;
  background-color: white;
  margin: 7rem auto;
  padding: 5rem 5rem;
  border-radius: 1rem;
`;

export const ModalCont = styled(TemplateCont)`
  position: fixed;
  width: 1000px;
  z-index: 999;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  border: 1px solid #eee;
  box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
`;

export const TemplateText = styled.p`
  margin-bottom: 5rem;
  text-align: center;
  font-size: 2rem;
  padding-bottom: 5rem;
  border-bottom: 2px solid var(--subColor);
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6rem;
`;

export const ListItem = styled.button`
  padding: 1rem;
  border: 1px solid #dddddd;
  border-radius: 0.5rem;
  letter-spacing: 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: var(--bgColor);
    transform: scale(1.05);
    transition: all 0.2s;
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
  max-width: 20rem;
  object-fit: contain;
  border: 1px solid #dddddd;
`;
