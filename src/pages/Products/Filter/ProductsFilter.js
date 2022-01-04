import React from "react";
import FilterElement from "./FilterElement/FilterElement";
import "./ProductsFilter.scss";

const ProductsFilter = ({ getStatus, checkStatus, filterList }) => {
  // 부모 컴포넌트에서 받아온 checkStatus에 미리 기본값 담아놓기
  for (let i = 0; i < filterList.length; i++) {
    checkStatus[`${filterList[i]}`] = false;
  }
  // 체크된 필터항목이 있는 경우 위의 변수 내용 변경
  const getList = (subcategory, checking) => {
    checkStatus[subcategory] = checking;
    getStatus(checkStatus);
  };

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
          <FilterElement key={idx} subcategory={value} getList={getList} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsFilter;
