import React from 'react';
import blankPic from '../../assets/profile/user-profile.png'
import ScrollToTop from 'react-scroll-to-top';

const SingleAnswer = ({ answer }) => {
    const { aPhoto, aAnswer, aName, aDate } = answer
    return (
        <div className='border-b-2 pb-5'>
            <ScrollToTop smooth color="red" top='20' />
            <div className='my-5'>
                <p>{aAnswer}</p>
            </div>
            <div className='flex gap-5 items-center justify-end'>
                <div className='h-12 w-12 rounded-full'>
                    <img src={aPhoto ? aPhoto : blankPic} alt="" className='w-full rounded-full' />
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-lg font-medium'>{aName}</p>
                        <p className='text-sm'>{aDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAnswer;