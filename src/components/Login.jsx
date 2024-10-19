import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { validateForm } from "../utils/formValidation";

const Login = () => {
  const [isSignIn, setIsSingIn] = useState(true);
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSingIn(!isSignIn);
  };
  const submitHandler = () => {
    const message = validateForm(email.current.value, password.current.value);
    if (message) {
      setFormError({
        email: message.email || "",
        password: message.password || "",
      });
    } else {
      setFormError({
        email: "",
        password: "",
      });
    }
    if (!message) {
      email.current.value = "";
      password.current.value = "";
      username.current.valu = "";
    }
  };

  useEffect(() => {}, [formError]);
  console.log(formError);

  return (
    <div className="loginContainer">
      <h2>{isSignIn ? "Sign In" : "Sing Out"}</h2>
      <div className="formBox">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {!isSignIn && (
            <div className="fieldContainer">
              <input
                type="text"
                id="username"
                name="username"
                ref={username}
                placeholder="Username"
              />
            </div>
          )}
          <div className="fieldContainer">
            <input
              type="text"
              id="email"
              name="email"
              ref={email}
              placeholder="Email or mobile number"
            />
            <p className="errors">{formError.email}</p>
          </div>
          <div className="fieldContainer">
            <input
              type="text"
              id="password"
              name="password"
              ref={password}
              placeholder="Password"
            />
            <p className="errors">{formError.password}</p>
          </div>
          <button type="submit" id="submit" onClick={submitHandler}>
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
              If already registered,
              <Link onClick={toggleSignInForm}> Please Sign In now.</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
