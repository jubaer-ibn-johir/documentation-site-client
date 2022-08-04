import React from 'react';
import docImg from '../../assets/home-img/Build-docs.jpg'
import { BsCheckLg } from "react-icons/bs";
import { Link } from 'react-router-dom';

const BuildDocuments = () => {
    return (
        <div className='lg:ml-16 ml-0 mx-auto  grid grid-cols-1 lg:grid-cols-2 my-10  lg:my-40 gap-x-16'>
            <div className='mt-7'>
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
                <div className='mb-12'>
                    <p className='flex items-center gap-x-3 mt-5 mb-3 text-xl text-gray-500'><BsCheckLg className='text-primary'></BsCheckLg>Complete control of your text.</p>
                    <p className='flex items-center gap-x-3 my-3 text-xl text-gray-500'><BsCheckLg className='text-primary'></BsCheckLg>Layer Organized .</p>
                    <p className='flex items-center gap-x-3 my-3 text-xl text-gray-500'><BsCheckLg className='text-primary'></BsCheckLg>visualize your code. </p>
                </div>
                {/* <button className='btn btn-secondary mt-5 pt-6 pb-12 px-10 text-white  font-semibold text-xl'>Reade More</button> */}
                <Link to="/docs" className='bg-secondary rounded-2xl py-3 px-7 text-white  font-semibold text-xl'>Reade More</Link>
            </div>
        </div >
    );
};

export default BuildDocuments;