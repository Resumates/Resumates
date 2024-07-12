import React from 'react';
import styled from 'styled-components';
import TemplateList from '../../pages/resume/TemplateList';

export default function ChangeTemplate() {
  return (
    <ModalBg>
      <TemplateList />
    </ModalBg>
  );
}

const ModalBg = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 /40%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
