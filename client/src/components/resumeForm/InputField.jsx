import React from 'react';
import { LabeledSelect, LabeledInput } from '../../style/CreateResumeStyle';
import Button from '../common/Button';

export function InputField({ label, type, name, placeholder, required }) {
  return (
    <LabeledInput className={name}>
      {label !== 'skillsBox' && <label htmlFor={name}>{label}</label>}
      <input type={type} name={name} placeholder={placeholder} required={required}></input>
      {name == 'skill' && (
        <Button type='button' padding='9px 8px' fontSize='16px'>
          추가
        </Button>
      )}
    </LabeledInput>
  );
}

export function SelectField({ label, name, required, data, onOptionSelect, InfoId }) {
  const handleChange = (event) => {
    const selectedOption = event.target.value;
    if (InfoId === 'qualification') {
      onOptionSelect(selectedOption);
    }
  };

  return (
    <LabeledSelect className={name}>
      <p>{label}</p>
      <select name={name} id={name} required={required} onChange={handleChange}>
        {data.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </LabeledSelect>
  );
}
