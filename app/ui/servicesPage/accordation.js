import React from 'react'
import AccordationCard from '../components/accordationCard'

const fqaData = [
  {
    title: "How long does the coaching process take?",
    text: `Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.`,
  },
  {
    title: "What if I wanted to end my coaching engagement?",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    title: "Can I change through coaching?",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    title: "How often do we meet?",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
]; 


export default function Accordation() {
  return (
      <>
          <div className="mx-auto w-11/12 flex-col md:w-full lg:mt-0 lg:mx-0 lg:grid ">
          {fqaData.map((data) => {
              return (
                  <AccordationCard
                      key={data.title}
                      title={data.title}
                  text={data.text}
                  className = 'last-of-type:border-none'
                  />
              )
          })}

              </div>
    </>
  )
}
