import React from "react";
import "./ProductsFilter.scss";

const ProductsFilter = () => {
  return (
    <div className="productFilter">
      <span className="product-type-filter">유형</span>
      <input className="expand-input" id="expand-button" type="checkbox" />
      <label htmlfor="expand-button">
        <div className="expand-button-container">
          <div className="common-button first-plus-button" />
          <div className="plus-button 2" />
          <div className="plus-button 3" />
        </div>
      </label>
      <div className="filtering-list">
        <li>
          <input type="checkbox" />
          <span>갤럭시 S</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>갤럭시 Z</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>갤럭시 Z</span>
        </li>
      </div>
    </div>
  );
};

export default ProductsFilter;
