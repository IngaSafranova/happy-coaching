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
    <div className="slider-container mt-16 overscroll-none ">
      <Slider {...settings}>
        <div className=" ml-0 w-fit bg-white lg:ml-20 lg:h-96  lg:w-96">
          <p className="mx-auto h-32 w-fit px-4 py-12 text-2xl md:w-fit lg:h-32 lg:w-78">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
          </p>
          <p className="ml-16 mt-14 w-fit text-2xl font-bold md:ml-4 md:mt-28 lg:ml-16 lg:mt-12">
            Jane
          </p>
          <Image
            src="/jane.png"
            width="69"
            height="70"
            alt=""
            className="ml-16 mt-5 md:ml-4 lg:ml-16 "
          />
          <div className="ml-16 w-fit md:ml-4 lg:ml-16">
            <Stars />
          </div>
        </div>
        <div className=" ml-8 w-fit bg-white lg:ml-28 lg:h-96  lg:w-96">
          <p className="mx-auto h-32 w-fit px-4 py-12 text-2xl md:w-fit lg:h-32 lg:w-78">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
          </p>
          <p className="ml-16 mt-14 w-fit text-2xl font-bold  md:ml-4 md:mt-28 lg:ml-16 lg:mt-12">
            Cathrine
          </p>
          <Image
            src="/catherine.png"
            width="69"
            height="70"
            alt=""
            className="ml-16 mt-5 md:ml-4 lg:ml-16"
          />
          <div className="ml-16 w-fit md:ml-4 lg:ml-16">
            <Stars />
          </div>
        </div>
        <div className="ml-12 w-fit bg-white lg:ml-36 lg:h-96  lg:w-96">
          <p className="mx-auto h-32 px-4 w-fit py-12 text-2xl md:w-fit lg:h-32 lg:w-78">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
          </p>
          <p className="ml-16 mt-14 w-fit text-2xl font-bold md:ml-4 md:mt-28 lg:ml-16 lg:mt-12">
            Jane
          </p>
          <Image
            src="/janeV.png"
            width="69"
            height="70"
            alt=""
            className="ml-16 mt-5 md:ml-4 lg:ml-16"
          />
          <div className="ml-16 w-fit md:ml-4 lg:ml-16">
            <Stars />
          </div>
        </div>
        <div className="ml-16 h-96 w-96 bg-white lg:ml-44">
          <p className="mx-auto h-32 px-4 w-fit py-12 text-2xl md:w-fit  lg:h-32 lg:w-78">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
          </p>
          <p className="ml-16 mt-14 w-fit text-2xl font-bold md:ml-4 md:mt-28 lg:ml-16 lg:mt-12">
            Jane
          </p>
          <Image
            src="/jane.png"
            width="69"
            height="70"
            alt=""
            className="ml-16 mt-5 md:ml-4 lg:ml-16"
          />
          <div className="ml-16 w-fit md:ml-4 lg:ml-16">
            <Stars />
          </div>
        </div>

        <div className="w-fit"></div>
        <div className="w-fit"></div>
        <div className="w-fit"></div>
        <div className="w-fit"></div>
      </Slider>
    </div>
  );
}

export default ResponsiveCarousel;
