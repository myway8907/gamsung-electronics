import React from "react";
import "./ProductsFilter.scss";

const ProductsFilter = () => {
  return (
    <div className="productFilter">
      <span className="product-type-filter">유형</span>
      {/* <div className="expand-button-container">
        <div className="plus-button"></div>
        <div className="plus-button"></div>
        <div className="plus-button"></div>
      </div> */}
      <input className="expand-input" id="expand-button" type="checkbox" />
      <label for="expand-button">
        {/* <div className="expand-button-container"> */}
        <div className="plus-button 1"></div>
        <div className="plus-button 2"></div>
        <div className="plus-button 3"></div>
        <div className="plus-button 4"></div>
        {/* </div> */}
      </label>
      <div className="filtering-list">
        <li>
          <input type="checkbox"></input>
          <span>갤럭시 S</span>
        </li>
        <li>
          <input type="checkbox"></input>
          <span>갤럭시 Z</span>
        </li>
        <li>
          <input type="checkbox"></input>
          <span>갤럭시 Z</span>
        </li>
      </div>
    </div>
  );
};

export default ProductsFilter;
