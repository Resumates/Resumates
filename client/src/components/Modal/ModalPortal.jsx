import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalPortal = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById('modal-root');
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    if (isOpen) {
      modalRoot.appendChild(elRef.current);
    }
    return () => {
      if (modalRoot.contains(elRef.current)) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, [isOpen, modalRoot]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>x</CloseButton>
        {children}
      </ModalContent>
    </ModalContainer>,
    document.getElementById('modal-root'),
  );
};
ModalPortal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalPortal;
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 400px;
  max-width: 80%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
