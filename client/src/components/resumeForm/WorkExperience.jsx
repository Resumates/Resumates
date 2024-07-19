import React, { useEffect, useState } from 'react';
import { InfoTitle } from '../../style/CreateResumeStyle';
import styled from 'styled-components';
import { AddButton } from '../common/AddButton';
import { ReactComponent as DeleteBtn } from '../../asset/images/icon-deleteBtn.svg';

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
            <InputArea className='company'>
              <UserLabel>회사명</UserLabel>
              <UserInput type='text' value={item.company} readOnly />
            </InputArea>
            <InputArea className='department'>
              <UserLabel>부서명</UserLabel>
              <UserInput type='text' value={item.department} readOnly />
            </InputArea>
            <InputArea className='position'>
              <UserLabel>직급/직책</UserLabel>
              <UserInput type='text' value={item.position} readOnly />
            </InputArea>
            <InputArea className='salary'>
              <UserLabel>연봉</UserLabel>
              <UserInput type='text' value={item.salary} readOnly />
            </InputArea>
            <InputArea className='startDate'>
              <UserLabel>입사년월</UserLabel>
              <UserInput type='text' value={item.startDate} readOnly />
            </InputArea>
            <InputArea className='endDate'>
              <UserLabel>퇴사년월</UserLabel>
              <UserInput type='text' value={item.endDate} readOnly />
            </InputArea>
            <InputArea className='workStatus'>
              <UserLabel>재직여부</UserLabel>
              <UserInput type='text' value={item.workStatus} readOnly />
            </InputArea>
            <InputArea className='desc'>
              <UserLabel>담당업무</UserLabel>
              <UserInput type='text' value={item.desc} readOnly />
            </InputArea>
            <DeleteButton onClick={() => deleteWorkItem(index)}>
              <DeleteBtn width='35px' height='35px' fill='#D9D9D9' />
            </DeleteButton>
          </WorkItem>
        ))}
        <WorkItem>
          <InputArea className='company'>
            <UserLabel htmlFor='company'>회사명</UserLabel>
            <UserInput
              type='text'
              id='company'
              name='company'
              value={workExperience.company}
              onChange={handleChange}
            />
          </InputArea>
          <InputArea className='department'>
            <UserLabel htmlFor='department'>부서명</UserLabel>
            <UserInput
              type='text'
              id='department'
              name='department'
              value={workExperience.department}
              onChange={handleChange}
            />
          </InputArea>
          <InputArea className='position'>
            <UserLabel htmlFor='position'>직급/직책</UserLabel>
            <UserInput
              type='text'
              id='position'
              name='position'
              value={workExperience.position}
              onChange={handleChange}
            />
          </InputArea>
          <InputArea className='salary'>
            <UserLabel htmlFor='salary'>연봉</UserLabel>
            <UserInput
              type='text'
              id='salary'
              name='salary'
              value={workExperience.salary}
              onChange={handleChange}
            />
          </InputArea>
          <InputArea className='startDate'>
            <UserLabel htmlFor='startDate'>입사년월</UserLabel>
            <UserInput
              type='text'
              id='startDate'
              name='startDate'
              value={workExperience.startDate}
              onChange={handleChange}
            />
          </InputArea>
          <InputArea className='endDate'>
            <UserLabel htmlFor='endDate'>퇴사년월</UserLabel>
            <UserInput
              type='text'
              id='endDate'
              name='endDate'
              value={workExperience.endDate}
              onChange={handleChange}
            />
          </InputArea>
          <InputArea className='workStatus'>
            <UserLabel htmlFor='workStatus'>재직여부</UserLabel>
            <UserInput
              type='text'
              id='workStatus'
              name='workStatus'
              value={workExperience.workStatus}
              onChange={handleChange}
            />
          </InputArea>
          <InputArea className='desc'>
            <UserLabel htmlFor='desc'>담당업무</UserLabel>
            <UserInput
              type='text'
              id='desc'
              name='desc'
              value={workExperience.desc}
              onChange={handleChange}
            />
          </InputArea>
        </WorkItem>
      </ul>
      <AddButton onClick={addWorkItem} />
    </>
  );
}

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

const DeleteButton = styled.button`
  grid-area: 1/6/1/7;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: -30px;
`;
