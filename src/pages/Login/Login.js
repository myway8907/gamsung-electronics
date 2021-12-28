import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInput = e => setEmail(e.target.value);
  const emailValidate = () => {
    const regExpEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return regExpEmail.test(email);
  };

  const passwordInput = e => setPassword(e.target.value);
  const passwordValidate = () => {
    const regExpPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    return regExpPassword.test(password);
  };

  const loginValidate = () => emailValidate() && passwordValidate();

  const loginRequest = e => {
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
  return (
    <>
      <AuthHeader />
      <main className="login">
        <div>
          <section>
            <h1>삼성계정으로 로그인</h1>
            <form>
              <label htmlFor="email">
                <input
                  type="email"
                  placeholder="이메일"
                  onChange={emailInput}
                />
                <span>이메일</span>
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  placeholder="비밀번호"
                  autoComplete="off"
                  onChange={passwordInput}
                />
                <span>비밀번호</span>
              </label>
              <button
                className={loginValidate() ? "" : "inactive"}
                disabled={!loginValidate()}
                // onClick={loginRequest}
              >
                로그인
              </button>
            </form>
            <Link to="/signup">계정 생성</Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;
