import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '../../style/Container';
import {
  ResumeCont,
  MyTitle,
  ResumeSection,
  Title,
  ImageContainer,
  Button,
  ButtonContainer,
  TemplateSection,
  LargeButton,
} from '../../style/MyPageStyle';

export default function Mypage() {
  const [resume, setResume] = useState(null);
  const userId = window.localStorage.getItem('userId');
  console.log(userId);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(`/user/resume/${userId}`);
        setResume(response.data);
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    if (userId) {
      fetchResume();
    } else {
      console.error('UserID를 찾을 수 없습니다');
    }
  }, [userId]);

  return (
    <Container>
      <MyTitle path='/mypage'>마이페이지</MyTitle>
      <ResumeCont>
        <ResumeSection>
          {/* <Title>내 이력서</Title> */}
          <ImageContainer src='image1.png'>
            <Button style={{ top: '20px' }}>미리보기</Button>
            <Button style={{ top: '80px' }}>수정하기</Button>
            <Button style={{ top: '140px' }}>삭제하기</Button>
          </ImageContainer>
          <ImageContainer src='image2.png'></ImageContainer>
          <ImageContainer src='image3.png'></ImageContainer>
          <ImageContainer src='image4.png'></ImageContainer>
        </ResumeSection>
        <div>
          <TemplateSection>
            {resume ? (
              <div>
                <h2>{resume.name}</h2>
                <p>{resume.email}</p>
                <p>{resume.phone}</p>
                <h3>경력</h3>
                {resume.structure.content.work_experience.map((exp, index) => (
                  <div key={index}>
                    <h4>{exp.company}</h4>
                    <p>{exp.position}</p>
                    <p>{exp.duration}</p>
                    <p>{exp.desc}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading resume...</p>
            )}
            <ButtonContainer>
              <LargeButton>수정하기</LargeButton>
              <LargeButton>삭제하기</LargeButton>
              <LargeButton>인쇄하기</LargeButton>
            </ButtonContainer>
          </TemplateSection>
        </div>
      </ResumeCont>
    </Container>
  );
}
