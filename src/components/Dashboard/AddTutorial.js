import React from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddTutorial = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch(`https://polar-shore-69456.herokuapp.com/tutorial`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire({
                        title: 'Successfully added Tutorial!',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                    reset()
                }
                else {
                    Swal.fire({
                        title: 'Faild to add Tutorial!',
                        icon: 'error',
                        confirmButtonText: 'ok'
                    })
                }
            })

    };
    return (
        <div className='lg:p-8 md:p-8 p-4 lg:pb-0 md:pb-0 pb-24 bg-lime-50 h-full rounded-xl flex justify-center items-center lg:py-0 md:py-0 py-12'>
            <div className='rounded-xl bg-white lg:p-12 p-8 lg:w-1/2 md:w-96 w-80 grid grid-cols-1 shadow-md hover:shadow-xl transition-all'>
                <div className='lg:-mt-24 -mt-16 text-center flex justify-center items-center'>
                    <div className='bg-gradient-to-r hover:bg-gradient-to-l from-lime-500 to-lime-300 h-16 w-16 rounded-full flex justify-center items-center'>
                        <div className='text-white text-4xl'>< MdLibraryAdd /></div>
                    </div>
                </div>
                <div className='my-5'>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 justify-items-center">
                        <input {...register("title",)} required placeholder='Title' className='w-full bg-lime-50 outline-none px-5 py-2 rounded-md mb-3' />
                        <input {...register("video",)} required placeholder='Video Embed Code' className='w-full bg-lime-50 outline-none px-5 py-2 rounded-md mb-3' />
                        <textarea {...register("description")} required cols="30" rows="5" placeholder='Description' className='w-full bg-lime-50 outline-none px-5 py-2 rounded-md mb-3' />
                        <input type="submit" className='text-white font-bold text-2xl px-5 py-2 rounded-xl gap-2 bg-gradient-to-r hover:bg-gradient-to-l from-lime-500 to-lime-300 cursor-pointer w-28' value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTutorial;