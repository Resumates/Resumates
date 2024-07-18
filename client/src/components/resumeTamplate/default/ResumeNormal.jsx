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
} from './ResumeNormalStyle';

export default function ResumeNormal({ resumeDetail }) {
  const { name, birth, email, phone, address } = resumeDetail;
  const structure = resumeDetail?.structure;
  const content = resumeDetail?.structure.content;
  const { activity, certificate, portfolio, skills, workExperience } = content;

  return (
    <A4Container>
      <Header>
        <ProfileImage src={profileImg} alt='프로필 이미지' />
        <Name>
          <img src='' alt='' />
          {name}
          <p>{structure.title}</p>
        </Name>
        <ContactInfo>
          <div>{phone}</div>
          <div>{email}</div>
          <div>{address}</div>
          <div>{birth}</div>
        </ContactInfo>
      </Header>
      <Section>
        <SectionTitle>자기소개</SectionTitle>
      </Section>
      <Section>
        <SectionTitle>기술</SectionTitle>
        <SkillsList>
          {skills.map((item, index) => (
            <SkillItem key={index}>{item}</SkillItem>
          ))}
        </SkillsList>
      </Section>

      <Section>
        <SectionTitle>경력</SectionTitle>
        <ExperienceList>
          {workExperience.map((item) => (
            <ExperienceItem key={item._id}>
              <ExperienceDetail>{item.duration}</ExperienceDetail>
              <ExperienceDetail>{item.company}</ExperienceDetail>
              <ExperienceDetail>{item.department}</ExperienceDetail>
              <ExperienceDetail>{item.position}</ExperienceDetail>
              <ExperienceDetail>{item.desc}</ExperienceDetail>
              <ExperienceDetail>연봉</ExperienceDetail>
              <ExperienceDetail>{item.salary}</ExperienceDetail>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </Section>

      <Section>
        <SectionTitle>경험/활동/교육</SectionTitle>
        <ExperienceList>
          {activity.map((itme) => (
            <ExperienceItem key={itme._id}>
              <ExperienceDetail>{itme.category}</ExperienceDetail>
              <ExperienceDetail>{itme.organization}</ExperienceDetail>
              <ExperienceDetail>{itme.desc}</ExperienceDetail>
              <ExperienceDetail>{itme.duration}</ExperienceDetail>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </Section>
      <Section>
        <SectionTitle>자격 어학 수상</SectionTitle>
        <ExperienceList>
          {certificate.map((itme) => (
            <ExperienceItem key={itme._id}>
              <ExperienceDetail>{itme.category}</ExperienceDetail>
              <ExperienceDetail>{itme.subject}</ExperienceDetail>
              <ExperienceDetail>{itme.organization}</ExperienceDetail>
              <ExperienceDetail>{itme.score}</ExperienceDetail>
              <ExperienceDetail>{itme.getDate}</ExperienceDetail>
            </ExperienceItem>
          ))}
        </ExperienceList>
      </Section>
    </A4Container>
  );
}
