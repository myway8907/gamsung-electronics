import React, { useState, useEffect } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosPause,
  IoIosPlay,
} from "react-icons/io";
import "./MainCarousel.scss";

const LAST_CAROUSEL_INDEX = 6;
const NAVIGATOR = [
  "BESPOKE큐커",
  "Galaxy book",
  "공동구매",
  "갤럭시 Z 플립3",
  "갤럭시 워치 4",
  "Neo QLED",
  "Team Samsung",
];
const IMGARR = Array(7).fill(0);
let timer = 0;

const MainCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const showNextSlide = () => {
    let nextIndex = carouselIndex + 1;
    if (carouselIndex >= LAST_CAROUSEL_INDEX) {
      nextIndex = 0;
    }
    timer = setTimeout(() => setCarouselIndex(nextIndex), 2500);
  };

  const slideToLeft = () => {
    if (carouselIndex === 0) return;
    setCarouselIndex(prevIndex => prevIndex - 1);
    clearTimeout(timer);
  };

  const slideToRight = () => {
    if (carouselIndex === LAST_CAROUSEL_INDEX) return;
    setCarouselIndex(prevIndex => prevIndex + 1);
    clearTimeout(timer);
  };

  const navigateToSpecificIndex = e => {
    const nextIndex = parseInt(e.target?.dataset?.idx);
    setCarouselIndex(nextIndex);
  };

  useEffect(() => {
    if (!isPlaying) return;
    showNextSlide();
    return () => clearTimeout(timer);
  }, [carouselIndex, isPlaying]);

  return (
    <section className="hero" style={{ "--currIdx": `${carouselIndex}` }}>
      <IoIosArrowBack size={52} className="arrow" onClick={slideToLeft} />
      <IoIosArrowForward size={52} className="arrow" onClick={slideToRight} />
      <div className="hero__carousel">
        {IMGARR.map((_, idx) => (
          <img
            src={`./images/Main/Hero/fakeImage${idx + 1}.jpg`}
            key={idx}
            alt="fake shot"
          />
        ))}
      </div>
      <ul className="hero__navigator" onClick={navigateToSpecificIndex}>
        {NAVIGATOR.map((navigator, idx) => (
          <li
            key={idx}
            data-idx={idx}
            className={`hero__navigator-decoration ${
              carouselIndex === idx ? "current" : ""
            }`}
          >
            {navigator}
          </li>
        ))}
        {isPlaying ? (
          <IoIosPause size={20} onClick={e => setIsPlaying(prev => !prev)} />
        ) : (
          <IoIosPlay size={20} onClick={e => setIsPlaying(prev => !prev)} />
        )}
      </ul>
    </section>
  );
};

export default MainCarousel;
