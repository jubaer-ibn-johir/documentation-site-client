import React from 'react';
import { MdLibraryAdd, MdOutlineManageSearch } from 'react-icons/md';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const ManageTutorials = () => {
    return (
        <div className='lg:p-8 md:p-8 p-4 lg:pb-0 md:pb-0 pb-10 bg-orange-50 lg:h-screen md:h-screen flex justify-center items-center lg:mb-0 md:mb-0 mb-12 componentsCommonBody'>
            <ScrollToTop smooth color="red" top='20' />
            <div className='lg:flex md:flex gap-5 grid grid-cols-1'>
                <div className='bg-white lg:p-12 p-8 lg:w-96 w-80 grid grid-cols-1 justify-items-center shadow-md hover:shadow-xl transition-all CardsCommonBg'>
                    <div>
                        <div className='bg-gradient-to-r hover:bg-gradient-to-l from-orange-500 to-orange-300 h-16 w-16 rounded-full flex justify-center items-center'>
                            <div className='text-white text-4xl'>< MdLibraryAdd /></div>
                        </div>
                    </div>
                    <div className='text-2xl text-center my-12 font-semibold'>Want to add tutorials?</div>
                    <div>
                        <Link to="/admin-panel/add-tutorial" className='flex items-center text-white font-bold text-2xl px-4 py-3 rounded-xl gap-2 bg-gradient-to-r hover:bg-gradient-to-l from-orange-500 to-orange-300'>Add<HiOutlineArrowNarrowRight /></Link>
                    </div>
                </div>
                <div className='rounded-xl bg-white lg:p-12 p-8 lg:w-96 w-80 grid grid-cols-1 justify-items-center shadow-md hover:shadow-xl transition-all CardsCommonBg'>
                    <div>
                        <div className='bg-gradient-to-r hover:bg-gradient-to-l from-orange-500 to-orange-300 h-16 w-16 rounded-full flex justify-center items-center'>
                            <div className='text-white text-4xl'>< MdOutlineManageSearch /></div>
                        </div>
                    </div>
                    <div className='text-2xl text-center my-12 font-semibold'>Want to manage tutorials?</div>
                    <div>
                        <Link to="/admin-panel/tutorials-manage" className='flex items-center text-white font-bold text-2xl px-4 py-3 rounded-xl gap-2 bg-gradient-to-r hover:bg-gradient-to-l from-orange-500 to-orange-300'>Manage<HiOutlineArrowNarrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTutorials;