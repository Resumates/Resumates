import React from 'react';
import { GenderSelect, LabeledInput } from '../../style/CreateResumeStyle';

export function InputField({ label, type, name, placeholder, required }) {
  return (
    <LabeledInput className={name}>
      {label !== 'photo' && label !== 'skillsBox' && <label htmlFor={name}>{label}</label>}
      <input type={type} name={name} placeholder={placeholder} required={required}></input>
    </LabeledInput>
  );
}

export function SelectField({ name, required, data }) {
  return (
    <GenderSelect className={name} name={name} required={required}>
      {data.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </GenderSelect>
  );
}
