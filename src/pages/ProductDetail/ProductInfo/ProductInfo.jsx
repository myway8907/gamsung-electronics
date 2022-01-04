import {
  AiOutlineHeart,
  AiOutlineDownload,
  AiOutlineStar,
} from "react-icons/ai";
import { BiShareAlt, BiPencil } from "react-icons/bi";
import Dropdown from "./Dropdown/Dropdown";
import "./ProductInfo.scss";

const STARS = Array(5).fill(0);

const ProductInfo = ({ product }) => {
  const { name, price, serial_number, storage } = product;

  return (
    <section className="product-info">
      <header className="info-header">
        <span className="sale">청구할인</span>
        <BiShareAlt />
        <AiOutlineHeart />
      </header>

      <h2>{name}</h2>
      <p className="serial-number">{serial_number}</p>

      <div className="product-reviews">
        <div className="reviews-star">
          {STARS.map((_, idx) => (
            <AiOutlineStar key={idx} />
          ))}
          <span>4.5 &nbsp;(52건)</span>
        </div>
        <span className="write-reviews">
          <BiPencil size={16} />
          상풍명 쓰기
        </span>
      </div>

      <div className="price-info">
        <span className="price-title">판매가</span>
        <span className="price">{price.toLocaleString()}원</span>
      </div>

      <div className="detail-coupon">
        <span>회원님께 드리는 혜택!</span>
        <button>
          <span>쿠폰 받기</span>
          <AiOutlineDownload size={24} />
        </button>
      </div>

      <form>
        <Dropdown title="색상" desc="팬텀 블랙">
          <div className="circle" />
          <div className="circle" style={{ "--bg": "rgb(34, 54, 49)" }} />
          <div className="circle" style={{ "--bg": "rgb(195, 195, 195)" }} />
        </Dropdown>

        <Dropdown title="메모리" desc={`${storage}GB`}>
          <span>256GB</span>
          <span>512GB</span>
        </Dropdown>

        <div className="counter">
          <span className="minus">-</span>
          <input type="number" />
          <span className="plus">+</span>
        </div>
      </form>

      <Dropdown
        title={`삼성 멤버십 ${(price * 0.002 + 60000).toFixed(0)}포인트 적립`}
      />

      <Dropdown title="삼성카드 5%" />

      <div className="price-info">
        <span className="price-title bold">판매가</span>
        <span className="price">{price.toLocaleString()}원</span>
      </div>

      <hr />

      <button>장바구니</button>
      <button>바로구매</button>
    </section>
  );
};

export default ProductInfo;
