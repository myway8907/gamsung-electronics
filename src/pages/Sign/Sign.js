import React from "react";
import { useLocation } from "react-router-dom";
import FormLayout from "./Form/FormLayout";
import AuthHeader from "../../components/AuthHeader";
import "./sign.scss";

const Sign = () => {
  const location = useLocation();
  const signLocation = location.pathname === "/signup" ? SIGNUP : SIGNIN;

  return (
    <>
      <AuthHeader />
      <main className="sign">
        <FormLayout
          text={signLocation.text}
          isSubtext={signLocation.isSubtext}
          signCheck={signLocation.signCheck}
          signText={signLocation.signText}
          signLink={signLocation.signLink}
        />
      </main>
    </>
  );
};

const SIGNIN = {
  text: "삼성계정으로 로그인",
  isSubtext: false,
  signCheck: "signin",
  signText: "계정이 없으신가요?",
  signLink: "signup",
};

const SIGNUP = {
  text: "삼성계정 만들기",
  isSubtext: true,
  signCheck: "signup",
  signText: "계정이 있으신가요?",
  signLink: "signin",
};

export default Sign;
