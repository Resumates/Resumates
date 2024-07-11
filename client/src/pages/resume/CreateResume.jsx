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
import { profileInfo } from '../../data/profileInfoData';
import { useRef } from 'react';
import { AddButton } from '../../components/common/AddButton';
export default function CreateResume() {
  const [selectedOptionId, setSelectedOptionId] = useState('');
  const handleOptionSelect = (optionId) => {
    setSelectedOptionId(optionId);
  };

  // 아이디 추가
  const getUserProfileId = (info) => {
    if (info.id === 'qualification' && selectedOptionId) {
      return `${info.id} ${selectedOptionId}`;
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
                <a onClick={() => scrollToItem(info.id)}>{info.label}</a>
              </li>
            ))}
          </ul>
        </InfoList>
      </InfoContainer>
      <ResumeContainer>
        {profileInfo.map((info) => (
          <ResumeSection key={info.id} ref={refs.current[info.id]}>
            <InfoTitle>{info.label}</InfoTitle>
            <UserProfile id={getUserProfileId(info)}>
              {info.content?.map((field) =>
                field.name === 'gender' || field.name === 'category' ? (
                  <SelectField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    required={field.required}
                    data={field.data}
                    InfoId={info.id}
                    onOptionSelect={handleOptionSelect}
                  />
                ) : (
                  <InputField
                    key={field.name}
                    label={field.label}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                ),
              )}
              {info.id == 'qualification' &&
                info.content.map((field) =>
                  field.data.map(
                    (items) =>
                      items.id === selectedOptionId &&
                      items.detail?.map((item) => (
                        <InputField
                          key={item.name}
                          label={item.label}
                          type={item.type}
                          name={item.name}
                          placeholder={item.placeholder}
                          required={item.required}
                        />
                      )),
                  ),
                )}
            </UserProfile>
            {info.id !== 'personalInfo' && info.id !== 'skills' && <AddButton />}
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
