import React, { useState } from 'react';
import {
  InfoContainer,
  InfoTitle,
  ResumeContainer,
  ResumeSection,
  ResumeWrap,
  TemplateContainer,
  InfoList,
  UserProfile,
  Template,
  TemplateText,
  TemplateBtn,
  TemplateChangeBtn,
} from '../../style/CreateResumeStyle';
import Button from '../../components/common/Button';
import { InputField, SelectField } from '../../components/resumeForm/InputField';
import { profileInfo as initialProfileInfo } from '../../data/profileInfoData';
import { useRef } from 'react';
import { AddButton } from '../../components/common/AddButton';

export default function CreateResume() {
  // 상태 관리
  const [profileInfo, setProfileInfo] = useState(initialProfileInfo);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [skill, setSkill] = useState('');
  const [skillsBox, setSkillsBox] = useState('');

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
        <InfoList>
          <ul>
            {profileInfo.map((info) => (
              <li key={info.id}>
                <a href='#!' onClick={() => scrollToItem(info.id)}>
                  {info.label}
                </a>
              </li>
            ))}
          </ul>
        </InfoList>
      </InfoContainer>

      <ResumeContainer>
        {profileInfo.map((info) => (
          <ResumeSection key={info.id} ref={refs.current[info.id]}>
            <InfoTitle>{info.label}</InfoTitle>
            {info.content.map((contentItem) => (
              <UserProfile key={contentItem.id} className={getUserProfileId(info, contentItem.id)}>
                {contentItem.fields.map((field) => {
                  if (field.name === 'gender' || field.name === 'category') {
                    return (
                      <SelectField
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        required={field.required}
                        data={field.data}
                        InfoId={info.id}
                        onOptionSelect={(optionId) =>
                          handleOptionSelect(info.id, contentItem.id, optionId)
                        }
                      />
                    );
                  } else if (field.name === 'skill' || field.name === 'skillsBox') {
                    return (
                      <InputField
                        key={field.name}
                        label={field.label}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        skill={field.name === 'skill' ? skill : undefined}
                        setSkill={field.name === 'skill' ? setSkill : undefined}
                        skillsBox={field.name === 'skillsBox' ? skillsBox : undefined}
                        setSkillsBox={field.name === 'skillsBox' ? setSkillsBox : undefined}
                        handleAddSkill={handleAddSkill}
                      />
                    );
                  } else {
                    return (
                      <InputField
                        key={field.name}
                        label={field.label}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    );
                  }
                })}

                {info.id === 'qualification' &&
                  contentItem.fields.map((field) =>
                    field.data?.map((items) => {
                      if (items.id === selectedOptions[info.id]?.[contentItem.id]) {
                        console.log('items', items);
                        return items.detail?.map((detail) =>
                          detail.item.map((item) => (
                            <InputField
                              key={item.name}
                              label={item.label}
                              type={item.type}
                              name={item.name}
                              placeholder={item.placeholder}
                              required={item.required}
                            />
                          )),
                        );
                      }
                      return null;
                    }),
                  )}
              </UserProfile>
            ))}

            {info.id !== 'personalInfo' && info.id !== 'skills' && (
              <AddButton onClick={() => handleAddContent(info.id)} />
            )}
          </ResumeSection>
        ))}
      </ResumeContainer>

      <TemplateContainer>
        <Template></Template>
        <TemplateBtn>
          <TemplateChangeBtn>⎌ 템플릿 변경</TemplateChangeBtn>
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
