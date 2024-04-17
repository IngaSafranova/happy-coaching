import React from "react";
import Responsive from "./carousel";
import MultipleItems from "./carousel";

function ReviewsSection() {
  return (
    <section className="bg-seasalt mx-auto  flex-col h-fit w-screen max-w-8xl">
      <h2 className="text-3xl lg:ml-36 pt-20 mx-auto w-78 font-extrabold text-darkBlue lg:w-[500px] lg:text-5xl lg:leading-[56px]">
        Hear out what my clients say about me.
      </h2>
      <MultipleItems/>
    </section>
  );
}

export default ReviewsSection;
