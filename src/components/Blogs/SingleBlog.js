import React from 'react';
import blankPic from "../../assets/profile/user-profile.png";
import { Link, useNavigate } from 'react-router-dom';

const SingleBlog = ({blog}) => {
    const {blogCategory,blogDescription,blogImage,blogPostDate,blogTitle,blogUploaderName,blogUploaderPhoto,readTime,_id}=blog;
    return (
        <div class="card lg:w-96 md:w-80 w-80 bg-base-100 shadow-md hover:shadow-2xl transition-all">
        <figure><img src={blogImage} alt="Shoes" className='w-full' /></figure>
        <div class="card-body">
            <div className='flex gap-5'>
                <span className='text-sm' style={{ "color": "#acace6" }}>{readTime} Min Read</span>
                <span style={{ "color": "#acace6" }}>|</span>
                <p className='text-blue-500 text-base'>{blogCategory}</p>
            </div>
            <Link to={`/blogDetails/${_id}`} className='text-2xl hover:text-blue-700 font-medium'>{blogTitle}</Link>
            <p className='text-base' style={{ "color": "#6b707f" }}>{blogDescription.slice(0,65)}...</p>
            <div class="card-actions justify-start">
                <div className='flex gap-5 items-center justify-start mt-8'>
                    <div className='h-12 w-12 rounded-full'>
                        <img src={blogUploaderPhoto?blogUploaderPhoto:blankPic} alt="" className='w-full rounded-full' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-xl'>{blogUploaderName}</p>
                            <p className='text-sm'>{blogPostDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SingleBlog;