import React from "react";
import { useLocation } from "react-router-dom";
import FormLayout from "./Form/FormLayout";
import AuthHeader from "../../components/AuthHeader";
import "./sign.scss";

const Sign = () => {
  const location = useLocation();
  return (
    <>
      <AuthHeader />
      <main className="sign">
        {location.pathname === "/signin" && (
          <FormLayout
            text={SIGNIN.text}
            isSubtext={SIGNIN.isSubtext}
            signCheck={SIGNIN.signCheck}
          />
        )}
        {location.pathname === "/signup" && (
          <FormLayout
            text={SIGNUP.text}
            isSubtext={SIGNUP.isSubtext}
            signCheck={SIGNUP.signCheck}
          />
        )}
      </main>
    </>
  );
};

const SIGNIN = {
  text: "삼성계정으로 로그인",
  isSubtext: false,
  signCheck: "signin",
};

const SIGNUP = {
  text: "삼성계정 만들기",
  isSubtext: true,
  signCheck: "signup",
};

export default Sign;
