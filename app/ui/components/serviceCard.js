import React from "react";
import Image from "next/image";
import cn from "@/app/lib/cn";

function ServiceCard({className, src,title,text}) {
  return (
    <div className={cn("lg:w-78 mx-auto mt-10 w-fit flex-col lg:m-0 lg:h-80 ",className)}>
      <div className="h-18 w-18">
        <Image  src={src} alt="" width={72} height={72} />
      </div>
      <div className="w-78 h-36 py-3">
        <h3 className="text-darkestBlue py-3 text-2xl font-bold">
          {title}
        </h3>
        <p className="w-fit pl-3 text-base text-gray">{text}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
