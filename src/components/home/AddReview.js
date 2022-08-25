import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
// import userAvatar from '../../assets/home-img/userAvatar.png';
import auth from '../../firebase.init';
import blankPic from '../../assets/profile/user-profile.png'
import Avatar from '@mui/material/Avatar';

const AddReview = () => {
    const[user]=useAuthState(auth)
    console.log(user);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    }
    return (
        <div>
            <div className='flex justify-center items-center bg-cyan-200 '>
               
                <Card sx={{ background: "rgb(103 232 249)", padding: 5, boxShadow: 3, marginTop: '100px', marginBottom: '50px', borderRadius: 3, }}>
                    {/* <CardMedia
                    component="img"
                    height="50"
                    image={user?.photo ? user?.photo : blankPic}
                    alt="green iguana"
                /> */}
                    <div className='flex justify-center items-center '>
                        <Avatar alt="Remy Sharp" sx={{ width: 150, height: 150 }} src={user?.photo ? user?.photo : blankPic} />
                    </div>
                    <CardContent>
                        <div className='my-5'>
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 justify-items-center">
                                <div className='grid grid-cols-1 justify-items-center'>
                                    <div>
                                        <p className='font-semibold text-xl'>User Name</p>
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