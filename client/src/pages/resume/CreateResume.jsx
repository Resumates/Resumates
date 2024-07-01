import React, { useState } from 'react';
import ModalLogout from '../../components/Modal/ModalLogout';

export default function CreateResume() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button>로그아웃</button>
      {setModalOpen && <ModalLogout setModalOpen={setModalOpen} />}
      <br />
      <button>비밀번호 확인</button>
    </div>
  );
}
