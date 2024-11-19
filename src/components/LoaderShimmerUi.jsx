import React from "react";

const LoaderShimmerUi = () => {
  return (
    <div className="main_shimmer">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div className="blank_card" key={index}></div>
        ))}
    </div>
  );
};

export default LoaderShimmerUi;
