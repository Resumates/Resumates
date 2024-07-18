import React from 'react';
import { ReactComponent as DeleteBtn } from '../../asset/images/icon-deleteBtn.svg';

export function DeleteButton({ onClick }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        borderTop: '1px solid rgb(238, 238, 238)',
        marginBottom: '10px',
      }}
    >
      <button onClick={onClick}>
        <DeleteBtn width='35px' height='35px' fill='#D9D9D9' />
      </button>
    </div>
  );
}
