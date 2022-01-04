import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductCarousel from "./ProductCarousel/ProductCarousel";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();

  // TODO: Fake data -> 추후 백엔드와 통신!
  const [product, setProduct] = useState({
    main_image: "https://fakeimg.pl/250x100/",
    detail_images: [
      "https://fakeimg.pl/500x400/",
      "https://fakeimg.pl/500x400/",
      "https://fakeimg.pl/500x400/",
      "https://fakeimg.pl/500x400/",
    ],
    name: "갤럭시 Z 폴드3 5G 자급제",
    price: 1998700,
    serial_number: "SM-F926NZKAKOO",
    storage: 256,
    subcategory: "갤럭시 Z",
  });

  useEffect(() => {
    // FIXME: 백엔드 endpoint 작성 예정
    const getDetail = async () => {
      await fetch(`https://localhost:products/${id}`, {
        headers: {
          // TODO: Token 저장 양식 맞추어 보기
          "access-token": localStorage.getItem("access-token"),
        },
      })
        .then(res => res.json())
        .then(data => setProduct(data));
    };
    // getDetail();
  }, []);

  return (
    <section className="product-detail">
      <ProductCarousel images={product?.detail_images} />
      <ProductInfo product={product} />
    </section>
  );
};

export default ProductDetail;
