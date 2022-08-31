import React from 'react';

import { BsCheckLg } from "react-icons/bs";
import { Link } from 'react-router-dom';


const BuildDocuments = () => {
    return (
        <div className='max-w-7xl mx-auto my-28 overflow-hidden'>
            <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5'>
                <div className='mx-5'>
                    <img className='w-96 h-96  lg:w-full' style={{ borderRadius: '10px' }} src="https://wiki.pokkt.com/images/4/48/Doc_img_ani.gif" alt="" />
                </div>
                <div 
                className='mx-5 lg:mx-0'

                    // data-aos-anchor-placement="top-center"
                >
                    <h2 className='font-bold mb-5 text-4xl leading-10'>Build online documentation
                        <br />
                        with EasyDoc</h2>
                    <p className='text-lg text-gray-500'>An open documentation builder connected structure allows
                        <br />
                        information to flow freely among everyone at the company <br />
                        with  social feature of employees</p>
                    <div className='mb-12'>
                        <p className='flex items-center gap-x-3 mt-3 text-lg text-gray-500'><BsCheckLg className='text-primary'></BsCheckLg>Complete control of your text.</p>
                        <p className='flex items-center gap-x-3 mt-2 text-lg text-gray-500'><BsCheckLg className='text-primary'></BsCheckLg>Layer Organized .</p>
                        <p className='flex items-center gap-x-3 mt-2 text-lg text-gray-500'><BsCheckLg className='text-primary'></BsCheckLg>visualize your code. </p>
                       
                    </div>
                    <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <Link to="/docs"> <span class="button-text">Read More...</span></Link>
                    </button>
                    
                    {/* <Link to="/docs" className='bg-cyan-500 text-white rounded-xl px-5 py-3 border-2 border-cyan-500 hover:text-cyan-500 hover:border-2 hover:border-cyan-500 hover:bg-transparent transition-all'>Read More</Link> */}
                </div>
                
            </div >
        </div>
    );
};

export default BuildDocuments;