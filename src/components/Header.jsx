import React, { useEffect, useState } from "react";
import { netflixLogo, userDp } from "../assets/images";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { gptVal } from "../store/gptSlice";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const isGpt = useSelector((store) => store.gptSearch);

  useEffect(() => {
    //Use Handle from Top Level by Redux
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //OnAuthState Listener Remove When Header unmount
    return () => unsubcribe();
  }, [onAuthStateChanged]);

  const signOutHandle = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        setIsDropDownOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dropdownHandler = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handlerGptSearch = () => {
    dispatch(gptVal(true));
  };

  return (
    <header>
      <div className="secWrapper">
        <div className="secContent">
          <NavLink to={"/browse"} className="logoBox">
            <img src={netflixLogo} alt="" />
          </NavLink>
          {user && (
            <div className="rightContainer">
              <div className="redCta">
                <button onClick={handlerGptSearch}>
                  {isGpt.isGptBtn ? "Homepage" : "GPT Search"}{" "}
                </button>
              </div>
              <div className="dropdownBox" onClick={dropdownHandler}>
                <div className="imgBox">
                  <img src={userDp} alt="" />
                </div>
                <svg
                  width="40"
                  height="38"
                  viewBox="0 0 40 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_248_272)">
                    <path
                      opacity="0.8"
                      d="M2 16L20 33L38 16L2 16Z"
                      fill="#20242A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_248_272">
                      <rect
                        width="38"
                        height="40"
                        fill="white"
                        transform="translate(40) rotate(90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {isDropDownOpen ? (
                <div className="dropdwonBody">
                  <div className="userName">
                    <img src={userDp} alt="" />
                    <p>{user?.displayName}</p>
                  </div>
                  <div className="loginButton">
                    <p onClick={signOutHandle}>Sign out of Netflix</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
