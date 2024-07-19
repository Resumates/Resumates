import React, { useEffect, useState } from 'react';
import { InfoTitle } from '../../style/CreateResumeStyle';
import styled from 'styled-components';

export default function Activity({ formData, setFormData, setResumeDetail }) {
  const [activity, setActivity] = useState({});

  useEffect(() => {});

  console.log('세현 콘솔!!', setResumeDetail(formData));
  return (
    <>
      <InfoTitle>경험 / 활동</InfoTitle>
      <ul>
        <ActivityItem>
          <SelectArea className='category'>
            <ActivityLabel htmlFor='category'>활동구분 선택</ActivityLabel>
            <ActivitySelect name='category'>
              <ActivityOption value='none'>구분</ActivityOption>
              <ActivityOption value='experience'>경험</ActivityOption>
              <ActivityOption value='activity'>활동</ActivityOption>
              <ActivityOption value='education'>교육</ActivityOption>
            </ActivitySelect>
          </SelectArea>

          <InputArea className='organization'>
            <UserLabel htmlFor='organization'>기관 / 장소명</UserLabel>
            <UserInput type='text' id='organization' name='organization'></UserInput>
          </InputArea>
          <InputArea className='startDate'>
            <UserLabel htmlFor='startDate'>시작년월</UserLabel>
            <UserInput type='text' id='startDate' name='startDate' value=''></UserInput>
          </InputArea>
          <InputArea className='endDate'>
            <UserLabel htmlFor='endDate'>종료년월</UserLabel>
            <UserInput type='text' id='endDate' name='endDate' value=''></UserInput>
          </InputArea>

          <InputArea className='desc'>
            <UserLabel className='desc'>활동 설명</UserLabel>
            <UserTextarea id='desc' name='desc' value=''></UserTextarea>
          </InputArea>
        </ActivityItem>
      </ul>
    </>
  );
}

const ActivityItem = styled.li`
  padding-top: 20px;
  height: 204px;
  display: grid;
  font-size: 1.2rem;
  gap: 12px;
  // grid-template-columns: repeat(5, 1fr);
  // grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(5d, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    'hd or or sd ed'
    'ft ft ft ft ft'
    'ft ft ft ft ft';

  .category {
    grid-area: hd;
    // grid-area: 1/1/2/2;
  }

  .organization {
    grid-area: or;
    // grid-area: 1/2/2/4;
  }
  .startDate {
    grid-area: sd;
    // grid-area: 1/4/2/5;
  }
  .endDate {
    grid-area: ed;
    // grid-area: 1/5/2/6;
  }
  .desc {
    grid-area: ft;
    // grid-area: 2/1/4/6;
  }
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

const ActivityLabel = styled.label``;

const ActivitySelect = styled.select``;

const ActivityOption = styled.option``;
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

const UserTextarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  font-size: 1.6rem;
  outline: none;
`;
