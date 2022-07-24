import React from 'react';
import docImg from '../../../Assets/doc-img.jpg'
import { BsCheckLg } from "react-icons/bs";

const BuildDoc = () => {
    return (
        <div className='container mx-auto  grid grid-cols-1 lg:grid-cols-2 my-40 gap-x-16'>
            <div>
                <img style={{ borderRadius: '10px' }} src={docImg} alt="" />
            </div>
            <div className='pl-5 lg:pl-0 mt-10 lg:mt-0'>
                <h2 className='font-bold mb-5 text-4xl leading-10'>Build online documentation
                    <br />
                    with EasyDoc</h2>
                <p className='text-xl text-gray-500'>An open documentation builder connected structure allows
                    <br />
                    information to flow freely among everyone at the company <br />
                    with  social feature of employees</p>
                <div className=''>
                    <p className='flex items-center gap-x-3 mt-5 mb-3 text-xl text-gray-500'><BsCheckLg className='text-primary'></BsCheckLg>Complete control of your text.</p>
                    <p className='flex items-center gap-x-3 my-3 text-xl text-gray-500'><BsCheckLg className='text-primary'></BsCheckLg>Layer Organized .</p>
                    <p className='flex items-center gap-x-3 my-3 text-xl text-gray-500'><BsCheckLg className='text-primary'></BsCheckLg>visualize your code. </p>
                </div>
                <button className='btn btn-secondary mt-10 pt-6 pb-12 px-10 text-white text-lg font-semibold'>Reade More</button>


            </div>
        </div >
    );
};

export default BuildDoc;