import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MainBg,
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

  return (
    <MainBg>
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

      <Title path='/mypage'>마이페이지</Title>
      <TemplateSection>{/* 이력서 내용이 들어갈 부분 */}</TemplateSection>
      <ButtonContainer>
        <LargeButton>수정하기</LargeButton>
        <LargeButton>삭제하기</LargeButton>
        <LargeButton>인쇄하기</LargeButton>
      </ButtonContainer>
    </MainBg>
  );
}
