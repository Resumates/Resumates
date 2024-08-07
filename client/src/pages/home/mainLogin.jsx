import React from 'react';
import {
  MainContainer,
  Section,
  TextContainer,
  Title,
  Paragraph,
  Image,
  Sections,
  ImageContainer,
  TitleTwo,
  TitleThree,
  NumberContainer,
  IConContainer,
  StepContainer,
  StepOne,
  StepTwo,
  StepThree,
  Number,
  StepOneDes,
  SectDiv,
} from '../../style/MainLoginStyle';
import Button from '../../components/common/Button';

import ResumeImages from '../../asset/images/ResumeImages.png';
import CordingIcon from '../../asset/images/CordingIcon.png';
import { useNavigate } from 'react-router-dom';

export default function MainLogin() {
  const navigate = useNavigate();
  return (
    <>
      <Section>
        <TextContainer>
          <Title>
            이력서 작성,
            <br />
            Resumates에서 간편하게!
          </Title>
          <Paragraph>
            지금 바로 나만의 맞춤형 이력서를 손쉽게 작성해보세요! 간편한 템플릿과 자동 완성 기능을
            통해 프로페셔널한 이력서를 신속하고 간편하게 만들 수 있습니다. 누구나 쉽게 이력서를
            작성할 수 있도록 설계된 Resumates, 개인의 경력을 채워 넣고 스타일을 적용하세요!
          </Paragraph>
          <Button
            type='button'
            color='#04438B'
            padding='1.8rem 2.4rem'
            fontSize='1.8rem'
            fontWeight='bold'
            onClick={() => navigate('/list')}
          >
            나만의 이력서 만들기
          </Button>
        </TextContainer>
        <ImageContainer>
          <Image src={ResumeImages} alt='Resumates Example Resumes' />
        </ImageContainer>
      </Section>
      <Sections>
        <TitleThree>
          <TitleTwo>Resumate </TitleTwo>에서 이력서 작성하기
        </TitleThree>
        <SectDiv>
          <IConContainer>
            <Image src={CordingIcon} alt='Resumates Example Resumes' />
          </IConContainer>
          <StepContainer>
            <StepOne>
              <NumberContainer>
                <Number>1</Number>
                <StepOneDes>이력서에 넣을 정보를 입력하세요.</StepOneDes>
              </NumberContainer>
            </StepOne>
            <StepTwo>
              <NumberContainer>
                <Number>2</Number>
                <StepOneDes>원하는 템플릿 양식을 골라 적용하세요.</StepOneDes>
              </NumberContainer>
            </StepTwo>
            <StepThree>
              <NumberContainer>
                <Number>3</Number>
                <StepOneDes>저장 및 인쇄를 통해 이력서를 제출하세요!</StepOneDes>
              </NumberContainer>
            </StepThree>
            {/* 버튼을 추가하여 맨 아래에 배치 */}
          </StepContainer>
        </SectDiv>
        <Button
          type='button'
          color='#04438B'
          padding='1.8rem 2.4rem'
          fontSize='1.8rem'
          fontWeight='bold'
          margintop='4rem'
          onClick={() => navigate('/list')}
        >
          내 이력서 만들기
        </Button>
      </Sections>
    </>
  );
}
