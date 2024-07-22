import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { InfoTitle } from '../../style/CreateResumeStyle';

const SkillsSection = ({ setFormData, formData, setResumeDetail, prevSkills }) => {
  const [skill, setSkill] = useState('');
  const [skillList, setSkillList] = useState([]);

  useEffect(() => {
    if (prevSkills) setSkillList(prevSkills);
  }, [prevSkills]);

  const handleChange = (e) => {
    setSkill(e.target.value);

    setFormData({
      ...formData,
      structure: {
        ...formData.structure,
        content: {
          ...formData.structure.content,
          skills: [...skillList, e.target.value],
        },
      },
    });
  };

  const handleAddSkill = () => {
    if (skill.trim()) {
      const updatedSkillList = [...skillList, skill];
      setSkillList(updatedSkillList);
      setFormData({
        ...formData,
        structure: {
          ...formData.structure,
          content: {
            ...formData.structure.content,
            skills: updatedSkillList,
          },
        },
      });
      setSkill('');
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    const updatedSkillList = skillList.filter((item) => item !== skillToDelete);
    setSkillList(updatedSkillList);
    setFormData({
      ...formData,
      structure: {
        ...formData.structure,
        content: {
          ...formData.structure.content,
          skills: updatedSkillList,
        },
      },
    });
  };
  useEffect(() => {
    setResumeDetail(formData);
  }, [formData, setResumeDetail]);

  return (
    <SectionContainer>
      <InfoTitle>스킬</InfoTitle>
      <SkillsList>
        {skillList?.map((item, index) => (
          <SkillItem key={index}>
            <SkillText>{item}</SkillText>
            <DeleteButton onClick={() => handleDeleteSkill(item)}>X</DeleteButton>
          </SkillItem>
        ))}
      </SkillsList>
      <InputContainer>
        <SkillInput
          type='text'
          value={skill}
          placeholder='스킬 추가'
          onChange={(e) => handleChange(e)}
        />
        <Button type='button' padding='16px 20px' fontSize='16px' onClick={handleAddSkill}>
          추가
        </Button>
      </InputContainer>
    </SectionContainer>
  );
};

export default SkillsSection;

const SectionContainer = styled.div`
  margin-top: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  min-height: 5rem;
  box-sizing: border-box;
`;

const SkillInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #acacac;
  border-radius: 4px;
  min-height: 5rem;
  box-sizing: border-box;
`;

const SkillsList = styled.div`
  margin: 10px 0;
  min-height: 5rem;
  box-sizing: border-box;
  border: 1px solid #acacac;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

const SkillItem = styled.div`
  font-size: 1.4rem;
  transition: opacity 0.3s ease-out;
  opacity: 1;
`;

const SkillText = styled.span`
  margin-right: 0.4rem;
`;

const DeleteButton = styled.button`
  color: #acacac;
  border: none;
  border: 1px solid #acacac;
  padding: 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  margin-right: 1rem;
  &:hover {
    background-color: #acacac;
    color: black;
  }
`;
