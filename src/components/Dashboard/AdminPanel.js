import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <div>
            <div className='flex items-center'>
                <label htmlFor="dashboard-sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <span>Dashboard</span>
            </div>
            <div class="drawer drawer-mobile bg-accent">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content mt-16">
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side mt-16">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
                        <li><Link to="/admin-panel">Dashboard</Link></li>
                        <li><Link to="/admin-panel/manage-users">Manage Users</Link></li>
                        <li><Link to="/admin-panel/manage-blogs">Manage Blogs</Link></li>
                        <li><Link to="/admin-panel/manage-tutorials">Manage Tutorials</Link></li>
                        <li><Link to="/admin-panel/manage-courses">Manage Courses</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;