import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UseCourses from '../../hooks/UseCourses';
import { BiStopwatch } from 'react-icons/bi';
import { RiPlayList2Fill } from 'react-icons/ri';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import ScrollToTop from 'react-scroll-to-top';

const SingleCourseDetails = () => {
    const { courseId } = useParams()
    let [courses] = UseCourses(courseId)
    return (
        // <div className='flex justify-center items-center lg:py-24 md:py-16 pb-16 bg-accent'>
        //     <ScrollToTop smooth color="red" top='20' />
        //     <div className='lg:flex md:grid md:grid-cols-2 grid grid-cols-1 justify-center items-center gap-5'>
        //         <div className='bg-white shadow-xl hover:shadow-2xl rounded-md lg:mt-0 md:mt-0 mt-14'>
        //             <div className='w-72'>
        //                 <img src={courses.image} className="w-full rounded-t-md" alt="" />
        //             </div>
        //             <div className='px-5 pb-5'>
        //                 <div className='flex justify-between mb-5 mt-2'>
        //                     <div className='flex items-center gap-1'><span className='text-xl' style={{ "color": "#FF3066" }}><RiPlayList2Fill /></span>{courses.lessons} Lessons</div>
        //                     <div className='flex items-center gap-1'><span className='text-2xl' style={{ "color": "#FF3066" }}><BiStopwatch /></span>{courses.time}</div>
        //                 </div>
        //                 <div>
        //                     <p className='font-semibold text-lg mt-5 '>{courses.name}</p>
        //                     <p className='font-semibold text-lg mt-5'>Price: {courses.price}</p>
        //                     <p className=' text-lg mt-5 w-64'>Description:
        //                         <br />
        //                         {courses?.description}</p>

        //                 </div>
        //                 <div>
        //                     <Link to='/payment'> <button className='flex items-center gap-1 hover:gap-3 tracking-widest text-white font-semibold px-5 py-3 mt-5 rounded-xl bg-primary' >Purches<HiOutlineArrowNarrowRight /></button></Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='bg-slate-400 componentsCommonBody pb-36'>
            <div className='flex justify-center items-center lg:h-screen md:h-screen'>
                <div className='max-w-5xl lg:mx-auto md:mx-5 mx-5'>
                    <div className='lg:flex md:flex grid grid-cols-1 rounded-xl lg:my-0 md:my-0 my-24' style={{ 'boxShadow': "0 .5rem 1rem rgba(0,0,0,.15)" }}>
                        <div className='lg:w-1/2 md:w-1/2 w-full'>
                            <img src={courses.image} alt="" className='w-full h-full lg:rounded-l-lg md:rounded-l-lg rounded-t-lg' style={{}} />
                        </div>
                        <div className='lg:py-12 md:py-8 py-8 lg:pl-12 md:pl-5 pl-5 lg:pr-8 md:pr-5 pr-5 lg:w-1/2 md:w-1/2 bg-white lg:rounded-r-lg md:rounded-r-lg rounded-b-lg CardsCommonBg'>
                            <div className='px-5 pb-5'>
                                <div className='flex justify-between mb-5 mt-2'>
                                    <div className='flex items-center gap-1'><span className='text-xl' style={{ "color": "#FF3066" }}><RiPlayList2Fill /></span>{courses.lessons} Lessons</div>
                                    <div className='flex items-center gap-1'><span className='text-2xl' style={{ "color": "#FF3066" }}><BiStopwatch /></span>{courses.time}</div>
                                </div>
                                <div>
                                    <p className='font-semibold text-lg mt-5 '>{courses.name}</p>
                                    <p className='font-semibold text-lg mt-5'>Price: {courses.price}</p>
                                    <p className=' text-lg mt-5'>Description:
                                        <br />
                                        {courses?.description}</p>
                                </div>
                                <div>
                                    <Link to='/payment'> <button className='flex items-center gap-1 hover:gap-3 tracking-widest text-white font-semibold px-5 py-3 mt-5 rounded-xl bg-primary transition-all'>Purches<HiOutlineArrowNarrowRight /></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourseDetails;