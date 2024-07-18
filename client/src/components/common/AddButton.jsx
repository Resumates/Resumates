import React from 'react';
import { ReactComponent as AddCircle } from '../../asset/images/icon-addCircle.svg';
import styled from 'styled-components';

export const Icon = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  ${({ $marginRight }) => $marginRight && `margin-right: ${$marginRight};`}
  ${({ $marginBottom }) => $marginBottom && `margin-bottom: ${$marginBottom};`}
  ${({ $flexDirection }) => $flexDirection && `flex-direction: ${$flexDirection};`}
`;

export function AddButton({ onClick }) {
  return (
    <div style={{ borderTop: '1px solid #eee', marginTop: '30px' }}>
      <button
        onClick={onClick}
        style={{
          display: 'flex',
          width: '53px',
          flexDirection: 'row',
          textAlign: 'center',
          fontSize: '1.6rem',
          color: '#04438B',
          alignItems: 'center',
          margin: '20px auto 0',
        }}
      >
        <Icon $marginRight='3px'>
          <AddCircle width='20px' height='20px' fill='#04438B' />
        </Icon>
        <span style={{ fontWeight: '600' }}>추가</span>
      </button>
    </div>
  );
}
