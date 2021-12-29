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
  const nextIndex =
    carouselIndex === LAST_CAROUSEL_INDEX ? 0 : carouselIndex + 1;

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
    if (!e.target.dataset.idx) return;
    const nextIndex = parseInt(e.target?.dataset?.idx);
    setCarouselIndex(nextIndex);
  };

  const pauseAutoSlide = () => {
    setIsPlaying(false);
    clearTimeout(timer);
  };

  const playAutoSlide = () => {
    setIsPlaying(true);
    setTimerForNextSlide();
  };

  const setTimerForNextSlide = () => {
    timer = setTimeout(() => {
      setCarouselIndex(nextIndex);
    }, 2500);
  };

  useEffect(() => {
    clearTimeout(timer);
    if (!isPlaying) return;
    setTimerForNextSlide();
    return () => clearTimeout(timer);
  }, [carouselIndex]);

  return (
    <section className="hero" style={{ "--currIdx": `${carouselIndex}` }}>
      <IoIosArrowBack size={52} className="arrow" onClick={slideToLeft} />
      <IoIosArrowForward size={52} className="arrow" onClick={slideToRight} />
      <div className="hero-carousel">
        {IMGARR.map((_, idx) => (
          <img
            src={`./images/Main/Hero/fakeImage${idx + 1}.jpg`}
            key={idx}
            alt="fake shot"
          />
        ))}
      </div>
      <ul className="hero-navigator" onClick={navigateToSpecificIndex}>
        {NAVIGATOR.map((navigator, idx) => (
          <li
            key={idx}
            data-idx={idx}
            className={`hero-navigator-decoration ${
              isPlaying && carouselIndex === idx ? "current" : ""
            }`}
          >
            {navigator}
          </li>
        ))}
        {isPlaying ? (
          <IoIosPause size={20} onClick={pauseAutoSlide} />
        ) : (
          <IoIosPlay size={20} onClick={playAutoSlide} />
        )}
      </ul>
    </section>
  );
};

export default MainCarousel;
