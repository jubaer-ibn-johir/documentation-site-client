import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import blogBg from "../../assets/blogs/blog-bg.png";
import { useNavigate } from "react-router-dom";
import BlogTextEditor from "./BlogTextEditor";
import ScrollToTop from 'react-scroll-to-top';

const Blogs = () => {


  const navigate = useNavigate();
  const navigateToAddBlog = id => {
    navigate(`/addBlogs`)
  }

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`https://polar-shore-69456.herokuapp.com/blog`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="mb-28">
      <ScrollToTop smooth color="red" top='20' />
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
      <div className="text-center ">
        <h2 className="font-bold text-3xl mb-12">Contribute in our blog section</h2>
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg border-none text-white bg-teal-500" onClick={() => navigateToAddBlog()}>Click to write and add blog </button>
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
