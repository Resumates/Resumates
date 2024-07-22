import React from 'react';
import profileImg from '../../../asset/profile/blank-profile.webp';
import { ProfileImage } from './ResumeCasualStyle';
import {
  A4Container,
  Header,
  Name,
  ContactInfo,
  Section,
  SectionTitle,
  SkillsList,
  SkillItem,
  ExperienceList,
  ExperienceItem,
  ExperienceDetail,
  Title,
} from './ResumeNormalStyle';

export default function ResumeNormal({ resumeDetail }) {
  const { name, birth, email, image, phone, address } = resumeDetail;
  const structure = resumeDetail?.structure || {};
  const content = structure.content || {};

  const {
    activity = [],
    qualification = [],
    certificate = [],
    portfolio = [],
    skills = [],
    workExperience = [],
  } = content;
  console.log();
  return (
    <A4Container>
      <Header>
        {image ? (
          <ProfileImage src={image} alt='프로필이미지' />
        ) : (
          <ProfileImage src={profileImg} alt='프로필이미지' />
        )}
        {/* <ProfileImage src={profileImg} alt='프로필 이미지' /> */}
        <Name>
          <img src='' alt='' />
          {name}
          <Title>{structure.title}</Title>
        </Name>
        <ContactInfo>
          <div>{phone}</div>
          <div>{email}</div>
          <div>{address}</div>
          <div>{birth}</div>
        </ContactInfo>
      </Header>

      {skills.length > 0 && (
        <Section>
          <SectionTitle>기술</SectionTitle>
          <SkillsList>
            {skills.map((item, index) => (
              <SkillItem key={index}>{item}</SkillItem>
            ))}
          </SkillsList>
        </Section>
      )}

      {workExperience.length > 0 && (
        <Section>
          <SectionTitle>경력</SectionTitle>
          <ExperienceList>
            {workExperience.map((item) => (
              <ExperienceItem key={item._id}>
                <ExperienceDetail>
                  {item.startDate}-{item.endDate}
                </ExperienceDetail>
                <ExperienceDetail>{item.company}</ExperienceDetail>
                <ExperienceDetail>{item.department}</ExperienceDetail>
                <ExperienceDetail>{item.position}</ExperienceDetail>
                <ExperienceDetail>{item.desc}</ExperienceDetail>
                {/* <ExperienceDetail>연봉</ExperienceDetail> */}
                <ExperienceDetail>{item.salary}</ExperienceDetail>
              </ExperienceItem>
            ))}
          </ExperienceList>
        </Section>
      )}

      {activity.length > 0 && (
        <Section>
          <SectionTitle>경험/활동/교육</SectionTitle>
          <ExperienceList>
            {activity.map((item) => (
              <ExperienceItem key={item._id}>
                <ExperienceDetail>{item.category}</ExperienceDetail>
                <ExperienceDetail>{item.organization}</ExperienceDetail>
                <ExperienceDetail>{item.desc}</ExperienceDetail>
                <ExperienceDetail>
                  {item.startDate}-{item.endDate}
                </ExperienceDetail>
              </ExperienceItem>
            ))}
          </ExperienceList>
        </Section>
      )}

      {qualification && qualification.length > 0 && (
        <Section>
          <SectionTitle>자격 어학 수상</SectionTitle>
          <ExperienceList>
            {qualification?.map((item) => (
              <ExperienceItem key={item._id}>
                <ExperienceDetail>{item.category}</ExperienceDetail>
                {item.category === '자격증' && (
                  <>
                    <ExperienceDetail>{item.certificateName}</ExperienceDetail>
                    <ExperienceDetail>{item.organization}</ExperienceDetail>
                    <ExperienceDetail>{item.getDate}</ExperienceDetail>
                  </>
                )}
                {item.category === '어학시험' && (
                  <>
                    <ExperienceDetail>{item.language}</ExperienceDetail>
                    <ExperienceDetail>{item.testName}</ExperienceDetail>
                    <ExperienceDetail>{item.organization}</ExperienceDetail>
                    <ExperienceDetail>{item.score}</ExperienceDetail>
                    <ExperienceDetail>{item.level}</ExperienceDetail>
                    <ExperienceDetail>{item.getyear}</ExperienceDetail>
                  </>
                )}
                {item.category === '수상내역' && (
                  <>
                    <ExperienceDetail>{item.awardName}</ExperienceDetail>
                    <ExperienceDetail>{item.issuer}</ExperienceDetail>
                    <ExperienceDetail>{item.awardDate}</ExperienceDetail>
                  </>
                )}
              </ExperienceItem>
            ))}
          </ExperienceList>
        </Section>
      )}
      {portfolio.length > 0 && (
        <Section>
          <SectionTitle>포트폴리오</SectionTitle>
          <ExperienceList>
            {portfolio.map((item, index) => (
              <ExperienceItem key={index}>
                <ExperienceDetail>포트폴리오 URL</ExperienceDetail>
                <ExperienceDetail>{item.portfolioURL}</ExperienceDetail>
              </ExperienceItem>
            ))}
          </ExperienceList>
        </Section>
      )}
    </A4Container>
  );
}
