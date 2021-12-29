import "./Story.scss";

const Story = () => {
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
      <div className="story-images" style={{ "--current": `${false}` }}>
        <img src="./images/Main/Story/Story1.jpg" alt="fake story" />
        <img src="./images/Main/Story/Story2.jpg" alt="fake story" />
        <img src="./images/Main/Story/Story3.jpg" alt="fake story" />
        <img src="./images/Main/Story/Story4.jpg" alt="fake story" />
      </div>
      <ul className="story-lists">
        <li className="story" data-idx="1">
          01 삼성 갤럭시와 메종 키츠네 여우의 만남
        </li>
        <li className="story" data-idx="2">
          02 #함께 만드는 더 나은 미래
        </li>
        <li className="story" data-idx="3">
          03 #우리가 집에서 일하는 새로운 방법
        </li>
        <li className="story" data-idx="4">
          04 #승리를 위한 완벽한 준비
        </li>
      </ul>
    </section>
  );
};

export default Story;
