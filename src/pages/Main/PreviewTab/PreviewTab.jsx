import React, { useState } from "react";
import { TABS } from "../data";
import "./PreviewTab.scss";

const ServiceCard = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <section className="preview">
      <div className="preview-tabs">
        <h2>모바일 & Tablet</h2>
        <ul>
          {TABS.map((tab, idx) => (
            <li
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`tab ${currentIdx === idx ? "current" : ""}`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <ul className="preview-images" style={{ "--currIdx": `${currentIdx}` }}>
        {TABS.map((_, idx) => (
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
