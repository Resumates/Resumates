import React from 'react';
import { GenderSelect, LabeledInput } from '../../style/CreateResumeStyle';

export function InputField({ label, type, name, placeholder, required }) {
  return (
    <LabeledInput className={name}>
      {label !== 'photo' && <label htmlFor={name}>{label}</label>}
      <input type={type} name={name} placeholder={placeholder} required={required}></input>
    </LabeledInput>
  );
}

export function SelectField({ name, required }) {
  return (
    <GenderSelect className={name} name={name} required={required}>
      <option value=''>성별</option>
      <option value='M'>남성</option>
      <option value='F'>여성</option>
    </GenderSelect>
  );
}
