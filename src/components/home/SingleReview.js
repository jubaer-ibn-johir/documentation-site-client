import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SwiperSlide } from 'swiper/react';
import avatar1 from '../../assets/home-img/img-1.png';
import auth from '../../firebase.init';

const SingleReview = ({ review }) => {
    // const [user] = useAuthState(auth);

    const { rName, rDescription, rating, rPhoto } = review;

    // console.log(reviewDate);



    return (
        <div>
            <div>
                <div className='relative mt-20 w-full '>
                    <div className='bg-gray-100 h-72 p-10 m-5 border rounded-md shadow-lg'>
                        <div className='absolute top-[-45px] left-[45px]'>
                            <div className='w-20 border-[3px] border-blue-500 rounded-full'>
                                <img src={rPhoto} alt="" className='rounded-full w-20' />
                            </div>
                        </div>
                        <div>
                            <div className='my-5'>
                                <p className='text-sm md:text-lg lg:text-lg text-justify font-bold '>{rName}</p>
                                {/* <p>{rating}</p> */}
                                <div class="rating">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
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