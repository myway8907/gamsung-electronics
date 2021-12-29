import React from "react";
import MainCarousel from "./MainCarousel/MainCarousel";
import Services from "./Services/Services";
import PreviewTab from "./PreviewTab/PreviewTab";
import Story from "./Story/Story";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main-container">
      <MainCarousel />
      <Services />
      <PreviewTab />
      <Story />
    </main>
  );
};

export default Main;
