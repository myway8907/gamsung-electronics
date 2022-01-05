import React, { useState } from "react";
import FilterElement from "./FilterElement/FilterElement";
import "./ProductsFilter.scss";

const ProductsFilter = ({ filterList, changeCheckStatus, filterName }) => {
  const [expand, setExpand] = useState(false);

  const expandFilter = () => {
    setExpand(expand ? false : true);
  };

  console.log(expand);

  return (
    <div className="productFilter">
      {/* <input className="expand-input" id="expand-button" type="checkbox" /> */}
      <span className="product-type-filter">유형</span>
      {/* <label htmlfor="expand-button"> */}
      <div className="expand-button-container" onClick={expandFilter}>
        <div className="common-button first-button-element" />
        <div className="common-button second-button-element" />
        <div className="common-button third-button-element" />
      </div>
      <div className="underLine" />
      {/* </label> */}
      <div className="list-container">
        <ul
          className={expand ? "filtering-list-expand" : "filtering-list-shrink"}
        >
          {filterName.map((subcategory, idx) => (
            <FilterElement
              key={idx}
              changeCheckStatus={changeCheckStatus}
              subcategory={subcategory}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsFilter;
