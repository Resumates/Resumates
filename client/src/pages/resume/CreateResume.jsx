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
import { InputField, SelectField } from '../../components/resumeForm/InputField';
import { profileInfo } from '../../data/profileInfoData';
export default function CreateResume() {
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
      <ResumeContainer>
        {profileInfo.map((info) => (
          <ResumeSection key={info.id}>
            <InfoTitle>{info.label}</InfoTitle>
            <UserProfile id={info.id}>
              {info.content?.map((field) =>
                field.name === 'gender' || field.name === 'category' ? (
                  <SelectField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    required={field.required}
                    data={field.data}
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
            </UserProfile>
            <button
              style={{
                display: 'flex',
                width: '53px',
                flexDirection: 'row',
                textAlign: 'center',
                fontSize: '1.6rem',
                fontWeight: 'bold',
                color: '#04438B',
                alignItems: 'center',
                margin: '30px auto 0',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '15px',
                  height: '16px',
                  border: '1px solid #04438B',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '16px',
                  fontWeight: '500',
                  textAlign: 'center',
                  marginRight: '6px',
                }}
              >
                &#43;
              </div>
              추가
            </button>
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
