import React, { useState, useEffect } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosPause,
  IoIosPlay,
} from "react-icons/io";
import { NAVIGATOR } from "../data";
import "./MainCarousel.scss";

const LAST_CAROUSEL_INDEX = NAVIGATOR.length - 1;
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
        {NAVIGATOR.map((_, idx) => (
          <img
            src={`./images/Main/Hero/fakeImage${idx + 1}.jpg`}
            key={idx}
            alt="fake shot"
          />
        ))}
      </div>
      <ul className="hero-navigator">
        {NAVIGATOR.map((navigator, idx) => (
          <li
            key={idx}
            onClick={() => setCarouselIndex(idx)}
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
