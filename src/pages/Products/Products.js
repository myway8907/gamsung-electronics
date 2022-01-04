import React, { useEffect, useState } from "react";
import ProductsFilter from "./Filter/ProductsFilter";
import ProductCard from "./ProductCard/ProductCard";
import "./Products.scss";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterList, setFilterList] = useState({}); //child 전달

  //상품 전체 데이터 가져오기
  useEffect(() => {
    fetch("./data/Products/mockData.json", {
      method: "GET",
    })
      .then(response => response.json())
      .then(result => {
        setProducts([...result.results]);
      });
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const emptyObj = {};
      products.forEach(({ subcategory }) => {
        if (!Object.keys(emptyObj).includes(subcategory)) {
          emptyObj[subcategory] = false; //계산된 속성명!!!!!!!
        }
      });
      setFilterList(emptyObj);
    }
  }, [products]);

  const changeCheckStatus = (subcategory, event) => {
    const dummyObj = { ...filterList };
    dummyObj[subcategory] = event.target.checked;
    setFilterList({ ...dummyObj });
  };

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
          <ProductsFilter
            changeCheckStatus={changeCheckStatus}
            filterName={Object.keys(filterList)}
          />
        </div>
        <div className="product-list-container">
          {products.map(
            ({
              subcategory,
              detail_images,
              name,
              serial_number,
              price,
              storage,
            }) => {
              if (!Object.values(filterList).includes(true)) {
                return (
                  <ProductCard
                    key={serial_number}
                    detail_images={detail_images[0]}
                    name={name}
                    serial_number={serial_number}
                    price={price}
                    storage={storage}
                  />
                );
              } else if (filterList[subcategory]) {
                return (
                  <ProductCard
                    key={serial_number}
                    detail_images={detail_images[0]}
                    name={name}
                    serial_number={serial_number}
                    price={price}
                    storage={storage}
                  />
                );
              }
            }
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
