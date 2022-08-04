import React from 'react';
import './Banner.css'
import bannerBg from '../../assets/home-img/banner.png'
import { FaSearch } from 'react-icons/fa'
// import ScrollToTop from "react-scroll-to-top";

const Banner = ({isDarkMode}) => {
    return (
          
        <div class="hero h-96 lg:min-h-screen banner flex justify-center items-center" style={{ backgroundImage: `url(${bannerBg})` }}>
            {/* <ScrollToTop smooth color="#0FCFEC" top='100'/> */}
            <div class="hero-content text-center text-neutral-content ">
                <div class="">
                    <h1 class="mb-8 text-4xl lg:text-6xl font-semibold tracking-wider text-black">Knowledge Base</h1>
                    <p class="mb-5 text-gray-500 text-xl lg:text-2xl">We're here to help. Get in touch and we'll get back to you as soon as we can</p>
                    <div className='flex justify-center items-center mt-10'>
                        <input type="text" placeholder="Search Knowledge Based" class=" w-full max-w-lg text-lg lg:text-2xl px-8 py-3 " />
                        <p className='font-bold text-4xl text-white border-2 py-2   shadow-lg px-6 bg-primary '><FaSearch></FaSearch></p>
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default Banner;