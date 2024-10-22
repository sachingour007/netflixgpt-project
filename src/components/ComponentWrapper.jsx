import React from "react";
import Header from "./Header";

const ComponentWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
};

export default ComponentWrapper;
