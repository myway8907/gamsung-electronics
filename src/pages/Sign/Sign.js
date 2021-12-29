import React from "react";
import Form from "./Form/Form";
import AuthHeader from "../../components/AuthHeader";
import "./sign.scss";

const Sign = () => {
  return (
    <>
      <AuthHeader />
      <main className="sign">
        <div>
          <section>
            <h1>삼성계정 만들기</h1>
            <span>계정으로 사용할 이메일 주소를 입력하세요.</span>
            <Form />
          </section>
        </div>
      </main>
    </>
  );
};

export default Sign;
