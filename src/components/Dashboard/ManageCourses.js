import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import ScrollToTop from 'react-scroll-to-top';

const ManageCourses = () => {
    return (
        <div className='lg:p-8 md:p-8 p-4 h-full bg-blue-50 mb-12 rounded-xl'>
            <ScrollToTop smooth color="red" top='20' />
            <div>
                <h1 className='lg:text-5xl md:text-4xl text-3xl text-center my-5 font-semibold text-blue-900'>Manage Courses</h1>
            </div>
            <div class="overflow-x-auto shadow-xl">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-blue-300'></th>
                            <th className='bg-blue-300'>Courses</th>
                            <th className='bg-blue-300'>Short Description</th>
                            <th className='bg-blue-300'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td className='font-semibold'>Portfolio Tutorial</td>
                            <td>Lorem ipsum dolor sit amet, consectetu radipisi...</td>
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
                            <td className='font-semibold'>Material UI Crash Course</td>
                            <td>Lorem ipsum dolor sit amet, consectetu radipisi...</td>
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
                            <td className='font-semibold'>React Crash Course</td>
                            <td>Lorem ipsum dolor sit amet, consectetu radipisi...</td>
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

export default ManageCourses;