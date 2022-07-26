import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import backgroundIcon from '../../../assets/react-doc/react-bg.png';
import ScrollToTop from 'react-scroll-to-top';

const ReactHome = () => {
    return (
        <section style={{
            background: `url(${backgroundIcon})`, backgroundColor: '#282c34', backgroundRepeat: 'no-repeat', backgroundPositionX: '100%', backgroundPositionY: '100px', backgroundSize: '50% auto', height: '520px'
        }}
            className='bg-accent lg:min-h-screen overlay flex justify-center items-center'>
            <ScrollToTop smooth color="red" top='20' />
            <div>
                <h1 className='text-primary text-center text-5xl lg:text-7xl  font-bold pt-28'>React</h1>
                <h2 className='text-2xl lg:text-4xl leading-9 text-center mt-12 text-white'>A JavaScript library for building user interfaces</h2>
                <div className='flex justify-center items-center mt-20 mb-12 lg:mb-24'>
                    <Link to='/reactDashboard'><button className='btn btn-primary  px-7 pt-4 pb-10 text-lg  rounded'>Get Started</button></Link>
                    <p className='text-primary text-2xl hover:text-white pl-5 lg:pl-10 leading-10 flex justify-center items-center'>Take the Tutorial <FiChevronRight className='mt-2'></FiChevronRight></p>
                </div>
            </div>
        </section>
    );
};

export default ReactHome;