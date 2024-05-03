import React from "react";
import Vector from "../components/vector";

import SuccessSvg from "../components/successSvg";
import HeroSectionImage from "../components/heroSectionImage";
import HomePageHeroCard from "../components/homePageHeroCard";
import LinkGuide from "../components/freeGuide";
import SalesHeroCard from "./salesHeroCard";

function HeroSection() {
  return (
    <section className="mx-auto flex h-full w-screen flex-col-reverse justify-evenly bg-seasalt  lg:max-w-8xl lg:flex-row-reverse ">
      <div className="mx-auto h-fit pt-32 w-fit sm:mt-6">
        {/* <SuccessSvg /> */}
        <HeroSectionImage src="/people-asking-questions.png"/>
      </div>
      <div className=" p-4">
        <div className="w-fit p-6 px-0 lg:static lg:left-16">
          <Vector className="fill-complimentaryGreen" />
        </div>
        <div className="mx-auto h-fit w-fit sm:mt-6">
          <SalesHeroCard/>
          <div className="mx-auto mt-6 mb-20 w-fit sm:mt-4">
            <LinkGuide text='Claim your spot' className=" mx-auto sm:m-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
