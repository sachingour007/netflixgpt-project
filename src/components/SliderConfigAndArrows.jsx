import React from "react";
import { prevArrow } from "../assets/images";

function NextArrow(props) {
  const { className, style, onClick, prevArrow } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <button>
        <img src={prevArrow} alt="" />
      </button>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick, prevArrow } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <button>
        <img src={prevArrow} alt="" />
      </button>
    </div>
  );
}

export const moviesSliderSetting = {
  slidesToShow: 7,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  nextArrow: <NextArrow prevArrow={prevArrow} />,
  prevArrow: <PrevArrow prevArrow={prevArrow} />,
  infinite: true,
  responsive: [
    {
      breakpoint: 1801,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1601,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 821,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
export const genresSlider = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2.2,
      },
    },
  ],
};
export const castSlider = {
  slidesToShow: 2.2,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.2,
      },
    },
  ],
};
export const recomendationSlider = {
  slidesToShow: 2.2,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: false,
  cssEase: "linear",
  speed: 300,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.6,
      },
    },
  ],
};
