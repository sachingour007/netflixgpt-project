export const moviesSliderSetting = {
  slidesToShow: 7,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
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
