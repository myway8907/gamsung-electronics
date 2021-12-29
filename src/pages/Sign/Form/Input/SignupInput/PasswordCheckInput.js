import React from "react";

const PasswordCheckInput = ({ passwordCheckInput }) => {
  return (
    <label>
      <input
        type="password"
        placeholder="비밀번호 확인"
        autoComplete="off"
        onChange={passwordCheckInput}
      />
      <span>비밀번호 확인</span>
    </label>
  );
};

export default PasswordCheckInput;
