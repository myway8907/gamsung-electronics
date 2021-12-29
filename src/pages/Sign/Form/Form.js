import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "./Input/Input";
// import EmailInput from "./Input/SignInput/EmailInput";
// import PasswordInput from "./Input/SignInput/PasswordInput";
// import PasswordCheckInput from "./Input/SignupInput/PasswordCheckInput";
// import FirstNameInput from "./Input/SignupInput/FirstNameInput";
// import LastNameInput from "./Input/SignupInput/LastNameInput";
// import YearInput from "./Input/SignupInput/birth/YearInput";
// import MonthInput from "./Input/SignupInput/birth/MonthInput";
// import DayInput from "./Input/SignupInput/birth/DayInput";

const Form = () => {
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
  const { passwordCheck, year, month, day } = signupInfo;

  const emailInput = e =>
    setSignInfo({
      ...signInfo,
      email: e.target.value,
    });
  const regExpEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const emailValidate = regExpEmail.test(email);

  const passwordInput = e =>
    setSignInfo({
      ...signInfo,
      password: e.target.value,
    });
  const passwordCheckInput = e =>
    setSignupInfo({
      ...signupInfo,
      passwordCheck: e.target.value,
    });
  const regExpPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
  const passwordValidate =
    regExpPassword.test(password) && password === passwordCheck;
  const passwordCheckValidate = password === passwordCheck;

  const firstNameInput = e =>
    setSignupInfo({
      ...signupInfo,
      firstName: e.target.value,
    });

  const lastNameInput = e =>
    setSignupInfo({
      ...signupInfo,
      lastName: e.target.value,
    });

  const yearInput = e =>
    setSignupInfo({
      ...signupInfo,
      year: e.target.value,
    });

  const monthInput = e =>
    setSignupInfo({
      ...signupInfo,
      month: e.target.value,
    });

  const dayInput = e =>
    setSignupInfo({
      ...signupInfo,
      day: e.target.value,
    });

  const yearCheck = 1900 <= year && year <= 2021;
  const monthCheck = 1 <= month && month <= 12;
  const dayCheck = 1 <= day && day <= 31;
  const birthValidate = yearCheck && monthCheck && dayCheck;

  const signupValidate =
    emailValidate && passwordValidate && birthValidate && passwordCheckValidate;

  // const signinRequest = e => {
  //   fetch("http://10.58.0.137:8000/users/signin", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: signInfo.email,
  //       password: signInfo.password,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.MESSAGE === "SUCCESS") {
  //         localStorage.setItem("access_token", data.access_token);
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //   e.preventDefault();
  // };

  // const signupRequest = e => {
  //   fetch("http://10.58.0.137:8000/users/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: signInfo.email,
  //       password: signInfo.password,
  //       first_name: signupInfo.firstName,
  //       last_name: signupInfo.lastName,
  //       date_of_birth: `${signupInfo.year}-${signupInfo.month}-${signupInfo.day}`,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.MESSAGE === "SUCCESS") {
  //         localStorage.setItem("access_token", data.access_token);
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //   e.preventDefault();
  // };

  const SIGNININPUTS = [
    { id: 1, type: "email", text: "이메일", onchange: emailInput },
    { id: 2, type: "password", text: "비밀번호", onchange: passwordInput },
  ];

  const SIGNUPINPUTS = [
    ...SIGNININPUTS,
    {
      id: 3,
      type: "password",
      text: "비밀번호 확인",
      onchange: passwordCheckInput,
    },
    {
      id: 4,
      type: "text",
      text: "성",
      onchange: lastNameInput,
    },
    {
      id: 5,
      type: "text",
      text: "이름",
      onchange: firstNameInput,
    },
  ];

  const SIGNUPBIRTH = [
    {
      id: 6,
      type: "text",
      text: "년",
      onchange: yearInput,
    },
    {
      id: 7,
      type: "text",
      text: "월",
      onchange: monthInput,
    },
    {
      id: 8,
      type: "text",
      text: "일",
      onchange: dayInput,
    },
  ];

  return (
    <form>
      {SIGNUPINPUTS.map(ele => {
        return (
          <Input
            key={ele.id}
            type={ele.type}
            text={ele.text}
            onchange={ele.onchange}
          />
        );
      })}
      <div className="sign-signup-birth">
        {SIGNUPBIRTH.map(ele => {
          return (
            <Input
              key={ele.id}
              type={ele.type}
              text={ele.text}
              onchange={ele.onchange}
            />
          );
        })}
      </div>
      <div className="sign-signup-button">
        <button>
          <Link to="/">뒤로</Link>
        </button>
        <button
          className={signupValidate ? "active" : "inactive"}
          disabled={!signupValidate}
          // onClick={signupRequest}
        >
          다음
        </button>
      </div>
    </form>
  );
};

export default Form;
