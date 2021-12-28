import React from "react";
import { Link } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader";
import "./login.scss";

const Login = () => {
  return (
    <>
      <AuthHeader />
      <main className="login">
        <div>
          <section>
            <h1>삼성계정으로 로그인</h1>
            <form>
              <label htmlFor="email">
                <input type="email" placeholder="이메일" />
                <span>이메일</span>
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  placeholder="비밀번호"
                  autoComplete="off"
                />
                <span>비밀번호</span>
              </label>
              <button>로그인</button>
            </form>
            <Link to="/signup">계정 생성</Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;
