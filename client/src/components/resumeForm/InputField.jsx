import React from 'react';
import { LabeledSelect, LabeledInput } from '../../style/CreateResumeStyle';

export function InputField({ label, type, name, placeholder, required }) {
  return (
    <LabeledInput className={name}>
      {label !== 'skillsBox' && <label htmlFor={name}>{label}</label>}
      <input type={type} name={name} placeholder={placeholder} required={required}></input>
    </LabeledInput>
  );
}

export function SelectField({ label, name, required, data, onOptionSelect, InfoId }) {
  // const [selectedOption, setSelectedOPtion] = useState(null);

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    if (InfoId === 'qualification') {
      onOptionSelect(selectedOption);
      console.log('selectedOption', selectedOption);
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
