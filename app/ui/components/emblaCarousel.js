import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Stars from "./ratingStars";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide ml-0 w-fit min-w-[90%] bg-white sm:w-3/5 sm:min-w-[60%] md:min-w-96 lg:ml-20 lg:h-96  lg:w-96">
          <p className="mx-auto h-32 w-fit px-4 py-12 text-2xl md:w-fit lg:h-32 lg:w-78 lg:py-8">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
          </p>
          <p className="ml-16 mt-14 w-fit text-2xl font-bold md:ml-4 md:mt-28 lg:ml-16 lg:mt-20">
            Jane
          </p>
          <Image
            src="/jane.png"
            width="69"
            height="70"
            alt=""
            className="ml-16 mt-5 md:ml-4 lg:ml-16 "
          />
          <div className="ml-16 w-fit md:ml-4 lg:ml-16">
            <Stars />
          </div>
        </div>
        <div className=" ml-8 w-fit min-w-[90%] bg-white sm:w-3/5 sm:min-w-[60%] md:min-w-96 lg:ml-8 lg:h-96  lg:w-96">
          <p className="mx-auto h-32  w-fit px-4 py-12 text-2xl md:w-fit lg:h-32 lg:w-78 lg:py-8">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
          </p>
          <p className="ml-16 mt-14 w-fit text-2xl font-bold  md:ml-4 md:mt-28 lg:ml-16 lg:mt-20">
            Cathrine
          </p>
          <Image
            src="/catherine.png"
            width="69"
            height="70"
            alt=""
            className="ml-16 mt-5 md:ml-4 lg:ml-16"
          />
          <div className="ml-16 w-fit md:ml-4 lg:ml-16">
            <Stars />
          </div>
        </div>
        <div className="ml-12 w-fit  min-w-[90%] bg-white sm:w-3/5 sm:min-w-[60%] md:min-w-96 lg:ml-8 lg:h-96 lg:w-96  ">
          <p className="lg:py-8lg:w-78 mx-auto h-32 w-fit px-4 py-12 text-2xl md:w-fit lg:h-32 ">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
          </p>
          <p className="ml-16 mt-14 w-fit text-2xl font-bold md:ml-4 md:mt-28 lg:ml-16 lg:mt-20">
            Jane
          </p>
          <Image
            src="/janeV.png"
            width="69"
            height="70"
            alt=""
            className="ml-16 mt-5 md:ml-4 lg:ml-16"
          />
          <div className="ml-16 w-fit md:ml-4 lg:ml-16">
            <Stars />
          </div>
        </div>
        <div className="ml-12 w-fit min-w-[90%] bg-white sm:w-3/5 sm:min-w-[60%] md:min-w-96 lg:ml-8 lg:h-96  lg:w-96">
          <p className="mx-auto h-32 w-fit px-4 py-12 text-2xl md:w-fit lg:h-32  lg:w-78 lg:py-8">
            &quot;I gained so much confidence in my ability to connect and
            deepen my relationships with people.&quot;
          </p>
          <p className="ml-16 mt-14 w-fit text-2xl font-bold md:ml-4 md:mt-28 lg:ml-16 lg:mt-20">
            Jane
          </p>
          <Image
            src="/jane.png"
            width="69"
            height="70"
            alt=""
            className="ml-16 mt-5 md:ml-4 lg:ml-16"
          />
          <div className="ml-16 w-fit md:ml-4 lg:ml-16">
            <Stars />
          </div>
        </div>
      </div>
    </div>
  );
}
