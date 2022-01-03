import React from "react";
import { Link } from "react-router-dom";
import "./auth_header.scss";

const AuthHeader = () => {
  return (
    <header className="auth-header">
      <div>
        <h2>
          <Link to="/">SAMSUNG</Link>
        </h2>
        <span>Account</span>
      </div>
    </header>
  );
};

export default AuthHeader;
