import React, { useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import Navigator from "../components/Navigator/Navigator";
import { TABS } from "../data";
import "./PreviewTab.scss";

const PREVIEW_ENDPOINT = "./images/Main/ServiceCard/serviceCard";

const ServiceCard = () => {
  const [currIdx, setCurrIdx] = useState(0);

  return (
    <section className="preview">
      <Carousel
        currIdx={currIdx}
        tabs={TABS}
        imgEndPoint={PREVIEW_ENDPOINT}
        height="105vh"
      >
        <Navigator
          currIdx={currIdx}
          setCurrIdx={setCurrIdx}
          tabs={TABS}
          top="5%"
          color="#000"
        >
          <h2>모바일 & Tablet</h2>
        </Navigator>
      </Carousel>
      <div className="more-info">
        <h2>갤럭시 온라인 체험</h2>
        <p>나만의 공간에서 즐기는 와이드 스크린</p>
        <button>더 알아보기 </button>
      </div>
    </section>
  );
};

export default ServiceCard;
