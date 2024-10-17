import React from "react";
import { netflixLogo } from "../assets/images";

const Header = () => {
  return (
    <header>
      <div className="secWrapper">
        <div className="secContent">
          <div className="logoBox">
            <img src={netflixLogo} alt="" />
          </div>
          <div className="loginButton" >
            <button>Sing In</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
