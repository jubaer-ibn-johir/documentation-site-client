import React, { useEffect, useState } from 'react';
import './UserPofileEdit.css'
import blankPic from '../../assets/profile/user-profile.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const UserEditProfile = () => {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const email = user?.email
    const imageStorageKey = 'e480d661e84555b8eddd86bec84b7387'
    const onSubmit = data => {
        console.log(data);
        // const image = data.img[0]
        const formData = new FormData()
        // formData.append('image', image)
        // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        // .then(result => {
        // if (result.success) {
        const profile = {
            name: data.name,
            // photo: result.data.url,
            profession: data.profession,
            address: data.address,
            phone: data.phone,
            gender: data.gender,
            website: data.website,
            facebookLink: data.facebookLink,
            linkedLink: data.linkedLink,
            date: data.date,
            twitterLink: data.twitterLink,
            instagramLink: data.instagramLink,
            biography: data.biography,


        }
        fetch(`https://polar-shore-69456.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        title: 'Successfully Updated!',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                    reset()
                }
                else {
                    Swal.fire({
                        title: 'Faild to update!',
                        icon: 'error',
                        confirmButtonText: 'ok'
                    })
                }
            })
        // }
        // })
    };
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
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='lg:w-3/5 md:w-3/5 w-96  bg-slate-100 ml-3 lg:ml-16 rounded-lg  grid lg:grid-cols-2 grid-cols-1 lg:px-8 lg:mb-64 mb-48 '>
            <div className='lg:ml-0 mx-5'>
                <div class="avatar">
                    <div class=" w-32  lg:w-48 rounded-full ring ring-white ring-offset-base-100 ring-offset-2 ml-24 my-14 lg:ml-24 lg:mt-8 justify-center">
                        <img src={userData?.photo ? userData?.photo : blankPic} alt="user" />
                    </div>
                </div>
                <br />
                <label >Name</label>
                <input {...register("name")} type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <label >Profession</label>
                <input {...register("profession")} type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <label>Address</label>
                <input {...register("address")} type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <label>Facebook Profile Link</label>
                <input {...register("facebookLink")} type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <label>Linkedin Profile Link</label>
                <input {...register("linkedLink")} type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
            </div>
            <div className='lg:mt-12 mt-0 lg:ml-0 mx-5'>
                <label >Profile Photo</label>
                <input {...register("file")} type="file" name="" id="" class="input input-bordered w-full max-w-md lg:p-24 p-12 mb-4 " />
                <label >Date of Birth</label>
                <input {...register("date")} type="date" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5 " />
                <label >Gender</label>
                <input {...register("gender")} type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <label>Website</label>
                <input {...register("website")} type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <label>Twitter Profile Link</label>
                <input {...register("twitterLink")} type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <label>
                    Instagram Profile Link</label>
                <input {...register("instagramLink")} type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
            </div>
            <div className=' ml-5 lg:ml-0'>
                <label >Biography</label>
                <textarea {...register("biography")} className=' textarea rounded-md border-4  lg:px-0 text-lg ' name="" rows="7"></textarea>
                <input className='btn btn-secondary lg:pt-6 lg:pb-12 lg:px-4 lg:my-5 my-8 text-white font-semibold text-lg ' type="submit" value="Save to Change" />
            </div>
        </form>
    );
};

export default UserEditProfile;