import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import blankPic from '../../assets/profile/user-profile.png'
import { FaRegEdit } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const UserProfile = () => {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState({});
    const { register, handleSubmit,reset } = useForm();
    const email = user?.email
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
    const imageStorageKey='e480d661e84555b8eddd86bec84b7387'
    const onSubmit = data => {
        const image = data.img[0]
        const formData= new FormData()
        formData.append('image',image)
        const url =`https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const profile={
                    name:data.name,
                    photo:result.data.url,
                    address:data.address,
                    phone:data.phone,  
                }
                fetch(`https://polar-shore-69456.herokuapp.com/user/${email}`,{
                    method:'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(profile)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Successfully Updated!',
                            icon: 'success',
                            confirmButtonText: 'ok'
                          })
                        reset()
                    }
                    else{
                        Swal.fire({
                            title: 'Faild to update!',
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
            <div className='flex justify-center items-center h-screen '>
                <div class="card w-96 lg:w-[800px] bg-base-100 shadow-xl bg-gradient-to-r from-purple-400 to-pink-400 ">
                <label for="my-modal-6" className="  modal-button flex justify-end m-8 cursor-pointer"><FaRegEdit className='w-6 h-6'></FaRegEdit></label>
                    <div class="card-body ">
                        <div className='flex justify-center'>
                            <div class="avatar">
                                <div class="w-28 rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-2">
                                    <img src={userData?.photo ? userData?.photo : blankPic} alt="user" />
                                </div>
                            </div>
                        </div>
                        <h2 className='text-center text-2xl'>{userData?.name}</h2>
                        <div className='mt-8 text-center'>
                            <p><span className='font-bold  '>Email:</span> {userData?.email}</p>
                            <p><span className='font-bold '>Address:</span> {userData?.address ? userData?.address : "None"}</p>
                            <p><span className='font-bold '>Phone:</span> {userData?.phone ? userData?.phone : "None"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-center">Update Your Profile</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 justify-items-center">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" placeholder='Your Name' className="input input-bordered w-full max-w-xs" {...register("name")} />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder='Address' className="input input-bordered w-full max-w-xs" {...register("address")} />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" placeholder='Phone' className="input input-bordered w-full max-w-xs mb-2" {...register("phone")} />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="file" placeholder='Phone'  {...register("phone")} />
                                </div>
                                <input className='btn bg-primary text-white border-0' type="submit"  value="Update"/>
                            </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;