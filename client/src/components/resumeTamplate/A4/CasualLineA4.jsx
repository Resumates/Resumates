import React from 'react';
import {
  ProfileTitle,
  LineContainer,
  ThickLine,
  ThinLine,
  ContentSection,
  SkillsSection,
  ExperienceSection,
  PortfolioSection,
  ExperienceDesc,
} from './ResumeCasualA4Style.jsx';

export default function CasualLineA4({ title, content }) {
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
      {title === '경력사항' && (
        <ExperienceSection>
          <ul>
            {content.map((experience, index) => (
              <li key={index}>
                <h2>{experience.company}</h2>
                <ExperienceDesc>{experience.department}</ExperienceDesc>
                <ExperienceDesc>{experience.duration}</ExperienceDesc>
                <ExperienceDesc>{experience.desc}</ExperienceDesc>
              </li>
            ))}
          </ul>
        </ExperienceSection>
      )}
      {title === '학력' && <ContentSection>{content}</ContentSection>}
      {title === '포트폴리오' && <PortfolioSection>{content}</PortfolioSection>}
    </>
  );
}
