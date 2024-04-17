import React from 'react'
import HomepageBlogs from './homepageBlogs';

function BlogSection() {
  return (
      <section className="mx-auto h-fit w-screen  max-w-8xl flex-col bg-white lg:h-840">
          <h2 className='lg:text-5xl lg:leading-[56px] mt-20 mb-14 text-3xl w-5/6 sm:w-4/6 md:w-3/6 font-bold text-darkBlue lg:w-[680px] lg:h-28 mx-auto'>Stay Motivated, read the weekly blog articles.
          </h2>
          <div className="mx-auto h-fit w-10/12 max-w-7xl" >
            <HomepageBlogs/>  
          </div>
    </section>
  );
}

export default BlogSection