import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogBg from "../../assets/blogs/blog-bg.png";
import Details from "./../home/Details";
import ScrollToTop from 'react-scroll-to-top';

const BlogDetails = () => {
  const { blogDetailId } = useParams();
  const [blogDetail, setBlogDetail] = useState({});

  useEffect(() => {
    const url = `https://polar-shore-69456.herokuapp.com/blog/${blogDetailId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogDetail(data));
  }, []);
  return (
    <div>
      <ScrollToTop smooth color="red" top='20' />
      <div
        class="hero h-96 flex justify-center items-center "
        style={{ backgroundImage: `url(${blogBg})` }}
      >
        <div class="hero-content text-center text-neutral-content ">
          <div class="">
            <h1 class="mb-8 text-4xl lg:text-6xl font-semibold tracking-wider text-black">
              Blog Details
            </h1>
            <p class="mb-5 text-gray-500 text-xl lg:text-2xl">
              Read <i class="fa-solid fa-share"></i> article{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-48">
        <h3 className="font-bold text-3xl mb-8">{blogDetail.title}</h3>
        <img
          style={{ height: "500px", width: "935px" }}
          src={blogDetail.img}
          alt="blogs"
          className="rounded w-50%"
        />
        <h3 className="my-6">{blogDetail.category}</h3>
        <h3 className="text-xl">{blogDetail.details}</h3>
        <h2>comment</h2>
      </div>
    </div>
  );
};

export default BlogDetails;
