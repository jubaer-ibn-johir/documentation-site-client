import React from 'react';
import newsletterImg from '../../assets/home-img/newsletter.png';
import { useForm } from "react-hook-form";

const Newsletter = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className='max-w-5xl mx-auto -mb-20' style={{ zIndex: '1' }}>
                <div className='flex items-center justify-between rounded-3xl px-14 py-5' style={{ background: '#e2ebfb', zIndex: '1' }}>
                    <div>
                        <img src={newsletterImg} alt="" className='-mt-32' />
                        <h2 className='text-4xl mt-5 font-bold' style={{ color: '#0E1133' }}>Newsletter</h2>
                        <p className='text-base text-gray-600 my-5'>Subscribe and get notification from us</p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex lg:mx-0 md:mx-0 mx-5'>
                            <input {...register("firstName", { required: true, maxLength: 20 })} className='text-base bg-white h-12 lg:w-96 md:w-96 w-64 rounded-md px-5 active:border-none active:outline-none focus:outline-none' placeholder='Email Address *' />
                            <input type="submit" value="Subscribe" className='text-white text-lg font-medium bg-blue-900 h-12 rounded-md cursor-pointer px-8 ml-2 ' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;