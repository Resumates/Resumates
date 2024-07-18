import React from 'react';
import { H2 } from '../../style/CommonStyle';
import ChangeTemplate from '../../components/resumeTamplate/ChangeTemplate';
import { TemplateCont } from '../../style/TemplateListStyle';

export default function TemplateList() {
  return (
    <>
      <H2>이력서 템플릿</H2>
      <TemplateCont>
        <ChangeTemplate />
      </TemplateCont>
    </>
  );
}
