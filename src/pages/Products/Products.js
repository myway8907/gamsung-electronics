import React, { useEffect, useState } from "react";
import ProductsFilter from "./Filter/ProductsFilter";
import ProductCard from "./ProductCard/ProductCard";
import "./Products.scss";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState([]); //화면 표시
  const [filterList, setFilter] = useState([]); //child 전달
  const checkStatus = {}; //현재 check 된 필터 상태정보 받아올 변수

  //상품 전체 데이터 가져오기
  useEffect(() => {
    fetch("./data/Products/mockData.json", {
      method: "GET",
    })
      .then(response => response.json())
      .then(result => {
        const newResult = result.map(element => {
          return element;
        });
        setProducts([...result]);
        setCheckedProducts(newResult);
      });
  }, []);
  //중복되는 subcategory는 없애고, 화면에 출력할 subcategory 항목만 별도의 filterList state에 담음
  //filterList는 추후 state -> 변수로 변경
  useEffect(() => {
    let arr = [];

    products.forEach(({ subcategory }) => {
      if (!arr.includes(subcategory)) {
        arr = [...arr, subcategory];
      }
    });

    setFilter(arr);
  }, [products]);

  // 필터의 체크상태를 받아온 checkStatus 객체를 key value pair의 배열로 만드는 함수
  const extractKeyValue = arr => {
    return Object.entries(arr);
  };

  const insTrueElement = (checkRef, productState) => {
    //checkRef는 checkStatus가 담기고, productState에는 상품전체정보가 담긴 products state가 들어간다
    //필터가 체크되어 있는 경우의 수에 따라, 상품데이터를 필터링하고, 통과된 상품 정보 객체들만 checkedProducts state에 담는다.
    if (checkRef.length === 0 || checkRef.length === 2) {
      setCheckedProducts([...products]);
    } else {
      const bowl = [];
      for (const keyName of checkRef) {
        bowl.push(
          ...productState.filter(product =>
            product.subcategory === keyName ? true : false
          )
        );
      }
      setCheckedProducts(bowl);
    }
  };

  const getStatus = status => {
    const keyValuePair = extractKeyValue(status);

    const onlyTrue = keyValuePair.reduce((acc, current) => {
      if (current[1]) {
        return [...acc, current[0]];
      } else {
        return acc;
      }
    }, []);
    console.log(onlyTrue);
    insTrueElement(onlyTrue, products);
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
            checkStatus={checkStatus}
            filterList={filterList}
            getStatus={getStatus}
          />
        </div>
        <div className="product-list-container">
          {checkedProducts.map(
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
