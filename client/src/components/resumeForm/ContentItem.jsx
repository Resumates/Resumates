import React from 'react';
import { UserProfile } from '../../style/CreateResumeStyle';
import { InputField, SelectField } from './InputField';

export function ContentItem({
  info,
  contentItem,
  getUserProfileId,
  handleOptionSelect,
  selectedOptions,
  skill,
  setSkill,
  skillsBox,
  setSkillsBox,
  handleAddSkill,
  handleInputChange,
  formData,
  inputValue,
}) {
  const handleChange = (e, field) => {
    const { name, value } = e.target;
    console.log(name, value);
    handleInputChange(info.id, contentItem, name, value);
  };

  return (
    <UserProfile key={contentItem.id} className={getUserProfileId(info, contentItem.id)}>
      {contentItem.fields.map((field) => {
        if (field.name === 'gender' || field.name === 'category') {
          return (
            <SelectField
              key={field.name}
              label={field.label}
              name={field.name}
              required={field.required}
              data={field.data}
              InfoId={info.id}
              onOptionSelect={(optionId) => handleOptionSelect(info.id, contentItem.id, optionId)}
            />
          );
        } else if (field.name === 'skill' || field.name === 'skillsBox') {
          return (
            <InputField
              key={field.name}
              label={field.label}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              skill={field.name === 'skill' ? skill : undefined}
              setSkill={field.name === 'skill' ? setSkill : undefined}
              skillsBox={field.name === 'skillsBox' ? skillsBox : undefined}
              setSkillsBox={field.name === 'skillsBox' ? setSkillsBox : undefined}
              handleAddSkill={handleAddSkill}
              value={formData[info.id]?.[contentItem.id]?.[field.name] || ''}
              handleChange={handleChange}
            />
          );
        } else {
          return (
            <InputField
              key={field.name}
              label={field.label}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={this}
              handleChange={handleChange}
            />
          );
        }
      })}

      {info.id === 'qualification' &&
        contentItem.fields.map((field) =>
          field.data?.map((items) => {
            if (items.id === selectedOptions[info.id]?.[contentItem.id]) {
              console.log('items', items);
              return items.detail?.map((detail) =>
                detail.item.map((item) => (
                  <InputField
                    key={item.name}
                    label={item.label}
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                    required={item.required}
                    value={formData[info.id]?.[contentItem.id]?.[item.name] || ''}
                    handleChange={handleChange}
                  />
                )),
              );
            }
            return null;
          }),
        )}
    </UserProfile>
  );
}
