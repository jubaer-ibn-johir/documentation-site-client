import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const AskQuestion = () => {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState({});
    const { register, handleSubmit,reset } = useForm();
    const {name,photo}=userData;
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
        let today =new Date().toLocaleString();
        let question={
            title:data.title,
            description:data.description,
            qName:name,
            qPhoto:photo,
            qDate:today,
        }
        fetch(`https://polar-shore-69456.herokuapp.com/question`,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(question)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                Swal.fire({
                    title: 'Successfully Posted!',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
                  reset()
            }
            else{
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
        <div className='bg-cyan-700 pt-52 pb-16'>
            <h1 className='text-5xl font-medium text-white text-center'>Hello! Here is EasyDoc</h1>
            <p className='text-xl text-white text-center mt-3'>Shear your question with EasyDoc and find the best answer</p>
        </div>
        <div className="max-w-7xl mx-auto">
            <div className=" bg-cyan-100 my-5 gap-5 p-5 shadow-md hover:shadow-2xl transition-all rounded-xl">
                <div className=''>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className='grid grid-cols-12 gap-5 mb-5'>
                            <div className='col-span-6'>
                                <div className='w-full'>
                                    <p className='text-sm'>Title</p>
                                    <input type="text" placeholder="Please enter a title" class="input w-full outline-none border-none" {...register("title", { required: true, maxLength: 100 })} />
                                </div>
                            </div>
                            <div className='col-span-6'>
                                <div>
                                    <p className='text-sm'>Select Category</p>
                                    <div class="form-control">
                                        <select class="select select-bordered">
                                            <option disabled selected>Select Category</option>
                                            <option>Star Wars</option>
                                            <option>Harry Potter</option>
                                            <option>Lord of the Rings</option>
                                            <option>Planet of the Apes</option>
                                            <option>Star Trek</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <textarea {...register("description")} required cols="30" rows="10" placeholder='Description' className='w-full bg-white outline-none px-5 py-2 rounded-md mb-3' />
                        <input type="submit" className='text-white border-2 border-cyan-700 font-bold text-2xl px-5 py-2 rounded-xl gap-2 bg-cyan-700 hover:border-cyan-700 hover:text-cyan-700 hover:bg-transparent transition-all cursor-pointer text-center' value="Submit" />
                    </form>
                </div>
            </div>
            {/* <div className="grid grid-cols-12 bg-cyan-50 my-5 gap-5 p-5">
                <div className='col-span-6'>
                    <p className='text-sm'>Title</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 justify-items-center">
                        <input type="text" placeholder="Please enter a title" class="input w-full outline-none border-none" {...register("searchValue", { required: true, maxLength: 20 })} />
                        <textarea {...register("description")} required cols="30" rows="5" placeholder='Description' className='w-full bg-white outline-none px-5 py-2 rounded-md mb-3' />
                        <input type="submit" className='text-white border-2 border-cyan-700 font-bold text-2xl px-5 py-2 rounded-xl gap-2 bg-cyan-700 hover:border-cyan-700 hover:text-cyan-700 hover:bg-transparent transition-all cursor-pointer text-center' value="Submit" />
                    </form>
                </div>
                <div className='col-span-6'>
                    <p className='text-sm'>Select Category</p>
                    <div class="form-control">
                        <select class="select select-bordered w-full">
                            <option disabled selected>Select Category</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </div>
                </div>
            </div> */}
        </div>
    </div>

    );
};

export default AskQuestion;