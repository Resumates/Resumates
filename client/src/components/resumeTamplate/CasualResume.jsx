import React from 'react';
import {
  A4Container,
  ProfileHeader,
  ProfileImage,
  Title,
  ProfileInfo,
  ContactInfo,
} from './CasualResumeStyle.jsx';
import profileImg from '../../asset/profile/blank-profile.webp';
import CasualLine from './CasualLine.jsx';

export default function CasualResume() {
  const profileDetails = {
    image: '',
    email: 'kosta@gmail.com',
    phone: '010-1234-5678',

    structure: {
      title: '지원자 홍길동 입니다.',
      content: {
        intro: `안녕하세요, 저는 최신 웹 기술에 열정을 가진 신입 개발자입니다. 팀과의 협업을 통해 문제를
        해결하고, 사용자의 경험을 개선하는 것을 즐깁니다. 지속적인 학습을 통해 성장하며, 혁신적인
        솔루션을 제공하고자 합니다.`,
        skills: ['JavaScript', 'React', 'Node.js'],
        portfolio: 'https://github.com/Resumates',
        experience: [
          {
            company: '구글 회사1',
            position: '프론트엔드 개발자',
            period: '2020.01 ~ 2020.12',
            description:
              '사용자가 웹사이트 또는 애플리케이션을 사용할 때 보이는 부분을 만들고 관리하는 역할을 담당',
          },
          {
            company: '아마존 회사2',
            position: '백엔드 개발자',
            period: '2021.01 ~ 2021.12',
            description:
              '사용자가 웹사이트 또는 애플리케이션을 사용할 때 보이는 부분을 만들고 관리하는 역할을 담당',
          },
        ],
        education: [
          {
            school: 'Kosta 대학교',
            major: '컴퓨터공학과',
            period: '2018.01 ~ 2021.12',
            description: '컴터공학과 학사, 우수 학생으로 졸업',
          },
          //   {
          //     school: '학교',
          //   },
        ],
      },
    },
  };

  return (
    <>
      <A4Container>
        <ProfileHeader>
          <ProfileImage src={profileImg} alt='프로필 이미지' />
          <ProfileInfo>
            <Title>{profileDetails.structure.title}</Title>
            <ContactInfo>
              <p>
                <span>✉️</span>
                {profileDetails.email}
              </p>
              <br />
              <p>
                <span>📞</span>
                {profileDetails.phone}
              </p>
            </ContactInfo>
          </ProfileInfo>
        </ProfileHeader>
        <br></br>
        <CasualLine title={'자기소개'} content={profileDetails.structure.content.intro} />
        <CasualLine title={'기술스택'} content={profileDetails.structure.content.skills} />
        <CasualLine title={'경력사항'} />
        <CasualLine title={'학력'} />
        <CasualLine title={'포트폴리오'} content={profileDetails.structure.content.portfolio} />
      </A4Container>
    </>
  );
}
