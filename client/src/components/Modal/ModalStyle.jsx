import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1200;
  position: absolute;
`;
export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 /40%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: relative;
  max-width: 800px;
  max-height: 250px;
  padding: 52px 60px;
  box-shadow:
    0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  z-index: 999;
`;

export const ModalTitle = styled.h2`
  padding: 0;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1.6rem;
`;
export const ModalContent = styled.div`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 5rem;
  font-weight: bold;
  color: #04438b;
`;
