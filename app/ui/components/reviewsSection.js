import React from "react";


import ResponsiveCarousel from "./carousel";

function ReviewsSection() {
  return (
    <section className="mx-auto h-fit lg:h-880  w-screen max-w-8xl flex-col bg-seasalt">
      <h2 className="mx-auto w-78 pt-20 text-3xl font-extrabold text-darkBlue lg:ml-36 lg:w-[500px] lg:text-5xl lg:leading-[56px]">
        Hear out what my clients say about me.
      </h2>
      <ResponsiveCarousel />
    </section>
  );
}

export default ReviewsSection;
