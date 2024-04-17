//! carousel is imported from react-slick

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Stars from "./ratingStars";

function Responsive(props) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container mt-16">
      <Slider {...settings}>
        <div className=" ml-20 h-96 w-96  bg-white">
          <p className="w-78 h-32 text-2xl mx-auto py-12">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
                  </p>
                  <p className="text-2xl font-bold mt-12 w-fit ml-5">Jane</p>
                  <Image src='/image 68.png' width='69' height='70' alt='' className="mt-5 ml-5" />
                  <Stars/>
        </div>
        <div className=" ml-32 h-96 w-96 bg-white">
          <h3>2</h3>
        </div>
        <div className="ml-44 h-96 w-96  bg-white">
          <h3>3</h3>
        </div>
        <div className="ml-52 h-96 w-96  bg-white"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Slider>
    </div>
  );
}

export default Responsive;
