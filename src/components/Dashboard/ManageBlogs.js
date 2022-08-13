import React, { useEffect, useState } from 'react';
import SingleBlog from './SingleBlog';

const ManageBlogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch(`https://polar-shore-69456.herokuapp.com/blog`)
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[blogs])
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
                       {
                        blogs.map((blog,index)=><SingleBlog index={index} key={blog._id} blog={blog}></SingleBlog>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBlogs;