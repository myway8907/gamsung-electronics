import React from "react";

const EmailInput = ({ emailInput }) => {
  return (
    <label>
      <input type="email" placeholder="이메일" onChange={emailInput} />
      <span>이메일</span>
    </label>
  );
};

export default EmailInput;
