import React from "react";

const YearInput = ({ yearInput }) => {
  return (
    <label>
      <input type="text" placeholder="년" onChange={yearInput} />
      <span>년</span>
    </label>
  );
};

export default YearInput;
