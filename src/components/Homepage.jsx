import React from "react";
import { bgImage } from "../assets/images";

const Homepage = () => {
  return (
    <>
      <section className="homepageBanner">
        <div className="secWrapper">
          <div className="imgBox">
            <img src={bgImage} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
