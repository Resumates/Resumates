import React from 'react';

export default function EditUserPassword({ userInfo }) {
  const { userPw } = userInfo;
  console.log(userPw);
  return (
    <div>
      <div>
        <label>현재비밀번호</label><input type="password" />
      </div>
      <div>
        <label>새 비밀번호</label><input type="password" />
      </div>
      <div>
        <label>새 비밀번호 확인</label><input type="password" />
      </div>
      <p>비밀번호보기</p><button>변경하기</button>
    </div>
  );
}
