import React from "react";
import "./SignInput.scss";

const SignInput = ({ name, type, text, onchange }) => {
  return (
    <label>
      <input name={name} type={type} placeholder={text} onChange={onchange} />
      <span>{text}</span>
    </label>
  );
};

export default SignInput;
