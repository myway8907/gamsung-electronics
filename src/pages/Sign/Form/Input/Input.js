import React from "react";

const Input = ({ type, text, onchange }) => {
  return (
    <label>
      <input type={type} placeholder={text} onChange={onchange} />
      <span>{text}</span>
    </label>
  );
};

export default Input;
