import React from 'react';
import birthImg from '../../../asset/images/icon-birth.png';
import EmailImg from '../../../asset/images/icon-email.png';
import PhoneImg from '../../../asset/images/icon-phone.png';
import HomeImg from '../../../asset/images/icon-home.png';
import profileImg from '../../../asset/profile/blank-profile.webp';
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
  LastText,
} from './ResumeSimpleA4Style';

export default function ResumeSimpleA4({ resumeDetail }) {
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
                <Text>{item.department}</Text>
                <Text>{item.position}</Text>
              </CompanyCont>
              <DescText>{item.desc}</DescText>
              <SalaryCont>
                <LastText>연봉</LastText>
                <LastText>{item.salary}만원</LastText>
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
          {activity.map((item) => (
            <ContentItem key={item._id}>
              <CategoryText>{item.category}</CategoryText>
              <OrganizationText>{item.organization}</OrganizationText>
              <DescText>{item.desc}</DescText>
              <LastText>{item.duration}</LastText>
            </ContentItem>
          ))}
        </ul>
      </ContentDiv>
      <ContentDiv>
        <H4>자격/어학/수상</H4>
        <ul>
          {certificate.map((item) => (
            <ContentItem key={item._id}>
              <CategoryText>{item.category}</CategoryText>
              <CertificateText>{item.subject}</CertificateText>
              <OrganizationText>{item.organization}</OrganizationText>
              <ScoreText>{item.score}</ScoreText>
              <ScoreText>{item.rank}</ScoreText>
              <GetDateText>{item.getDate}</GetDateText>
            </ContentItem>
          ))}
        </ul>
      </ContentDiv>
      <ContentDiv>
        <H4>포트폴리오</H4>
        <ul>
          {/* {portfolio.map((item, index) => ( */}
          <ContentItem>
            <CategoryText>
              <a href={portfolio.url} target='blank'>
                {portfolio.url}
              </a>
            </CategoryText>
          </ContentItem>
          {/* ))} */}
        </ul>
      </ContentDiv>
    </TemplateCont>
  );
}
