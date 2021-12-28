import React, { useState } from "react";
import "./PreviewTab.scss";

const TABS = [
  "Galaxy Z Flip3 5G",
  "Galaxy Z Fold3 5G",
  "갤럭시 캠퍼스 스토어",
  "Galaxy Academy",
  "갤럭시 스튜디오",
];
const SERVICE_IMG_INDEXES = Array(5).fill(0);

const ServiceCard = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const navigateToIndex = e => {
    const nextIndex = e.target?.dataset?.idx;
    setCurrentIdx(parseInt(nextIndex));
  };

  return (
    <section className="preview">
      <div className="preview-tabs">
        <h2>모바일 & Tablet</h2>
        <ul onClick={navigateToIndex}>
          {TABS.map((tab, idx) => (
            <li
              key={idx}
              data-idx={idx}
              className={`tab ${currentIdx === idx ? "current" : ""}`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <ul className="preview-images" style={{ "--currIdx": `${currentIdx}` }}>
        {SERVICE_IMG_INDEXES.map((_, idx) => (
          <img
            src={`./images/Main/ServiceCard/serviceCard${idx + 1}.jpg`}
            alt="fake service"
            key={idx}
          />
        ))}
      </ul>
      <div className="more-info">
        <h2>갤럭시 온라인 체험</h2>
        <p>나만의 공간에서 즐기는 와이드 스크린</p>
        <button>더 알아보기 </button>
      </div>
    </section>
  );
};

export default ServiceCard;
