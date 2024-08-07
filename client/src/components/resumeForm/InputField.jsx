import React, { useState } from 'react';
import { LabeledSelect, LabeledInput, StyledLabel } from '../../style/CreateResumeStyle';
import Button from '../common/Button';
import { ReactComponent as AddCircle } from '../../asset/images/icon-addCircle.svg';
import { Icon } from '../common/AddButton';

export function InputField({
  label,
  type,
  name,
  placeholder,
  required,
  skill,
  setSkill,
  skillsBox,
  setSkillsBox,
  handleAddSkill,
  handleChange,
  value,
}) {
  return (
    <LabeledInput className={name}>
      {label !== 'skillsBox' && (
        <StyledLabel htmlFor={name} className={name}>
          {label}
        </StyledLabel>
      )}

      {name !== 'skill' && name !== 'skillsBox' && (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleChange}
        ></input>
      )}

      {name === 'skill' && (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <input
            type={type}
            name={name}
            value={skill}
            placeholder={placeholder}
            required={required}
            onChange={(e) => setSkill(e.target.value)}
            style={{ width: 'calc(100% - 48px)' }}
          ></input>
          <Button type='button' padding='8px 8px' fontSize='16px' onClick={handleAddSkill}>
            추가
          </Button>
        </div>
      )}

      {name === 'skillsBox' && (
        <input
          type={type}
          name={name}
          value={skillsBox}
          placeholder={placeholder}
          required={required}
          readOnly
          onChange={handleChange}
        ></input>
      )}
    </LabeledInput>
  );
}

export function SelectField({
  label,
  name,
  required,
  data,
  onOptionSelect,
  InfoId,
  handleChange,
  value,
}) {
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    console.log('타켓', selectedOption);
    if (InfoId === 'qualification') {
      onOptionSelect(selectedOption);
    }
    handleChange(event);
  };

  return (
    <LabeledSelect className={name}>
      <p>{label}</p>
      <select name={name} id={name} required={required} value={value} onChange={handleSelectChange}>
        {data.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </LabeledSelect>
  );
}
