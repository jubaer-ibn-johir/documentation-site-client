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
                <div className="drawer-side mt-16 shadow-2xl lg:shadow-2xl lg:shadow-cyan-400">
                    <label for="next-button" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto lg:w-80 md:w-80 w-64 text-base-content  shadow-2xl bg-white" >
                        {/* <!-- Sidebar content here --> */}
                        <li className='rounded-none transition-all'><Link to="/get-started" className='lg:text-lg text-base visited:bg-white focus:text-cyan-500 focus:font-semibold'>Getting Started with Redux</Link></li>
                        <li className='rounded-none transition-all'><Link to="/get-started/installation" className='lg:text-lg text-base visited:bg-white focus:text-cyan-500 focus:font-semibold'>Installation</Link></li>
                        <li className='rounded-none transition-all'><Link to="/get-started/why-redux" className='lg:text-lg text-base visited:bg-white focus:text-cyan-500 focus:font-semibold'>Why Redux Toolkit is How To Use Redux Today</Link></li>
                        <li className='rounded-none transition-all'><Link to="/get-started/core-concepts" className='lg:text-lg text-base visited:bg-white focus:text-cyan-500 focus:font-semibold'>Core Concepts</Link></li>
                    </ul>
                </div>
            </div>
            <div className='text-right bottom-0 fixed right-0'>
                <label for="next-button" className="btn btn-primary drawer-button text-white bg-cyan-500 px-5 py-3 lg:hidden rounded-3xl border-cyan-500 hover:border-cyan-500 hover:bg-white hover:text-cyan-500 transition-all tracking-widest">Next <FaGreaterThan /></label>
            </div>
        </div>
    );
};

export default ReduxDocs;