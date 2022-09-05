import React from 'react';
import ReactStars from 'react-rating-stars-component';

const SingleReview = ({ review }) => {
    const { rName, rDescription, rating, rPhoto } = review;

    return (
        <div>
            <div>
                <div className='relative mt-20 w-full '>
                    <div className='bg-gray-100 h-72 p-10 m-5 border rounded-md shadow-lg CardsCommonBg'>
                        <div className='absolute top-[-45px] left-[45px]'>
                            <div className='w-20 border-[3px] border-blue-500 rounded-full'>
                                <img src={rPhoto} alt="" className='rounded-full w-20' />
                            </div>
                        </div>
                        <div>
                            <div className='my-5'>
                                <p className='text-sm md:text-lg lg:text-lg text-justify font-bold'>{rName}</p>
                                <div>
                                    <ReactStars
                                        count={rating}
                                        size={24}
                                        color="#ffd700"
                                    />
                                </div>
                            </div>
                            <p>{rDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;