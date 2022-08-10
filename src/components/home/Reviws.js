import React from 'react';
import './Review.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import avatar1 from '../../assets/home-img/img-1.png'
import avatar2 from '../../assets/home-img/img-2.jpg'
import avatar3 from '../../assets/home-img/img-3.png'
import avatar4 from '../../assets/home-img/img-4.png'
import avatar5 from '../../assets/home-img/img-5.png'
import avatar6 from '../../assets/home-img/img-6.png'
import AddReview from './AddReview';

const Reviws = () => {
    return (
        <div className="my-16 lg:max-w-7xl mx-auto">
            <h1 className="text-center text-4xl font-semibold tracking-wide">What People Says</h1>
            <p className="text-center text-xl mt-5 text-gray-500">We care about your opinion</p>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}

                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mx-10"
            >
                <SwiperSlide>
                    <div className="p-3">
                        <div className="p-7 rounded-lg customBg">
                            <p>Unleash cross-media information without cross-media value maximize timely deliverables for real-time. Unleash cross-media information without cross-media value maximize timely deliverables for real-time.</p>
                        </div>
                        <div className="text-center my-5 flex justify-center">
                            <div class="avatar mr-3">
                                <div class="w-16 rounded-full">
                                    <img src={avatar1} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Vanessa Daniel</h3>
                                <div class="rating">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-3">
                        <div className="p-7 rounded-lg customBg">
                            <p>Unleash cross-media information without cross-media value maximize timely deliverables for real-time. Unleash cross-media information without cross-media value maximize timely deliverables for real-time.</p>
                        </div>
                        <div className="text-center my-5 flex justify-center">
                            <div class="avatar mr-3">
                                <div class="w-16 rounded-full">
                                    <img src={avatar2} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Emma Roberts</h3>
                                <div class="rating">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-3">
                        <div className="p-7 rounded-lg customBg">
                            <p>Unleash cross-media information without cross-media value maximize timely deliverables for real-time. Unleash cross-media information without cross-media value maximize timely deliverables for real-time.</p>
                        </div>
                        <div className="text-center my-5 flex justify-center">
                            <div class="avatar mr-3">
                                <div class="w-16 rounded-full">
                                    <img src={avatar3} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Thomas Moriz</h3>
                                <div class="rating">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-3">
                        <div className="p-7 rounded-lg customBg">
                            <p>Unleash cross-media information without cross-media value maximize timely deliverables for real-time. Unleash cross-media information without cross-media value maximize timely deliverables for real-time.</p>
                        </div>
                        <div className="text-center my-5 flex justify-center">
                            <div class="avatar mr-3">
                                <div class="w-16 rounded-full">
                                    <img src={avatar4} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Robert Downee</h3>
                                <div class="rating">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-3">
                        <div className="p-7 rounded-lg customBg">
                            <p>Unleash cross-media information without cross-media value maximize timely deliverables for real-time. Unleash cross-media information without cross-media value maximize timely deliverables for real-time.</p>
                        </div>
                        <div className="text-center my-5 flex justify-center">
                            <div class="avatar mr-3">
                                <div class="w-16 rounded-full">
                                    <img src={avatar5} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Kent C. Dodds</h3>
                                <div class="rating">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="p-3">
                        <div className="p-7 rounded-lg customBg">
                            <p>Unleash cross-media information without cross-media value maximize timely deliverables for real-time. Unleash cross-media information without cross-media value maximize timely deliverables for real-time.</p>
                        </div>
                        <div className="text-center my-5 flex justify-center">
                            <div class="avatar mr-3">
                                <div class="w-16 rounded-full">
                                    <img src={avatar6} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">Vanessa Daniel</h3>
                                <div class="rating">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <AddReview></AddReview>
            {/* <input type="checkbox" id="AddReview" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box shadow-2xl bg-emerald-50">
                        <label for="AddReview" class="btn btn-sm btn-circle absolute right-2 top-2 bg-secondary text-white border-secondary hover:border-secondary hover:text-secondary hover:bg-transparent ">✕</label>

                        <div className='my-5 '>
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 ">
                                <div className='grid grid-cols-1 justify-items-center'>
                                    <div className='h-16 w-16 rounded-full mb-5'>
                                        <img src={userAvatar} alt="" className='rounded-full w-full' />
                                    </div>
                                    <div>
                                        <p className='font-semibold text-xl'>User Name</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 text-left'>
                                    <p className='font-semibold'>Rate Us: </p>
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <textarea {...register("textArea")} cols="30" rows="5" placeholder='Add a Review' className='w-full outline-none px-5 py-2 rounded-md mb-3 bg-emerald-200' />
                                <input type="submit" className='text-white font-bold text-2xl px-5 py-2 rounded-xl gap-2 bg-gradient-to-r hover:bg-gradient-to-l from-emerald-500 to-emerald-300 cursor-pointer w-28 justify-center' value="Add" />
                            </form>
                        </div>
                    </div>
                </div> */}
        </div >
    );
};

export default Reviws;