import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

import userAvatar from "../../assets/profile/user-profile.png";
import Loading from '../shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2';
import SingleComment from './SingleComment';

const BlogDetails = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [blog, setBlog] = useState({})
    const [blogs, setBlogs] = useState([])
    const [userData, setUserData] = useState({});
    const [comments, setComments] = useState([])
    const { name, photo } = userData;
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setLoading] = useState(false)
    const { blogId } = useParams()
    const { blogCategory, blogDescription, blogImage, blogPostDate, blogTitle, blogUploaderName, blogUploaderPhoto, readTime, _id } = blog;
    useEffect(() => {
        setLoading(true)
        fetch(`https://polar-shore-69456.herokuapp.com/blog/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data))
        setLoading(false)
    }, [])

    useEffect(() => {
        setLoading(true)
        fetch(`https://polar-shore-69456.herokuapp.com/blog`)
            .then(res => res.json())
            .then(data => setBlogs(data))
        setLoading(false)
    }, [])


    useEffect(() => {
        const email = user?.email
        if (email) {
            fetch(`https://polar-shore-69456.herokuapp.com/user/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUserData(data)
                })
        }
    }, [user])
    const onSubmit = data => {
        if (user) {
            let today = new Date().toLocaleString();
            let postComment = {
                userComment: data.comment,
                userName: name,
                userPhoto: photo,
                postDate: today,
                postId: _id
            }
            fetch(`https://polar-shore-69456.herokuapp.com/comment`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(postComment)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.insertedId) {
                        Swal.fire({
                            title: 'Successfully Posted!',
                            icon: 'success',
                            confirmButtonText: 'ok'
                        })
                        reset()
                    }
                    else {
                        Swal.fire({
                            title: 'Faild to Post!',
                            icon: 'error',
                            confirmButtonText: 'ok'
                        })
                    }
                })
        }
        else {
            navigate('/login')
        }
    };
    useEffect(() => {
        fetch(`https://polar-shore-69456.herokuapp.com/comment/${blogId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [comments])
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div style={{ background: 'linear-gradient(90deg, rgba(173,173,198,1) 0%, rgba(223,205,205,1) 55%, rgba(168,186,195,1) 100%)' }} >
                <div className='max-w-7xl lg:mx-auto md:mx-12 mx-5'>
                    <div className='grid grid-cols-1 items-center lg:py-44 md:py-44 py-36'>
                        <p className='lg:text-4xl md:text-3xl text-2xl mt-5 font-bold lg:w-1/2 md:w-3/4 w-full' style={{ color: '#1d2746' }}>{blogTitle}</p>
                        <div className='flex gap-5 items-center justify-start mt-5'>
                            <div className='h-12 w-12 rounded-full'>
                                <img src={blogUploaderPhoto ? blogUploaderPhoto : userAvatar} alt="" className='w-full rounded-full' />
                            </div>
                            <div className='lg:flex md:flex grid grid-cols-1 justify-between items-center gap-3'>
                                <p className='text-xl'>{blogUploaderName ? blogUploaderName : "User Name"}</p>
                                <div className='flex items-center gap-3' style={{ "color": "rgb(116 116 230)" }}>
                                    <span>|</span>
                                    <p className='text-sm'>{blogPostDate}</p>
                                    <span>|</span>
                                    <p className='text-sm'>{readTime}</p>
                                    <span>|</span>
                                </div>
                                <p className='text-blue-500 text-base'>{blogCategory}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-16'>
                <div className='max-w-7xl lg:mx-auto md:mx-12 mx-5'>
                    <div className='w-full lg:flex md:flex grid grid-cols-1 gap-12'>
                        <div className='lg:w-2/3 md:w-2/3 w-full'>
                            <div>
                                <img src={blogImage} alt="" className='w-full h-full' />
                            </div>
                            <div>
                                <p className='my-5'>{blogDescription}</p>
                            </div>
                            <div className='my-16'>
                                <p className='text-2xl font-bold mb-10 blackToWhite' style={{ color: '#1d2746' }}>{comments.length} - Comments</p>
                                <div>
                                    {
                                        comments.map(comment => <SingleComment key={comment._id} comment={comment}></SingleComment>)
                                    }

                                </div>
                                <div className='mb-12 mt-24'>
                                    <h1 className='font-bold text-2xl mb-5'>Leave a Comment</h1>
                                    <p className='mb-10 text-base' style={{ color: '#6b707f' }}>Your email address will not be published. Required fields are marked *</p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <textarea {...register("comment")} required cols="30" rows="10" placeholder='Your Comment *' className='w-full bg-slate-100 outline-none px-5 py-2 rounded-md mb-3' />
                                        <input type="submit" value='Post Comment' className='bg-slate-400 lg:px-8 md:px-8 px-5 lg:py-3 md:py-3 py-2 rounded-lg cursor-pointer text-white font-semibold' />
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className='lg:w-1/3 md:w-1/3 w-full'>
                            <div>
                                <div className='w-64 h-64 border-2 border-slate-500 flex justify-center items-center'>
                                    <img src={blogUploaderPhoto ? blogUploaderPhoto : userAvatar} alt="" className='w-64 h-64 ' />
                                </div>
                                <p className='text-3xl  mt-3'>{blogUploaderName}</p>
                            </div>
                            <div className='mt-12'>
                                <p className='text-2xl font-bold mb-5'>Post Categories</p>
                                <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Creative (12)</Link></li>
                                <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Inspiration (8)</Link></li>
                                <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Lifestyle (3)</Link></li>
                                <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>News (4)</Link></li>
                                <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Photography (12)</Link></li>
                                <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Skill (15)</Link></li>
                                <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Tourist Tours (10)</Link></li>
                                <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Inspire (5)</Link></li>
                            </div>
                            <div className='mt-12 grid gap-3'>
                                <p className='text-2xl font-bold mb-5'>Recent</p>

                                {
                                    blogs?.slice(0, 4).map(recentBlog => <div className='flex items-center'>
                                        <div className='h-16 w-16 flex justify-center items-center mr-3'>
                                            <img src={recentBlog.blogImage} alt="" className='h-16 w-16 rounded-md' />
                                        </div>
                                        <div>
                                            <Link to={`/blogDetails/${recentBlog._id}`} className='text-lg font-medium'>{recentBlog?.blogTitle?.slice(0, 45)}</Link>
                                            <p className='text-sm' style={{ color: '#6b707f' }}>{recentBlog?.blogPostDate}</p>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default BlogDetails;