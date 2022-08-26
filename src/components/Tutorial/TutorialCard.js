import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const TutorialCard = ({ tutorial }) => {
  const { title, video, description } = tutorial
  return (
    <div 
      data-aos="flip-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
     class="card card-compact lg:w-96 bg-base-100 shadow-xl CardsCommonBg">
    
      <iframe className='h-[300px]' src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions justify-start">
          <Link to="/tutorial-details" class="text-blue-600">Details...</Link>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;