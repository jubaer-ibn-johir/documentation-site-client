import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ScrollToTop from "react-scroll-to-top";


const AddBlogs = () => {
  const [category,setCategory]=useState('')
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    let today = new Date().toLocaleString();
    const postBlog={
      blogTitle:data.title,
      blogCategory:category,
      blogDescription:data.description,
      blogImage:data.blogImage,
      blogPostDate:today
    }
    console.log(postBlog)
  };
  return (
    <div>
            <ScrollToTop smooth color="red" top='20' />
            <div className='pt-52 pb-16' style={{ background: 'linear-gradient(90deg, rgba(52,156,176,1) 0%, rgba(0,76,119,1) 100%)' }}>
                <h1 className='text-5xl font-medium text-white text-center'>Hello! Here is EasyDoc</h1>
                <p className='text-xl text-white text-center mt-3'>What's on your mind?</p>
            </div>
            <div className='w-full bg-slate-100 py-20'>
                <div className="w-1/2 mx-auto">
                    <div className=" bg-white gap-5 px-24 py-20 shadow-lg hover:shadow-xl transition-all rounded-xl">
                        <div className=''>
                            <form onSubmit={handleSubmit(onSubmit)} className="">
                                <div className='grid grid-cols-12 gap-5 mb-5'>
                                    <div className='col-span-6'>
                                        <div className='w-full'>
                                            <p className='text-sm'>Title</p>
                                            <input type="text" placeholder="Please enter a title" class="input w-full outline-none focus:outline-none border-none bg-slate-100" {...register("title", { required: true, maxLength: 100 })} />
                                        </div>
                                    </div>
                                    <div className='col-span-6'>
                                        <div>
                                            <p className='text-sm'>Select Category</p>
                                            <div class="form-control">
                                                <select onChange={(e)=>setCategory(e.target.value)} class="select select-bordered bg-slate-100 focus:outline-none">
                                                    <option disabled selected>Select Category</option>
                                                    <option>Creative</option>
                                                    <option>Programming</option>
                                                    <option>Lifestyle</option>
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
                                <input className="mb-3" type='file' {...register("blogImage")}/>
                                <textarea {...register("description")} required cols="30" rows="10" placeholder='Description' className='w-full bg-slate-100 outline-none px-5 py-2 rounded-md mb-3' />
                                <input type="submit" className='text-slate-500 border-2 bg-slate-100 border-slate-500 font-bold text-xl px-5 py-2 rounded-xl gap-2 hover:border-slate-500 hover:text-slate-500 hover:bg-transparent transition-all cursor-pointer text-center' value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  );
};

export default AddBlogs;