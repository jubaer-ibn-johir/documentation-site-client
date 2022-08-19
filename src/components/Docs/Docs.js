import React from 'react';
import bannerBg from '../../assets/docs/docs-banner.png'
import reduxBg from '../../assets/docs/redux.gif'
import nextBg from '../../assets/docs/next-js.svg'
import { FaReact } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiRedux } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Docs = () => {
    return (
        <div>
            <div className='bg-indigo-50'>
                <div className='pt-44 pb-10 bg-white' style={{ "box-shadow": "0 15px 15px 0px rgba(8, 0, 255, 0.2)" }}>
                    <h1 className='lg:text-5xl md:text-4xl text-3xl font-semibold text-center'>Documentations</h1>
                    <p className='text-center text-xl mt-2 text-gray-500'>Home Docs</p>
                </div>
                <div className='lg:flex lg:justify-center gap-5 md:grid md:grid-cols-2 grid grid-cols-1 mx-5 justify-items-center lg:py-44 md:py-20 py-20'>
                    <div class="card lg:w-96 md:w-80 w-72 bg-white rounded-xl border shadow-md hover:shadow-indigo-400 hover:shadow-2xl transition-all">
                        <figure class="px-10 pt-10">
                            <FaReact className='w-60 h-28 text-primary' />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-xl">React js Documentation</h2>
                            <small>A JavaScript library for building user interfaces</small>
                            <div class="card-actions">
                                <footer className='mt-5 text-primary font-semibold'><Link className='flex items-center' to='/reactjs'>Read More <BsArrowRight className='ml-1'></BsArrowRight></Link></footer>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:w-96 md:w-80 w-72 bg-white rounded-xl border shadow-md hover:shadow-indigo-400 hover:shadow-2xl transition-all">
                        <figure class="px-10 pt-10">
                            <SiRedux className='w-60 h-28 text-primary' />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-xl">Redux Documentation</h2>
                            <small>A Predictable State Container for JS Apps</small>
                            <div class="card-actions">
                                <footer className='mt-5 text-primary font-semibold'><Link className='flex items-center' to='/redux'>Read More <BsArrowRight className='ml-1'></BsArrowRight></Link></footer>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:w-96 md:w-80 w-72 bg-white rounded-xl border shadow-md hover:shadow-indigo-400 hover:shadow-2xl transition-all">
                        <figure class="px-10 pt-10">
                            <TbBrandNextjs className='w-60 h-28 text-primary' />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-xl">Next js Documentation</h2>
                            <small>The React Framework
                                for Production</small>
                            <div class="card-actions">
                                <footer className='mt-5 text-primary font-semibold'><Link className='flex items-center' to='/nextjs'>Read More <BsArrowRight className='ml-1'></BsArrowRight></Link></footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Docs;