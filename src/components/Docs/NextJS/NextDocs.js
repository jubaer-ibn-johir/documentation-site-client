import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const NextDocs = () => {
    return (
        <div className='bg-blue-900'>
            <ScrollToTop smooth color="red" top='20' />
            <div className="drawer drawer-mobile ">
                <input id="next-button" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-20 bg-slate-200 componentsCommonBody">
                    {/* <h2 className='text-3xl'>Dashboard</h2> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side mt-20 shadow-lg">
                    <label for="next-button" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto lg:w-80 md:w-80 w-64 text-base-content  shadow-2xl bg-white CardsCommonBg blackToWhite">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/next-get-started" className='lg:text-lg text-base visited:bg-white focus:text-cyan-500 focus:font-semibold'>Getting Started</Link></li>
                        <li><Link to="/next-get-started/next-pages" className='lg:text-lg text-base visited:bg-white focus:text-cyan-500 focus:font-semibold'>Pages</Link></li>
                        <li><Link to="/next-get-started/getServerSideProps" className='lg:text-lg text-base visited:bg-white focus:text-cyan-500 focus:font-semibold'>GetServerSideProps</Link></li>
                    </ul>
                </div>
            </div>
            <div className='text-right bottom-0 fixed right-0'>
                <label for="next-button" className="btn btn-primary drawer-button text-white bg-cyan-500 px-5 py-3 lg:hidden rounded-3xl border-cyan-500 hover:border-cyan-500 hover:bg-white hover:text-cyan-500 transition-all tracking-widest">Next <FaGreaterThan /></label>
            </div>
        </div>

    );
};

export default NextDocs;