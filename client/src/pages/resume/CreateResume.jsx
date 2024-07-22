import React, { useState, useRef, useEffect } from 'react';
import {
  InfoContainer,
  InfoTitle,
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
import { AddButton } from '../../components/common/AddButton';
import { ResumeMenu } from '../../components/resumeForm/ResumeMenu';
import { ContentItem } from '../../components/resumeForm/ContentItem';
import ChangeTemplate from '../../components/resumeTamplate/ChangeTemplate';
import { ModalCont, CloseBtn } from '../../style/TemplateListStyle';
import ResumeNormal from '../../components/resumeTamplate/default/ResumeNormal';
import ResumeSimple from '../../components/resumeTamplate/default/ResumeSimple';
import ResumeCasual from '../../components/resumeTamplate/default/ResumeCasual';
import { useParams } from 'react-router-dom';
import UserInfo from '../../components/resumeForm/UserInfo';
import { DeleteButton } from '../../components/common/DeleteButton';
import WorkExperience from '../../components/resumeForm/WorkExperience';
import PortfolioSection from '../../components/resumeForm/PortfolioSection';
import SkillsSection from '../../components/resumeForm/SkillsSection';
import ResumeTitle from '../../components/resumeForm/ResumeTitle';
import Activity from '../../components/resumeForm/Activity';
import Qualification from '../../components/resumeForm/Qualification';

export default function CreateResume() {
  // 상태 관리
  const [profileInfo, setProfileInfo] = useState(initialProfileInfo);
  const [openTemplateList, setOpenTemplateList] = useState(false);
  const { type } = useParams();
  const [resumeDetail, setResumeDetail] = useState(null);
  const [formData, setFormData] = useState({
    structure: {
      title: '',
      template_type: type,
      content: {
        workExperience: [],
        skills: [],
        activity: [],
        qualification: [],
        portfolio: [],
      },
    },
  });

  const [prevTitle, setPrevTitle] = useState('');
  const [prevUser, setPrevUser] = useState(null);
  const [prevWork, setPrevWork] = useState(null);
  const [prevSkills, setPrevSkills] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    setResumeDetail(formData);
  }, [formData]);

  // 각 profileInfo 항목에 대한 ref를 생성
  const refs = useRef(
    profileInfo.reduce((acc, info) => {
      acc[info.id] = React.createRef();
      return acc;
    }, {}),
  );

  // 특정 스크롤로 이동
  const scrollToItem = (id) => {
    if (refs.current[id] && refs.current[id].current) {
      refs.current[id].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <ResumeWrap>
      <InfoContainer>
        <Button type='button' color='#3D79BF' padding='9px 0px' fontSize='16px'>
          작성 내용 불러오기
        </Button>
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
          <Button marginLeft='12px' padding='8px 33px' color='#C2BABE'>
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
