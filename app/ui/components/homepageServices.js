import React from 'react'
import Image from 'next/image'
import ServiceCard from './serviceCard'

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
];

function HomepageServices() {
  return (
    <>
      <div className='flex-col mx-auto w-11/12 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:grid-flow-col-dense '>
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

export default HomepageServices