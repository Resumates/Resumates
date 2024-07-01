import React from 'react';
import { LabeledInput } from '../../style/CreateResumeStyle';

export function InputField({ label, type, name, placeholder, required }) {
  return (
    <LabeledInput className={name}>
      {label !== 'photo' && <label htmlFor={name}>{label}</label>}
      <input type={type} name={name} placeholder={placeholder} required={required}></input>
    </LabeledInput>
  );
}
