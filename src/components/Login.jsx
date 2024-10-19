import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSingIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSingIn(!isSignIn);
  };

  return (
    <div className="loginContainer">
      <h2>{isSignIn ? "Sign In" : "Sing Out"}</h2>
      <div className="formBox">
        <form action="">
          {!isSignIn && (
            <div className="fieldContainer">
              <input type="text" id="username" name="username" />
              <label htmlFor="username">Username</label>
            </div>
          )}
          <div className="fieldContainer">
            <input type="text" id="email" name="email" />
            <label htmlFor="email">Email or mobile number</label>
          </div>
          <div className="fieldContainer">
            <input type="text" id="password" name="password" />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" id="submit">
            Sing in
          </button>
        </form>
        <div className="singInChecker">
          {isSignIn ? (
            <p>
              New to Netflix?
              <Link onClick={toggleSignInForm}> Sign up now.</Link>
            </p>
          ) : (
            <p>
              If already registered
              <Link onClick={toggleSignInForm}> Please Sign In now.</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
