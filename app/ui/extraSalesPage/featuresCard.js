import React from "react";
import ServiceCard from "../components/serviceCard";

const features = [
  {
    src: "/speechBuble-icon.svg",
    title: "Ready to start? Let`s talk!",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    src: "/calendar.svg",
    title: "Ready to start? Let`s talk!",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },

  {
    src: "/skype-icon.svg",
    title: "Ready to start? Let`s talk!",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    src: "/speech-icon.svg",
    title: "Ready to start? Let`s talk!",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    src: "/speech-icon.svg",
    title: "Ready to start? Let`s talk!",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    src: "/calendar.svg",
    title: "Ready to start? Let`s talk!",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default function FeaturesServices() {
  return (
    <div className=" mx-auto h-fit w-11/12 flex-col md:w-full lg:mx-0  lg:w-7xl lg:py-10  ">
      <div className=" mx-auto  h-fit w-full flex-col md:w-full lg:mx-0  lg:grid lg:w-7xl lg:grid-cols-3 lg:grid-rows-2 lg:place-items-center lg:gap-4 ">
        {features.map((feature) => {
          return (
            <ServiceCard
              key={feature.title}
              src={feature.src}
              title={feature.title}
              text={feature.text}
              className="mx-auto justify-items-center flex flex-col "
            />
          );
        })}
      </div>
    </div>
  );
}
