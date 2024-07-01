import React from 'react';
import styled from 'styled-components';

export default function ResumeSimple({ resumeDetail }) {
  console.log(resumeDetail);
  const { name, birth, email, phone, address } = resumeDetail;
  const structure = resumeDetail?.structure;
  const content = resumeDetail?.structure.content;
  const { activity, certificate, portfolio, skills, work_experience } = content;
  // console.log(resumeDetail.structure.title);
  console.log('activity', activity);
  console.log('certificate', certificate);
  console.log('portfolio', portfolio);
  console.log('skills', skills);
  console.log('work_experience', work_experience);

  return (
    <TemplateCont>
      <ContentDiv>
        <p>{structure.title}</p>
      </ContentDiv>
      <img src='' alt='프로필이미지' />
      <ContentDiv>
        <h4>{name}</h4>
        <p>{birth}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </ContentDiv>
      <ContentDiv>
        <h4>경력사항</h4>
        <ul>
          {work_experience.map((itme) => (
            <li key={itme._id}>
              <p>{itme.duration}</p>
              <p>{itme.company}</p>
              <p>{itme.department}</p>
              <p>{itme.position}</p>
              <p>{itme.desc}</p>
              <p>연봉</p>
              <p>{itme.salary}</p>
            </li>
          ))}
        </ul>
      </ContentDiv>
      <ContentDiv>
        <h4>스킬</h4>
        <ul>
          {skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </ContentDiv>
      <ContentDiv>
        <h4>경험/활동/교육</h4>
        <ul>
          {activity.map((itme) => (
            <li key={itme._id}>
              <p>{itme.category}</p>
              <p>{itme.organization}</p>
              <p>{itme.desc}</p>
              <p>{itme.duration}</p>
            </li>
          ))}
        </ul>
      </ContentDiv>
      <ContentDiv>
        <h4>자격 어학 수상</h4>
        <ul>
          {certificate.map((itme) => (
            <li key={itme._id}>
              <p>{itme.category}</p>
              <p>{itme.subject}</p>
              <p>{itme.organization}</p>
              <p>{itme.score}</p>
              <p>{itme.getDate}</p>
            </li>
          ))}
        </ul>
      </ContentDiv>
    </TemplateCont>
  );
}

const TemplateCont = styled.div`
  width: 566px;
  height: 752px;
  padding: 70px 40px;
  background-color: white;
  border: 1px solid #eee;
`;

const ContentDiv = styled.div`
  margin-bottom: 60px;
`;
