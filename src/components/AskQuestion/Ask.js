import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import userAvatar from '../../assets/review-img/User-avatar.png';


const Ask = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className='bg-cyan-500 pt-52 pb-16'>
                <h1 className='text-5xl font-medium text-white text-center'>Hello! Here is EasyDoc</h1>
                <p className='text-xl text-white text-center mt-3'>Find the answer of your question</p>
            </div>
            <div className='max-w-7xl lg:mx-auto md:mx-5 mx-5 my-12'>
                <div className='grid grid-cols-12 gap-5 mb-5'>
                    <div className='lg:col-span-8 md:col-span-8 col-span-12 bg-cyan-100 p-5'>
                        <p className='text-center font-semibold text-2xl mb-3'>Search</p>
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 justify-items-center">
                            <input type="text" placeholder="Search..." class="input w-full outline-none border-none" {...register("searchValue", { required: true, maxLength: 20 })} />
                        </form>
                    </div>
                    <div className='lg:col-span-4 md:col-span-4 col-span-12 bg-cyan-100 p-5 grid grid-cols-1 justify-items-center'>
                        <p className='text-center font-semibold text-2xl mb-3 '>Find Category Wise Question
                        </p>
                        <div class="form-control w-full max-w-xs">
                            <select class="select select-bordered">
                                <option disabled selected>Select Category</option>
                                <option>Creative</option>
                                <option>Programming</option>
                                <option>Life Style</option>
                                <option>News</option>
                                <option>Photography</option>
                                <option>Skill</option>
                                <option>Tourist Tours</option>
                                <option>Marketing</option>
                                <option>Education</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='lg:col-span-8 md:col-span-8 col-span-12 mt-5'>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold text-3xl mb-3'>Questions</p>
                            <Link to="/askQuestion" className='bg-cyan-500 text-white rounded-xl px-5 py-3 border-2 border-cyan-500 flex items-center gap-2 hover:text-cyan-500 hover:border-2 hover:border-cyan-500 hover:bg-transparent transition-all'>Ask Question<AiOutlineQuestionCircle className='text-2xl' /></Link>
                        </div>
                        <div className='bg-cyan-100 p-5 mt-5'>
                            <p className='text-sm'>Skill</p>
                            <Link to="/answer" className='text-2xl font-bold hover:underline'>Install openssl-devel on Mac</Link>

                            <div className='flex gap-5 items-center justify-between mt-5'>
                                <div className='flex gap-5 items-center'>
                                    <div className='h-12 w-12 rounded-full'>
                                        <img src={userAvatar} alt="" className='w-full rounded-full' />
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <p className='text-xl'>User Name</p>
                                            <p className='text-sm'>Date</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <p className='text-xl'>2 answers</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-cyan-100 p-5 mt-5'>
                            <p className='text-sm'>Creative</p>
                            <Link to="#" className='text-2xl font-bold hover:underline'>How to post a blog in EasyDoc?</Link>

                            <div className='flex gap-5 items-center justify-between mt-5'>
                                <div className='flex gap-5 items-center'>
                                    <div className='h-12 w-12 rounded-full'>
                                        <img src={userAvatar} alt="" className='w-full rounded-full' />
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <p className='text-xl'>User Name</p>
                                            <p className='text-sm'>Date</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <p className='text-xl'>5 answers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-4 md:col-span-4 col-span-12 grid grid-cols-1 justify-items-center'>
                        <div className='bg-cyan-100 p-5 grid grid-cols-1 justify-items-center w-full'>
                            <p className='text-center font-semibold text-2xl mb-3'>Recent Questions
                            </p>
                        </div>
                        <div className='bg-cyan-100 p-5 grid grid-cols-1 justify-items-center w-full mt-5'>
                            <p className='text-center font-semibold text-2xl mb-3'>Stay In Touch
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ask;