import React from "react";
import Image from "next/image";

function ServiceCard(props) {
  return (
    <div className="lg:w-78 mx-auto mt-10 w-fit flex-col lg:m-0 lg:h-80 ">
      <div className="h-18 w-18">
        <Image {...props} src={props.src} alt="" width={72} height={72} />
      </div>
      <div className="w-78 h-36 py-3">
        <h4 className="text-darkestBlue py-3 text-2xl font-bold">
          {props.title}
        </h4>
        <p className="w-fit pl-3 text-base text-gray">{props.text}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
