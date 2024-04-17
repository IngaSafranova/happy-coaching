//! carousel is imported from react-slick

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Stars from "./ratingStars";


function ResponsiveCarousel() {
  var settings = {
    dots: false,
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
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
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
        <div className=" ml-4 w-fit bg-white lg:ml-20 lg:h-96  lg:w-96">
          <p className=" mx-auto h-32 w-78 py-12 lg:h-32 lg:w-78 text-2xl md:w-fit">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
          </p>
          <p className="ml-16 mt-14 lg:ml-16 lg:mt-12 md:mt-28 md:ml-4 w-fit text-2xl font-bold">Jane</p>
          <Image
            src="/jane.png"
            width="69"
            height="70"
            alt=""
            className="ml-16 lg:ml-16 md:ml-4 mt-5 "
          />
          <div className="ml-16 lg:ml-16 md:ml-4">
            <Stars />
          </div>
        </div>
        <div className=" ml-8 w-fit bg-white lg:ml-28 lg:h-96  lg:w-96">
          <p className="mx-auto h-32 lg:h-32 lg:w-78 w-78 py-12 text-2xl md:w-fit">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
          </p>
          <p className="ml-16 lg:ml-16 mt-14 lg:mt-12 md:mt-28  md:ml-4 w-fit text-2xl font-bold">Cathrine</p>
          <Image
            src="/catherine.png"
            width="69"
            height="70"
            alt=""
            className="ml-16 lg:ml-16 md:ml-4 mt-5"
          />
          <div className="ml-16 lg:ml-16 md:ml-4">
            <Stars />
          </div>
        </div>
        <div className="ml-12 w-fit bg-white lg:ml-36 lg:h-96  lg:w-96">
          <p className="mx-auto h-32 lg:h-32 lg:w-78 w-78 py-12 md:w-fit text-2xl">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
          </p>
          <p className="ml-16 lg:ml-16 md:ml-4 lg:mt-12 md:mt-28 mt-14 w-fit text-2xl font-bold">Jane</p>
          <Image
            src="/janeV.png"
            width="69"
            height="70"
            alt=""
            className="ml-16 lg:ml-16 md:ml-4 mt-5"
          />
          <div className="ml-16 lg:ml-16 md:ml-4">
            <Stars />
          </div>
        </div>
        <div className="ml-16 h-96 w-96 lg:ml-44 bg-white">
          <p className="mx-auto h-32 lg:h-32 lg:w-78 w-78 py-12  md:w-fit text-2xl">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
          </p>
          <p className="ml-16 lg:ml-16 mt-14 lg:mt-12 md:mt-28 md:ml-4 w-fit text-2xl font-bold">Jane</p>
          <Image
            src="/jane.png"
            width="69"
            height="70"
            alt=""
            className="ml-16 lg:ml-16 md:ml-4 mt-5"
          />
          <div className="ml-16 lg:ml-16 md:ml-4">
            <Stars />
          </div>
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Slider>
    </div>
  );
}

export default ResponsiveCarousel;
