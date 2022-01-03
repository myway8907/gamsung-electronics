import React, { useState, useEffect } from "react";
import FilterElement from "./FilterElement/FilterElement";
import "./ProductsFilter.scss";

const ProductsFilter = ({ products }) => {
  const [productType, setType] = useState([]);

  // const types = [];

  // const makeTypeList = para => {
  //   if (para.length !== 0) {
  //     for (let i = 0; i < para.length; i++) {
  //       types.includes(para[i].subcategory)
  //         ? console.log(`It's alread in it`)
  //         : types.push(para[i].subcategory);
  //     }
  //   }
  // };
  // useEffect(makeTypeList(products));

  return (
    <div className="productFilter">
      <span className="product-type-filter">유형</span>
      <input className="expand-input" id="expand-button" type="checkbox" />
      <label htmlfor="expand-button">
        <div className="expand-button-container">
          <div className="plus-button 1" />
          <div className="plus-button 2" />
          <div className="plus-button 3" />
        </div>
      </label>
      <ul className="filtering-list">
        {products.map(product => (
          <FilterElement
            key={product.serial_number}
            subcategory={product.subcategory}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductsFilter;
