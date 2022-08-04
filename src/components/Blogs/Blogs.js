import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import blogBg from "../../assets/blogs/blog-bg.png";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="mb-28">
      <div
        class="hero h-96 flex justify-center items-center "
        style={{ backgroundImage: `url(${blogBg})` }}
      >
        <div class="hero-content text-center text-neutral-content ">
          <div class="">
            <h1 class="mb-8 text-4xl lg:text-6xl font-semibold tracking-wider text-black">
              Blog Section
            </h1>
            <p class="mb-5 text-gray-500 text-xl lg:text-2xl">
              Home <i class="fa-solid fa-share"></i> Blogs{" "}
            </p>
          </div>
        </div>
      </div>

      <div className=" lg:ml-12 md:ml-6 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {
          blogs.map((blog) => <Blog
            key={blog._id}
            blog={blog}
          ></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;
