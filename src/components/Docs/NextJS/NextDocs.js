import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const NextDocs = () => {
    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="next-button" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <h2 className='text-3xl'>Dashboard</h2> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side mt-16 shadow-lg">
                    <label for="next-button" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 text-base-content rounded-md">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/next-get-started" className='lg:text-lg text-base'>Getting Started</Link></li>
                        <li><Link to="/next-get-started/next-pages" className='lg:text-lg text-base'>Pages</Link></li>
                        <li><Link to="/next-get-started/getServerSideProps" className='lg:text-lg text-base'>GetServerSideProps</Link></li>
                    </ul>
                </div>
            </div>
            <div className='text-right bottom-0 fixed right-0'>
                <label for="next-button" className="btn btn-primary drawer-button lg:hidden rounded-lg">Next <FaGreaterThan /></label>
            </div>
        </div>

    );
};

export default NextDocs;