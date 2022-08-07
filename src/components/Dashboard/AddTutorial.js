import React from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddTutorial = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='lg:p-8 md:p-8 p-4 lg:pb-0 md:pb-0 pb-24 bg-lime-50 lg:h-screen md:h-screen flex justify-center items-center lg:py-0 md:py-0 py-12'>
            <div className='rounded-xl bg-white lg:p-12 p-8 lg:w-1/2 md:w-96 w-80 grid grid-cols-1 shadow-md hover:shadow-xl transition-all'>
                <div className='lg:-mt-24 -mt-16 text-center flex justify-center items-center'>
                    <div className='bg-gradient-to-r hover:bg-gradient-to-l from-lime-500 to-lime-300 h-16 w-16 rounded-full flex justify-center items-center'>
                        <div className='text-white text-4xl'>< MdLibraryAdd /></div>
                    </div>
                </div>
                <div className='my-5'>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 justify-items-center">
                        <input {...register("title", { required: true, maxLength: 20 })} required placeholder='Title' className='w-full bg-lime-50 outline-none px-5 py-2 rounded-md mb-3' />
                        <input {...register("EmbedCode", { pattern: /^[A-Za-z]+$/i })} required placeholder='Video Embed Code' className='w-full bg-lime-50 outline-none px-5 py-2 rounded-md mb-3' />
                        <textarea {...register("textArea")} cols="30" rows="5" placeholder='Description' className='w-full bg-lime-50 outline-none px-5 py-2 rounded-md mb-3' />
                        <input type="submit" className='text-white font-bold text-2xl px-5 py-2 rounded-xl gap-2 bg-gradient-to-r hover:bg-gradient-to-l from-lime-500 to-lime-300 cursor-pointer w-28' value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTutorial;