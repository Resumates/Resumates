import React, { useState } from 'react';
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
import { useRef } from 'react';
import { AddButton } from '../../components/common/AddButton';
import { ResumeMenu } from '../../components/resumeForm/ResumeMenu';
import { ContentItem } from '../../components/resumeForm/ContentItem';
import ChangeTemplate from '../../components/resumeTamplate/ChangeTemplate';
import { ModalCont } from '../../style/TemplateListStyle';
import ResumeNormal from '../../components/resumeTamplate/default/ResumeNormal';
import ResumeSimple from '../../components/resumeTamplate/default/ResumeSimple';
import ResumeCasual from '../../components/resumeTamplate/default/ResumeCasual';
import { useParams } from 'react-router-dom';

export default function CreateResume() {
  // 상태 관리
  const [profileInfo, setProfileInfo] = useState(initialProfileInfo);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [skill, setSkill] = useState('');
  const [skillsBox, setSkillsBox] = useState('');
  const [openTemplateList, setOpenTemplateList] = useState(false);
  const { type } = useParams();
  console.log(type);
  const [resumeDetail, setResumeDetail] = useState(null);

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

  // 스킬 추가
  const handleAddSkill = () => {
    if (skill.trim() && setSkillsBox) {
      setSkillsBox((prev) => (prev ? `${prev}, ${skill}` : skill));
      setSkill('');
    }
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

  return (
    <ResumeWrap>
      <InfoContainer>
        <Button type='button' color='#3D79BF' padding='9px 0px' fontSize='16px'>
          작성 내용 불러오기
        </Button>
        <ResumeMenu profileInfo={profileInfo} scrollToItem={scrollToItem} />
      </InfoContainer>

      <ResumeContainer>
        {profileInfo.map((info) => (
          <ResumeSection key={info.id} ref={refs.current[info.id]}>
            <InfoTitle>{info.label}</InfoTitle>
            {info.content.map((contentItem) => (
              <ContentItem
                key={contentItem.id}
                info={info}
                contentItem={contentItem}
                getUserProfileId={getUserProfileId}
                handleOptionSelect={handleOptionSelect}
                selectedOptions={selectedOptions}
                skill={skill}
                setSkill={setSkill}
                skillsBox={skillsBox}
                setSkillsBox={setSkillsBox}
                handleAddSkill={handleAddSkill}
              />
            ))}

            {info.id !== 'personalInfo' && info.id !== 'skills' && (
              <AddButton onClick={() => handleAddContent(info.id)} />
            )}
          </ResumeSection>
        ))}
      </ResumeContainer>

      <TemplateContainer>
        <Template>
          {type === 'normal' && resumeDetail && <ResumeNormal resumeDetail={resumeDetail} />}
          {type === 'simple' && resumeDetail && <ResumeSimple resumeDetail={resumeDetail} />}
          {type === 'casual' && resumeDetail && <ResumeCasual resumeDetail={resumeDetail} />}
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
