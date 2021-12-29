import React from "react";
import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="productCard">
      <img className="product-image" src="images/Products/galaxy-s20.jpg" />
      {/* 나중에 색상으로 사진 바꾸는 경우 대비 */}
      {/* <ul className="product-color">
        <li>
          <input></input>
          <label>
            <span></span>
          </label>
        </li>
        <li>
          <input></input>
          <label>
            <span></span>
          </label>
        </li>
        <li>
          <input></input>
          <label>
            <span></span>
          </label>
        </li>
      </ul> */}
      <div className="product-color-container">
        {/* <div className="product-color-collection"> */}
        <span className="product-color-selector"></span>
        <span className="product-color-selector"></span>
        <span className="product-color-selector"></span>
        {/* </div> */}
      </div>
      <div className="product-storage">
        <div className="product-storage-selector">256GB</div>
        <div className="product-storage-selector">512GB</div>
      </div>
      <div className="product-title">
        <span className="product-title-text">갤럭시 Z 폴드3 5G 자급제</span>
        <span className="product-model">SM-F926NZKAKOO</span>
      </div>
      <div className="product-price">
        <span className="price-number">1,998,700</span>
        <span className="price-currency">원</span>
      </div>
      <div className="product-purchase">
        <form>
          <button className="purchase-button" type="button">
            구매하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCard;
