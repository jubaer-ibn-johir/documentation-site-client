import React from 'react';
import bannerBg from '../../assets/docs/docs-banner.png'
import reduxBg from '../../assets/docs/redux.gif'
import nextBg from '../../assets/docs/next-js.svg'
import { FaReact } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Docs = () => {
    return (
        <div>
            <div class="hero h-96  banner flex justify-center items-center " style={{ backgroundImage: `url(${bannerBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

                <div class="hero-content text-center text-neutral-content ">
                    <div class="">
                        <h1 class="mb-8 text-4xl lg:text-6xl font-semibold tracking-wider text-black">Documentation</h1>
                        <p class="mb-5 text-gray-500 text-xl lg:text-2xl">Home <i class="fa-solid fa-share"></i> Docs </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 mb-28 justify-items-center gap-5 '>
                <div class="card w-96 bg-base-100 shadow-xl lg:-mt-32 ">
                    <figure class="px-10 pt-10">
                        <FaReact className='w-60 h-28 text-primary' />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-xl">React js Documentation</h2>
                        <small>A JavaScript library for building user interfaces</small>
                        <div class="card-actions">
                            <footer className='mt-5 text-primary'><Link className='flex items-center' to='/reactjs'>Read More <AiOutlineArrowRight className='ml-1'></AiOutlineArrowRight></Link> <i class="fa-solid fa-arrow-right"></i></footer>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl lg:-mt-32">
                    <figure class="px-10 pt-10">
                        {/* <SiReduxsaga  className='w-60 h-28 text-primary' /> */}
                        <img src={reduxBg} className='w-60 h-28  ' alt="" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-xl">Redux Documentation</h2>
                        <small>A Predictable State Container for JS Apps</small>
                        <div class="card-actions">
                            <footer className='mt-5 text-primary'><Link className='flex items-center' to='/redux'>Read More <AiOutlineArrowRight className='ml-1'></AiOutlineArrowRight></Link> <i class="fa-solid fa-arrow-right"></i></footer>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl lg:-mt-32">
                    <figure class="px-10 pt-10">
                        <img src={nextBg} className='w-60 h-28  ' alt="" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-xl">Next js Documentation</h2>
                        <small>The React Framework
                            for Production</small>
                        <div class="card-actions">
                            <footer className='mt-5 text-primary'><Link className='flex items-center' to='/nextjs'>Read More <AiOutlineArrowRight className='ml-1'></AiOutlineArrowRight></Link> <i class="fa-solid fa-arrow-right"></i></footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Docs;