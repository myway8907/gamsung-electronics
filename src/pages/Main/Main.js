import React from "react";
import "./Main.scss";
import MainCarousel from "./MainCarousel/MainCarousel";
import ServiceCard from "./ServiceCard/ServiceCard";

const Main = () => {
  return (
    <main className="">
      <MainCarousel />
      <ServiceCard />
    </main>
  );
};

export default Main;
