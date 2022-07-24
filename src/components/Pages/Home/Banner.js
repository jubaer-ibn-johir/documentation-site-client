import React from 'react';
import './Banner.css'
import bannerBg from '../../../Assets/banner-bg.png'
import bannerbg2 from '../../../Assets/banner-bg-2.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen banner" style={{ backgroundImage: `url(${bannerBg})` }}>
            <div class=" bg-opacity-60 "></div>
            <div class="hero-content text-center text-neutral-content ">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;