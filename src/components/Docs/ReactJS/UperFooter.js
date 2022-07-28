import React from 'react';
import { FiChevronRight } from 'react-icons/fi'


const UperFooter = () => {
    return (
        <div className='mt-28' style={{ backgroundColor: '#282c34', }}>
            <div className='flex justify-center items-center mt-20 pb-16'>
                <button className='btn btn-primary hover:bg-white pt-6 py-12 lg:px-12 text-lg lg:text-xl mt-16  rounded'>Get Started</button>
                <p className='text-primary text-2xl hover:text-white mt-16 pl-5 lg:pl-10 leading-10 flex justify-center items-center'>Take the Tutorial <FiChevronRight className='mt-2'></FiChevronRight></p>
            </div>

        </div>
    );
};

export default UperFooter;