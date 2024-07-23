import React, { useEffect } from 'react';
import {
  A4Container,
  ProfileHeader,
  ProfileImage,
  Title,
  ProfileInfo,
  UserInfo,
} from './ResumeCasualStyle.jsx';
import birthImg from '../../../asset/images/icon-birth-casual.png';
import EmailImg from '../../../asset/images/icon-email-casual.png';
import PhoneImg from '../../../asset/images/icon-phone-casual.png';
import HomeImg from '../../../asset/images/icon-addr-casual.png';
import profileImg from '../../../asset/profile/blank-profile.webp';
import CasualLine from './CasualLine.jsx';

export default function CasualResume({ resumeDetail }) {
  const { name, birth, email, phone, address, image } = resumeDetail;
  const structure = resumeDetail?.structure;
  const content = resumeDetail?.structure.content;
  const { activity, qualification, portfolio, skills, workExperience } = content;

  const birthday = birth?.slice(0, 10).replaceAll('-', '.');

  return (
    <A4Container>
      <ProfileHeader>
        {image ? (
          <ProfileImage src={image} alt='프로필이미지' />
        ) : (
          <ProfileImage src={profileImg} alt='프로필이미지' />
        )}
        <ProfileInfo>
          <Title>{structure.title}</Title>
          <UserInfo>
            <p className='name'>{name}</p>
            <p>
              <img src={birthImg} alt='' />
              {birthday}
            </p>
            <p>
              <img src={EmailImg} alt='' />
              {email}
            </p>
            <p>
              <img src={PhoneImg} alt='' />
              {phone}
            </p>
            <p>
              <img src={HomeImg} alt='' />
              {address}
            </p>
          </UserInfo>
        </ProfileInfo>
      </ProfileHeader>
      <br></br>
      <CasualLine title={'기술스택'} content={skills} />
      <CasualLine title={'경력사항'} content={workExperience} />
      <CasualLine title={'경험/활동/교육'} content={activity} />
      <CasualLine title={'자격/어학/수상'} content={qualification} />
      <CasualLine title={'포트폴리오'} content={portfolio} />
    </A4Container>
  );
}
