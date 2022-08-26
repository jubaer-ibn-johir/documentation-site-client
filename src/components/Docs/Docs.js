import React from 'react';
import { FaReact } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiRedux } from 'react-icons/si';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import docBanner from '../../assets/about-img/banner.jpg';
import { MdOutlineNavigateNext } from 'react-icons/md';


const Docs = () => {
    return (
        <div>
            <ScrollToTop smooth color="red" top='20' />
            <div className='bg-white componentsCommonBody lg:pb-28 pb-36'>
                <div className='pt-44 pb-20' style={{ background: 'linear-gradient(223deg, rgba(163,188,255,1) 0%, rgba(226,219,205,1) 57%, rgba(163,188,255,1) 100%)' }}>
                    <h1 className='lg:text-5xl md:text-4xl text-3xl font-semibold text-center whiteTextToBlack'>Documentations</h1>
                    <p className='text-center text-xl mt-2 text-gray-500 flex justify-center items-center'><Link to='/'>Home</Link><MdOutlineNavigateNext /> Docs</p>
                </div>
                <div className='lg:flex lg:justify-center gap-5 md:grid md:grid-cols-2 grid grid-cols-1 mx-5 justify-items-center lg:py-44 md:py-20 py-20 whiteTextToBlack'>
                    <div
                        class="card lg:w-96 md:w-80 w-72 rounded-xl border transition-all grid justify-items-center" style={{ "backgroundColor": "#f4e3e9", "borderWidth": "5px 0 0 0", "borderColor": "#fda6c5" }}
                        data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        <div className='h-20 w-20 rounded-full bg-white flex justify-center items-center mt-12'>
                            <figure class="">
                                <FaReact className='w-12 h-12 text-red-500' />
                            </figure>
                        </div>
                        <div
                            class="card-body items-center text-center"


                        >
                            <h2 class="card-title text-xl font-bold">React js Documentation</h2>
                            <small>A JavaScript library for building user interfaces</small>
                            <div class="card-actions">
                                <footer className='mt-5 text-primary font-semibold hover:underline'><Link className='flex items-center' to='/reactjs'>Read More</Link></footer>
                            </div>
                        </div>
                    </div>
                    <div
                        class="card lg:w-96 md:w-80 w-72 bg-white rounded-xl border transition-all grid justify-items-center" style={{ "backgroundColor": "#f4e1ba", "borderWidth": "5px 0 0 0", "borderColor": "#f3c870" }}
                        data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"

                    >
                        <div className='h-20 w-20 rounded-full bg-white flex justify-center items-center mt-12'>
                            <figure class="">
                                <SiRedux className='w-12 h-12 text-orange-500' />
                            </figure>
                        </div>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-xl">Redux Documentation</h2>
                            <small>A Predictable State Container for JS Apps</small>
                            <div class="card-actions">
                                <footer className='mt-5 text-primary font-semibold hover:underline'><Link className='flex items-center' to='/redux'>Read More</Link></footer>
                            </div>
                        </div>
                    </div>
                    <div
                        class="card lg:w-96 md:w-80 w-72 bg-white rounded-xl border transition-all grid justify-items-center" style={{ "backgroundColor": "#e0edfc", "borderWidth": "5px 0 0 0", "borderColor": "#b5d7ff" }}

                        data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"

                    >
                        <div className='h-20 w-20 rounded-full bg-white flex justify-center items-center mt-12'>
                            <figure class="">
                                <TbBrandNextjs className='w-12 h-12 text-blue-500' />
                            </figure>
                        </div>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-xl">Next js Documentation</h2>
                            <small>The React Framework
                                for Production</small>
                            <div class="card-actions">
                                <footer className='mt-5 text-primary font-semibold hover:underline'><Link className='flex items-center' to='/nextjs'>Read More</Link></footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Docs;