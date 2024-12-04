import React from "react";
import { bgImage } from "../assets/images";
import Login from "./Login";

const Homepage = () => {
  return (
    <>
      <section className="homepageBanner">
        <div className="secWrapper">
          <div className="imgBox">
            <img src={bgImage} alt="" />
          </div>
          <div className="contentBox">
            <Login />
            {/* <h1>Unlimited movies, TV shows, and more</h1>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
