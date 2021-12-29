import React from "react";
import "./Products.scss";
import ProductCard from "./ProductCard/ProductCard";
import ProductsFilter from "./Filter/ProductsFilter";

const Products = () => {
  return (
    <div className="products">
      <div className="top-image-container"></div>
      <div className="buffer-layer"></div>
      <div className="search-status-layer">
        <span>검색결과:</span>
        <span>9개</span>
      </div>
      <main className="main-container">
        <div className="aside-filter-container">
          <ProductsFilter />
        </div>
        <div className="product-list-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
    </div>
  );
};

export default Products;
