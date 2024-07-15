import React from 'react';
import { LabeledSelect, LabeledInput, StyledLabel } from '../../style/CreateResumeStyle';
import Button from '../common/Button';
import { ReactComponent as AddCircle } from '../../asset/images/icon-addCircle.svg';
import { Icon } from '../common/AddButton';

export function InputField({ label, type, name, placeholder, required }) {
  return (
    <LabeledInput className={name}>
      {label !== 'skillsBox' && (
        <StyledLabel htmlFor={name} className={name}>
          {name === 'photo' && (
            <Icon marginBottom='10px' flexDirection='column'>
              <AddCircle width='20px' height='20px' fill='#acacac' />
            </Icon>
          )}
          {label}
        </StyledLabel>
      )}

      {name !== 'skill' && (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          required={required}
        ></input>
      )}

      {name == 'skill' && (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <input type={type} name={name} placeholder={placeholder} required={required}></input>
          <Button type='button' padding='8px 8px' fontSize='16px'>
            추가
          </Button>
        </div>
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
