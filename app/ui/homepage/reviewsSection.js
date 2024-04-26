import React from "react";
import { EmblaCarousel } from "../components/emblaCarousel";
//import ResponsiveCarousel from "./components/carousel";

function ReviewsSection() {
  return (
    <>
      <section className="mx-auto flex h-fit w-screen flex-col bg-seasalt pb-20  lg:h-880 lg:max-w-8xl lg:pb-16">
        <h2 className="mx-auto w-72 py-20 text-3xl font-extrabold text-darkBlue sm:w-fit md:w-fit lg:ml-36 lg:w-[500px] lg:text-5xl lg:leading-[56px]">
          Hear out what my clients say about me.
        </h2>
        <EmblaCarousel />
        {/* <ResponsiveCarousel />  */}
      </section>
    </>
  );
}

export default ReviewsSection;
