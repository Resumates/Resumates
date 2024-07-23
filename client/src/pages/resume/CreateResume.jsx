import React, { useState, useEffect } from 'react';
import {
  InfoContainer,
  ResumeContainer,
  ResumeSection,
  ResumeWrap,
  TemplateContainer,
  Template,
  TemplateText,
  TemplateBtn,
  TemplateChangeBtn,
} from '../../style/CreateResumeStyle';
import Button from '../../components/common/Button';
import close from '../../asset/images/icon-close.png';
import { profileInfo as initialProfileInfo } from '../../data/profileInfoData';
import { ResumeMenu } from '../../components/resumeForm/ResumeMenu';
import ChangeTemplate from '../../components/resumeTamplate/ChangeTemplate';
import { ModalCont, CloseBtn } from '../../style/TemplateListStyle';
import ResumeNormal from '../../components/resumeTamplate/default/ResumeNormal';
import ResumeSimple from '../../components/resumeTamplate/default/ResumeSimple';
import ResumeCasual from '../../components/resumeTamplate/default/ResumeCasual';
import { useParams, useNavigate } from 'react-router-dom';
import UserInfo from '../../components/resumeForm/UserInfo';
import WorkExperience from '../../components/resumeForm/WorkExperience';
import PortfolioSection from '../../components/resumeForm/PortfolioSection';
import SkillsSection from '../../components/resumeForm/SkillsSection';
import ResumeTitle from '../../components/resumeForm/ResumeTitle';
import Activity from '../../components/resumeForm/Activity';
import Qualification from '../../components/resumeForm/Qualification';
import { useResume } from '../../hooks/useResume';
import ModalPortal from '../../components/Modal/ModalPortal';
import styled from 'styled-components';
import { getMyResumeList } from '../../api/commonAPI';
import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';

import simpleImage from '../../asset/images/simple.png';
import casualImage from '../../asset/images/casual.png';
import normalImage from '../../asset/images/normal.png';
export default function CreateResume() {
  const { type } = useParams();
  const {
    profileInfo,
    openTemplateList,
    resumeDetail,
    formData,
    modalRef,
    refs,
    setProfileInfo,
    setOpenTemplateList,
    setResumeDetail,
    setFormData,
    scrollToItem,
    saveResume,
  } = useResume(initialProfileInfo, type);
  const userId = localStorage.getItem('userId');
  const Navigate = useNavigate();

  const [prevTitle, setPrevTitle] = useState('');
  const [prevUser, setPrevUser] = useState(null);
  const [prevWork, setPrevWork] = useState(null);
  const [prevSkills, setPrevSkills] = useState(null);
  const [resume, setResume] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const [openMyResumes, setOpenMyResumes] = useState(false);

  useEffect(() => {
    setResumeDetail(formData);
  }, [formData]);

  useEffect(() => {
    const fetchResume = async () => {
      const myResumeList = await getMyResumeList(userId);
      setResume(myResumeList);
    };
    if (openMyResumes) {
      fetchResume();
    }
  }, [openMyResumes]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenTemplateList(false);
      }
    };

    if (openTemplateList) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openTemplateList]);

  const handleClickResum = (item) => {
    setResumeDetail(item);
    console.log('선택한 이력서', item);
    Navigate(`/resume/edit/${item._id}`);
    window.scrollTo(0, 0);
  };

  const slideLeft = () => {
    setSlideIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const slideRight = () => {
    setSlideIndex((prev) => (resume && prev < Math.ceil(resume.length / 3) - 1 ? prev + 1 : prev));
  };

  const getTemplateImage = (templateType) => {
    switch (templateType) {
      case 'simple':
        return simpleImage;
      case 'casual':
        return casualImage;
      case 'normal':
        return normalImage;
      default:
        return null;
    }
  };
  return (
    <ResumeWrap>
      <InfoContainer>
        <Button
          type='button'
          color='#3D79BF'
          padding='9px 0px'
          fontSize='16px'
          onClick={() => setOpenMyResumes(true)}
        >
          작성 내용 불러오기
        </Button>
        <ModalPortal isOpen={openMyResumes} onClose={() => setOpenMyResumes(false)}>
          <StyledModalCont ref={modalRef}>
            {resume && resume.length > 0 ? (
              <>
                <SlideButton direction='left' onClick={slideLeft}>
                  &lt;
                </SlideButton>
                <SlideContainer>
                  <SlideWrapper $slideIndex={slideIndex} $totalItems={resume.length}>
                    {resume.map((item) => {
                      if (!item || !item.structure) return null;
                      const templateType = item.structure.template_type;
                      const resumeTitle = item.structure.title;
                      const templateImage = getTemplateImage(templateType);
                      return (
                        <li key={item._id}>
                          <ResumeItem
                            onClick={() => handleClickResum(item)}
                            templateType={templateType}
                          >
                            {templateImage && (
                              <TemplateImage src={templateImage} alt={templateType} />
                            )}
                            <TemplateTypeBadge $templateType={templateType}>
                              {templateType.toUpperCase()}
                            </TemplateTypeBadge>
                            <ResumeTitleText>{resumeTitle}</ResumeTitleText>
                          </ResumeItem>
                        </li>
                      );
                    })}
                  </SlideWrapper>
                </SlideContainer>
                <SlideButton direction='right' onClick={slideRight}>
                  &gt;
                </SlideButton>
              </>
            ) : (
              <NoResumeMessage>작성한 이력서가 없습니다.</NoResumeMessage>
            )}
          </StyledModalCont>
        </ModalPortal>
        <ResumeMenu profileInfo={profileInfo} scrollToItem={scrollToItem} />
      </InfoContainer>
      <ResumeContainer>
        <ResumeSection>
          <ResumeTitle
            prevTitle={prevTitle}
            formData={formData}
            setFormData={setFormData}
            setPrevTitle={setPrevTitle}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>
        <ResumeSection>
          <UserInfo
            prevUser={prevUser}
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
            setPrevUser={setPrevUser}
          />
        </ResumeSection>
        <ResumeSection>
          <WorkExperience
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>

        <ResumeSection>
          <SkillsSection
            setFormData={setFormData}
            formData={formData}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>

        <ResumeSection>
          <Activity
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>

        <ResumeSection>
          <Qualification
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>

        <ResumeSection>
          <PortfolioSection
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>
      </ResumeContainer>

      <TemplateContainer>
        <Template>
          {type === 'normal' && resumeDetail && <ResumeNormal resumeDetail={formData} />}
          {type === 'simple' && resumeDetail && <ResumeSimple resumeDetail={formData} />}
          {type === 'casual' && resumeDetail && <ResumeCasual resumeDetail={formData} />}
        </Template>
        <TemplateBtn>
          <TemplateChangeBtn onClick={() => setOpenTemplateList(true)}>
            ⎌ 템플릿 변경
          </TemplateChangeBtn>
          {openTemplateList && (
            <ModalCont ref={modalRef}>
              <CloseBtn onClick={() => setOpenTemplateList(false)}>
                <img src={close} alt='닫기' />
              </CloseBtn>
              <ChangeTemplate setOpenTemplateList={setOpenTemplateList} />
            </ModalCont>
          )}
          <Button marginLeft='12px' padding='8px 33px' color='#C2BABE' onClick={saveResume}>
            저장
          </Button>
          <Button marginLeft='12px' padding='8px 33px' color='#3D79BF'>
            인쇄
          </Button>
        </TemplateBtn>
        <TemplateText>*저장 및 인쇄는 로그인 후 이용가능합니다.</TemplateText>
      </TemplateContainer>
    </ResumeWrap>
  );
}

const StyledModalCont = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
  z-index: 9999;
  border: 1px solid #eee;
  box-shadow: 5px 5px 14px -7px rgba(0, 0, 0, 0.35);
  background: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const ResumeItem = ({ templateType, children, onClick }) => {
  return <StyledResumeItem onClick={onClick}>{children}</StyledResumeItem>;
};
const shouldForwardProp = createShouldForwardProp(['color']);

const StyledResumeItem = styled('div').withConfig({
  shouldForwardProp,
})`
  position: relative;
  background-color: #eee;
  color: white;
  padding: 2.4rem 3.4rem;
  margin-right: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  min-width: 33.3333%;
  cursor: pointer;
`;

const TemplateTypeBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${(props) =>
    props.$templateType === 'casual'
      ? '#637DCB'
      : props.$templateType === 'normal'
        ? '#027BFF'
        : '#3582A9'};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const NoResumeMessage = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: #333;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TemplateType = styled.p`
  letter-spacing: 0.3rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.3;
  color: white;
`;

const ResumeTitleText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: #000;
`;

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  overflow: hidden;
  position: relative;
  /* padding: 0 60px; */
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10001;
  ${(props) => (props.direction === 'left' ? 'left: 0;' : 'right: 0;')}
  padding: 10px;
  border-radius: 50%;
`;

const SlideWrapper = styled.ul.attrs((props) => ({
  style: {
    transform: `translateX(-${props.$slideIndex * 100}%)`,
    width: `${Math.ceil(props.$totalItems / 3) * 100}%`,
  },
}))`
  display: flex;
  transition: transform 0.5s ease-in-out;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;
`;

const TemplateImage = styled.img`
  width: 180px;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
`;
