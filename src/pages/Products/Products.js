import React, { useEffect, useState } from "react";
import ProductsFilter from "./Filter/ProductsFilter";
import ProductCard from "./ProductCard/ProductCard";
import "./Products.scss";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/Products/mockData.json", {
      method: "GET",
    })
      .then(response => response.json())
      .then(result => {
        setProducts(result);
      });
  }, []);

  return (
    <div className="products">
      <div className="top-image-container" />
      <div className="buffer-layer" />
      <div className="search-status-layer">
        <span>검색결과:</span>
        <span>9개</span>
      </div>
      <main className="main-container">
        <div className="aside-filter-container">
          <ProductsFilter />
        </div>
        <div className="product-list-container">
          {products.map(
            ({ detail_images, name, serial_number, price, storage }) => (
              <ProductCard
                key={serial_number}
                detail_images={detail_images[0]}
                name={name}
                serial_number={serial_number}
                price={price}
                storage={storage}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
