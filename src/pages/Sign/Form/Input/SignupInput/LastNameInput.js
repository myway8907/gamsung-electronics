import React from "react";

const LastNameInput = ({ lastNameInput }) => {
  return (
    <label>
      <input type="text" placeholder="이름" onChange={lastNameInput} />
      <span>이름</span>
    </label>
  );
};

export default LastNameInput;
