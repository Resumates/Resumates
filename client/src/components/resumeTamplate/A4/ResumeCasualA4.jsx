import React from 'react';
import {
  A4Container,
  ProfileHeader,
  ProfileImage,
  Title,
  ProfileInfo,
  UserInfo,
} from './ResumeCasualA4Style.jsx';
import profileImg from '../../../asset/profile/blank-profile.webp';
import CasualLineA4 from './CasualLineA4.jsx';

export default function CasualResume({ resumeDetail }) {
  const { name, birth, email, phone, address } = resumeDetail;
  const structure = resumeDetail?.structure;
  const content = resumeDetail?.structure.content;
  const { activity, certificate, portfolio, skills, workExperience } = content;

  const birthday = birth?.slice(0, 10).replaceAll('-', '.');

  return (
    <A4Container>
      <ProfileHeader>
        <ProfileImage src={profileImg} alt='프로필 이미지' />
        <ProfileInfo>
          <Title>{structure.title}</Title>
          <UserInfo>
            <p className='name'>{name}</p>
            <p>{birthday}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>
          </UserInfo>
        </ProfileInfo>
      </ProfileHeader>
      <br></br>
      <CasualLineA4 title={'기술스택'} content={resumeDetail.structure.content.skills} />
      <CasualLineA4 title={'경력사항'} content={resumeDetail.structure.content.workExperience} />
      <CasualLineA4 title={'학력'} />
      <CasualLineA4 title={'포트폴리오'} content={resumeDetail.structure.content.portfolio.url} />
    </A4Container>
  );
}
