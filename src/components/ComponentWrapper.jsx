import React from "react";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

const ComponentWrapper = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <>{children}</>
    </>
  );
};

export default ComponentWrapper;
