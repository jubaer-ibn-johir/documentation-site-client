import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';

const ReduxDocs = () => {
    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="next-button" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side mt-16 shadow-2xl">
                    <label for="next-button" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80  text-base-content  shadow-2xl bg-white" >
                        {/* <!-- Sidebar content here --> */}
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
        </div>
    );
};

export default ReduxDocs;