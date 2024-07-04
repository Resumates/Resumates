import React from 'react';
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
// import { Container } from '../../style/Container';
import { InputField, SelectField } from '../../components/resumeForm/InputField';

export default function CreateResume() {
  const profileInfo = [
    { id: 'personalInfo', label: '인적사항' },
    { id: 'career', label: '경력' },
    { id: 'skills', label: '스킬' },
    { id: 'experience', label: '경험/활동/교육' },
    { id: 'qualification', label: '자격/어학/수상' },
    { id: 'portfolio', label: '포트폴리오' },
  ];

  const inputFields = [
    { label: 'photo', type: 'file', name: 'photo', placeholder: '', required: 'required' },
    { label: '이름', type: 'text', name: 'name', placeholder: '홍길동', required: 'required' },
    {
      label: '생년월일',
      type: 'text',
      name: 'birth',
      placeholder: '1999.11.11',
      required: 'required',
    },
    { label: '성별', type: 'text', name: 'gender', placeholder: '남성/여성', required: 'required' },
    {
      label: '휴대폰 번호',
      type: 'text',
      name: 'phone',
      placeholder: '010-1234-5678',
      required: 'required',
    },
    {
      label: '이메일',
      type: 'email',
      name: 'email',
      placeholder: 'test@test.com',
      required: 'required',
    },
    {
      label: '주소',
      type: 'text',
      name: 'address',
      placeholder: '서울특별시 금천구 00로 00-0',
      required: 'required',
    },
  ];
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
                <a>{info.label}</a>
              </li>
            ))}
          </ul>
        </InfoList>
      </InfoContainer>
      {/* <ResumeContainer> */}
      <ResumeSection>
        <InfoTitle>인적사항</InfoTitle>
        <UserProfile>
          {inputFields.map((field) =>
            field.name === 'gender' ? (
              <SelectField key={field.name} name={field.name} required={field.required} />
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
        </UserProfile>
      </ResumeSection>
      {/* </ResumeContainer> */}

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
