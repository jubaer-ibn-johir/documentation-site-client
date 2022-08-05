import React from 'react';
import avatar1 from '../../assets/home-img/img-1.png';
import avatar2 from '../../assets/home-img/img-3.png';
import avatar3 from '../../assets/home-img/img-4.png';
import avatar4 from '../../assets/home-img/img-5.png';

const ManageUsers = () => {
    return (
        <div className='lg:p-8 md:p-8 p-4'>
            <div class="overflow-x-auto w-full shadow-xl">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th style={{ "backgroundColor": "#af92e5" }}>User</th>
                            <th style={{ "backgroundColor": "#af92e5" }}>Email Address</th>
                            <th style={{ "backgroundColor": "#af92e5" }}>Role</th>
                            <th style={{ "backgroundColor": "#af92e5" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={avatar1} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Hart Hagerty</div>
                                    </div>
                                </div>
                            </td>
                            <td>harthagerty@gmail.com</td>
                            <td>User</td>
                            <th>
                                <button class="btn btn-sm mr-2 text-white border-none" style={{ "backgroundColor": "#09b70c" }}>Make Admin</button>
                                <button class="btn btn-sm text-white border-none" style={{ "backgroundColor": "#e54747" }}>Delete</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={avatar2} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Brice Swyre</div>
                                    </div>
                                </div>
                            </td>
                            <td>briceswyre@gmail.com</td>
                            <td>User</td>
                            <th>
                                <button class="btn btn-sm mr-2 text-white border-none" style={{ "backgroundColor": "#09b70c" }}>Make Admin</button>
                                <button class="btn btn-sm text-white border-none" style={{ "backgroundColor": "#e54747" }}>Delete</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={avatar3} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Aland Wilber</div>
                                    </div>
                                </div>
                            </td>
                            <td>alandwilber@gmail.com</td>
                            <td>User</td>
                            <th>
                                <button class="btn btn-sm mr-2 text-white border-none" style={{ "backgroundColor": "#09b70c" }}>Make Admin</button>
                                <button class="btn btn-sm text-white border-none" style={{ "backgroundColor": "#e54747" }}>Delete</button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={avatar4} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Reid Semiras</div>
                                    </div>
                                </div>
                            </td>
                            <td>reidsemiras@gmail.com</td>
                            <td>User</td>
                            <th>
                                <button class="btn btn-sm mr-2 text-white border-none" style={{ "backgroundColor": "#09b70c" }}>Make Admin</button>
                                <button class="btn btn-sm text-white border-none" style={{ "backgroundColor": "#e54747" }}>Delete</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;