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
} from './ResumeCasualStyle.jsx';

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
      {title === '경력사항' && (
        <ExperienceSection>
          <ul>
            {content.map((experience, index) => (
              <li key={index}>
                <h2>{experience.company}</h2>
                <h3>{experience.department}</h3>
                <p>{experience.duration}</p>
                <p>{experience.desc}</p>
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
