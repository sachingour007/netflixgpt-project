import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { validateForm } from "../utils/formValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
  const [isSignIn, setIsSingIn] = useState(true);
  const [loginData, setLoginData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const formHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setLoginData({
      username: "",
      email: "",
      password: "",
    });
    setFormError({
      email: "",
      password: "",
    });
  }, [isSignIn]);

  const toggleSignInForm = () => {
    setIsSingIn(!isSignIn);
  };
  const submitHandler = async () => {
    const { email, password, username } = loginData;
    const message = validateForm(email, password);
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
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormError({ email: "", password: errorMessage });
        });
    } else {
      // Signed in
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user, "signIn");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFormError({ email: "", password: errorMessage });
          console.log(errorCode + " " + errorMessage);
        });
    }
    if (!message) {
      setLoginData({
        username: "",
        email: "",
        password: "",
      });
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
                value={loginData.username}
                placeholder="Username"
                onChange={formHandler}
              />
            </div>
          )}
          <div className="fieldContainer">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email or mobile number"
              value={loginData.email}
              onChange={formHandler}
            />
            <p className="errors">{formError.email}</p>
          </div>
          <div className="fieldContainer">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={formHandler}
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
