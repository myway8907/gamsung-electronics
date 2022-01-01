import React, { useState } from "react";
import SignInput from "./SignInput/SignInput";
import "./SignForm.scss";

const SignForm = ({ signCheck }) => {
  const [signInfo, setSignInfo] = useState({ email: "", password: "" });
  const [signupInfo, setSignupInfo] = useState({
    passwordCheck: "",
    firstName: "",
    lastName: "",
    year: "",
    month: "",
    day: "",
  });

  const { email, password } = signInfo;
  const { passwordCheck, firstName, lastName, year, month, day } = signupInfo;

  const signInput = e => {
    const { name, value } = e.target;
    setSignInfo({
      ...signInfo,
      [name]: value,
    });
  };

  const signupInput = e => {
    const { name, value } = e.target;
    setSignupInfo({
      ...signupInfo,
      [name]: value,
    });
  };

  const regExpEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const emailValidate = regExpEmail.test(email);

  const regExpPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
  const passwordValidate = regExpPassword.test(password);
  const passwordCheckValidate = password === passwordCheck;

  const yearCheck = 1900 <= year && year <= 2021;
  const monthCheck = 1 <= month && month <= 12;
  const dayCheck = 1 <= day && day <= 31;
  const birthValidate = yearCheck && monthCheck && dayCheck;

  const signinValidate = emailValidate && passwordValidate;
  const signupValidate =
    emailValidate && passwordValidate && birthValidate && passwordCheckValidate;

  const isSign = signCheck === "signup";
  const signValidate = isSign ? signupValidate : signinValidate;

  const signinRequest = e => {
    fetch("http://10.58.0.137:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.MESSAGE === "SUCCESS") {
          localStorage.setItem("access_token", data.access_token);
        }
      })
      .catch(error => {
        console.error(error);
      });
    e.preventDefault();
  };

  const signupRequest = e => {
    fetch("http://10.58.0.137:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        date_of_birth: `${year}-${month}-${day}`,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.MESSAGE === "SUCCESS") {
          localStorage.setItem("access_token", data.access_token);
        }
      })
      .catch(error => {
        console.error(error);
      });
    e.preventDefault();
  };

  const SIGNIN_INPUTS = [
    {
      name: "email",
      type: "email",
      text: "이메일",
      onchange: signInput,
    },
    {
      name: "password",
      type: "password",
      text: "비밀번호",
      onchange: signInput,
    },
  ];

  const SIGNUP_INPUTS = [
    ...SIGNIN_INPUTS,
    {
      name: "passwordCheck",
      type: "password",
      text: "비밀번호 확인",
      onchange: signupInput,
    },
    {
      name: "firstName",
      type: "text",
      text: "성",
      onchange: signupInput,
    },
    {
      name: "lastName",
      type: "text",
      text: "이름",
      onchange: signupInput,
    },
  ];

  const SIGNUP_BIRTH = [
    {
      name: "year",
      type: "text",
      text: "년",
      onchange: signupInput,
    },
    {
      name: "month",
      type: "text",
      text: "월",
      onchange: signupInput,
    },
    {
      name: "day",
      type: "text",
      text: "일",
      onchange: signupInput,
    },
  ];
  const SIGN_CHECK = isSign ? SIGNUP_INPUTS : SIGNIN_INPUTS;
  return (
    <form autoComplete="off" className="sign-form">
      {SIGN_CHECK.map(element => {
        return (
          <SignInput
            key={element.name}
            name={element.name}
            type={element.type}
            text={element.text}
            onchange={element.onchange}
          />
        );
      })}
      <div className="sign-signup-birth">
        {isSign &&
          SIGNUP_BIRTH.map(element => {
            return (
              <SignInput
                key={element.name}
                name={element.name}
                type={element.type}
                text={element.text}
                onchange={element.onchange}
              />
            );
          })}
      </div>
      <div className={`sign-${signCheck}-button`}>
        {isSign && <button>뒤로</button>}
        <button
          className={signValidate ? "active" : "inactive"}
          disabled={!signValidate}
          onClick={isSign ? signupRequest : signinRequest}
        >
          다음
        </button>
      </div>
    </form>
  );
};

export default SignForm;
