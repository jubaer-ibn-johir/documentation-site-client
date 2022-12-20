import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import blankPic from '../../assets/profile/user-profile.png'
import { FaRegEdit } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './UserProfile.css'
import { Link, Outlet, NavLink } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { ImBlogger2 } from "react-icons/im";
import { BsFillPeopleFill } from "react-icons/bs";

const UserProfile = () => {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState({});
    // const { register, handleSubmit, reset } = useForm();
    // const email = user?.email
    useEffect(() => {
        const email = user?.email
        if (email) {
            fetch(`https://documentation-site-server.onrender.com/user/${email}`, {
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

    // const navLinkStyle = ({ isActive }) => {
    //     return {
    //         color: isActive ? 'blue' : 'black',
    //         backgroundColor: isActive ? 'blue' : 'orange'
    //     }
    // }
    // const imageStorageKey = 'e480d661e84555b8eddd86bec84b7387'
    // const onSubmit = data => {
    //     const image = data.img[0]
    //     const formData = new FormData()
    //     formData.append('image', image)
    //     const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    //     fetch(url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result.success) {
    //                 const profile = {
    //                     name: data.name,
    //                     photo: result.data.url,
    //                     address: data.address,
    //                     phone: data.phone,
    //                 }
    //                 fetch(`https://documentation-site-server.onrender.com/user/${email}`, {
    //                     method: 'PUT',
    //                     headers: {
    //                         'content-type': 'application/json'
    //                     },
    //                     body: JSON.stringify(profile)
    //                 })
    //                     .then(res => res.json())
    //                     .then(data => {
    //                         if (data.insertedId) {
    //                             Swal.fire({
    //                                 title: 'Successfully Updated!',
    //                                 icon: 'success',
    //                                 confirmButtonText: 'ok'
    //                             })
    //                             reset()
    //                         }
    //                         else {
    //                             Swal.fire({
    //                                 title: 'Faild to update!',
    //                                 icon: 'error',
    //                                 confirmButtonText: 'ok'
    //                             })
    //                         }
    //                     })
    //             }
    //         })
    // };

    return (
        <div className=' bg-slate-200 componentsCommonBody'>
            <div className='lg:flex pb-16 pt-20 body '>
                <div class="avatar">
                    <div class=" w-32  lg:w-48 rounded-full ring ring-white ring-offset-base-100 ring-offset-2 ml-32 my-14 lg:ml-24 lg:my-16 justify-center">
                        <img src={userData?.photo ? userData?.photo : blankPic} alt="user" />
                    </div>
                </div>
                <div >
                    <h2 className='text-white lg:text-4xl text-3xl ml-12 mb-16 lg:mt-32 lg:ml-12'>{userData?.name}</h2>
                </div>
            </div>

            <div className='w-full  md:flex grid grid-cols-1 gap-12 mt-16 '>
                <div className='lg:w-80 md:w-1/3 w-96 bg-white CardsCommonBg ml-3 lg:ml-16 rounded-lg lg:h-[204px] '>
                    <NavLink style={({ isActive }) => { return { color: isActive ? 'darkblue ' : 'black' } }} to="/user-profile"><h2 className='p-4 text-2xl justify-start items-end flex blackToWhite'><BsFillPersonFill className='w-6 h-6 mr-3' /> About </h2></NavLink>
                    <hr style={{ border: '2px solid lightgrey', backgroundColor: 'lightgrey' }} />
                    <NavLink style={({ isActive }) => { return { color: isActive ? 'darkblue ' : 'black' } }} to="/user-profile/userEditProfile"><h2 className='p-4 text-2xl justify-start items-end flex blackToWhite'><FaUserEdit className='w-6 h-6 mr-3' /> Edit Profile</h2></NavLink>
                    <hr style={{ border: '2px solid lightgrey', backgroundColor: 'lightgrey' }} />
                    <NavLink to="/addBlogs" style={({ isActive }) => { return { color: isActive ? 'darkblue ' : 'black' } }}>   <h2 className='p-4 text-2xl justify-start items-end flex blackToWhite'><ImBlogger2 className='w-6 h-6 mr-3' /> Blogs</h2></NavLink>
                    <hr style={{ border: '2px solid lightgrey', backgroundColor: 'lightgrey' }} />
                    {/* <h2 className='p-4 text-2xl justify-start items-end flex'><BsFillPeopleFill className='w-6 h-6 mr-3' />  Followers</h2> */}
                </div>
                <Outlet></Outlet>
                {/* <div className='lg:w-2/3 md:w-2/3 w-96  bg-slate-100 ml-3 lg:ml-16 rounded-lg mb-48'>
                    <div className='flex justify-start items-center'>
                        <h2 className='p-6 text-xl font-semibold'>NAME</h2>
                        <p className='text-xl pl-0 lg:pl-16'>{userData?.name}</p>
                    </div>
                    <hr style={{ border: '1px solid lightgrey', backgroundColor: 'lightgrey' }} />
                    <div className='flex justify-start items-center'>
                        <h2 className='p-6 text-xl font-semibold'>PROFESSION</h2>
                        <p className='text-xl pl-0 lg:pl-16'>{userData?.profession}</p>
                    </div>
                    <hr style={{ border: '1px solid lightgrey', backgroundColor: 'lightgrey' }} />
                    <div className='flex justify-start items-center'>
                        <h2 className='p-6 text-xl font-semibold'>GENDER</h2>
                        <p className='text-xl pl-0 lg:pl-16'>{userData?.gender}</p>
                    </div>
                    <hr style={{ border: '1px solid lightgrey', backgroundColor: 'lightgrey' }} />
                    <div className='flex justify-start items-center'>
                        <h2 className='p-6 text-xl font-semibold'>ADDRESS</h2>
                        <p className='text-xl pl-0 lg:pl-16'>{userData?.address}</p>
                    </div>
                    <hr style={{ border: '1px solid lightgrey', backgroundColor: 'lightgrey' }} />
                    <div className='flex justify-start items-center'>
                        <h2 className='p-6 text-xl font-semibold'>WEBSITE</h2>
                        <p className='text-xl pl-0 lg:pl-16'>{userData?.website}</p>
                    </div>
                    <hr style={{ border: '1px solid lightgrey', backgroundColor: 'lightgrey' }} />
                    <div className='flex justify-start items-center'>
                        <h2 className='p-6 text-xl font-semibold'>BIOGRAPHY</h2>
                        <p className='text-xl pl-0 lg:pl-16'>{userData?.biography}</p>
                    </div>
                    <hr style={{ border: '1px solid lightgrey', backgroundColor: 'lightgrey' }} />
                </div> */}
            </div>


            {/* <div className='flex justify-center items-center h-screen '>
                <div class="card w-96 lg:w-[800px] bg-base-100 shadow-xl bg-gradient-to-r from-purple-400 to-pink-400 CardsCommonBg">
                    <label for="my-modal-6" className=" modal-button flex justify-end m-8 cursor-pointer"><FaRegEdit className='w-6 h-6'></FaRegEdit></label>
                    <div class="card-body CardsCommonBg">
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
                <div class="modal-box CardsCommonBg">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-center">Update Your Profile</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 justify-items-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text blackToWhite">Your Name</span>
                            </label>
                            <input type="text" placeholder='Your Name' className="input input-bordered w-full max-w-xs CardsCommonBgSecondary" {...register("name")} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text blackToWhite">Address</span>
                            </label>
                            <input type="text" placeholder='Address' className="input input-bordered w-full max-w-xs CardsCommonBgSecondary" {...register("address")} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text blackToWhite">Phone</span>
                            </label>
                            <input type="number" placeholder='Phone' className="input input-bordered w-full max-w-xs mb-2 CardsCommonBgSecondary" {...register("phone")} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text blackToWhite">Photo</span>
                            </label>
                            <input type="file" placeholder='Phone'  {...register("phone")} />
                        </div>
                        <input className='btn bg-primary text-white border-0 mt-10 px-10 py-5 CardsCommonBgSecondary' type="submit" value="Update" />
                    </form>
                </div>
            </div> */}
        </div>
    );
};

export default UserProfile;