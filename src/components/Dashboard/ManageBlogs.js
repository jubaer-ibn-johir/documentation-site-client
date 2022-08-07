import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const ManageBlogs = () => {
    return (
        <div className='lg:p-8 md:p-8 p-4 bg-sky-50 h-full rounded-xl'>
            <div>
                <h1 className='lg:text-5xl md:text-4xl text-3xl text-center my-5 font-semibold text-sky-900'>Manage Blogs</h1>
            </div>
            <div class="overflow-x-auto shadow-xl">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th style={{ "backgroundColor": "#82cbe5" }}></th>
                            <th style={{ "backgroundColor": "#82cbe5" }}>Title</th>
                            <th style={{ "backgroundColor": "#82cbe5" }}>Short Description</th>
                            <th style={{ "backgroundColor": "#82cbe5" }}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td className='font-semibold'>Should You Invest In Internal...</td>
                            <td>Aliquam finibus augue ac diam euismod, nec...</td>
                            <th>
                                <div className='w-12 h-12 rounded-full bg-red-100 flex justify-center items-center'>
                                    <div className='text-red-500 text-3xl leading-3'>
                                        <button className='text-center'><AiFillDelete /></button>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td className='font-semibold'>After Microsoft Ignite, Keep...</td>
                            <td>Aliquam finibus augue ac diam euismod, nec...</td>
                            <th>
                                <div className='w-12 h-12 rounded-full bg-red-100 flex justify-center items-center'>
                                    <div className='text-red-500 text-3xl leading-3'>
                                        <button className='text-center'><AiFillDelete /></button>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td className='font-semibold'>All English MSDN And TechNet...</td>
                            <td>Aliquam finibus augue ac diam euismod, nec...</td>
                            <th>
                                <div className='w-12 h-12 rounded-full bg-red-100 flex justify-center items-center'>
                                    <div className='text-red-500 text-3xl leading-3'>
                                        <button className='text-center'><AiFillDelete /></button>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBlogs;