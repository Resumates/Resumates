import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ModalUser() {

  return (
    <UserModal>
      <UserInfo>
        <UserIcon />
        <div>
          <p></p>
          <p></p>
        </div>
      </UserInfo>
      <UserBtn>
        <AccountBtn></AccountBtn>
        <LogoutBtn></LogoutBtn>
      </UserBtn>
    </UserModal>
  );
}

const UserModal = styled.div`
  width: 320px;
  height: 144px;
`;

const UserInfo = styled.div``;

const UserBtn = styled.div``;

const UserIcon = styled.div``;

const AccountBtn = styled.button``;

const LogoutBtn = styled.button``;
