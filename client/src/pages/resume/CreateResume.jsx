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
import { profileInfo as initialProfileInfo } from '../../data/profileInfoData';
import { AddButton } from '../../components/common/AddButton';
import { ResumeMenu } from '../../components/resumeForm/ResumeMenu';
import { ContentItem } from '../../components/resumeForm/ContentItem';
import ChangeTemplate from '../../components/resumeTamplate/ChangeTemplate';
import { ModalCont } from '../../style/TemplateListStyle';
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

export default function CreateResume() {
  // 상태 관리
  const [profileInfo, setProfileInfo] = useState(initialProfileInfo);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [openTemplateList, setOpenTemplateList] = useState(false);
  const { type } = useParams();
  const [resumeDetail, setResumeDetail] = useState(null);
  const [formData, setFormData] = useState({
    structure: {
      title: '',
      template_type: '',
      content: {
        workExperience: [],
        skills: [],
        portfolio: [],
      },
    },
  });

  useEffect(() => {
    setResumeDetail(formData);
  }, [formData]);

  // 콘텐츠 추가
  const handleAddContent = (sectionId) => {
    setProfileInfo((prevData) =>
      prevData.map((section) => {
        if (section.id === sectionId) {
          console.log('sectionId', sectionId);
          return {
            ...section,
            content: [
              ...section.content,
              {
                id: section.content.length + 1,
                fields: section.content[0].fields.map((field) => ({ ...field })),
              },
            ],
          };
        }
        return section;
      }),
    );
  };

  // 콘텐츠 삭제
  const handleDeleteContent = (sectionId, contentId) => {
    setProfileInfo((prevData) =>
      prevData.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            content: section.content.filter((content) => content.id !== contentId),
          };
        }
        return section;
      }),
    );
  };

  const handleOptionSelect = (sectionId, contentId, optionId) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [sectionId]: {
        ...prevOptions[sectionId],
        [contentId]: optionId,
      },
    }));
  };

  // 아이디 추가 함수
  const getUserProfileId = (info, contentId) => {
    if (info.id === 'qualification' && selectedOptions[info.id]?.[contentId]) {
      return `${info.id} ${selectedOptions[info.id][contentId]}`;
    }
    return info.id;
  };

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

  const handleInputChange = (sectionId, contentId, fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      structure: {
        ...prevData.structure,
        content: {
          ...prevData.structure.content,
          [sectionId]: {
            ...prevData.structure.content[sectionId],
            [contentId]: {
              ...prevData.structure.content[sectionId]?.[contentId],
              [fieldName]: value,
            },
          },
        },
      },
    }));
  };

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
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>
        <ResumeSection>
          <UserInfo
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>
        <ResumeSection>
          <WorkExperience
            formData={formData}
            setFormData={setFormData}
            setResumeDetail={setResumeDetail}
          />
        </ResumeSection>
        {profileInfo.map((info) => (
          <>
            {info.id !== 'personalInfo' && info.id !== 'portfolio' && info.id !== 'skills' ? (
              <ResumeSection key={info.id} ref={refs.current[info.id]}>
                <InfoTitle>{info.label}</InfoTitle>

                {info.content.map((contentItem, index) => (
                  <div key={contentItem.id} style={{ marginTop: '20px' }}>
                    {index > 0 && (
                      <DeleteButton onClick={() => handleDeleteContent(info.id, contentItem.id)} />
                    )}

                    <ContentItem
                      key={contentItem.id}
                      info={info}
                      contentItem={contentItem}
                      getUserProfileId={getUserProfileId}
                      handleOptionSelect={handleOptionSelect}
                      selectedOptions={selectedOptions}
                      handleInputChange={handleInputChange}
                      formData={formData}
                    />
                  </div>
                ))}
                {info.id !== 'personalInfo' && info.id !== 'skills' && (
                  <AddButton onClick={() => handleAddContent(info.id)} />
                )}
              </ResumeSection>
            ) : null}
          </>
        ))}
        <ResumeSection>
          <SkillsSection
            skillsBox={formData.structure.content.skills.join(', ')}
            setFormData={setFormData}
            formData={formData}
          />
        </ResumeSection>
        <ResumeSection>
          <PortfolioSection
            info={profileInfo.find((section) => section.id === 'portfolio')}
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
            <ModalCont>
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
