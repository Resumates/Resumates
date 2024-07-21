import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const SkillsSection = ({ setFormData, formData, setResumeDetail }) => {
  const [skill, setSkill] = useState('');
  const [skillList, setSkillList] = useState([]);
  console.log(skillList);

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
      <SectionTitle>스킬</SectionTitle>
      <TextAreaContainer>
        <SkillTextArea
          id='skillList'
          name='skillList'
          value={skillList}
          placeholder='스킬을 추가해주세요.'
          readOnly
        />
      </TextAreaContainer>

      <InputContainer>
        <SkillInput
          type='text'
          value={skill}
          placeholder='스킬 추가'
          onChange={(e) => handleChange(e)}
        />
        <Button type='button' padding='8px 8px' fontSize='16px' onClick={handleAddSkill}>
          추가
        </Button>
      </InputContainer>

      <SkillsList>
        {skillList.map((item, index) => (
          <SkillItem key={index}>
            <SkillText>{item}</SkillText>
            <DeleteButton onClick={() => handleDeleteSkill(item)}>삭제</DeleteButton>
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

    &.hidden {
    opacity: 0;
    height: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;

const SkillsList = styled.div`
  margin-top: 10px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  transition: opacity 0.3s ease-out;
  opacity: 1;

  &.hidden {
    opacity: 0;
    height: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const SkillText = styled.span`
  flex-grow: 1;
`;

const DeleteButton = styled.button`
  background-color: #04438b;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
`;
