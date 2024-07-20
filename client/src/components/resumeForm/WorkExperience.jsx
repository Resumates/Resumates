import React, { useEffect, useState } from 'react';
import { InfoTitle } from '../../style/CreateResumeStyle';
import styled from 'styled-components';
import { AddButton } from '../common/AddButton';
import { ReactComponent as DeleteBtn } from '../../asset/images/icon-deleteBtn.svg';
import InputArea from './WorkInput';

export default function WorkExperience({ setFormData, formData, setResumeDetail }) {
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
  const [experienceList, setExperienceList] = useState([]);
  console.log(workExperience);
  console.log(experienceList);

  const handleChange = (e) => {
    setWorkExperience({ ...workExperience, [e.target.name]: e.target.value });
  };

  const addWorkItem = () => {
    console.log(formData);
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
    console.log(formData);

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
  };

  useEffect(() => {
    setResumeDetail(formData);
  }, [workExperience, experienceList, formData, setResumeDetail]);

  return (
    <>
      <InfoTitle>경력</InfoTitle>
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
            <InputArea label='연봉' name='salary' className='salary' value={item.salary} readOnly />
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
            <InputArea
              label='재직여부'
              name='workStatus'
              className='workStatus'
              value={item.workStatus}
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
            label='연봉'
            type='text'
            id='salary'
            name='salary'
            className='salary'
            value={workExperience.salary}
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
            label='재직여부'
            type='text'
            id='workStatus'
            name='workStatus'
            className='workStatus'
            value={workExperience.workStatus}
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
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .company {
    grid-area: 1/1/2/4;
  }
  .department {
    grid-area: 1/4/2/6;
  }
  .position {
    grid-area: 2/1/3/2;
  }
  .salary {
    grid-area: 2/2/3/3;
  }
  .startDate {
    grid-area: 2/3/3/4;
  }
  .endDate {
    grid-area: 2/4/3/5;
  }
  .workStatus {
    grid-area: 2/5/3/6;
  }
  .desc {
    grid-area: 3/1/3/6;
  }
`;

const DeleteButton = styled.button`
  grid-area: 1/6/1/7;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: -30px;
`;
