import React, { useEffect, useState } from 'react';
import { InfoTitle } from '../../style/CreateResumeStyle';
import styled from 'styled-components';
import { AddButton } from '../common/AddButton';
export default function Qualification({ formData, setFormData, setResumeDetail }) {
  const [qualification, setQualification] = useState({
    category: 'none',
    certification: '',
    languageTest: '',
    wards: '',
    certificateName: '',
    organization: '',
    getDate: '',
    language: '',
    testName: '',
    level: '',
    getyear: '',
    score: '',
    awardName: '',
    issuer: '',
    awardDate: '',
  });

  const [qualificationList, setQualificationList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newQualification = { ...qualification, [name]: value };

    setQualification(newQualification);
    setFormData((prevData) => ({
      ...prevData,
      structure: {
        ...prevData.structure,
        content: {
          ...prevData.structure.content,
          qualification: [...qualificationList, newQualification],
        },
      },
    }));
  };

  const addActivityItem = () => {
    const updateQualificationList = [...qualificationList, qualification];
    setQualificationList(updateQualificationList);

    setFormData({
      ...formData,
      structure: {
        ...formData.structure,
        content: {
          ...formData.structure.content,
          qualification: updateQualificationList,
        },
      },
    });

    console.log('세현 formData ', formData);
    setQualification({
      category: 'none',
      certification: '',
      languageTest: '',
      wards: '',
      certificateName: '',
      organization: '',
      getDate: '',
      language: '',
      testName: '',
      level: '',
      getyear: '',
      score: '',
      awardName: '',
      issuer: '',
      awardDate: '',
    });
  };

  return (
    <>
      <InfoTitle>자격 / 어학 /</InfoTitle>
      <ul>
        {qualificationList?.map((item, index) => (
          <QualItem key={index} category={item.category}>
            <SelectArea className='category'>
              <QualLabel htmlFor='category'>활동구분 선택</QualLabel>
              <QualSelect name='category' value={item.category} disabled>
                <QualOption value='none' selected>
                  구분
                </QualOption>
                <QualOption value='certification'>자격증</QualOption>
                <QualOption value='languageTest'>어학시험</QualOption>
                <QualOption value='wards'>수상내역</QualOption>
              </QualSelect>
            </SelectArea>

            {item.category === 'certification' && (
              <>
                <InputArea className='certificateName'>
                  <UserLabel htmlFor='certificateName'>자격증명</UserLabel>
                  <UserInput
                    type='text'
                    value={item.certificateName}
                    name='certificateName'
                  ></UserInput>
                </InputArea>
                <InputArea className='organization'>
                  <UserLabel htmlFor='organization'>발행처 / 기관</UserLabel>
                  <UserInput type='text' value={item.organization} name='organization'></UserInput>
                </InputArea>
                <InputArea className='getDate'>
                  <UserLabel htmlFor='getDate'>취득년월</UserLabel>
                  <UserInput type='text' value={item.getDate} name='getDate'></UserInput>
                </InputArea>
              </>
            )}

            {item.category === 'languageTest' && (
              <>
                <InputArea className='language'>
                  <UserLabel htmlFor='language'>언어</UserLabel>
                  <UserInput type='text' value={item.language} name='language'></UserInput>
                </InputArea>
                <InputArea className='testName'>
                  <UserLabel htmlFor='testName'>어학시험명</UserLabel>
                  <UserInput type='text' value={item.testName} name='testName'></UserInput>
                </InputArea>
                <InputArea className='level'>
                  <UserLabel htmlFor='level'>급수</UserLabel>
                  <UserInput type='text' value={item.level} name='level'></UserInput>
                </InputArea>
                <InputArea className='score'>
                  <UserLabel htmlFor='score'>점수</UserLabel>
                  <UserInput type='text' value={item.score} name='score'></UserInput>
                </InputArea>
                <InputArea className='getyear'>
                  <UserLabel htmlFor='getyear'>취득년월</UserLabel>
                  <UserInput type='text' value={item.getyear} name='getyear'></UserInput>
                </InputArea>
              </>
            )}

            {item.category === 'wards' && (
              <>
                <InputArea className='awardName'>
                  <UserLabel htmlFor='awardName'>수상 · 공모전명</UserLabel>
                  <UserInput type='text' value={item.awardName} name='awardName' />
                </InputArea>
                <InputArea className='issuer'>
                  <UserLabel htmlFor='issuer'>수여 / 주최기간</UserLabel>
                  <UserInput type='text' value={item.issuer} name='issuer' />
                </InputArea>
                <InputArea className='awardDate'>
                  <UserLabel htmlFor='awardDate'>수상 · 공모일</UserLabel>
                  <UserInput type='text' value={item.awardDate} name='awardDate' />
                </InputArea>
              </>
            )}
          </QualItem>
        ))}
        <QualItem category={qualification.category}>
          <SelectArea className='category'>
            <QualLabel htmlFor='category'>활동구분 선택</QualLabel>
            <QualSelect name='category' value={qualification.category} onChange={handleChange}>
              <QualOption value='none'>구분</QualOption>
              <QualOption value='certification'>자격증</QualOption>
              <QualOption value='languageTest'>어학시험</QualOption>
              <QualOption value='wards'>수상내역</QualOption>
            </QualSelect>
          </SelectArea>
          {qualification.category === 'certification' && (
            <>
              <InputArea className='certificateName'>
                <UserLabel htmlFor='certificateName'>자격증명</UserLabel>
                <UserInput
                  type='text'
                  id='certificateName'
                  name='certificateName'
                  value={qualification.certificateName}
                  onChange={handleChange}
                ></UserInput>
              </InputArea>
              <InputArea className='organization'>
                <UserLabel htmlFor='organization'>발행처 / 기관</UserLabel>
                <UserInput
                  type='text'
                  id='organization'
                  name='organization'
                  value={qualification.organization}
                  onChange={handleChange}
                ></UserInput>
              </InputArea>
              <InputArea className='getDate'>
                <UserLabel htmlFor='getDate'>취득년월</UserLabel>
                <UserInput
                  type='text'
                  id='getDate'
                  name='getDate'
                  value={qualification.getDate}
                  onChange={handleChange}
                ></UserInput>
              </InputArea>
            </>
          )}

          {qualification.category === 'languageTest' && (
            <>
              <InputArea className='language'>
                <UserLabel htmlFor='language'>언어</UserLabel>
                <UserInput
                  type='text'
                  id='language'
                  name='language'
                  value={qualification.language}
                  onChange={handleChange}
                ></UserInput>
              </InputArea>
              <InputArea className='testName'>
                <UserLabel htmlFor='testName'>어학시험명</UserLabel>
                <UserInput
                  type='text'
                  id='testName'
                  name='testName'
                  value={qualification.testName}
                  onChange={handleChange}
                ></UserInput>
              </InputArea>
              <InputArea className='level'>
                <UserLabel htmlFor='level'>급수</UserLabel>
                <UserInput
                  type='text'
                  id='level'
                  name='level'
                  value={qualification.level}
                  onChange={handleChange}
                ></UserInput>
              </InputArea>
              <InputArea className='score'>
                <UserLabel htmlFor='score'>점수</UserLabel>
                <UserInput
                  type='text'
                  id='score'
                  name='score'
                  value={qualification.score}
                  onChange={handleChange}
                ></UserInput>
              </InputArea>
              <InputArea className='getyear'>
                <UserLabel htmlFor='getyear'>취득년월</UserLabel>
                <UserInput
                  type='text'
                  id='getyear'
                  name='getyear'
                  value={qualification.getyear}
                  onChange={handleChange}
                ></UserInput>
              </InputArea>
            </>
          )}
          {qualification.category === 'wards' && (
            <>
              <InputArea className='awardName'>
                <UserLabel htmlFor='awardName'>수상 · 공모전명</UserLabel>
                <UserInput
                  type='text'
                  id='awardName'
                  name='awardName'
                  value={qualification.awardName}
                  onChange={handleChange}
                ></UserInput>
              </InputArea>
              <InputArea className='issuer'>
                <UserLabel htmlFor='issuer'>수여 / 주최기간</UserLabel>
                <UserInput
                  type='text'
                  id='issuer'
                  name='issuer'
                  value={qualification.issuer}
                  onChange={handleChange}
                ></UserInput>
              </InputArea>
              <InputArea className='awardDate'>
                <UserLabel htmlFor='awardDate'>수상 · 공모일</UserLabel>
                <UserInput
                  type='text'
                  id='awardDate'
                  name='awardDate'
                  value={qualification.awardDate}
                  onChange={handleChange}
                ></UserInput>
              </InputArea>
            </>
          )}
        </QualItem>
      </ul>
      <AddButton onClick={addActivityItem} />
    </>
  );
}

const QualItem = styled.li`
  padding-top: 20px;
  height: 60px;
  display: grid;
  font-size: 1.2rem;
  gap: 12px;
  grid-template-columns: ${({ category }) =>
    category === 'certification'
      ? '1fr 2fr 2fr 1fr'
      : category === 'languageTest'
        ? '1fr 2fr 2fr 2fr 2fr 2fr'
        : category === 'wards'
          ? '1fr 3fr 3fr 2fr'
          : '1fr 2fr 2fr 2fr 2fr'};

  grid-template-rows: auto;
`;

const SelectArea = styled.div`
  border: 1px solid #acacac;
  padding: 10px 8px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin: 0;
`;

const QualLabel = styled.label``;
const QualSelect = styled.select``;
const QualOption = styled.option``;

const InputArea = styled.div`
  border: 1px solid #acacac;
  padding: 10px 8px;
  border-radius: 0.5rem;
  height: 60px;
  box-sizing: border-box;
  font-size: 1.2rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const UserLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  margin-left: 2px;
  color: #acacac;
`;

const UserInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  font-size: 1.6rem;
  outline: none;
`;
