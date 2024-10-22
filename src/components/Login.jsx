import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateForm } from "../utils/formValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSingIn] = useState(true);
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
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
    if (message) return;

    if (!isSignIn) {
      //SignUp User
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "" + errorMessage);
          navigate("/");
        });
    } else {
      // Signed in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user, "signIn");
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
    }

    if (!message) {
      email.current.value = "";
      password.current.value = "";
      if (!isSignIn && username) {
        username.current.value = "";
      }
    }
  };

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
              type="password"
              id="password"
              name="password"
              ref={password}
              placeholder="Password"
            />
            <p className="errors">{formError.password}</p>
          </div>
          <button id="submit" onClick={submitHandler}>
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
