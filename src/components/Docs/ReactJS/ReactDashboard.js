import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';

const ReactDashboard = () => {
    return (
        <div>
            <ScrollToTop smooth color="red" top='20' />
            <div>
                <div className="drawer drawer-mobile">
                    <input id="next-button" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content mt-32">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side shadow-2xl ">
                        <label for="next-button" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-80 lg:bg-white bg-base-200 text-base-content mt-20 CardsCommonBg blackToWhite" >
                            <li><Link to='/reactDashboard'>INSTALLATION</Link></li>
                            <li><Link to='/reactDashboard/mainconcepts'>MAIN CONCEPTS</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='text-right bottom-0 fixed right-0'>
                    <label for="next-button" className="btn btn-primary drawer-button lg:hidden rounded-lg">Next <FaGreaterThan /></label>
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