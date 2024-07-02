import React, { useReducer, useEffect } from 'react';
import {
  StyledInput,
  StyledTextarea,
  StyledFormControl,
  StyledLabel,
  StyledErrorText,
} from '../../style/InputStyle';
import { validate } from '../../utils/validator';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  const element =
    props.element === 'input' ? (
      <StyledInput
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <StyledTextarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <StyledFormControl
      className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}
    >
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      {element}
      {!inputState.isValid && inputState.isTouched && (
        <StyledErrorText>{props.errorText}</StyledErrorText>
      )}
    </StyledFormControl>
  );
};

export default Input;
