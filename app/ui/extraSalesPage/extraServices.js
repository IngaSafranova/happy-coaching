import React from "react";
import ServiceCard from "../components/serviceCard";


const features = [
  
  {
    src: "/skype-icon.svg",
    title: "Online consultation",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    src: "/speech-icon.svg",
    title: "Ready to start? Let`s talk!",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default function ExtraServicesCard() {
  return (
    <div className="mx-auto flex h-fit w-screen  lg:h-560 lg:w-7xl flex-row ">
      <div>
        {features.map((feature) => {
          return (
            <ServiceCard
              key={feature.title}
              src={feature.src}
              title={feature.title}
              text={feature.text}
              className="mx-auto w-fit flex flex-row lg:h-fit lg:w-560  lg:pb-10"
            />
          );
        })}
      </div>
      
    </div>
  );
}
