import React from "react";

const MonthInput = ({ monthInput }) => {
  return (
    <label>
      <input type="text" placeholder="월" onChange={monthInput} />
      <span>월</span>
    </label>
  );
};

export default MonthInput;
