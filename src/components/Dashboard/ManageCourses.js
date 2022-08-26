import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import ScrollToTop from 'react-scroll-to-top';

const ManageCourses = () => {
    return (
        <div className='lg:p-8 md:p-8 p-4 h-full bg-blue-50 mb-12 componentsCommonBody'>
            <ScrollToTop smooth color="red" top='20' />
            <div>
                <h1 className='lg:text-5xl md:text-4xl text-3xl text-center my-5 font-semibold text-blue-900 blackToWhite'>Manage Courses</h1>
            </div>
            <div class="overflow-x-auto shadow-xl">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-blue-300 CardsCommonBgSecondary'></th>
                            <th className='bg-blue-300 CardsCommonBgSecondary'>Courses</th>
                            <th className='bg-blue-300 CardsCommonBgSecondary'>Short Description</th>
                            <th className='bg-blue-300 CardsCommonBgSecondary'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='CardsCommonBg'>1</th>
                            <td className='font-semibold CardsCommonBg'>Portfolio Tutorial</td>
                            <td className='CardsCommonBg'>Lorem ipsum dolor sit amet, consectetu radipisi...</td>
                            <th className='CardsCommonBg'>
                                <div className='w-12 h-12 rounded-full bg-red-100 flex justify-center items-center'>
                                    <div className='text-red-500 text-3xl leading-3'>
                                        <button className='text-center'><AiFillDelete /></button>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className='CardsCommonBg'>2</th>
                            <td className='font-semibold CardsCommonBg'>Material UI Crash Course</td>
                            <td className='CardsCommonBg'>Lorem ipsum dolor sit amet, consectetu radipisi...</td>
                            <th className='CardsCommonBg'>
                                <div className='w-12 h-12 rounded-full bg-red-100 flex justify-center items-center'>
                                    <div className='text-red-500 text-3xl leading-3'>
                                        <button className='text-center'><AiFillDelete /></button>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className='CardsCommonBg'>3</th>
                            <td className='font-semibold CardsCommonBg'>React Crash Course</td>
                            <td className='CardsCommonBg'>Lorem ipsum dolor sit amet, consectetu radipisi...</td>
                            <th className='CardsCommonBg'>
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