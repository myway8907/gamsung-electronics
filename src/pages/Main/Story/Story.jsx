import React, { useState } from "react";
import { STORY } from "../data";
import "./Story.scss";

const Story = () => {
  const [currIdx, setCurrIdx] = useState(1);
  return (
    <section className="main-story">
      <header className="story-header">
        <h2>스토리</h2>
        <p>
          당신의 삶을 특별하게 해줄 새로운 아이디어
          <br />
          스마트하게 사는 새로운 방법을 알아보세요
        </p>
      </header>
      <div className="story-images">
        <img src={`./images/Main/Story/Story${currIdx}.jpg`} alt="fake story" />
      </div>
      <ul className="story-lists">
        {STORY.map((story, idx) => (
          <li
            key={idx}
            className="story"
            onMouseEnter={() => setCurrIdx(idx + 1)}
          >
            {story.story}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Story;
