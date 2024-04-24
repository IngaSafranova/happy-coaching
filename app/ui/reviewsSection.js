import React from "react";

import ResponsiveCarousel from "./components/carousel";

function ReviewsSection() {
  return (
    <>
      <section className="mx-auto flex h-fit w-screen flex-col  bg-seasalt lg:h-880 lg:max-w-8xl">
        <h2 className="mx-auto w-72 pt-20 text-3xl font-extrabold text-darkBlue md:w-fit lg:ml-36 lg:w-[500px] lg:text-5xl lg:leading-[56px]">
          Hear out what my clients say about me.
        </h2>
         <ResponsiveCarousel /> 
      </section>
    </>
  );
}

export default ReviewsSection;
