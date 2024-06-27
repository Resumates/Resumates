import {
  MainHeaderContainer,
  LogoContainer,
  StyledImage,
  Subtract1,
  Subtract2,
  Subtract3,
  ResumatesText,
  Vectors,
  Vector,
  Button,
  Icon,
} from './MainHeaderStyle';
import logo from '../../asset/images/logo.png';
export const MainHeader = () => {
  return (
    <div className='MainContainer'>
      <MainHeaderContainer>
        <LogoContainer>
          <StyledImage img src={logo} alt='Resumates Logo' />
          <Subtract1 />
          <Subtract2 />
          <Subtract3 />
          <Vectors>
            <Vector />
            <Vector />
            <Vector />
            <Vector />
            <Vector />
            <Vector />
            <Vector />
            <Vector />
          </Vectors>
        </LogoContainer>
        <Button>이력서 만들기 체험하기</Button>
      </MainHeaderContainer>
    </div>
  );
};

export default MainHeader;
