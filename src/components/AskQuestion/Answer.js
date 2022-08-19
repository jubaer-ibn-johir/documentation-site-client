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


const Answer = () => {
    const { register, handleSubmit ,reset} = useForm();
    const {ansId}=useParams()
    const [question,setQuestion]=useState({})
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState({});
    const [answers, setAnswers] = useState([]);
    const {qName,description,title,qPhoto,qDate,_id}=question;
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
    useEffect(()=>{
        fetch(`https://polar-shore-69456.herokuapp.com/question/${ansId}`)
        .then(res=>res.json())
        .then(data=>setQuestion(data))
    },[])
    const onSubmit = data => {
        let today =new Date().toLocaleString();
        let answer={
            aAnswer:data.answer,
            aName:name,
            aPhoto:photo,
            aDate:today,
            postId:_id
        }
        fetch(`https://polar-shore-69456.herokuapp.com/answer`,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(answer)
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
    useEffect(()=>{
        fetch(`https://polar-shore-69456.herokuapp.com/answer/${ansId}`)
        .then(res=>res.json())
        .then(data=>setAnswers(data))
    },[answers])
    return (
        <div style={{ "backgroundColor": "#F8FAFC" }}>
        <div className='bg-cyan-700'>
            <div className='max-w-7xl mx-auto'>
                <div className='pt-52 pb-16 flex  justify-between'>
                    <div className=''>
                        <p className='text-sm text-cyan-200'>Skill</p>
                        <h1 className='text-3xl font-medium text-white '>{title}</h1>
                        <p className='text-cyan-200'>{qDate}</p>
                    </div>
                    <div>
                        <Link to="/askQuestion" className='bg-cyan-600 text-white rounded-xl px-5 py-3 border-2 border-cyan-600 flex items-center gap-2 hover:text-cyan-600 hover:border-2 hover:border-cyan-600 hover:bg-white transition-all w-44'>Ask Question<AiOutlineQuestionCircle className='text-2xl' /></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-7xl mx-auto my-5'>
            <div className='grid grid-cols-12 gap-5 mb-5'>
                <div className='col-span-6'>
                    <div className='w-full'>
                        <p className='text-xl'>{description}</p>
                    </div>
                    <div className='my-12'>
                        <div className='flex gap-5 items-center justify-end'>
                            <div className='h-12 w-12 rounded-full'>
                                <img src={qPhoto?qPhoto :userAvatar} alt="" className='w-full rounded-full' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className='text-xl'>{qName}</p>
                                    <p className='text-sm'>{qDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-b-2'>
                        <h1 className='font-semibold text-2xl pb-5'>{answers.length} - answers</h1>
                    </div>
                   {
                    answers.map(answer=><SingleAnswer answer={answer} key={answer._id}></SingleAnswer>)
                   }
                    <div className='mb-12 mt-24'>
                        <h1 className='font-semibold text-2xl pb-5'>Your Answer</h1>
                        <p>Please give a authentic answer </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <textarea {...register("answer")} required cols="30" rows="10" placeholder='Description' className='w-full bg-white outline-none px-5 py-2 rounded-md mb-3' />
                            <input type="submit" className='text-white border-2 border-cyan-700 font-bold text-2xl px-5 py-2 rounded-xl gap-2 bg-cyan-700 hover:border-cyan-700 hover:text-cyan-700 hover:bg-transparent transition-all cursor-pointer text-center' value="Post Your Answer" />
                        </form>
                    </div>
                </div>
                <div className='col-span-6 grid grid-cols-1 justify-items-center h-full'>
                    <div className='bg-cyan-100 p-5 grid grid-cols-1 justify-items-center w-full'>
                        <p className='text-center font-semibold text-2xl mb-3'>Recent Questions
                        </p>
                    </div>
                    <div className='bg-cyan-100 p-5 grid grid-cols-1 justify-items-center w-full mt-5'>
                        <p className='text-center font-semibold text-2xl mb-3'>Stay In Touch
                        </p>
                    </div>
                    <div className='w-full mt-5'>

                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Answer;