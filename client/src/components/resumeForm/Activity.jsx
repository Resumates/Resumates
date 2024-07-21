import React, { useEffect, useState } from 'react';
import { InfoTitle } from '../../style/CreateResumeStyle';
import styled from 'styled-components';
import { AddButton } from '../common/AddButton';
import { ReactComponent as DeleteBtn } from '../../asset/images/icon-deleteBtn.svg';

export default function Activity({ formData, setFormData, setResumeDetail }) {
  const [activity, setActivity] = useState({
    category: 'none',
    organization: '',
    startDate: '',
    endDate: '',
    desc: '',
  });

  const [activityList, setActivityList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newActivity = { ...activity, [name]: value };
    setActivity(newActivity);
    setFormData((prevData) => ({
      ...prevData,
      structure: {
        ...prevData.structure,
        content: {
          ...prevData.structure.content,
          activity: [...activityList, newActivity],
        },
      },
    }));
  };

  const addActivityItem = () => {
    const updateActivityList = [...activityList, activity];
    setActivityList(updateActivityList);

    setFormData({
      ...formData,
      structure: {
        ...formData.structure,
        content: {
          ...formData.structure.content,
          activity: updateActivityList,
        },
      },
    });
    setActivity({
      category: 'none',
      organization: '',
      startDate: '',
      endDate: '',
      desc: '',
    });
  };

  const deleteActivityItem = (index) => {
    const updateActivityList = activityList.filter((_, i) => i !== index);
    setActivityList(updateActivityList);

    setFormData({
      ...formData,
      structure: {
        ...formData.structure,
        content: {
          ...formData.structure.content,
          activity: updateActivityList,
        },
      },
    });
  };

  useEffect(() => {
    setResumeDetail(formData);
  }, [activityList, formData, setResumeDetail]);

  return (
    <>
      <InfoTitle>경험 / 활동 / 교육</InfoTitle>
      <ul>
        {activityList?.map((item, index) => (
          <ActivityItem key={index}>
            <SelectArea className='category'>
              <ActivityLabel htmlFor='category'>활동구분 선택</ActivityLabel>

              <ActivitySelect name='category' value={item.category} disabled>
                <ActivityOption value='none' selected>
                  구분
                </ActivityOption>
                <ActivityOption value='경험'>경험</ActivityOption>
                <ActivityOption value='활동'>활동</ActivityOption>
                <ActivityOption value='교육'>교육</ActivityOption>
              </ActivitySelect>
            </SelectArea>

            <InputArea className='organization'>
              <UserLabel htmlFor='organization'>기관 / 장소명</UserLabel>
              <UserInput type='text' value={item.organization} name='organization'></UserInput>
            </InputArea>
            <InputArea className='startDate'>
              <UserLabel htmlFor='startDate'>시작년월</UserLabel>
              <UserInput type='text' value={item.startDate} name='startDate'></UserInput>
            </InputArea>
            <InputArea className='endDate'>
              <UserLabel htmlFor='endDate'>종료년월</UserLabel>
              <UserInput type='text' value={item.endDate} name='endDate'></UserInput>
            </InputArea>

            <InputArea className='desc'>
              <UserLabel className='desc'>활동 설명</UserLabel>
              <UserTextarea value={item.desc} name='desc' rows='5' cols='50'></UserTextarea>
            </InputArea>
            <DeleteButtonArea>
              <DeleteButton onClick={() => deleteActivityItem(index)}>
                <DeleteBtn width='35px' height='35px' fill='#D9D9D9' />
              </DeleteButton>
              {/* <DeleteButton className='delete' onClick={() => deleteActivityItem(index)} /> */}
            </DeleteButtonArea>
          </ActivityItem>
        ))}

        <ActivityItem>
          <SelectArea className='category'>
            <ActivityLabel htmlFor='category'>활동구분 선택</ActivityLabel>
            <ActivitySelect
              id='category'
              name='category'
              value={activity.category}
              onChange={handleChange}
            >
              <ActivityOption value='none' disabled>
                구분
              </ActivityOption>
              <ActivityOption value='경험'>경험</ActivityOption>
              <ActivityOption value='활동'>활동</ActivityOption>
              <ActivityOption value='교육'>교육</ActivityOption>
            </ActivitySelect>
          </SelectArea>

          <InputArea className='organization'>
            <UserLabel htmlFor='organization'>기관 / 장소명</UserLabel>
            <UserInput
              type='text'
              id='organization'
              name='organization'
              value={activity.organization}
              onChange={handleChange}
            ></UserInput>
          </InputArea>
          <InputArea className='startDate'>
            <UserLabel htmlFor='startDate'>시작년월</UserLabel>
            <UserInput
              type='text'
              id='startDate'
              name='startDate'
              value={activity.startDate}
              onChange={handleChange}
            ></UserInput>
          </InputArea>
          <InputArea className='endDate'>
            <UserLabel htmlFor='endDate'>종료년월</UserLabel>
            <UserInput
              type='text'
              id='endDate'
              name='endDate'
              value={activity.endDate}
              onChange={handleChange}
            ></UserInput>
          </InputArea>

          <InputArea className='desc'>
            <UserLabel className='desc'>활동 설명</UserLabel>
            <UserTextarea
              id='desc'
              name='desc'
              rows='5'
              cols='50'
              value={activity.desc}
              onChange={handleChange}
            ></UserTextarea>
          </InputArea>
        </ActivityItem>
      </ul>
      <AddButton onClick={addActivityItem} />
    </>
  );
}

const ActivityItem = styled.li`
  padding-top: 20px;
  height: 204px;
  display: grid;
  font-size: 1.2rem;
  gap: 12px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 3fr;

  .category {
    grid-area: 1/1/2/2;
  }

  .organization {
    grid-area: 1/2/2/4;
  }
  .startDate {
    grid-area: 1/4/2/5;
  }
  .endDate {
    grid-area: 1/5/2/6;
  }
  .desc {
    height: fit-content;
    grid-area: 2/1/4/6;
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
  resize: none;
  border: none;
`;

const DeleteButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeleteButton = styled.button`
  font-size: 1.6rem;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
`;
