import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import React, { useEffect, useState } from 'react';
import SingleBlog from './SingleBlog';
import ScrollToTop from 'react-scroll-to-top';


const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch(`https://documentation-site-server.onrender.com/blog`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs])
    return (
        <div className='lg:p-8 md:p-8 p-4 bg-sky-50 h-full componentsCommonBody'>
            <ScrollToTop smooth color="red" top='20' />
            <div>
                <h1 className='lg:text-5xl md:text-4xl text-3xl text-center my-5 font-semibold text-sky-900 blackToWhite'>Manage Blogs</h1>
            </div>
            <div class="overflow-x-auto shadow-xl">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className='CardsCommonBgSecondary' style={{ "backgroundColor": "#82cbe5" }}></th>
                            <th className='CardsCommonBgSecondary' style={{ "backgroundColor": "#82cbe5" }}>Title</th>
                            <th className='CardsCommonBgSecondary' style={{ "backgroundColor": "#82cbe5" }}>Short Description</th>
                            <th className='CardsCommonBgSecondary' style={{ "backgroundColor": "#82cbe5" }}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='CardsCommonBg'>1</th>
                            <td className='font-semibold CardsCommonBg'>Should You Invest In Internal...</td>
                            <td className='CardsCommonBg'>Aliquam finibus augue ac diam euismod, nec...</td>
                            <th className='CardsCommonBg'>
                                <div className='flex gap-3 items-center'>
                                    <div className='w-12 h-12 rounded-full bg-green-100 flex justify-center items-center'>
                                        <div className='text-green-500 text-3xl leading-3'>
                                            <button className='text-center'><BiEdit /></button>
                                        </div>
                                    </div>
                                    <div className='w-12 h-12 rounded-full bg-red-100 flex justify-center items-center'>
                                        <div className='text-red-500 text-3xl leading-3'>
                                            <button className='text-center'><AiFillDelete /></button>
                                        </div>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className='CardsCommonBg'>2</th>
                            <td className='font-semibold CardsCommonBg'>After Microsoft Ignite, Keep...</td>
                            <td className='CardsCommonBg'>Aliquam finibus augue ac diam euismod, nec...</td>
                            <th className='CardsCommonBg'>
                                <div className='flex gap-3 items-center'>
                                    <div className='w-12 h-12 rounded-full bg-green-100 flex justify-center items-center'>
                                        <div className='text-green-500 text-3xl leading-3'>
                                            <button className='text-center'><BiEdit /></button>
                                        </div>
                                    </div>
                                    <div className='w-12 h-12 rounded-full bg-red-100 flex justify-center items-center'>
                                        <div className='text-red-500 text-3xl leading-3'>
                                            <button className='text-center'><AiFillDelete /></button>
                                        </div>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className='CardsCommonBg'>3</th>
                            <td className='font-semibold CardsCommonBg'>All English MSDN And TechNet...</td>
                            <td className='CardsCommonBg'>Aliquam finibus augue ac diam euismod, nec...</td>
                            <th className='CardsCommonBg'>
                                <div className='flex gap-3 items-center'>
                                    <div className='w-12 h-12 rounded-full bg-green-100 flex justify-center items-center'>
                                        <div className='text-green-500 text-3xl leading-3'>
                                            <button className='text-center' data-tooltip-target="Edit"><BiEdit /></button>
                                        </div>
                                    </div>
                                    <div className='w-12 h-12 rounded-full bg-red-100 flex justify-center items-center'>
                                        <div className='text-red-500 text-3xl leading-3'>
                                            <button className='text-center'><AiFillDelete /></button>
                                        </div>
                                    </div>
                                </div>
                            </th>
                        </tr>

                        {
                            blogs.map((blog, index) => <SingleBlog index={index} key={blog._id} blog={blog}></SingleBlog>)
                        }

                    </tbody >
                </table >
            </div >
        </div >
    );
};

export default ManageBlogs;