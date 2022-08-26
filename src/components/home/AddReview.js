import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
// import userAvatar from '../../assets/home-img/userAvatar.png';
import auth from '../../firebase.init';
import blankPic from '../../assets/profile/user-profile.png'
import Avatar from '@mui/material/Avatar';
import Swal from 'sweetalert2';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const [rating, setRating] = useState(0)
    const [userData, setUserData] = useState({});
    const { register, handleSubmit ,reset} = useForm();
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
        const review = {
            rName: name,
            rPhoto: photo,
            rDescription: data.textArea
        }
        fetch('https://polar-shore-69456.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
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
    };

    const ratingChanged = (newRating) => {
        setRating(newRating)
    }
    return (
        <div>
            <div className='flex justify-center items-center bg-slate-300 '>

                <Card sx={{ background: "rgb(103 232 249)", padding: 3, boxShadow: 3, marginTop: '100px', marginBottom: '50px', borderRadius: 3, }}>
                    {/* <CardMedia
                    component="img"
                    height="50"
                    image={user?.photo ? user?.photo : blankPic}
                    alt="green iguana"
                /> */}
                    <div className='flex justify-center items-center '>
                        <Avatar alt="Remy Sharp" sx={{ width: 100, height: 100 }} src={photo ? photo : blankPic} />
                    </div>
                    <CardContent>
                        <div className='mb-5'>
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 justify-items-center">
                                <div className='grid grid-cols-1 justify-items-center'>
                                    <div>
                                        <p className='font-semibold text-xl'>{name}</p>
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

                    </CardContent>
                </Card>


            </div>
        </div>
    );
};

export default AddReview;