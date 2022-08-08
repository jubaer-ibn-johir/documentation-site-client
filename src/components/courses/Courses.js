import React from 'react';
import fullStack from '../../assets/courses/full stack.jpg';
import reduxImg from '../../assets/courses/redux.jpg';
import pythonImg from '../../assets/courses/python.jpg';
import { BiStopwatch } from 'react-icons/bi';
import { RiPlayList2Fill } from 'react-icons/ri';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div className=''>
            <div className='bg-white lg:pt-44 md:pt-44 pt-32 pb-12 border border-b-2 shadow-2xl'>
                <p className='lg:text-5xl md:text-4xl text-3xl font-semibold text-center'>Courses</p>
            </div>
            <div className='flex justify-center items-center lg:py-24 md:py-16 pb-16 bg-accent'>
                <div className='lg:flex md:grid md:grid-cols-2 grid grid-cols-1 justify-center items-center gap-5'>
                    <div className='bg-white shadow-xl hover:shadow-2xl rounded-md lg:mt-0 md:mt-0 mt-14'>
                        <div className='w-72'>
                            <img src={fullStack} className="w-full rounded-t-md" alt="" />
                        </div>
                        <div className='px-5 pb-5'>
                            <div className='flex justify-between mb-5 mt-2'>
                                <div className='flex items-center gap-1'><span className='text-xl' style={{ "color": "#FF3066" }}><RiPlayList2Fill /></span>300 Lessons</div>
                                <div className='flex items-center gap-1'><span className='text-2xl' style={{ "color": "#FF3066" }}><BiStopwatch /></span> 80 hr 30 min</div>
                            </div>
                            <div>
                                <p className='font-semibold text-lg mt-5 mb-10'>Full Stack Web Development</p>
                            </div>
                            <div>
                                <Link to="#" className='flex items-center gap-1 hover:gap-3 tracking-widest text-white font-semibold px-5 py-3 rounded-xl' style={{ "backgroundColor": "#FF3066" }}>Enroll Now<HiOutlineArrowNarrowRight /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl hover:shadow-2xl rounded-md'>
                        <div className='w-72'>
                            <img src={reduxImg} className="w-full rounded-t-md" alt="" />
                        </div>
                        <div className='px-5 pb-5'>
                            <div className='flex justify-between mb-5 mt-2'>
                                <div className='flex items-center gap-1'><span className='text-xl' style={{ "color": "#FF3066" }}><RiPlayList2Fill /></span>100 Lessons</div>
                                <div className='flex items-center gap-1'><span className='text-2xl' style={{ "color": "#FF3066" }}><BiStopwatch /></span> 40 hr 30 min</div>
                            </div>
                            <div>
                                <p className='font-semibold text-lg mt-5 mb-10'>Learn Redux</p>
                            </div>
                            <div>
                                <Link to="#" className='flex items-center gap-1 hover:gap-3 tracking-widest text-white font-semibold px-5 py-3 rounded-xl' style={{ "backgroundColor": "#FF3066" }}>Enroll Now<HiOutlineArrowNarrowRight /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl hover:shadow-2xl rounded-md'>
                        <div className='w-72'>
                            <img src={pythonImg} className="w-full rounded-t-md" alt="" />
                        </div>
                        <div className='px-5 pb-5'>
                            <div className='flex justify-between mb-5 mt-2'>
                                <div className='flex items-center gap-1'><span className='text-xl' style={{ "color": "#FF3066" }}><RiPlayList2Fill /></span>250 Lessons</div>
                                <div className='flex items-center gap-1'><span className='text-2xl' style={{ "color": "#FF3066" }}><BiStopwatch /></span> 70 hr 30 min</div>
                            </div>
                            <div>
                                <p className='font-semibold text-lg mt-5 mb-10'>Learn Python</p>
                            </div>
                            <div>
                                <Link to="#" className='flex items-center gap-1 hover:gap-3 tracking-widest text-white font-semibold px-5 py-3 rounded-xl' style={{ "backgroundColor": "#FF3066" }}>Enroll Now<HiOutlineArrowNarrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;