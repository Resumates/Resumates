import React from 'react';
import { ReactComponent as AddCircle } from '../../asset/images/icon-addCircle.svg';
import styled from 'styled-components';

const Icon = styled.div`
  margin-right: 3px;
  text-align: center;
  display: flex;
  align-items: center;
`;

export function AddButton() {
  return (
    <button
      style={{
        display: 'flex',
        width: '53px',
        flexDirection: 'row',
        textAlign: 'center',
        fontSize: '1.6rem',
        color: '#04438B',
        alignItems: 'center',
        margin: '30px auto 0',
      }}
    >
      <Icon>
        <AddCircle width='20px' height='20px' fill='#04438B' />
      </Icon>
      <span style={{ fontWeight: '600' }}>추가</span>
    </button>
  );
}
