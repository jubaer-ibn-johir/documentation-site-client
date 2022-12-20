import React from 'react';
import blankPic from "../../assets/profile/user-profile.png";
import { Link, useNavigate } from 'react-router-dom';
import {FaRegCommentDots} from 'react-icons/fa'
import {MdOutlineVisibility} from 'react-icons/md'
import { useState } from 'react';
import { useEffect } from 'react';

const SingleBlog = ({blog}) => {
    const [blogs,setBlogs]=useState([])
    const {blogCategory,visitor,blogDescription,blogImage,blogPostDate,blogTitle,blogUploaderName,blogUploaderPhoto,readTime,_id}=blog;
    const handleVisitor=(id)=>{
    fetch(`https://documentation-site-server.onrender.com/blogVisitor/${id}`,{
        method:"PUT",
        headers:{
        'content-type': 'application/json'
        },
        body: JSON.stringify({visitorCount:1})
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    }
    useEffect(() => {
        fetch(`https://documentation-site-server.onrender.com/comment/${_id}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs])
    return (
        <div    
        class="card lg:w-96 md:w-80 w-80 bg-base-100 shadow-md hover:shadow-2xl transition-all">
        <figure><img src={blogImage} alt="blog" className='w-[400px] h-[250px]' /></figure>
        <div class="card-body">
            <div className='flex gap-5'>
                <span className='text-sm' style={{ "color": "#acace6" }}>{readTime} Min Read</span>
                <span style={{ "color": "#acace6" }}>|</span>
                <p className='text-blue-500 text-base'>{blogCategory}</p>
            </div>
            <Link onClick={()=>handleVisitor(_id)} to={`/blogDetails/${_id}`} className='text-2xl hover:text-blue-700 font-medium whiteTextToBlack'>{blogTitle}</Link>
            <p className='text-base' style={{ "color": "#6b707f" }}>{blogDescription.slice(0,65)}...</p>
            <div class="card-actions justify-start">
                <div className='flex gap-5 items-center justify-start mt-4'>
                    <div className='h-12 w-12 rounded-full'>
                        <img src={blogUploaderPhoto?blogUploaderPhoto:blankPic} alt="" className='w-full rounded-full' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-xl whiteTextToBlack'>{blogUploaderName}</p>
                            <p className='text-sm commonParagraph'>{blogPostDate}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <p className='flex items-end'>{visitor} <MdOutlineVisibility className='ml-1 w-6 h-6'></MdOutlineVisibility></p>
                <p className='flex items-center'>{blogs.length} <FaRegCommentDots className='ml-1 w-5 h-5'></FaRegCommentDots></p>
            </div>
        </div>
    </div>
    );
};

export default SingleBlog;