import React from 'react';
import {
  ProfileTitle,
  LineContainer,
  ThickLine,
  ThinLine,
  SkillItem,
  SkillsSection,
  WorkExperienceSection,
  ListItem,
  Company,
  CompanyDesc,
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
      {title === '기술스택' && (
        <SkillsSection>
          <ul>
            {content.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </ul>
        </SkillsSection>
      )}
      {title === '경력사항' && (
        <WorkExperienceSection>
          <ul>
            {content.map((experience, index) => (
              <ListItem key={index}>
                <Company className='company'>
                  <ExperienceDesc>{experience.company}</ExperienceDesc>
                  <CompanyDesc>
                    <ExperienceDesc className='department'>{experience.department}</ExperienceDesc>
                    <ExperienceDesc>{experience.position}</ExperienceDesc>
                  </CompanyDesc>
                </Company>
                <ExperienceDesc className='desc'>{experience.desc}</ExperienceDesc>
                <ExperienceDesc className='duration'>{experience.duration}</ExperienceDesc>
              </ListItem>
            ))}
          </ul>
        </WorkExperienceSection>
      )}
      {title === '경험/활동/교육' && (
        <ExperienceSection>
          <ul>
            {content.map((activity, index) => (
              <ListItem key={index}>
                <ExperienceDesc className='category'>{activity.category}</ExperienceDesc>
                <ExperienceDesc className='organization'>{activity.organization}</ExperienceDesc>
                <ExperienceDesc className='desc'>{activity.desc}</ExperienceDesc>
                <ExperienceDesc className='duration'>{activity.duration}</ExperienceDesc>
              </ListItem>
            ))}
          </ul>
        </ExperienceSection>
      )}
      {title === '자격/어학/수상' && (
        <ExperienceSection>
          <ul>
            {content.map((certificate, index) => (
              <ListItem key={index}>
                <ExperienceDesc className='category'>{certificate.category}</ExperienceDesc>
                <ExperienceDesc className='subject'>{certificate.subject}</ExperienceDesc>
                <ExperienceDesc className='organization'>{certificate.organization}</ExperienceDesc>
                <ExperienceDesc className='score'>{certificate.score}</ExperienceDesc>
                <ExperienceDesc className='rank'>{certificate.rank}</ExperienceDesc>
                <ExperienceDesc className='getDate'>{certificate.getDate}</ExperienceDesc>
              </ListItem>
            ))}
          </ul>
        </ExperienceSection>
      )}
      {title === '포트폴리오' && <PortfolioSection>{content}</PortfolioSection>}
    </>
  );
}
