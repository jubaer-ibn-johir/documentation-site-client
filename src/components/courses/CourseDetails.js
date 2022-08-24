import React from 'react';
import { BiStopwatch } from 'react-icons/bi';
import { RiPlayList2Fill } from 'react-icons/ri';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const CourseDetails = (props) => {
    const { _id, price, name, time, lessons, description, image } = props.course
    const navigate = useNavigate()
    const handleNavigate = id => {
        navigate(`/singleCourseDetails/${id}`)
    }
    return (
        <div>
            <ScrollToTop smooth color="red" top='20' />
            <div className=''>
                <div className='flex justify-center items-center lg:py-24 md:py-16 pb-16 '>
                    <div className='lg:flex md:grid md:grid-cols-2 grid grid-cols-1 justify-center items-center gap-5'>
                        <div className='bg-white shadow-xl hover:shadow-2xl rounded-md lg:mt-0 md:mt-0 mt-14'>
                            <div className='w-72'>
                                <img src={image} className="w-full rounded-t-md" alt="" />
                            </div>
                            <div className='px-5 pb-5'>
                                <div className='flex justify-between mb-5 mt-2'>
                                    <div className='flex items-center gap-1'><span className='text-xl' style={{ "color": "#FF3066" }}><RiPlayList2Fill /></span>{lessons} Lessons</div>
                                    <div className='flex items-center gap-1'><span className='text-2xl' style={{ "color": "#FF3066" }}><BiStopwatch /></span>{time}</div>
                                </div>
                                <div>
                                    <p className='font-semibold text-lg mt-5 mb-10'>{name}</p>
                                </div>
                                <div>
                                    <button onClick={() => handleNavigate(_id)} className='flex items-center gap-1 hover:gap-3 tracking-widest text-white font-semibold px-5 py-3 rounded-xl' style={{ "backgroundColor": "#FF3066" }}>Enroll Now <HiOutlineArrowNarrowRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;