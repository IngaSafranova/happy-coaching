import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


function BlogCard(props) {
  return (
    <div className="mx-auto mt-10 w-fit pb-14 border-2 border-lightSeasolt flex-col lg:m-0 lg:h-fit lg:w-fit ">
      <div className="h-40 w-85">
        <Image {...props} src={props.src} alt="" width={356} height={160} />
      </div>
      <div className="mx-auto h-fit w-78 py-3">
        <Link href='/guide'>
          <h3 className=" py-3 text-2xl font-bold text-darkestBlue">
            {props.title}
          </h3>
          <p className="w-fit pl-3  text-base text-gray">{props.text}</p>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard