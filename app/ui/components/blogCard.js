import React from 'react'
import Image from 'next/image';


function BlogCard(props) {
  return (
    <div className="mx-auto mt-10 w-fit flex-col lg:m-0 lg:h-96 lg:w-85 ">
      <div className="h-40 w-85">
        <Image {...props} src={props.src} alt="" width={356} height={160} />
      </div>
      <div className="h-44 w-78 py-3 mx-auto">
        <h3 className=" text-2xl py-3 font-bold text-darkestBlue">
          {props.title}
        </h3>
        <p className="w-fit pl-3 text-base text-gray">{props.text}</p>
      </div>
    </div>
  );
}

export default BlogCard