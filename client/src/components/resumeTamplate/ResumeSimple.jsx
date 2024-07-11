import React from 'react';
import birthImg from '../../asset/images/icon-birth.png';
import EmailImg from '../../asset/images/icon-email.png';
import PhoneImg from '../../asset/images/icon-phone.png';
import HomeImg from '../../asset/images/icon-home.png';
import profileImg from '../../asset/profile/blank-profile.webp';
import {
  TemplateCont,
  TitleCont,
  H3,
  ProfileImg,
  InfoCont,
  H4,
  InfoItem,
  UserInfoIcon,
  Text,
  EmailIcon,
  HomelIcon,
  ContentDiv,
  WorkItem,
  DurationText,
  CompanyCont,
  CompanyItem,
  DescText,
  SalaryCont,
  SkillList,
  SkillItem,
  ContentItem,
  CategoryText,
  OrganizationText,
  GetDateText,
  CertificateText,
  ScoreText,
} from './ResumeSimpleStyle';

export default function ResumeSimple({ resumeDetail }) {
  const { name, birth, email, phone, address } = resumeDetail;
  const structure = resumeDetail?.structure;
  const content = resumeDetail?.structure.content;
  const { activity, certificate, portfolio, skills, workExperience } = content;

  const birthday = birth?.slice(0, 10).replaceAll('-', '.');

  return (
    <TemplateCont>
      <TitleCont>
        <H3>{structure.title}</H3>
        <ProfileImg src={profileImg} alt='프로필이미지' />
      </TitleCont>
      <InfoCont>
        <H4>{name}</H4>
        <InfoItem>
          <UserInfoIcon src={birthImg} alt='생년월일' />
          <Text>{birthday}</Text>
        </InfoItem>
        <InfoItem>
          <EmailIcon src={EmailImg} alt='이메일' />
          <Text>{email}</Text>
        </InfoItem>
        <InfoItem>
          <UserInfoIcon src={PhoneImg} alt='연락처' />
          <Text>{phone}</Text>
        </InfoItem>
        <InfoItem>
          <HomelIcon src={HomeImg} alt='주소' />
          <Text>{address}</Text>
        </InfoItem>
      </InfoCont>
      <ContentDiv>
        <H4>경력사항</H4>
        <ul>
          {workExperience.map((item, index) => (
            <WorkItem key={index}>
              <DurationText>{item.duration}</DurationText>
              <CompanyCont>
                <Text>{item.company}</Text>
                <CompanyItem>
                  <Text>{item.department}</Text>
                  <Text>{item.position}</Text>
                </CompanyItem>
              </CompanyCont>
              <DescText>{item.desc}</DescText>
              <SalaryCont>
                <Text>연봉</Text>
                <Text>{item.salary}만원</Text>
              </SalaryCont>
            </WorkItem>
          ))}
        </ul>
      </ContentDiv>
      <ContentDiv>
        <H4>스킬</H4>
        <SkillList>
          {skills.map((item, index) => (
            <SkillItem key={index}>{item}</SkillItem>
          ))}
        </SkillList>
      </ContentDiv>
      <ContentDiv>
        <H4>경험/활동/교육</H4>
        <ul>
          {activity.map((itme) => (
            <ContentItem key={itme._id}>
              <CategoryText>{itme.category}</CategoryText>
              <OrganizationText>{itme.organization}</OrganizationText>
              <DescText>{itme.desc}</DescText>
              <GetDateText>{itme.duration}</GetDateText>
            </ContentItem>
          ))}
        </ul>
      </ContentDiv>
      <ContentDiv>
        <H4>자격 어학 수상</H4>
        <ul>
          {certificate.map((itme) => (
            <ContentItem key={itme._id}>
              <CategoryText>{itme.category}</CategoryText>
              <CertificateText>{itme.subject}</CertificateText>
              <OrganizationText>{itme.organization}</OrganizationText>
              <ScoreText>{itme.score}</ScoreText>
              <ScoreText>{itme.rank}</ScoreText>
              <GetDateText>{itme.getDate}</GetDateText>
            </ContentItem>
          ))}
        </ul>
      </ContentDiv>
    </TemplateCont>
  );
}
