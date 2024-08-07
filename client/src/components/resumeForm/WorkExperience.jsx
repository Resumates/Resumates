import React, { useEffect, useState } from 'react';
import { InfoTitle } from '../../style/CreateResumeStyle';
import styled from 'styled-components';
import { AddButton } from '../common/AddButton';
import { ReactComponent as DeleteBtn } from '../../asset/images/icon-deleteBtn.svg';
import InputArea from './WorkInput';

export default function WorkExperience({ prevWork, setFormData, formData, setResumeDetail }) {
  const [workExperience, setWorkExperience] = useState({
    company: '',
    department: '',
    position: '',
    salary: '',
    startDate: '',
    endDate: '',
    workStatus: '',
    desc: '',
  });

  useEffect(() => {
    if (prevWork) {
      setExperienceList(prevWork);
    }
  }, [prevWork]);
  const [experienceList, setExperienceList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newWorkExperience = { ...workExperience, [name]: value };
    setWorkExperience(newWorkExperience);
    setFormData((prevData) => ({
      ...prevData,
      structure: {
        ...prevData.structure,
        content: {
          ...prevData.structure.content,
          workExperience: [...experienceList, newWorkExperience],
        },
      },
    }));
  };

  const addWorkItem = () => {
    const updatedExperienceList = [...experienceList, workExperience];
    setExperienceList(updatedExperienceList);

    setFormData({
      ...formData,
      structure: {
        ...formData.structure,
        content: {
          ...formData.structure.content,
          workExperience: updatedExperienceList,
        },
      },
    });

    setWorkExperience({
      company: '',
      department: '',
      position: '',
      salary: '',
      startDate: '',
      endDate: '',
      workStatus: '',
      desc: '',
    });
  };

  const deleteWorkItem = (index) => {
    const updatedExperienceList = experienceList.filter((_, i) => i !== index);
    setExperienceList(updatedExperienceList);
    setFormData({
      ...formData,
      structure: {
        ...formData.structure,
        content: {
          ...formData.structure.content,
          workExperience: updatedExperienceList,
        },
      },
    });
  };

  useEffect(() => {
    setResumeDetail(formData);
  }, [workExperience, experienceList, formData, setResumeDetail]);

  return (
    <>
      <InfoTitle id='workArea'>경력</InfoTitle>
      <ul>
        {experienceList?.map((item, index) => (
          <WorkItem key={index}>
            <InputArea
              label='회사명'
              name='company'
              className='company'
              value={item.company}
              readOnly
            />
            <InputArea
              label='부서명'
              name='department'
              className='department'
              value={item.department}
              readOnly
            />
            <InputArea
              label='직급/직책'
              name='position'
              className='position'
              value={item.position}
              readOnly
            />
            <InputArea
              label='입사년월'
              name='startDate'
              className='startDate'
              value={item.startDate}
              readOnly
            />
            <InputArea
              label='퇴사년월'
              name='endDate'
              className='endDate'
              value={item.endDate}
              readOnly
            />
            <InputArea label='담당업무' name='desc' className='desc' value={item.desc} readOnly />
            <DeleteButton onClick={() => deleteWorkItem(index)}>
              <DeleteBtn width='35px' height='35px' fill='#D9D9D9' />
            </DeleteButton>
          </WorkItem>
        ))}
        <WorkItem>
          <InputArea
            label='회사명'
            type='text'
            id='company'
            name='company'
            className='company'
            value={workExperience.company}
            onChange={handleChange}
          />
          <InputArea
            label='부서명'
            type='text'
            id='department'
            name='department'
            className='department'
            value={workExperience.department}
            onChange={handleChange}
          />
          <InputArea
            label='직급/직책'
            type='text'
            id='position'
            name='position'
            className='position'
            value={workExperience.position}
            onChange={handleChange}
          />
          <InputArea
            label='입사년월'
            type='text'
            id='startDate'
            name='startDate'
            className='startDate'
            value={workExperience.startDate}
            onChange={handleChange}
          />
          <InputArea
            label='퇴사년월'
            type='text'
            id='endDate'
            name='endDate'
            className='endDate'
            value={workExperience.endDate}
            onChange={handleChange}
          />
          <InputArea
            label='담당업무'
            type='text'
            id='desc'
            name='desc'
            className='desc'
            value={workExperience.desc}
            onChange={handleChange}
          />
        </WorkItem>
      </ul>
      <AddButton onClick={addWorkItem} />
    </>
  );
}

const WorkItem = styled.li`
  padding-top: 20px;
  height: 204px;
  display: grid;
  font-size: 1.2rem;
  gap: 12px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .company {
    grid-area: 1/1/2/4;
  }
  .department {
    grid-area: 1/4/2/7;
  }
  .position {
    grid-area: 2/1/3/3;
  }
  .startDate {
    grid-area: 2/3/3/5;
  }
  .endDate {
    grid-area: 2/5/3/7;
  }
  .desc {
    grid-area: 3/1/3/7;
  }
`;

const DeleteButton = styled.button`
  grid-area: 1/7/1/8;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: -30px;
`;
