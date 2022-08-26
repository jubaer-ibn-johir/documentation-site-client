import React from 'react';
import blankPic from '../../assets/profile/user-profile.png'

const SingleComment = ({comment}) => {
    const {userComment,userName,userPhoto,postDate}=comment;
    return (
        <div className='flex gap-5 justify-center my-12 w-full'>
        <div className='w-1/12 lg:mr-0 md:mr-3 mr-2'>
            <div className='lg:h-16 md:h-16 h-12 lg:w-16 md:w-16 w-12 rounded-full'>
                <img src={userPhoto?userPhoto:blankPic} alt="UserImage" className='rounded-full' />
            </div>
        </div>
        <div className='w-11/12'>
            <div>
                <p className='text-base font-medium' style={{ color: '#1d2746' }}>{userName?userName:"User Name"}</p>
                <p className='text-sm' style={{ color: '#6b707f' }}>{postDate}</p>
            </div>
            <div className='mt-5'>
                <p className='text-base' style={{ color: '#6b707f' }}>
                    {userComment}
                </p>
            </div>
        </div>
    </div>
    );
};

export default SingleComment;