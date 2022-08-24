import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import learnPic from '../../../assets/docs/learn.avif'

const Nextjs = () => {
    return (
        <div>
            <ScrollToTop smooth color="red" top='20' />
            <div className='text-center h-[80vh]'>
                <h1 className='text-3xl lg:text-7xl pt-[120px] font-bold'>The React Framework</h1>
                <h1 className='text-3xl lg:text-7xl pt-3 font-bold'>for Production</h1>
                <p className='mt-5 text-xl px-4 lg:px-0'>Next.js gives you the best developer experience with all the features you need for production: hybrid static & <br /> server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>
            </div>
            <div>
                <h1 className='text-center text-3xl font-bold py-5'>Learn Next.js</h1>
                <p className='text-center text-xl pb-5'>Learn Next.js step-by-step and earn points</p>
                <div className='flex justify-center'>
                    <img src={learnPic} alt="" />
                </div>
                <div className='flex justify-center my-5'>
                    <Link className='btn btn-primary' to="/next-get-started">GET STARTED</Link>
                </div>
            </div>
        </div>
    );
};

export default Nextjs;