import React from "react";
import Vector from "./components/vector";
import IntroductionCard from "./components/introductionCard";
import ServicesCard from "./components/servicesCard";

function IntroductionSection() {
  return (
    <section className="mx-auto mt-6 flex h-full w-screen max-w-8xl">
      <div className="mx-auto h-fit w-10/12 max-w-7xl ">
        <Vector className="ml-12 mt-20 fill-darkBlue" />
        <IntroductionCard />
        <ServicesCard />
      </div>
    </section>
  );
}

export default IntroductionSection;
