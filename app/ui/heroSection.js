import React from "react";
import Vector from "./components/vector";

import SuccessSvg from "./components/successSvg";
import HeroSectionImage from "./components/heroSectionImage";
import HomePageHeroCard from "./components/homePageHeroCard";

function HeroSection() {
  return (
    <section className="mx-auto flex h-full w-screen flex-col-reverse justify-evenly bg-seasalt  lg:max-w-8xl lg:flex-row-reverse ">
      <div className="mx-auto h-fit w-fit sm:mt-6">
        <SuccessSvg />
        <HeroSectionImage />
      </div>
      <div className=" p-4">
        <div className="w-fit p-6 px-0 lg:static lg:left-16">
          <Vector className="fill-complimentaryGreen" />
        </div>
        <HomePageHeroCard />
      </div>
    </section>
  );
}

export default HeroSection;
