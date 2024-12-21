import React from "react";
import cn from "@/app/lib/cn";

function HeroCard({ title, text, className }) {
  return (
    <div className="mx-auto  w-11/12 flex-col place-content-center sm:w-9/12 md:w-10/12 lg:ml-28 lg:mt-4 lg:mb-20 lg:h-[396px] lg:w-[545px] lg:py-24">
      <h1
        className={cn(
          "h-auto px-4 py-6 text-3xl font-extrabold text-darkBlue md:text-5xl lg:w-[520px] lg:pl-0 lg:text-7xl",
          className,
        )}
      >
        {title}
      </h1>

      <p className=" px-4 py-6 text-xl leading-8 text-gray">{text}</p>
    </div>
  );
}

export default HeroCard;
