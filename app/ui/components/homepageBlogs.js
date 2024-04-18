import React from 'react'
import BlogCard from './blogCard'

const blogs = [
  {
    src: "/girl.png",
    title: "Balancing your love and work life.",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate.`,
  },
  {
    src: "/openBook.png",
    title: "A short break from Social Media is important.",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate.`,
  },
  {
    src: "/girlWithCamera.png",
    title: "How to be 1% Better Every Day",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus vulputate.`,
  },
];

function HomepageBlogs() {
  return (
    <>
      <div className="mx-auto w-fit  flex-col lg:grid lg:gap-x-10 lg:grid-cols-3 lg:grid-rows-1">
        {blogs.map((blog) => {
          return (
            <BlogCard
              key={blog.title}
              src={blog.src}
              title={blog.title}
              text={blog.text}
            />
          );
        })}
      </div>
    </>
  );
}

export default HomepageBlogs