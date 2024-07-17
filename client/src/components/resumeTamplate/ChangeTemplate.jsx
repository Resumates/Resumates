import React from 'react';
import { useNavigate } from 'react-router-dom';
import simple from '../../asset/images/simple.png';
import casual from '../../asset/images/casual.png';
import normal from '../../asset/images/normal.png';
import styled from 'styled-components';
import {
  ListContainer,
  ListItem,
  TemplateImg,
  CasualTemplate,
  NormalTemplate,
  SimpleTemplate,
  TemplateCont,
  TemplateText,
} from '../../style/TemplateListStyle';

export default function ChangeTemplate() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const type = e.target.dataset.name;
    console.log(e.target.dataset.name);
    navigate(`/resume/${type}`);
  };
  return (
    <TemplateCont>
      <TemplateText>이력서 템플릿을 선택해 이력서를 작성해보세요!</TemplateText>
      <ListContainer>
        <ListItem onClick={handleClick} data-name='casual'>
          <CasualTemplate data-name='casual'>CASUAL</CasualTemplate>
          <TemplateImg data-name='casual' src={casual} alt='casual template' />
        </ListItem>
        <ListItem onClick={handleClick} data-name='normal'>
          <NormalTemplate data-name='normal'>NORMAL</NormalTemplate>
          <TemplateImg data-name='normal' src={normal} alt='normal template' />
        </ListItem>
        <ListItem onClick={handleClick} data-name='simple'>
          <SimpleTemplate data-name='simple'>SIMPLE</SimpleTemplate>
          <TemplateImg data-name='simple' src={simple} alt='simple template' />
        </ListItem>
      </ListContainer>
    </TemplateCont>
  );
}

// const ModalBg = styled.div`
//   position: fixed;
//   inset: 0;
//   background-color: rgb(0 0 0 /40%);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
