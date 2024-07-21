import React, { useState, useEffect } from 'react';
import { InfoTitle } from '../../style/CreateResumeStyle';
import styled from 'styled-components';

export default function ResumeTitle({
  prevTitle,
  setPrevTitle,
  setFormData,
  formData,
  setResumeDetail,
}) {
  const [title, setTitle] = useState(prevTitle);
  const handleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setPrevTitle(newTitle);
    setFormData({
      ...formData,
      structure: {
        ...formData.structure,
        title: newTitle,
      },
    });
    setResumeDetail(formData);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      structure: {
        ...formData.structure,
        title: title,
      },
    });
    setResumeDetail(formData);
  }, [title]);

  return (
    <>
      <InfoTitle id='info'>이력서 제목</InfoTitle>
      <TitleArea className='title'>
        <UserLabel htmlFor='title'>이력서 제목</UserLabel>
        <UserInput
          type='text'
          id='title'
          name='title'
          value={prevTitle}
          onChange={handleChange}
        ></UserInput>
      </TitleArea>
    </>
  );
}

const TitleArea = styled.div`
  border: 1px solid #acacac;
  padding: 10px 8px;
  border-radius: 0.5rem;
  height: 60px;
  box-sizing: border-box;
  font-size: 1.2rem;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 20px;
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
