import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdDashboard, MdOutlineVideoStable } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { FaCentercode } from 'react-icons/fa';
import { ImBlogger2 } from 'react-icons/im';

const AdminPanel = () => {
    return (
        <div>
            <div class="drawer drawer-mobile bg-accent">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content mt-16">
                    <div className='flex items-center lg:border-hidden border border-t-0 border-x-0 border-b-sky-300 lg:mt-0 md:mt-5 mt-5'>
                        <label for="dashboard-sidebar" tabIndex="1" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <span className='lg:hidden block'>Dashboard</span>
                    </div>
                    {/* <label for="dashboard-sidebar" className="btn btn-primary drawer-button lg:hidden rounded-lg">Next</label> */}
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side mt-16">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li className='text-xl'><Link to="/">< AiFillHome />Home</Link></li>
                        {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
                        <li className='text-xl'><Link to="/admin-panel"><MdDashboard />Dashboard</Link></li>
                        <li className='text-xl'><Link to="/admin-panel/manage-users"><FaUsers />Manage Users</Link></li>
                        <li className='text-xl'><Link to="/admin-panel/manage-blogs">< ImBlogger2 />Manage Blogs</Link></li>
                        <li className='text-xl'><Link to="/admin-panel/manage-tutorials">< MdOutlineVideoStable />Manage Tutorials</Link></li>
                        <li className='text-xl'><Link to="/admin-panel/manage-courses">< FaCentercode />Manage Courses</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;