import React from 'react';
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import userAvatar from '../../assets/home-img/userAvatar.png';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    }
    return (
        <div>
            <input type="checkbox" id="AddReview" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box shadow-2xl bg-cyan-50">
                    <label for="AddReview" class="btn btn-sm btn-circle absolute right-2 top-2 bg-cyan-500 text-white border-cyan-500 hover:border-cyan-500 hover:text-cyan-500 hover:bg-transparent ">✕</label>

                    <div className='my-5'>
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 justify-items-center">
                            <div className='grid grid-cols-1 justify-items-center'>
                                <div className='h-16 w-16 rounded-full mb-5'>
                                    <img src={userAvatar} alt="" className='rounded-full w-full' />
                                </div>
                                <div>
                                    <p className='font-semibold text-xl'>User Name</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 justify-start w-full'>
                                <p className='font-semibold'>Rate Us: </p>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <textarea {...register("textArea")} cols="30" rows="5" placeholder='Add a Review' className='w-full outline-none px-5 py-2 rounded-md mb-3 bg-cyan-200' />
                            <input type="submit" className='text-white font-bold text-2xl px-5 py-2 rounded-xl gap-2 bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-cyan-300 cursor-pointer w-28' value="Add" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;