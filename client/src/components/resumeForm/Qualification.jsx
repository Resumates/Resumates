import React, { useEffect, useState } from 'react';
import { InfoTitle } from '../../style/CreateResumeStyle';
import styled, { css } from 'styled-components';
import { AddButton } from '../common/AddButton';
import { ReactComponent as DeleteBtn } from '../../asset/images/icon-deleteBtn.svg';

export default function Qualification({
  formData,
  setFormData,
  setResumeDetail,
  prevQualification,
}) {
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

  useEffect(() => {
    if (prevQualification) setQualificationList(prevQualification);
  }, [prevQualification]);

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

  const deleteActivityItem = (index) => {
    const updateQualificationList = qualificationList.filter((_, i) => i !== index);
    setQualificationList(updateQualificationList);
    setFormData((prevData) => ({
      ...prevData,
      structure: {
        ...prevData.structure,
        content: {
          ...prevData.structure.content,
          qualification: updateQualificationList,
        },
      },
    }));
  };

  return (
    <>
      <InfoTitle id='qualificationArea' style={{ paddingBottom: '12px' }}>
        자격 / 어학 / 수상
      </InfoTitle>
      <ul>
        {qualificationList?.map((item, index) => (
          <QualItem key={index} category={item.category} hasDeleteButton>
            <SelectArea className='category'>
              <QualLabel htmlFor='category'>활동구분 선택</QualLabel>
              <QualSelect name='category' value={item.category} disabled>
                <QualOption value='none' selected>
                  구분
                </QualOption>
                <QualOption className='certification' value='자격증'>
                  자격증
                </QualOption>
                <QualOption className='languageTest' value='어학시험'>
                  어학시험
                </QualOption>
                <QualOption className='wards' value='수상내역'>
                  수상내역
                </QualOption>
              </QualSelect>
            </SelectArea>

            {item.category === '자격증' && (
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

            {item.category === '어학시험' && (
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

            {item.category === '수상내역' && (
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

            <DeleteButton onClick={() => deleteActivityItem(index)}>
              <DeleteBtn width='35px' height='35px' fill='#D9D9D9' />
            </DeleteButton>
          </QualItem>
        ))}
        <QualItem category={qualification.category}>
          <SelectArea className='category'>
            <QualLabel htmlFor='category'>활동구분 선택</QualLabel>
            <QualSelect name='category' value={qualification.category} onChange={handleChange}>
              <QualOption className='none' value='none'>
                구분
              </QualOption>
              <QualOption className='certification' value='자격증'>
                자격증
              </QualOption>
              <QualOption className='languageTest' value='어학시험'>
                어학시험
              </QualOption>
              <QualOption className='wards' value='수상내역'>
                수상내역
              </QualOption>
            </QualSelect>
          </SelectArea>
          {qualification.category === '자격증' && (
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

          {qualification.category === '어학시험' && (
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
          {qualification.category === '수상내역' && (
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
  // padding-top: 20px;
  /* height: 60px; */
  padding-bottom: 12px;
  display: grid;
  font-size: 1.2rem;
  gap: 12px;
  grid-template-columns: ${({ category }) =>
    category === '자격증'
      ? '1fr 2fr 2fr 1fr'
      : category === '어학시험'
        ? '1fr 2fr 2fr 2fr 2fr 2fr'
        : category === '수상내역'
          ? '1fr 3fr 3fr 2fr'
          : '1fr 2fr 2fr 2fr 2fr'};

  grid-template-rows: repeat(2, auto);

  ${({ hasDeleteButton }) => hasDeleteButton && css``}
`;

const SelectArea = styled.div`
  grid-row: 2;
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
  grid-row: 2;
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

const DeleteButton = styled.div`
  grid-row: 1;
  grid-column: -1 / -2;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: end;
`;
