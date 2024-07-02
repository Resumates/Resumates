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
  width: 30rem;
  height: 2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font: inherit;
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
