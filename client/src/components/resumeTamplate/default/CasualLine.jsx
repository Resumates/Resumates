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
} from './ResumeCasualStyle.jsx';

export default function CasualLine({ title, content }) {
  return (
    <>
      {content && content.length > 0 && (
        <>
          <ProfileTitle>{title}</ProfileTitle>
          <LineContainer>
            <ThickLine />
            <ThinLine />
          </LineContainer>
        </>
      )}
      {title === '기술스택' && (
        <SkillsSection>
          <ul>
            {content?.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </ul>
        </SkillsSection>
      )}
      {title === '경력사항' && (
        <WorkExperienceSection>
          <ul>
            {content?.map((experience, index) => (
              <ListItem key={index}>
                <Company className='company'>
                  <ExperienceDesc>{experience.company}</ExperienceDesc>
                  <CompanyDesc>
                    <ExperienceDesc className='department'>{experience.department}</ExperienceDesc>
                    <ExperienceDesc>{experience.position}</ExperienceDesc>
                  </CompanyDesc>
                </Company>
                <ExperienceDesc className='desc'>{experience.desc}</ExperienceDesc>
                <ExperienceDesc className='duration'>
                  {experience.startDate}-{experience.endDate}
                </ExperienceDesc>
              </ListItem>
            ))}
          </ul>
        </WorkExperienceSection>
      )}
      {title === '경험/활동/교육' && (
        <ExperienceSection>
          <ul>
            {content?.map((activity, index) => (
              <ListItem key={index}>
                <ExperienceDesc className='category'>{activity.category}</ExperienceDesc>
                <ExperienceDesc className='organization'>{activity.organization}</ExperienceDesc>
                <ExperienceDesc className='desc'>{activity.desc}</ExperienceDesc>
                <ExperienceDesc className='duration'>
                  {activity.startDate}-{activity.endDate}
                </ExperienceDesc>
              </ListItem>
            ))}
          </ul>
        </ExperienceSection>
      )}
      {title === '자격/어학/수상' && (
        <ExperienceSection>
          <ul>
            {content?.map((qualification, index) => (
              <ListItem key={index}>
                <ExperienceDesc className='category'>{qualification.category}</ExperienceDesc>
                <ExperienceDesc className='subject'>{qualification.subject}</ExperienceDesc>
                <ExperienceDesc className='organization'>
                  {qualification.organization}
                </ExperienceDesc>
                <ExperienceDesc className='score'>{qualification.score}</ExperienceDesc>
                <ExperienceDesc className='rank'>{qualification.rank}</ExperienceDesc>
                <ExperienceDesc className='getDate'>{qualification.getDate}</ExperienceDesc>
              </ListItem>
            ))}
          </ul>
        </ExperienceSection>
      )}
      {title === '포트폴리오' && <PortfolioSection>{content}</PortfolioSection>}
    </>
  );
}
