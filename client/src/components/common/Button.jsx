import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#d3d3d3' : props.color || '#04438B')};
  color: ${(props) => (props.disabled ? '#a9a9a9' : 'white')};
  padding: ${(props) => props.padding || '10px 20px'};
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: ${(props) => props.fontSize || '16px'};
  opacity: ${(props) => (props.disabled ? '0.6' : '1')};

  &:hover {
    opacity: ${(props) => (props.disabled ? '0.6' : '0.8')};
  }
`;
const Button = ({ color, padding, fontSize, children, onClick, disabled }) => {
  return (
    <StyledButton
      color={color}
      padding={padding}
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

Button.defaultProps = {
  cocolor: '#04438B',
  ppadding: '10px 20px',
  fontSize: '16px',
  onClick: () => {},
  disabled: false,
};

export default Button;
