import React from 'react';
import styled from 'styled-components';

const InputArea = ({ label, id, name, type, onChange, className, value }) => (
  <StyledInputArea className={className}>
    <UserLabel htmlFor={id}>{label}</UserLabel>
    <UserInput type={type} id={id} name={name} value={value} onChange={onChange} />
  </StyledInputArea>
);

export default InputArea;

const StyledInputArea = styled.div`
  border: 1px solid #acacac;
  padding: 10px 8px;
  border-radius: 0.5rem;
  height: 60px;
  box-sizing: border-box;
  font-size: 1.2rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const UserLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  margin-left: 2px;
  color: #acacac;
`;

const UserInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  font-size: 1.6rem;
  outline: none;
`;
