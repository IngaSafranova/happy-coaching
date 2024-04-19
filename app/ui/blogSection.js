import React from "react";
import HomepageBlogs from "./components/homepageBlogs";
import BlogsLink from "./components/blogsLink";

function BlogSection() {
  return (
    <section className="mx-auto h-fit w-screen  max-w-8xl flex-col bg-white lg:h-840">
      <h2 className="mx-auto mb-14 mt-20 w-5/6 text-3xl font-bold text-darkBlue sm:w-4/6 md:w-3/6 lg:h-28 lg:w-[680px] lg:text-5xl lg:leading-[56px]">
        Stay Motivated, read the weekly blog articles.
      </h2>
      <div className="mx-auto h-fit w-10/12 max-w-7xl">
        <HomepageBlogs />
      </div>
      <div className="mx-auto mt-20 w-fit">
        <BlogsLink />
      </div>
    </section>
  );
}

export default BlogSection;
