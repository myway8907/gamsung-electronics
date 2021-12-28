import React from "react";
import MainCarousel from "./MainCarousel/MainCarousel";
import PreviewTab from "./PreviewTab/PreviewTab";
import "./Main.scss";

const Main = () => {
  return (
    <main className="">
      <MainCarousel />
      <PreviewTab />
    </main>
  );
};

export default Main;
