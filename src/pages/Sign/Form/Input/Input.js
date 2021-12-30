import React from "react";
import "./input.scss";

const Input = ({ name, type, text, onchange }) => {
  return (
    <label>
      <input name={name} type={type} placeholder={text} onChange={onchange} />
      <span>{text}</span>
    </label>
  );
};

export default Input;
