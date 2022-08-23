import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import Swal from 'sweetalert2';
import userAvatar from '../../assets/home-img/userAvatar.png';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const [rating,setRating]=useState(0)
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
        const review ={
            reviewText: data.textArea,
            rating:rating,
            reviewName: name,
            reviewPhoto: photo,
            reviewDate: today,
        }
        fetch(`https://polar-shore-69456.herokuapp.com/review`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
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

    const ratingChanged = (newRating) => {
        setRating(newRating);
    }
    return (
        <div>
           

                    <div className='my-5'>
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 justify-items-center">
                            <div className='grid grid-cols-1 justify-items-center'>
                                <div className='h-16 w-16 rounded-full mb-5'>
                                    <img src={photo?photo:userAvatar} alt="" className='rounded-full w-full' />
                                </div>
                                <div>
                                    <p className='font-semibold text-xl'>{name?name:"User Name"}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 justify-start w-full'>
                                <p className='font-semibold'>Rate Us: </p>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <textarea {...register("textArea")} cols="30" rows="5" placeholder='Add a Review' className='w-full outline-none px-5 py-2 rounded-md mb-3 bg-cyan-200' />
                            <input type="submit" className='text-white font-bold text-2xl px-5 py-2 rounded-xl gap-2 bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-cyan-300 cursor-pointer w-28' value="Add" />
                        </form>
                    </div>
                </div>
    );
};

export default AddReview;