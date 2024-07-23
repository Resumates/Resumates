import React from 'react';
import {
  Container,
  MainContent,
  TextSection,
  Title,
  Description,
  ButtonGroup,
  ImageSection,
} from '../../style/MainPageStyle';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

import MainPicture from '../../asset/images/main-left.png';

export default function Main() {
  return (
    <Container>
      <MainContent>
        <ImageSection>
          <img src={MainPicture} alt='Resume Example' />
        </ImageSection>
        <TextSection>
          <Title>Resumates에서 전문적인 이력서를 작성해보세요 :)</Title>
          <Description>단 15분만에 전문적인 이력서를 작성하고, 다운로드 받으세요!</Description>
          <ButtonGroup>
            <Link to='/user/login'>
              <Button color='#3D79BF' padding='16px 90px' fontSize='20px' fontWeight='bold'>
                로그인
              </Button>
            </Link>
            <Link to='/user/signup'>
              <Button color='#04438B' padding='16px 90px' fontSize='20px' fontWeight='bold'>
                회원가입
              </Button>
            </Link>
          </ButtonGroup>
        </TextSection>
      </MainContent>
    </Container>
  );
}
