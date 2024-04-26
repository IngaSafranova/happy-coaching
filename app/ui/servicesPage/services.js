import React from 'react'
import ServiceCard from '../components/serviceCard';

const services = [
  {
    src: "/closedBook.svg",
    title: "Coaching",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    src: "/speechBubles.svg",
    title: "Consultation",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    src: "/people.svg",
    title: "Group Coaching Sessions",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    src: "/closedBook.svg",
    title: "Online course",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];
export default function Services() {
  return (
    <>
      <div className="mx-auto w-11/12 flex-col md:w-full lg:mx-0 lg:grid lg:grid-cols-2 lg:place-items-center lg:grid-rows-2 ">
        {services.map((service) => {
          return (
            <ServiceCard
              key={service.title}
              src={service.src}
              title={service.title}
              text={service.text}
            />
          );
        })}
      </div>
    </>
  );
}
