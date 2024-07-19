import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const SkillsSection = ({ skills = [], setFormData, setResumeDetail }) => {
  const [skill, setSkill] = useState('');

  const handleAddSkill = () => {
    if (skill.trim()) {
      const updatedSkillsList = [...skills, skill];
      setFormData((prevData) => ({
        ...prevData,
        structure: {
          ...prevData.structure,
          content: {
            ...prevData.structure.content,
            skills: updatedSkillsList,
          },
        },
      }));
      setSkill('');
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    const updatedSkillsList = skills.filter((item) => item !== skillToDelete);
    setFormData((prevData) => ({
      ...prevData,
      structure: {
        ...prevData.structure,
        content: {
          ...prevData.structure.content,
          skills: updatedSkillsList,
        },
      },
    }));
  };

  useEffect(() => {
    setResumeDetail((prevDetail) => ({
      ...prevDetail,
      structure: {
        ...prevDetail.structure,
        content: {
          ...prevDetail.structure.content,
          skills,
        },
      },
    }));
  }, [skills, setResumeDetail]);

  return (
    <SectionContainer>
      <SectionTitle>스킬</SectionTitle>
      <TextAreaContainer>
        <SkillTextArea
          id='skills'
          name='skills'
          value={skills.join(', ')}
          placeholder='HTML, CSS, JavaScript'
          readOnly
        />
      </TextAreaContainer>

      <InputContainer>
        <SkillInput
          type='text'
          value={skill}
          placeholder='스킬 추가'
          onChange={(e) => setSkill(e.target.value)}
        />
        <Button type='button' padding='8px 8px' fontSize='16px' onClick={handleAddSkill}>
          추가
        </Button>
      </InputContainer>

      <SkillsList>
        {skills.map((item, index) => (
          <SkillItem key={index}>
            <SkillText>{item}</SkillText>
            <DeleteSkillButton onClick={() => handleDeleteSkill(item)}>삭제</DeleteSkillButton>
          </SkillItem>
        ))}
      </SkillsList>
    </SectionContainer>
  );
};

export default SkillsSection;

const SectionContainer = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h4`
  font-size: 1.25em;
  margin-bottom: 10px;
`;

const TextAreaContainer = styled.div`
  margin-bottom: 20px;
`;

const SkillTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #acacac;
  padding: 10px;
  border-radius: 4px;
  resize: none;
  box-sizing: border-box;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SkillInput = styled.input`
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #acacac;
  border-radius: 4px;
  box-sizing: border-box;
`;

const SkillsList = styled.div`
  margin-top: 10px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  border: 1px solid #acacac;
  border-radius: 4px;
  padding: 8px;
`;

const SkillText = styled.span`
  flex-grow: 1;
  margin-right: 10px;
`;

const DeleteSkillButton = styled.button`
  background-color: #04438b;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
`;
