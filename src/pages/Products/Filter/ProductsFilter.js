import React from "react";
import FilterElement from "./FilterElement/FilterElement";
import "./ProductsFilter.scss";

const ProductsFilter = ({ filterList }) => {
  return (
    <div className="productFilter">
      <span className="product-type-filter">유형</span>
      <input className="expand-input" id="expand-button" type="checkbox" />
      <label htmlfor="expand-button">
        <div className="expand-button-container">
          <div className="common-button first-button-element" />
          <div className="common-button second-button-element" />
          <div className="common-button third-button-element" />
        </div>
      </label>
      <ul className="filtering-list">
        {filterList.map((value, idx) => (
          <FilterElement key={idx} subcategory={value} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsFilter;
