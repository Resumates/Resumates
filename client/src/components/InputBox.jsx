// InputComponent.js
import React from 'react';
import styled from 'styled-components';

// Define the styled input component
const StyledInput = styled.input`
  width: ${(props) => props.width || '52.3rem'};
  padding: 1.8rem 0.8rem;
  box-sizing: border-box;
  background-color: white;
  border-radius: 1rem;
  font-size: 1.6rem;
`;

// Create the reusable input component
const Input = ({ width, ...rest }) => {
  return <StyledInput width={width} {...rest} />;
};

export default Input;
