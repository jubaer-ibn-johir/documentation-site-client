import React from 'react';
import './Review.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import avatar1 from '../../assets/home-img/img-1.png';
import avatar2 from '../../assets/home-img/img-2.jpg';
import avatar3 from '../../assets/home-img/img-3.png';
import avatar4 from '../../assets/home-img/img-4.png';
import avatar5 from '../../assets/home-img/img-5.png';
import avatar6 from '../../assets/home-img/img-6.png';
import AddReview from './AddReview';


// import avatar1 from '../../assets/home-img/img-1.png'
// import avatar2 from '../../assets/home-img/img-2.jpg'
// import avatar3 from '../../assets/home-img/img-3.png'
// import avatar4 from '../../assets/home-img/img-4.png'
// import avatar5 from '../../assets/home-img/img-5.png'
// import avatar6 from '../../assets/home-img/img-6.png'
// import AddReview from './AddReview';


const Reviws = () => {
    return (
        <div className="my-16 lg:max-w-7xl mx-auto">
            <h1 className="text-center text-4xl font-semibold tracking-wide">What People Says</h1>
            <p className="text-center text-xl my-5 text-gray-500">We care about your opinion</p>
            <Swiper
                // install Swiper modules
                breakpoints={{
                    576: {
                        width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                }}
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}

                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            // slidesPerView={3}
            // spaceBetween={30}
            // slidesPerGroup={3}
            // loop={true}
            // loopFillGroupWithBlank={true}
            // pagination={{
            //     clickable: true,
            // }}

            // // navigation={true}
            // modules={[Autoplay, Pagination, Navigation]}
            // className="mySwiper mx-10"


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
            <div className='my-16'>
                <div className='text-center'>
                    <label for="AddReview" class="btn modal-button text-white bg-secondary hover:bg-transparent hover:text-secondary capitalize tracking-widest border-2 border-secondary  hover:border-secondary shadow-xl">Add a Review</label>

                    <AddReview></AddReview>

                </div >
            </div >
        </div >
    );
};

export default Reviws;