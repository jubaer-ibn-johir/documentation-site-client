import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleQuestion from './SingleQuestion';
import ScrollToTop from 'react-scroll-to-top';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Ask = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [questions, setQuestion] = useState([])
    useEffect(() => {
        fetch(`https://polar-shore-69456.herokuapp.com/question`)
            .then(res => res.json())
            .then(data => setQuestion(data))
    }, [])

    return (
        <div className=''>
            <ScrollToTop smooth color="red" top='20' />
            <div div className='pt-52 pb-16' style={{ background: 'linear-gradient(223deg, rgba(5,83,124,1) 0%, rgba(55,157,179,1) 50%, rgba(5,83,124,1) 100%)' }
            }>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-medium text-white text-center'>Hello! Here is EasyDoc</h1>
                <p className='lg:text-xl md:text-xl text-lg text-white text-center mt-3'>Find the answer of your question</p>
            </div >
            <div className='w-full bg-slate-100 py-16 componentsCommonBody pb-60'>
                <div className='max-w-7xl lg:mx-auto md:mx-12 mx-5'>
                    <div className='w-full lg:flex md:flex grid grid-cols-1 gap-12'>
                        <div className='lg:w-2/3 md:w-2/3 w-full'>
                            <div className='bg-white p-5 rounded-md CardsCommonBg'>
                                <p className='text-center font-semibold text-2xl mb-3'>Search</p>
                                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center">
                                    <input type="text" placeholder="Search..." class="input w-full outline-none border-none bg-slate-100 focus:outline-none rounded-r-none CardsCommonBgSecondary" {...register("searchValue", { required: true, maxLength: 20 })} />
                                    <input type="submit" className='text-white border-2 bg-slate-500 border-slate-500 font-bold text-lg lg:px-5 md:px-4 px-3 py-2 rounded-xl rounded-l-none gap-2 hover:border-slate-500 hover:text-slate-500 hover:bg-slate-100 transition-all cursor-pointer text-center' value="Submit" />
                                </form>
                            </div>
                            <div className='grid gap-5'>
                                <div className='mt-16'>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-semibold lg:text-3xl md:text-2xl text-xl mb-3'>Questions</p>
                                        <Link to="/askQuestion" className='bg-cyan-600 text-white rounded-xl lg:px-5 md:px-4 px-3 lg:py-3 md:py-3 py-2 border-2 border-cyan-600 flex items-center gap-2 hover:text-cyan-600 hover:border-2 hover:border-cyan-600 hover:bg-white transition-all'>Ask Question<AiOutlineQuestionCircle className='text-2xl' /></Link>
                                    </div>

                                    <div>
                                        {
                                            questions.map(question => <SingleQuestion question={question} key={question._id}></SingleQuestion>)
                                        }
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='lg:w-1/3 md:w-1/3 w-full'>
                            <div className='bg-white p-5 grid grid-cols-1 justify-items-center rounded-md CardsCommonBg'>
                                <p className='text-center font-semibold text-2xl mb-3 '>Find Category Wise Question
                                </p>
                                <div class="form-control w-full max-w-xs">
                                    <select class="select select-bordered bg-slate-100 focus:outline-none CardsCommonBgSecondary">
                                        <option disabled selected>Select Category</option>
                                        <option>Creative</option>
                                        <option>Programming</option>
                                        <option>Lifestyle</option>
                                        <option>News</option>
                                        <option>Photography</option>
                                        <option>Skill</option>
                                        <option>Tourist Tours</option>
                                        <option>Marketing</option>
                                        <option>Education</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 justify-items-center'>
                                <div className='bg-white p-5 grid grid-cols-1 justify-items-center w-full mt-5 rounded-md CardsCommonBg'>
                                    <p className='text-center font-semibold text-2xl mb-3'>Recent Questions
                                    </p>
                                </div>
                                <div className='bg-white p-5 grid grid-cols-1 justify-items-center w-full mt-5 rounded-md CardsCommonBg'>
                                    <p className='text-center font-semibold text-2xl mb-3'>Stay In Touch
                                    </p>
                                    <div className='flex lg:gap-x-5 md:gap-x-3 gap-x-2 mt-6'>
                                        <div className='lg:h-12 md:h-10 h-8 lg:w-12 md:w-10 w-8 rounded-full border-2 border-slate-400 hover:border-blue-800 flex justify-center items-center hover:bg-blue-800 transition-all'>
                                            <a href="/"><FaFacebook className='hover:text-white text-slate-400 lg:w-7 md:w-5 w-4 lg:h-7 md:h-5 h-4'></FaFacebook></a>
                                        </div>
                                        <div className='lg:h-12 md:h-10 h-8 lg:w-12 md:w-10 w-8 rounded-full border-2 border-slate-400 hover:border-blue-800 flex justify-center items-center hover:bg-blue-800 transition-all'>
                                            <a href="/"><FaLinkedin className='hover:text-white text-slate-400 lg:w-7 md:w-5 w-4 lg:h-7 md:h-5 h-4'></FaLinkedin></a>
                                        </div>
                                        <div className='lg:h-12 md:h-10 h-8 lg:w-12 md:w-10 w-8 rounded-full border-2 border-slate-400 hover:border-blue-800 flex justify-center items-center hover:bg-blue-800 transition-all'>
                                            <a href="/"><FaYoutube className='hover:text-white text-slate-400 lg:w-7 md:w-5 w-4 lg:h-7 md:h-5 h-4'></FaYoutube></a>
                                        </div>
                                        <div className='lg:h-12 md:h-10 h-8 lg:w-12 md:w-10 w-8 rounded-full border-2 border-slate-400 hover:border-blue-800 flex justify-center items-center hover:bg-blue-800 transition-all'>
                                            <a href="/"><FaTwitter className='hover:text-white text-slate-400 lg:w-7 md:w-5 w-4 lg:h-7 md:h-5 h-4'></FaTwitter></a>
                                        </div>
                                        {/* <a href="/"><FaLinkedin className='hover:text-blue-800 text-slate-400 w-7 h-7'></FaLinkedin></a>
                                        <a href="/"><FaYoutube className='hover:text-red-600 text-slate-400 w-7 h-7'></FaYoutube></a>
                                        <a href="/"><FaTwitter className='hover:text-blue-600 text-slate-400 w-7 h-7'></FaTwitter></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    );
};

export default Ask;