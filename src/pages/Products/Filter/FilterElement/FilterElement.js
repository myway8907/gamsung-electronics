import React from "react";

const FilterElement = ({ subcategory, getList }) => {
  const sendSubcategory = ({ target }) => {
    getList(subcategory, target.checked);
    // console.log(target.checked);
  };

  return (
    <div>
      <li>
        <input type="checkbox" onChange={sendSubcategory} />
        <span>{subcategory}</span>
      </li>
    </div>
  );
};

export default FilterElement;
