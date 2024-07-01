import React from 'react';
import {
  ProfileTitle,
  LineContainer,
  ThickLine,
  ThinLine,
  ContentSection,
  SkillsSection,
  PortfolioSection,
} from './CasualResumeStyle.jsx';

export default function CasualLine({ title, content }) {
  return (
    <>
      <ProfileTitle>{title}</ProfileTitle>
      <LineContainer>
        <ThickLine />
        <ThinLine />
      </LineContainer>
      {title === '자기소개' && <ContentSection>{content}</ContentSection>}
      {title === '기술스택' && (
        <SkillsSection>
          <ul>
            {content.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </SkillsSection>
      )}
      {title === '경력사항' && <ContentSection>{content}</ContentSection>}
      {title === '학력' && <ContentSection>{content}</ContentSection>}
      {title === '포트폴리오' && <PortfolioSection>{content}</PortfolioSection>}
    </>
  );
}
