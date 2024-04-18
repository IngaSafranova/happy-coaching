import React from 'react'
import LinkGuide from './freeGuide';



export default function FreeGuideCard(props) {
    return (
      <div className="mx-auto  w-11/12 flex-col mt-14 place-content-center sm:w-9/12 md:w-10/12 lg:ml-28 lg:mt-56 lg:h-52 lg:w-[550px] lg:py-24">
        <h1 className="mx-auto w-fit h-auto px-4 py-6 text-2xl font-extrabold text-darkBlue md:text-3xl lg:w-[490px] lg:pl-0 lg:text-5xl">
          Don&apos;t miss out on my &apos;Live life at the full potential&apos;
          free guide
        </h1>
        <p className="px-4 py-6 mx-auto w-fit text-xl leading-8 text-gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          commodo sed egestas egestas fringilla. Pharetra convallis posuere
          morbi leo urna molestie. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim.
        </p>

        <div className=" my-6 w-fit mx-auto sm:mt-4">
          <LinkGuide className=" mx-auto sm:m-0" />
        </div>
      </div>
    );
}
