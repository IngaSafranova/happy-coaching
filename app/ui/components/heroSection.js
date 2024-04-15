import React from "react";
import Vector from "./vector";


import SuccessSvg from "./successSvg";
import HeroSectionImage from "./heroSectionImage";
import HomePageHeroCard from "./homePageHeroCard";

function HeroSection() {
  return (
    <section className="mx-auto flex h-full w-screen max-w-8xl flex-col-reverse justify-evenly bg-seasalt lg:flex-row-reverse">
      <div className="mx-auto h-fit w-fit sm:mt-6">
        <SuccessSvg />
        <HeroSectionImage />
      </div>
      <div className=" p-4">
        <div className="w-fit p-6 px-0 lg:absolute lg:left-16">
          <Vector className="fill-complimentaryGreen" />
        </div>
        <HomePageHeroCard />
      </div>
    </section>
  );
}

export default HeroSection;
