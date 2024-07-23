import React, { useState, useEffect } from 'react';
import {
  InfoContainer,
  ResumeContainer,
  ResumeSection,
  ResumeWrap,
  TemplateContainer,
  Template,
  TemplateText,
} from '../../style/CreateResumeStyle';
import Button from '../../components/common/Button';
import { profileInfo as initialProfileInfo } from '../../data/profileInfoData';
import { ResumeMenu } from '../../components/resumeForm/ResumeMenu';
import ResumeSimple from '../../components/resumeTamplate/default/ResumeSimple';
import { useParams } from 'react-router-dom';
import UserInfo from '../../components/resumeForm/UserInfo';
import WorkExperience from '../../components/resumeForm/WorkExperience';
import PortfolioSection from '../../components/resumeForm/PortfolioSection';
import SkillsSection from '../../components/resumeForm/SkillsSection';
import ResumeTitle from '../../components/resumeForm/ResumeTitle';
import Activity from '../../components/resumeForm/Activity';
import Qualification from '../../components/resumeForm/Qualification';
import { useResume } from '../../hooks/useResume';

export default function SampleTemplate() {
  // 상태 관리
  const { type } = useParams();
  const {
    profileInfo,
    openTemplateList,
    resumeDetail,
    formData,
    modalRef,
    refs,
    setOpenTemplateList,
    setResumeDetail,
    setFormData,
    scrollToItem,
  } = useResume(initialProfileInfo, type);

  const [prevTitle, setPrevTitle] = useState('');
  const [prevUser, setPrevUser] = useState(null);

  useEffect(() => {
    setResumeDetail(formData);
  }, [formData]);

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
  const handleLoadContent = () => {
    alert('회원가입한 유저만 사용할 수 있습니다');
  };
  return (
    <ResumeWrap>
      <InfoContainer>
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
        <Template>{resumeDetail && <ResumeSimple resumeDetail={formData} />}</Template>
        <TemplateText>*저장 및 인쇄는 로그인 후 이용가능합니다.</TemplateText>
      </TemplateContainer>
    </ResumeWrap>
  );
}
