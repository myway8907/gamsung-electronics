import React from "react";

const FilterElement = ({ subcategory, changeCheckStatus }) => {
  const getAndSend = event => {
    changeCheckStatus(subcategory, event);
  };
  return (
    <div>
      <li>
        <input type="checkbox" onChange={getAndSend} />
        <span>{subcategory}</span>
      </li>
    </div>
  );
};

export default FilterElement;
