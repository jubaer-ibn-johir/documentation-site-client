import React from 'react';
import './Banner.css';
import bannerImg from '../../assets/home-img/bannerImg.png';
// import ScrollToTop from "react-scroll-to-top";
import ReactTypingEffect from 'react-typing-effect';
const Banner = ({ isDarkMode }) => {
    return (
        <div class="hero h-96 lg:h-[100vh] banner flex justify-center items-center" style={{ "backgroundImage": `url(${bannerImg})`, 'backgroundPosition': 'center', 'backgroundRepeat': 'no-repeat' }}>
            {/* <ScrollToTop smooth color="#0FCFEC" top='100'/> */}
            <div class="hero-content text-center text-neutral-content ">
                <div class="">



                    {/* <ReactTypingEffect
                        text={["Knowledge Base"]}
                    /> */}





                    <h1 class="mb-3 text-3xl md:text-4xl lg:text-6xl font-semibold tracking-wider text-white">Knowledge Base</h1>


                    <p class="mb-5 text-white lg:text-2xl text-xl ">We're here to help. Get in touch and we'll get back to you as soon as we can</p>
                    {/* <div className='flex justify-center items-center mt-10'>
                        <input type="text" placeholder="Search Knowledge Based" class=" w-full max-w-lg text-lg lg:text-2xl px-8 py-3 " />
                        <p className='font-bold text-4xl text-white border-2 py-2   shadow-lg px-6 bg-primary '><FaSearch></FaSearch></p>
                    </div> */}
                    {/* <div className='flex justify-center items-center mt-10'>
                        <input type="text" placeholder="Search Knowledge Based" class=" w-full max-w-lg text-cyan-600 text-xl px-8 py-3 rounded-l-full focus:outline-none" />
                        <button className='font-bold text-3xl text-white border-2 border-cyan-600 py-2 shadow-lg px-6 bg-cyan-600 rounded-r-full '><FaSearch></FaSearch></button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;