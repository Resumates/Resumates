import React, { useState } from 'react';
import { UserProfile } from '../../style/CreateResumeStyle';
import { profileInfo } from '../../data/profileInfoData';
import { InputField } from './InputField';
// import { AddButton } from '../../components/common/AddButton';
// import { DeleteButton } from '../../components/common/DeleteButton';
// import UserInfo from './UserInfo';
const PortfolioSection = ({ info, contentItem, handleInputChange, formData }) => {
  const handleChange = (e, field) => {
    const { name, value } = e.target;
    handleInputChange(info.id, contentItem.id, name, value);
  };

  return (
    <UserProfile key={contentItem.id} className={info.id}>
      {contentItem.fields.map((field) => (
        <InputField
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
          value={formData[info.id]?.[contentItem.id]?.[field.name] || ''}
          handleChange={handleChange}
        />
      ))}
    </UserProfile>
  );
};

export default PortfolioSection;
