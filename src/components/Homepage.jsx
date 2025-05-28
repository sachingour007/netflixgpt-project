import React, { useState } from "react";
import { bgImage } from "../assets/images";
import Login from "./Login";

const Homepage = () => {
  return (
    <>
      <section className="homepageBanner">
        <div className="secWrapper">
          <div className="imgBox">
            <img src={bgImage} alt="" className="desktop" />
          </div>
          <div className="contentBox">
            <Login />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
