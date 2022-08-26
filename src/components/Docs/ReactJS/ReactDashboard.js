import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';

const ReactDashboard = () => {
    return (
        <div className='bg-blue-900'>
            <ScrollToTop smooth color="red" top='20' />
            <div>
                <div className="drawer drawer-mobile">
                    <input id="next-button" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content mt-20 bg-slate-200">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side mt-20 shadow-2xl">
                        <label for="next-button" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto lg:bg-white CardsCommonBg blackToWhite lg:w-80 md:w-80 w-64 text-base-content  shadow-2xl bg-white CardsCommonBg blackToWhite" >
                            <li><Link to='/reactDashboard' className='lg:text-lg text-base visited:bg-white focus:text-cyan-500 focus:font-semibold'>Installation</Link></li>
                            <li><Link to='/reactDashboard/mainconcepts' className='lg:text-lg text-base visited:bg-white focus:text-cyan-500 focus:font-semibold'>Main Concepts</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='text-right bottom-0 fixed right-0'>
                    <label for="next-button" className="btn btn-primary drawer-button text-white bg-cyan-500 px-5 py-3 lg:hidden rounded-3xl border-cyan-500 hover:border-cyan-500 hover:bg-white hover:text-cyan-500 transition-all tracking-widest">Next <FaGreaterThan /></label>
                </div>
            </div>
            {/* <div>
                <div className="drawer drawer-mobile ">
                    <input id="next-button" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label for="next-button" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-80  text-base-content" style={{ backgroundColor: '#0FCFEC' }}>

                            <li><Link to="/get-started" className='lg:text-lg text-base'>Getting Started with Redux</Link></li>
                            <li><Link to="/get-started/installation" className='lg:text-lg text-base'>Installation</Link></li>
                            <li><Link to="/get-started/why-redux" className='lg:text-lg text-base'>Why Redux Toolkit is How To Use Redux Today</Link></li>
                            <li><Link to="/get-started/core-concepts" className='lg:text-lg text-base'>Core Concepts</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='text-right bottom-0 fixed right-0'>
                    <label for="next-button" className="btn btn-primary drawer-button lg:hidden rounded-lg">Next <FaGreaterThan /></label>
                </div>
            </div> */}


        </div>
    );
};

export default ReactDashboard;