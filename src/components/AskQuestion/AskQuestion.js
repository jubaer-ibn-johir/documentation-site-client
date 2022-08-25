import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import ScrollToTop from 'react-scroll-to-top';

const AskQuestion = () => {
    const [user] = useAuthState(auth);
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
    const onSubmit = data => {
        let today = new Date().toLocaleString();
        let question = {
            title: data.title,
            description: data.description,
            qName: name,
            qPhoto: photo,
            qDate: today,
        }
        fetch(`https://polar-shore-69456.herokuapp.com/question`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(question)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
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
    };

    return (
        <div>
            <ScrollToTop smooth color="red" top='20' />
            <div className='pt-52 pb-16' style={{ background: 'linear-gradient(223deg, rgba(5,83,124,1) 0%, rgba(55,157,179,1) 50%, rgba(5,83,124,1) 100%)' }}>
                <h1 className='text-5xl font-medium text-white text-center'>Hello! Here is EasyDoc</h1>
                <p className='text-xl text-white text-center mt-3'>Shear your question with EasyDoc and find the best answer</p>
            </div>
            <div className='w-full bg-slate-100 py-20'>
                <div className="w-1/2 mx-auto">
                    <div className=" bg-slate-200 gap-5 px-24 py-20 shadow-lg hover:shadow-xl transition-all rounded-xl">
                        <div className=''>
                            <form onSubmit={handleSubmit(onSubmit)} className="">
                                <div className='grid grid-cols-12 gap-5 mb-5'>
                                    <div className='col-span-6'>
                                        <div className='w-full'>
                                            <p className='text-sm'>Title</p>
                                            <input type="text" placeholder="Please enter a title" class="input w-full outline-none focus:outline-none border-none bg-white" {...register("title", { required: true, maxLength: 100 })} />
                                        </div>
                                    </div>
                                    <div className='col-span-6'>
                                        <div>
                                            <p className='text-sm'>Select Category</p>
                                            <div class="form-control">
                                                <select class="select select-bordered bg-white focus:outline-none">
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
                                <textarea {...register("description")} required cols="30" rows="10" placeholder='Description' className='w-full bg-white outline-none px-5 py-2 rounded-md mb-3' />
                                <input type="submit" className='text-white border-2 bg-slate-500 border-slate-500 font-bold text-lg px-5 py-2 rounded-xl gap-2 hover:border-slate-500 hover:text-slate-500 hover:bg-white transition-all cursor-pointer text-center' value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AskQuestion;