import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import learnPic from '../../../assets/docs/learn.avif'

const Nextjs = () => {
    return (
        <div className='bg-slate-300 componentsCommonBody pb-60'>
            <ScrollToTop smooth color="red" top='20' />
            <div className='text-center h-[80vh] flex justify-center items-center'>
                <div>
                    <h1 className='text-3xl lg:text-5xl pt-[120px] font-bold'>The React Framework</h1>
                    <h1 className='text-3xl lg:text-5xl pt-3 font-bold'>for Production</h1>
                    <p className='mt-5 text-xl px-4 lg:px-0 commonParagraph'>Next.js gives you the best developer experience with all the features you need for production: hybrid static & <br /> server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>
                    <div className='flex justify-center mt-5'>
                        <Link className='btn btn-primary px-7 pt-5 pb-8' to="/next-get-started">GET STARTED</Link>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-center text-3xl font-bold py-5'>Learn Next.js</h1>
                <p className='text-center text-xl pb-5 commonParagraph'>Learn Next.js step-by-step and earn points</p>
                <div className='flex justify-center'>
                    <img src={learnPic} alt="" className='rounded-xl' />
                </div>

            </div>
        </div>
    );
};

export default Nextjs;