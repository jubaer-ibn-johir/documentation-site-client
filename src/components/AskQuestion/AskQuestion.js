import React from 'react';
import { useForm } from "react-hook-form";

const AskQuestion = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className='bg-cyan-500 pt-52 pb-16'>
                <h1 className='text-5xl font-medium text-white text-center'>Hello! Here is EasyDoc</h1>
                <p className='text-xl text-white text-center mt-3'>Shear your question with EasyDoc and find the best answer</p>
            </div>
            <div className="max-w-7xl lg:mx-auto md:mx-5 mx-5">
                <div className=" bg-cyan-100 my-5 gap-5 p-5 shadow-md hover:shadow-2xl transition-all rounded-xl">
                    <div className=''>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className='grid grid-cols-12 gap-5 mb-5'>
                                <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                    <div className='w-full'>
                                        <p className='text-sm'>Title</p>
                                        <input type="text" placeholder="Please enter a title" class="input w-full outline-none border-none" {...register("searchValue", { required: true, maxLength: 20 })} />
                                    </div>
                                </div>
                                <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                    <div>
                                        <p className='text-sm'>Select Category</p>
                                        <div class="form-control">
                                            <select class="select select-bordered">
                                                <option disabled selected>Select Category</option>
                                                <option>Creative</option>
                                                <option>Programming</option>
                                                <option>Life Style</option>
                                                <option>News</option>
                                                <option>Photography</option>
                                                <option>Skill</option>
                                                <option>Tourist Tours</option>
                                                <option>Marketing</option>
                                                <option>Education</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <textarea {...register("description")} required cols="30" rows="10" placeholder='Description' className='w-full bg-white outline-none px-5 py-2 rounded-md mb-3' />
                            <input type="submit" className='text-white border-2 border-cyan-500 font-bold text-xl px-5 py-2 rounded-xl gap-2 bg-cyan-500 hover:border-cyan-500 hover:text-cyan-500 hover:bg-transparent transition-all cursor-pointer text-center' value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskQuestion;