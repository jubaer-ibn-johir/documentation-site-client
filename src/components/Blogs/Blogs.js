import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

import topImg from "../../assets/blogs/blog-bg.png";
import blogImg1 from "../../assets/blogs/blog-bg.png";
import blogImg2 from "../../assets/blogs/blog-bg.png";
import blogImg3 from "../../assets/blogs/blog-bg.png";
import blogImg4 from "../../assets/blogs/blog-bg.png";
import blogImg5 from "../../assets/blogs/blog-bg.png";
import blogImg6 from "../../assets/blogs/blog-bg.png";

import userAvatar from "../../assets/profile/user-profile.png";


const Blogs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='pb-44'>
            <div>
                <div style={{ background: 'linear-gradient(90deg, rgba(173,173,198,1) 0%, rgba(223,205,205,1) 55%, rgba(168,186,195,1) 100%)' }} >
                    <div className='max-w-7xl mx-auto'>
                        <div className='grid grid-cols-1 justify-items-center items-center lg:pt-44 md:pt-44 pt-36'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("firstName", { required: true, maxLength: 20 })} className='text-base bg-white h-12 lg:w-96 md:w-96 w-64 rounded-l-3xl px-5 active:border-none active:outline-none focus:outline-none' placeholder='Search for Topics' style={{ "color": "#6b707f" }} />
                                <input type="submit" value="Search" className='text-base bg-white h-12 rounded-r-3xl cursor-pointer px-5 border-l-2' style={{ "color": "#6b707f" }} />
                            </form>
                            <div className='lg:flex md:flex grid grid-cols-2 gap-3 mt-3'>
                                <p className='font-medium'>Popular Searches: </p>
                                <Link to='#' className='border-b-2 border-slate-400 hover:border-slate-600 transition-all text-base'>Documentation,</Link>
                                <Link to='#' className='border-b-2 border-slate-400 hover:border-slate-600 transition-all text-base'>Tabs Widget,</Link>
                                <Link to='#' className='border-b-2 border-slate-400 hover:border-slate-600 transition-all text-base'>Process Tab</Link>
                            </div>
                        </div>
                        <div className='flex justify-end pt-24 pb-12'>
                            <Link to='/addBlogs' className=' py-3 px-8 border-2 border-slate-500 bg-slate-500 text-white hover:text-slate-500 hover:bg-white rounded-md transition-all font-bold text-lg'>Upload Blog</Link>
                        </div>
                    </div>
                </div>
                <div className='lg:py-24 md:py-24 py-20 componentsCommonBody' style={{ "backgroundColor": "#FAFCFD" }}>
                    <div className='max-w-5xl lg:mx-auto md:mx-5 mx-5'>
                        <div className='lg:flex md:flex grid grid-cols-1 rounded-xl CardsCommonBg' style={{ 'boxShadow': "0 .5rem 1rem rgba(0,0,0,.15)" }}>
                            <div className='lg:py-12 md:py-8 py-8 lg:pl-12 md:pl-5 pl-5 lg:pr-8 md:pr-5 pr-5 lg:w-1/2 md:w-1/2'>
                                <div className='flex gap-5'>
                                    <p className='text-sm' style={{ "color": "#acace6" }}>9 Min Read</p>
                                    <span style={{ "color": "#acace6" }}>|</span>
                                    <p className='text-blue-500 text-base'>WordPress</p>
                                </div>
                                <div className='grid gap-6'>
                                    <Link to='/blogDetails' className='text-2xl hover:text-blue-700 mt-5 font-medium transition-all'>10 WordPress Security Issues And How to Fix Them</Link>
                                    <p>Tinkety tonk old fruit bodge on your bike mate car boot my good sir jolly good such a fibber up the kyver golly gosh David, naff chap.!</p>
                                    <Link to='#' className='text-lg font-bold my-5 hover:text-blue-700 transition-all flex items-center gap-2 hover:gap-5'>Continue Reading<BsArrowRight /></Link>
                                    <div className='flex gap-5 items-center justify-start'>
                                        <div className='h-12 w-12 rounded-full'>
                                            <img src={userAvatar} alt="" className='w-full rounded-full' />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <p className='text-xl'>Jason Response</p>
                                                <p className='text-sm'>Jul 14, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className='lg:w-1/2 md:w-1/2 w-full'>
                                <img src={topImg} alt="" className='w-full h-full' style={{}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ "backgroundColor": "#FAFCFD", "borderTop": "1px solid #e7edf0" }} className='CardsCommonBg'>
                    <div className='max-w-5xl lg:mx-auto md:mx-5 mx-auto lg:flex md:flex grid grid-cols-4 lg:gap-0 md:gap-0 gap-0'>
                        <li className="h-16 flex items-center justify-center lg:px-5 md:px-2 px-1 hover:border-t-2 hover:border-slate-400 hover:bg-slate-200"><Link to="#">All</Link></li>
                        <li className="h-16 flex items-center justify-center lg:px-5 md:px-2 px-1 hover:border-t-2 hover:border-slate-400 hover:bg-slate-200"><Link to="#">Startups</Link></li>
                        <li className="h-16 flex items-center justify-center lg:px-5 md:px-2 px-1 hover:border-t-2 hover:border-slate-400 hover:bg-slate-200"><Link to="#">Laravel</Link></li>
                        <li className="h-16 flex items-center justify-center lg:px-5 md:px-2 px-1 hover:border-t-2 hover:border-slate-400 hover:bg-slate-200"><Link to="#">Redux</Link></li>
                        <li className="h-16 flex items-center justify-center lg:px-5 md:px-2 px-1 hover:border-t-2 hover:border-slate-400 hover:bg-slate-200"><Link to="#">Megentov</Link></li>
                        <li className="h-16 flex items-center justify-center lg:px-5 md:px-2 px-1 hover:border-t-2 hover:border-slate-400 hover:bg-slate-200"><Link to="#">Startups</Link></li>
                        <li className="h-16 flex items-center justify-center lg:px-5 md:px-2 px-1 hover:border-t-2 hover:border-slate-400 hover:bg-slate-200"><Link to="#">Docy</Link></li>
                        <li className="h-16 flex items-center justify-center lg:px-5 md:px-2 px-1 hover:border-t-2 hover:border-slate-400 hover:bg-slate-200"><Link to="#">Others</Link></li>
                    </div>
                </div>

                <div className="max-w-7xl lg:mx-auto md:mx-auto mx-5 my-16">
                    <div className='grid justify-items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                        <div class="card lg:w-96 md:w-80 w-80 bg-base-100 shadow-md hover:shadow-2xl transition-all">
                            <figure><img src={blogImg1} alt="Shoes" className='w-full' /></figure>
                            <div class="card-body">
                                <div className='flex gap-5'>
                                    <span className='text-sm' style={{ "color": "#acace6" }}>9 Min Read</span>
                                    <span style={{ "color": "#acace6" }}>|</span>
                                    <p className='text-blue-500 text-base'>WordPress</p>
                                </div>
                                <Link to='#' className='text-2xl hover:text-blue-700 font-medium whiteTextToBlack'>Is Your Store Safe From Magento Killer?</Link>
                                <p className='text-base' style={{ "color": "#6b707f" }}>The pressure to keep our skills sharp is constant. Mastering new skills may...</p>
                                <div class="card-actions justify-start">
                                    <div className='flex gap-5 items-center justify-start mt-8'>
                                        <div className='h-12 w-12 rounded-full'>
                                            <img src={userAvatar} alt="" className='w-full rounded-full' />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <p className='text-xl whiteTextToBlack'>Jason Response</p>
                                                <p className='text-sm commonParagraph'>Jul 14, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:w-96 md:w-80 w-80 bg-base-100 shadow-md hover:shadow-2xl transition-all">
                            <figure><img src={blogImg2} alt="Shoes" className='w-full' /></figure>
                            <div class="card-body">
                                <div className='flex gap-5'>
                                    <span className='text-sm' style={{ "color": "#acace6" }}>18 Min Read</span>
                                    <span style={{ "color": "#acace6" }}>|</span>
                                    <p className='text-blue-500 text-base'>Docy</p>
                                </div>
                                <Link to='#' className='text-2xl hover:text-blue-700 font-medium whiteTextToBlack'>70 Best Startups You Need to Watch Out for</Link>
                                <p className='text-base' style={{ "color": "#6b707f" }}>The pressure to keep our skills sharp is constant. Mastering new skills may...</p>
                                <div class="card-actions justify-start">
                                    <div className='flex gap-5 items-center justify-start mt-8'>
                                        <div className='h-12 w-12 rounded-full'>
                                            <img src={userAvatar} alt="" className='w-full rounded-full' />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <p className='text-xl whiteTextToBlack'>Jason Response</p>
                                                <p className='text-sm commonParagraph'>Jul 14, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:w-96 md:w-80 w-80 bg-base-100 shadow-md hover:shadow-2xl transition-all">
                            <figure><img src={blogImg3} alt="Shoes" className='w-full' /></figure>
                            <div class="card-body">
                                <div className='flex gap-5'>
                                    <span className='text-sm' style={{ "color": "#acace6" }}>10 Min Read</span>
                                    <span style={{ "color": "#acace6" }}>|</span>
                                    <p className='text-blue-500 text-base'>Laravel</p>
                                </div>
                                <Link to='#' className='text-2xl hover:text-blue-700 font-medium whiteTextToBlack'>Create Conditional Logic Forms & Publish</Link>
                                <p className='text-base' style={{ "color": "#6b707f" }}>The pressure to keep our skills sharp is constant. Mastering new skills may...</p>
                                <div class="card-actions justify-start">
                                    <div className='flex gap-5 items-center justify-start mt-8'>
                                        <div className='h-12 w-12 rounded-full'>
                                            <img src={userAvatar} alt="" className='w-full rounded-full' />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <p className='text-xl whiteTextToBlack'>Jason Response</p>
                                                <p className='text-sm commonParagraph'>Jul 14, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:w-96 md:w-80 w-80 bg-base-100 shadow-md hover:shadow-2xl transition-all">
                            <figure><img src={blogImg4} alt="Shoes" className='w-full' /></figure>
                            <div class="card-body">
                                <div className='flex gap-5'>
                                    <span className='text-sm' style={{ "color": "#acace6" }}>18 Min Read</span>
                                    <span style={{ "color": "#acace6" }}>|</span>
                                    <p className='text-blue-500 text-base'>WooCommerce</p>
                                </div>
                                <Link to='#' className='text-2xl hover:text-blue-700 font-medium whiteTextToBlack'>How to Use Forms for Enhancing UX In WordPress</Link>
                                <p className='text-base' style={{ "color": "#6b707f" }}>The pressure to keep our skills sharp is constant. Mastering new skills may...</p>
                                <div class="card-actions justify-start">
                                    <div className='flex gap-5 items-center justify-start mt-8'>
                                        <div className='h-12 w-12 rounded-full'>
                                            <img src={userAvatar} alt="" className='w-full rounded-full' />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <p className='text-xl whiteTextToBlack'>Jason Response</p>
                                                <p className='text-sm commonParagraph'>Jul 14, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:w-96 md:w-80 w-80 bg-base-100 shadow-md hover:shadow-2xl transition-all">
                            <figure><img src={blogImg5} alt="Shoes" className='w-full' /></figure>
                            <div class="card-body">
                                <div className='flex gap-5'>
                                    <span className='text-sm' style={{ "color": "#acace6" }}>10 Min Read</span>
                                    <span style={{ "color": "#acace6" }}>|</span>
                                    <p className='text-blue-500 text-base'>Megento</p>
                                </div>
                                <Link to='#' className='text-2xl hover:text-blue-700 font-medium whiteTextToBlack'>Create A WordPress Multi Step Form With weForms</Link>
                                <p className='text-base' style={{ "color": "#6b707f" }}>The pressure to keep our skills sharp is constant. Mastering new skills may...</p>
                                <div class="card-actions justify-start">
                                    <div className='flex gap-5 items-center justify-start mt-8'>
                                        <div className='h-12 w-12 rounded-full'>
                                            <img src={userAvatar} alt="" className='w-full rounded-full' />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <p className='text-xl whiteTextToBlack'>Jason Response</p>
                                                <p className='text-sm commonParagraph'>Jul 14, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:w-96 md:w-80 w-80 bg-base-100 shadow-md hover:shadow-2xl transition-all">
                            <figure><img src={blogImg6} alt="Shoes" className='w-full' /></figure>
                            <div class="card-body">
                                <div className='flex gap-5'>
                                    <span className='text-sm' style={{ "color": "#acace6" }}>14 Min Read</span>
                                    <span style={{ "color": "#acace6" }}>|</span>
                                    <p className='text-blue-500 text-base'>E-commerce</p>
                                </div>
                                <Link to='#' className='text-2xl hover:text-blue-700 font-medium whiteTextToBlack'>The Grand Ecommerce Giveaway Worth</Link>
                                <p className='text-base' style={{ "color": "#6b707f" }}>The pressure to keep our skills sharp is constant. Mastering new skills may...</p>
                                <div class="card-actions justify-start">
                                    <div className='flex gap-5 items-center justify-start mt-8'>
                                        <div className='h-12 w-12 rounded-full'>
                                            <img src={userAvatar} alt="" className='w-full rounded-full' />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <p className='text-xl whiteTextToBlack'>Jason Response</p>
                                                <p className='text-sm commonParagraph'>Jul 14, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blogs;