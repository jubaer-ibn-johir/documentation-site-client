import React from 'react';
import noteIcon from '../../assets/home-img/Note.png'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import faqIcon from '../../assets/home-img/Faq.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Solution = () => {
    return (
        <div className='flex justify-center my-20 overflow-hidden' >
            <div>
                <div className='text-center my-10'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-medium dark:text-white'>Didn't find any solution?</h1>
                    <p className='lg:text-xl md:text-lg text-lg lg:mx-0 md:mx-0 mx-4 mt-6'>Easily create Documentation, Knowledge-base, FAQ, Forum and more</p>
                </div>
                <div className='lg:flex grid grid-cols-1 gap-6'>
                    <div
                     className='flex lg:p-12 md:p-5 p-3 lg:mx-0 md:mx-0 mx-5 CardsCommonBg bg-cyan-500 hover:shadow-2xl transition-all rounded-md'

                        data-aos="fade-down-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"

                     >
                        <div className='flex justify-center items-center lg:mr-10 md:mr-10 mr-5'>
                            <img className='w-16' src={noteIcon} alt="" />
                        </div>
                        <div className='text-white w-96'>
                            <h3 className='lg:text-2xl md:text-2xl  text-xl font-bold'>Knowledge Base</h3>
                            <p className='lg:text-lg md:text-lg text-sm my-2'>Professionally cultivate one-to-one find customer service with robust ideas.</p>
                            <Link to="/contact" className='font-bold flex items-center text-xl'>Go to help page <FaLongArrowAltRight className='ml-2' /></Link>
                        </div>
                    </div>
                    <div 
                    className='flex lg:p-12 md:p-5 p-3 lg:mx-0 md:mx-0 mx-5  CardsCommonBg bg-cyan-500 hover:shadow-2xl transition-all rounded-md'


                        data-aos="fade-down-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"

                    >
                        <div className='flex justify-center items-center lg:mr-10 md:mr-10 mr-5'>
                            <img className='w-16' src={faqIcon} alt="" />
                        </div>
                        <div className='text-white w-96' >
                            <h3 className='lg:text-2xl md:text-2xl text-xl font-bold'>Frequently Asked Questions</h3>
                            <p className='lg:text-lg md:text-lg text-sm my-2'>We have some frequently asked questions feature to help you.</p>
                            <Link to="/ask" className='font-bold flex items-center text-xl'>Go to FAQ page <FaLongArrowAltRight className='ml-2' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;