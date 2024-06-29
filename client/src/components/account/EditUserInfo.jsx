import React from 'react';

export default function EditUserInfo({ userInfo }) {
  console.log(userInfo);
  const { userId, email } = userInfo;
  console.log(userId, email);
  return (
    <div>
      <div>
        <label>아이디</label>
        <div>{userId}</div>
      </div>
      <div>
        <label>아이디</label>
        <div>{email}</div>
        <button>변경하기</button>
      </div>
    </div>
  );
}
