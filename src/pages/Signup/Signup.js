import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader";
import "./signup.scss";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const emailInput = e => setEmail(e.target.value);
  const emailValidate = () => {
    const regExpEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return regExpEmail.test(email);
  };

  const passwordInput = e => setPassword(e.target.value);
  const passwordCheckInput = e => setPasswordCheck(e.target.value);
  const passwordValidate = () => {
    const regExpPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
    return regExpPassword.test(password) && password === passwordCheck;
  };
  const passwordCheckValidate = () => password === passwordCheck;

  const signupValidate = () =>
    emailValidate() && passwordValidate() && passwordCheckValidate();

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

  return (
    <>
      <AuthHeader />
      <main className="signup">
        <div>
          <section>
            <h1>삼성계정 만들기</h1>
            <span>계정으로 사용할 이메일 주소를 입력하세요.</span>
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
              <label htmlFor="password-check">
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  autoComplete="off"
                  onChange={passwordCheckInput}
                />
                <span>비밀번호 확인</span>
              </label>
              <label htmlFor="first-name">
                <input
                  type="text"
                  placeholder="성"
                  onChange={e => setFirstName(e.target.value)}
                />
                <span>성</span>
              </label>
              <label htmlFor="last-name">
                <input
                  type="text"
                  placeholder="이름"
                  onChange={e => setLastName(e.target.value)}
                />
                <span>이름</span>
              </label>
              <div className="signup-birth">
                <label htmlFor="year">
                  <input
                    type="text"
                    placeholder="년"
                    onChange={e => setYear(e.target.value)}
                  />
                  <span>년</span>
                </label>
                <label htmlFor="month">
                  <input
                    type="text"
                    placeholder="월"
                    onChange={e => setMonth(e.target.value)}
                  />
                  <span>월</span>
                </label>
                <label htmlFor="day">
                  <input
                    type="text"
                    placeholder="일"
                    onChange={e => setDay(e.target.value)}
                  />
                  <span>일</span>
                </label>
              </div>
              <div className="signup-button">
                <button>
                  <Link to="/">뒤로</Link>
                </button>
                <button
                  className={signupValidate() ? "active" : "inactive"}
                  disabled={!signupValidate()}
                  onClick={signupRequest}
                >
                  다음
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
};

export default Signup;
