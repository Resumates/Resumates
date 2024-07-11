import styled from 'styled-components';
export const StyledFormControl = styled.div`
  margin-bottom: 1rem;
  &.form-control--invalid input,
  &.form-control--invalid textarea {
    border-color: red;
    background: #ffd1d1;
  }
  &.form-control--invalid p {
    color: red;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 40.7rem;
  padding: 1.8rem 0.8rem;
  box-sizing: border-box;
  background-color: white;
  border-radius: 1rem;
  font-size: 1.6rem;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font: inherit;
`;

export const StyledErrorText = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: 0.875rem;
  color: red;
`;
