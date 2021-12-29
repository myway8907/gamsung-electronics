import React from "react";

const PasswordInput = ({ passwordInput }) => {
  return (
    <label>
      <input
        type="password"
        placeholder="비밀번호"
        autoComplete="off"
        onChange={passwordInput}
      />
      <span>비밀번호</span>
    </label>
  );
};

export default PasswordInput;
