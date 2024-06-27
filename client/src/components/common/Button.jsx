import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';

const shouldForwardProp = createShouldForwardProp(['color', 'padding', 'fontSize', 'disabled']);

const StyledButton = styled('button').withConfig({
  shouldForwardProp,
})`
  background-color: ${(props) => (props.disabled ? '#D9D9D9' : props.color || '#04438B')};
  color: ${(props) => (props.disabled ? 'black' : 'white')};
  padding: ${(props) => props.padding || '10px 20px'};
  margin-left: ${(props) => props.marginLeft || '0px'};
  margin-top: ${(props) => props.marginTop || '0px'};
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: ${(props) => props.fontSize || '16px'};
  opacity: ${(props) => (props.disabled ? '0.6' : '1')};
`;
const Button = ({
  color,
  padding,
  marginLeft,
  marginTop,
  fontSize,
  children,
  onClick,
  disabled,
}) => {
  return (
    <StyledButton
      color={color}
      padding={padding}
      marginLeft={marginLeft}
      marginTop={marginTop}
      fontSize={fontSize}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  ccolor: PropTypes.string,
  padding: PropTypes.string,
  fofontSize: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disdisabled: PropTypes.bool,
};

export default Button;
