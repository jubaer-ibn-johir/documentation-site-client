import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import userAvatar from '../../assets/profile/user-profile.png'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SingleAnswer from './SingleAnswer';
import ScrollToTop from 'react-scroll-to-top';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';


const Answer = () => {
    const { register, handleSubmit, reset } = useForm();
    const { ansId } = useParams()
    const [question, setQuestion] = useState({})
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState({});
    const [answers, setAnswers] = useState([]);
    const { qName, description, title, qPhoto, qDate, _id } = question;
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
    useEffect(() => {
        fetch(`https://polar-shore-69456.herokuapp.com/question/${ansId}`)
            .then(res => res.json())
            .then(data => setQuestion(data))
    }, [])
    const onSubmit = data => {
        let today = new Date().toLocaleString();
        let answer = {
            aAnswer: data.answer,
            aName: name,
            aPhoto: photo,
            aDate: today,
            postId: _id
        }
        fetch(`https://polar-shore-69456.herokuapp.com/answer`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(answer)
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
    useEffect(() => {
        fetch(`https://polar-shore-69456.herokuapp.com/answer/${ansId}`)
            .then(res => res.json())
            .then(data => setAnswers(data))
    }, [answers])
    return (
        <div className='bg-slate-100 componentsCommonBody'>
            <ScrollToTop smooth color="red" top='20' />
            <div style={{ background: 'linear-gradient(223deg, rgba(5,83,124,1) 0%, rgba(55,157,179,1) 50%, rgba(5,83,124,1) 100%)' }}>
                <div className='max-w-7xl mx-auto'>
                    <div className='pt-52 pb-16 flex  justify-between'>
                        <div>
                            <p className='text-sm text-cyan-200'>Skill</p>
                            <h1 className='text-3xl font-medium text-white '>{title}</h1>
                            <p className='text-cyan-200'>{qDate}</p>
                        </div>
                        <div>
                            <Link to="/askQuestion" className='bg-slate-400 text-white rounded-xl px-5 py-3 border-2 border-slate-400 flex items-center gap-2 hover:text-slate-500 hover:border-2 hover:border-slate-500 hover:bg-white transition-all w-44'>Ask Question<AiOutlineQuestionCircle className='text-2xl' /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl lg:mx-auto md:mx-12 mx-5'>
                <div className='w-full lg:flex md:flex grid grid-cols-1 gap-12'>
                    <div className='lg:w-2/3 md:w-2/3 w-full my-12'>
                        <div className='bg-white pt-8 px-8 pb-3 mb-5 rounded-md CardsCommonBg'>
                            <div className='w-full'>
                                <p className='text-xl'>{description}</p>
                            </div>
                            <div className='my-12'>
                                <div className='flex gap-5 items-center justify-end'>
                                    <div className='h-12 w-12 rounded-full'>
                                        <img src={qPhoto ? qPhoto : userAvatar} alt="" className='w-full rounded-full' />
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <p className='text-xl'>{qName}</p>
                                            <p className='text-sm'>{qDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-b-2 mt-16'>
                            <h1 className='font-semibold text-2xl pb-5'>{answers.length} - answers</h1>
                        </div>
                        {
                            answers.map(answer => <SingleAnswer answer={answer} key={answer._id}></SingleAnswer>)
                        }
                        <div className='mb-12 mt-24'>
                            <h1 className='font-semibold text-2xl '>Your Answer</h1>
                            <p className='mb-5'>Please give an authentic answer</p>
                            <form onSubmit={handleSubmit(onSubmit)} className="">
                                <textarea {...register("answer")} required cols="30" rows="10" placeholder='Description' className='w-full bg-white outline-none px-5 py-2 rounded-md mb-3 CardsCommonBg' />
                                <input type="submit" className='text-white border-2 border-slate-500 font-bold text-lg px-5 py-2 rounded-xl gap-2 bg-slate-500 hover:border-slate-500 hover:text-slate-500 hover:bg-white transition-all cursor-pointer text-center' value="Post Your Answer" />
                            </form>
                        </div>
                    </div>
                    <div className='lg:w-1/3 md:w-1/3 w-full my-12'>
                        <div className='grid grid-cols-1 justify-items-center'>
                            <div className='bg-white p-5 grid grid-cols-1 justify-items-center w-full rounded-md CardsCommonBg'>
                                <p className='text-center font-semibold text-2xl mb-3'>Recent Questions
                                </p>
                            </div>
                            <div className='bg-white p-5 grid grid-cols-1 justify-items-center w-full mt-5 rounded-md CardsCommonBg'>
                                <p className='text-center font-semibold text-2xl mb-3'>Stay In Touch
                                </p>
                                <div className='flex lg:gap-x-5 md:gap-x-3 gap-x-2 mt-6'>
                                    <div className='lg:h-12 md:h-10 h-8 lg:w-12 md:w-10 w-8 rounded-full border-2 border-slate-400 hover:border-blue-800 flex justify-center items-center hover:bg-blue-800 transition-all'>
                                        <a href="/"><FaFacebook className='hover:text-white text-slate-400 lg:w-7 md:w-5 w-4 lg:h-7 md:h-5 h-4'></FaFacebook></a>
                                    </div>
                                    <div className='lg:h-12 md:h-10 h-8 lg:w-12 md:w-10 w-8 rounded-full border-2 border-slate-400 hover:border-blue-800 flex justify-center items-center hover:bg-blue-800 transition-all'>
                                        <a href="/"><FaLinkedin className='hover:text-white text-slate-400 lg:w-7 md:w-5 w-4 lg:h-7 md:h-5 h-4'></FaLinkedin></a>
                                    </div>
                                    <div className='lg:h-12 md:h-10 h-8 lg:w-12 md:w-10 w-8 rounded-full border-2 border-slate-400 hover:border-blue-800 flex justify-center items-center hover:bg-blue-800 transition-all'>
                                        <a href="/"><FaYoutube className='hover:text-white text-slate-400 lg:w-7 md:w-5 w-4 lg:h-7 md:h-5 h-4'></FaYoutube></a>
                                    </div>
                                    <div className='lg:h-12 md:h-10 h-8 lg:w-12 md:w-10 w-8 rounded-full border-2 border-slate-400 hover:border-blue-800 flex justify-center items-center hover:bg-blue-800 transition-all'>
                                        <a href="/"><FaTwitter className='hover:text-white text-slate-400 lg:w-7 md:w-5 w-4 lg:h-7 md:h-5 h-4'></FaTwitter></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Answer;