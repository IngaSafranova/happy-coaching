import React from "react";
import Button from "../components/button";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="mx-auto h-fit w-screen  max-w-8xl bg-white lg:h-[576px]">
      <div className="mx-auto flex h-fit w-fit flex-col rounded-3xl bg-seasalt md:w-full lg:h-[480px] lg:w-[1216px] lg:flex-row ">
        <div className="mx-auto my-auto ml-16 h-[350px]  w-3/4 flex-col place-content-center md:mx-auto md:text-center lg:w-1/2">
          <h2 className="pb-5 text-2xl font-extrabold text-darkBlue lg:text-4xl">
            Get 15-Minutes Complimentary online session.
          </h2>
          <p className="pb-5 text-xl text-gray/50">
            Limited Period Offer. Claim Now.
          </p>
          <Button text="Book now" className="mx-auto" />
        </div>
        <div>
          <Image
            src="/smilingGirl.png"
            width={608}
            height={480}
            alt="close up picture of smiling girl"
            className="mx-auto rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
}
