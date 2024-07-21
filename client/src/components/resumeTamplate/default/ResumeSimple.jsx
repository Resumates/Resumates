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
  console.log(resumeDetail);
  const { name, birth, email, image, phone, address, structure } = resumeDetail;
  const content = structure?.content || {};
  const { activity, qualification, skills, workExperience, portfolio } = content || [];
  console.log(structure);
  console.log(workExperience);
  console.log(portfolio);

  const birthday = birth?.slice(0, 10).replaceAll('-', '.');

  return (
    <TemplateCont>
      <TitleCont>
        {structure && <H3>{structure?.title}</H3>}
        {image ? (
          <ProfileImg src={image} alt='프로필이미지' />
        ) : (
          <ProfileImg src={profileImg} alt='프로필이미지' />
        )}
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
      {workExperience.length > 0 && (
        <ContentDiv>
          <H4>경력사항</H4>
          {content && (
            <ul>
              {workExperience.map((item, index) => (
                <WorkItem key={index}>
                  <DurationText>{item.startDate + ' - ' + item.endDate}</DurationText>
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
          )}
        </ContentDiv>
      )}
      {skills.length > 0 && (
        <ContentDiv>
          <H4>스킬</H4>
          <SkillList>
            {skills?.map((item, index) => (
              <SkillItem key={index}>{item}</SkillItem>
            ))}
          </SkillList>
        </ContentDiv>
      )}
      {activity && activity.length > 0 && (
        <ContentDiv>
          <H4>경험 / 활동 / 교육</H4>
          <ul>
            {activity?.map((item) => (
              <ContentItem key={item._id}>
                <CategoryText>{item.category}</CategoryText>
                <OrganizationText>{item.organization}</OrganizationText>
                <DescText>{item.desc}</DescText>
                <GetDateText>{item.startDate + ' - ' + item.endDate}</GetDateText>
              </ContentItem>
            ))}
          </ul>
        </ContentDiv>
      )}
      {qualification && qualification.length > 0 && (
        <ContentDiv>
          <H4>자격 / 어학 / 수상</H4>
          <ul>
            {qualification?.map((item) => (
              <ContentItem key={item._id}>
                <CategoryText>{item.category}</CategoryText>
                {item.category === '자격증' && (
                  <>
                    <CertificateText>{item.certificateName}</CertificateText>
                    <OrganizationText>{item.organization}</OrganizationText>
                    <GetDateText>{item.getDate}</GetDateText>
                  </>
                )}
                {item.category === '어학시험' && (
                  <>
                    <CertificateText>{item.language}</CertificateText>
                    <CertificateText>{item.testName}</CertificateText>
                    <OrganizationText>{item.organization}</OrganizationText>
                    <ScoreText>{item.score}</ScoreText>
                    <ScoreText>{item.level}</ScoreText>
                    <GetDateText>{item.getyear}</GetDateText>
                  </>
                )}
                {item.category === '수상내역' && (
                  <>
                    <CertificateText>{item.awardName}</CertificateText>
                    <OrganizationText>{item.issuer}</OrganizationText>
                    <GetDateText>{item.awardDate}</GetDateText>
                  </>
                )}
              </ContentItem>
            ))}
          </ul>
        </ContentDiv>
      )}
      {portfolio && portfolio.length > 0 && (
        <ContentDiv>
          <H4>포트폴리오</H4>
          <ul>
            {portfolio.map((item, index) => (
              <ContentItem key={index}>
                <CategoryText>포트폴리오 URL</CategoryText>
                <Text>{item.portfolioURL}</Text>
              </ContentItem>
            ))}
          </ul>
        </ContentDiv>
      )}
    </TemplateCont>
  );
}
