import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleReview from './SingleReview';
import { Link } from 'react-router-dom';

const Reviws = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://polar-shore-69456.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // console.log(reviews);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='h-screen max-w-7xl mx-auto py-24 mb-36 md:mb-0 lg:mb-64'>
            <h1 className="text-center text-4xl font-semibold tracking-wide">What People Says</h1>
            <p className="text-center text-xl my-5 text-gray-500">We care about your opinion</p>
            <Slider {...settings}>
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>)
                }
            </Slider >

            <div className='my-16 mb-5'>
                <div className='text-center'>
                    <Link to='/addReview'><label for="AddReview" class="btn modal-button text-white bg-cyan-500 hover:bg-transparent hover:text-cyan-500 capitalize tracking-widest border-2 border-cyan-500  hover:border-cyan-500 shadow-xl">Add a Review</label></Link>
                </div >
            </div >
        </div >
    );
};

export default Reviws;

// import React, { useEffect, useState } from 'react';
// import './Review.css'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { Pagination, Navigation, Autoplay } from "swiper";
// import avatar1 from '../../assets/home-img/img-1.png';
// import avatar2 from '../../assets/home-img/img-2.jpg';
// import avatar3 from '../../assets/home-img/img-3.png';
// import avatar4 from '../../assets/home-img/img-4.png';
// import avatar5 from '../../assets/home-img/img-5.png';
// import avatar6 from '../../assets/home-img/img-6.png';
// import AddReview from './AddReview';
// import { Link } from 'react-router-dom';
// import SingleBlog from '../Dashboard/SingleBlog';
// import SingleReview from './SingleReview';

// const Reviws = () => {

//     const [reviews, setReviews] = useState([]);
//     useEffect(() => {
//         fetch(`https://polar-shore-69456.herokuapp.com/review`)
//             .then(res => res.json())
//             .then(data => setReviews(data))
//     }, [])
//     console.log(reviews);


//     return (
//         <div className="pt-5 pb-44">
//             <div className="my-16 lg:max-w-7xl mx-auto">
//                 <h1 className="text-center text-4xl font-semibold tracking-wide">What People Says</h1>
//                 <p className="text-center text-xl my-5 text-gray-500">We care about your opinion</p>
//                 <Swiper
//                     // install Swiper modules
//                     breakpoints={{
//                         576: {
//                             width: 576,
//                             slidesPerView: 1,
//                         },
//                         768: {
//                             width: 768,
//                             slidesPerView: 2,
//                         },
//                     }}
//                     modules={[Navigation, Pagination]}
//                     spaceBetween={30}
//                     slidesPerView={1}
//                     navigation
//                     pagination={{ clickable: true }}
//                     scrollbar={{ draggable: true }}
//                     onSlideChange={() => console.log("slide change")}

//                     autoplay={{
//                         delay: 5000,
//                         disableOnInteraction: false,
//                     }}

//                 // slidesPerView={1}
//                 // spaceBetween={30}
//                 // slidesPerGroup={3}
//                 // loop={true}
//                 // loopFillGroupWithBlank={true}
//                 // pagination={{
//                 //     clickable: true,
//                 // }}

//                 // // navigation={true}
//                 // modules={[Autoplay, Pagination, Navigation]}
//                 // className="mySwiper mx-10"
//                 >
//                     <SwiperSlide>
//                         {
//                             reviews.map(review => <SingleReview
//                                 key={review._id}
//                                 review={review}
//                             ></SingleReview>)
//                         }
//                     </SwiperSlide>

//                 </Swiper>
//                 <div className='my-16'>
//                     <div className='text-center'>
//                         <Link to='/addReview'>    <label for="AddReview" class="btn modal-button text-white bg-cyan-500 hover:bg-transparent hover:text-cyan-500 capitalize tracking-widest border-2 border-cyan-500  hover:border-cyan-500 shadow-xl">Add a Review</label></Link>

//                         {/* <AddReview></AddReview> */}

//                     </div >
//                 </div >

//                 {/* <SwiperSlide>
//                         <div className="p-3" >
//                             <div className="p-7 rounded-lg customBg">
//                                 <p>I was learning react. As we know react has so many dependencies but hasn't enough documentation. EasyDoc is fulfilling our needs. I hope EasyDoc will work more to make more easy documents for learners.</p>
//                             </div>
//                             <div className="text-center my-5 flex justify-center">
//                                 <div class="avatar mr-3">
//                                     <div class="w-16 rounded-full">
//                                         <img src={avatar2} alt="" />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-bold text-xl">Emma Roberts</h3>
//                                     <div class="rating">
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <div className="p-3">
//                             <div className="p-7 rounded-lg customBg">
//                                 <p>I'm learning nextJs. I'm taking help from EasyDoc. I have a problem with the light mood on the screen. Here in EasyDoc, I feel cool, because the whole site has dark mood facility. It is saving my eyes. Thanks, EasyDoc.</p>
//                             </div>
//                             <div className="text-center my-5 flex justify-center">
//                                 <div class="avatar mr-3">
//                                     <div class="w-16 rounded-full">
//                                         <img src={avatar3} alt="" />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-bold text-xl">Thomas Moriz</h3>
//                                     <div class="rating">
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <div className="p-3">
//                             <div className="p-7 rounded-lg customBg">
//                                 <p>This site provides amazing content for programmers. I searched for a good documentation site and then found this excellent site. Ill request to Easy Doc to add more documents for us.</p>
//                             </div>
//                             <div className="text-center my-5 flex justify-center">
//                                 <div class="avatar mr-3">
//                                     <div class="w-16 rounded-full">
//                                         <img src={avatar4} alt="" />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-bold text-xl">Robert Downee</h3>
//                                     <div class="rating">
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <div className="p-3" >
//                             <div className="p-7 rounded-lg customBg">
//                                 <p>EasyDoc is good enough for beginners. The site is well designed and organized. This is so charming that the users of this site will get 3 technology from the same website. Best wishes for EasyDoc.</p>
//                             </div>
//                             <div className="text-center my-5 flex justify-center">
//                                 <div class="avatar mr-3">
//                                     <div class="w-16 rounded-full">
//                                         <img src={avatar5} alt="" />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-bold text-xl">Kent C. Dodds</h3>
//                                     <div class="rating">
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <div className="p-3" >
//                             <div className="p-7 rounded-lg customBg">
//                                 <p>I'm learning nextJs. I'm taking help from EasyDoc. I have a problem with the light mood on the screen. Here in EasyDoc, I feel cool, because the whole site has dark mood facility. It is saving my eyes. Thanks, EasyDoc.</p>
//                             </div>
//                             <div className="text-center my-5 flex justify-center">
//                                 <div class="avatar mr-3">
//                                     <div class="w-16 rounded-full">
//                                         <img src={avatar6} alt="" />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h3 className="font-bold text-xl">Vanessa Daniel</h3>
//                                     <div class="rating">
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                         <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="p-3">
//                         <div className="p-7 rounded-lg customBg">
//                             <p>This is an excellent site for redux, react, and next.js documentation. I have been struggling to make myself good enough in redux and nextJs. Thanks, EasyDoc and the website team for those documents I was looking for.</p>
//                         </div>
//                         <div className="text-center my-5 flex justify-center">
//                             <div class="avatar mr-3">
//                                 <div class="w-16 rounded-full">
//                                     <img src={avatar1} alt="" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <h3 className="font-bold text-xl">Vanessa Daniel</h3>
//                                 <div class="rating">
//                                     <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                     <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                     <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                     <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
//                                     <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>*/}
//             </div >
//         </div>
//     );
// };

// export default Reviws;
