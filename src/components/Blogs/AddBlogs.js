import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import ScrollToTop from "react-scroll-to-top";
import Swal from "sweetalert2";
import auth from "../../firebase.init";


const AddBlogs = () => {
    const [user] = useAuthState(auth);
    const [category, setCategory] = useState('')
    const [userData, setUserData] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { name, photo } = userData;
    useEffect(() => {
        const email = user?.email
        if (email) {
            fetch(`https://polar-shore-69456.herokuapp.com/user/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUserData(data)
                })
        }
    }, [user])
    const imageStorageKey = 'e480d661e84555b8eddd86bec84b7387'
    const onSubmit = data => {
        let today = new Date().toLocaleString();
        const image = data.blogImage[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const postBlog = {
                        blogTitle: data.title,
                        blogCategory: category,
                        blogDescription: data.description,
                        blogImage: result.data.url,
                        blogPostDate: today,
                        readTime: data.readTime,
                        blogUploaderName: name,
                        blogUploaderPhoto: photo,
                    }
                    fetch('https://polar-shore-69456.herokuapp.com/blog', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(postBlog)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    title: 'Successfully Posted!',
                                    icon: 'success',
                                    confirmButtonText: 'ok'
                                })
                                reset()
                            }
                            else {
                                Swal.fire({
                                    title: 'Faild to Post!',
                                    icon: 'error',
                                    confirmButtonText: 'ok'
                                })
                            }
                        })
                }
            })
    };
    return (
        <div>
            <ScrollToTop smooth color="red" top='20' />
            <div className='pt-52 pb-16' style={{ background: 'linear-gradient(90deg, rgba(52,156,176,1) 0%, rgba(0,76,119,1) 100%)' }}>
                <h1 className='text-5xl font-medium text-white text-center'>Hello! Here is EasyDoc</h1>
                <p className='text-xl text-white text-center mt-3'>What's on your mind?</p>
            </div>
            <div className='w-full bg-slate-100 pt-20 pb-56 componentsCommonBody'>
                <div className="lg:w-1/2 md:w-3/4 w-full mx-auto">
                    <div className=" bg-white gap-5 lg:px-24 md:px-16 px-5 lg:py-16 md:py-20 py-5 shadow-lg hover:shadow-xl transition-all rounded-xl CardsCommonBg">
                        <div className=''>
                            <form onSubmit={handleSubmit(onSubmit)} className="">
                                <div className='grid grid-cols-12 gap-5 mb-5'>
                                    <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                        <div className='w-full'>
                                            <p className='text-sm'>Title</p>
                                            <input type="text" placeholder="Please enter a title" class="input w-full outline-none focus:outline-none border-none bg-slate-100 CardsCommonBgSecondary" {...register("title", { required: true, maxLength: 100 })} />
                                        </div>
                                    </div>
                                    <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                        <div>
                                            <p className='text-sm'>Select Category</p>
                                            <div class="form-control">
                                                <select onChange={(e) => setCategory(e.target.value)} class="select select-bordered bg-slate-100 focus:outline-none CardsCommonBgSecondary">
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
                                <div className='grid grid-cols-12 gap-5 mb-5'>
                                    <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                        <div className='w-full'>
                                            <p className='text-sm'>Time</p>
                                            <input type="number" placeholder="Please enter a time" class="input w-full outline-none focus:outline-none border-none bg-slate-100 CardsCommonBgSecondary" {...register("readTime", { required: true, maxLength: 100 })} />
                                        </div>
                                    </div>
                                    <div className='lg:col-span-6 md:col-span-6 col-span-12'>
                                        <div className='w-full'>
                                            <p className='text-sm'>Image</p>
                                            <input className="mb-3 " type='file' {...register("blogImage")} />
                                        </div>
                                    </div>

                                </div>
                                <textarea {...register("description")} required cols="30" rows="10" placeholder='Description' className='w-full bg-slate-100 outline-none px-5 py-2 rounded-md mb-3 CardsCommonBgSecondary' />
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