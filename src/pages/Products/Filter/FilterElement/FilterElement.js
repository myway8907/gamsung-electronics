import React from "react";

const FilterElement = ({ subcategory }) => {
  return (
    <div>
      <li>
        <input type="checkbox" />
        <span>{subcategory}</span>
      </li>
    </div>
  );
};

export default FilterElement;
