import React from "react";

const DayInput = ({ dayInput }) => {
  return (
    <label>
      <input type="text" placeholder="일" onChange={dayInput} />
      <span>일</span>
    </label>
  );
};

export default DayInput;
