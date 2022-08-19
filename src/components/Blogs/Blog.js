import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Blog = ({ blog }) => {
  const { _id, category, title, details, img } = blog;
  const description = details.slice(0, 85)

  const navigate = useNavigate();
  const navigateToDetail = id => {
    navigate(`/blogDetail/${id}`)
  }
  return (
    <div className="w-96 bg-blue-50 mt-6 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="blogs"
          className="rounded"
        />
      </figure>
      <div className="card-body">
        <h2 >{category}</h2>

        <p className="card-title">{title}</p>
        <p>{description} </p>

        <div className="card-actions">
          <button className='mt-5 text-primary' onClick={() => navigateToDetail(_id, title)}>Read More  <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Blog;