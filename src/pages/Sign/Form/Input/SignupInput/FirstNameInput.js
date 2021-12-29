import React from "react";

const FirstNameInput = ({ firstNameInput }) => {
  return (
    <label>
      <input type="text" placeholder="성" onChange={firstNameInput} />
      <span>성</span>
    </label>
  );
};

export default FirstNameInput;
