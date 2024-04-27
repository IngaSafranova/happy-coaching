import React from 'react'
import ServiceCard from '../components/serviceCard'
import HeroSectionImage from '../components/heroSectionImage';

const features = [
  {
    src: "/speechBuble-icon.svg",
    title: "Talk to me first",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    src: "/calendar.svg",
    title: "Schedule a meeting",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },

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

export default function FeaturesCard() {
  return (
    <div className="lg:h-560 mx-auto flex h-fit w-screen flex-col lg:w-7xl lg:flex-row ">
      <div>
        {features.map((feature) => {
          return (
            <ServiceCard
              key={feature.title}
              src={feature.src}
              title={feature.title}
              text={feature.text}
              className="lg:w-560 mx-auto w-fit lg:h-fit lg:pb-10 lg:flex lg:flex-row"
            />
          );
        })}
      </div>
      <HeroSectionImage
        src="/pexels-andrea-piacquadio-3978564 1 (1).png"
        className="mt-20 lg:mt-0"
      />
    </div>
  );
}
