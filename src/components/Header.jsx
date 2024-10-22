import React from "react";
import { netflixLogo } from "../assets/images";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { removeUser } from "../store/userSlice";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const signOutHandle = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header>
      <div className="secWrapper">
        <div className="secContent">
          <div className="logoBox">
            <img src={netflixLogo} alt="" />
          </div>
          {user && (
            <div className="loginButton">
              <button onClick={signOutHandle}>Sing Out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
