import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blankPic from '../../assets/profile/user-profile.png'
import ScrollToTop from 'react-scroll-to-top';

const SingleQuestion = ({ question }) => {
    const { qName, qDate, qPhoto, title, _id } = question
    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        fetch(`https://polar-shore-69456.herokuapp.com/answer/${_id}`)
            .then(res => res.json())
            .then(data => setAnswers(data))
    }, [answers])
    return (
        <div className='bg-white p-5 mt-5 rounded-md'>
            <ScrollToTop smooth color="red" top='20' />
            <p className='text-sm'>Skill</p>
            <Link to={`/answer/${_id}`} className='text-xl font-bold hover:underline'>{title}</Link>

            <div className='flex gap-5 items-center justify-between mt-5'>
                <div className='flex gap-5 items-center'>
                    <div className='h-12 w-12 rounded-full'>
                        <img src={qPhoto ? qPhoto : blankPic} alt="" className='w-full rounded-full' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-lg font-medium'>{qName}</p>
                            <p className='text-sm'>{qDate}</p>
                        </div>
                    </div>
                </div>
                <div className='text-right'>
                    <Link to={`/answer/${_id}`} className='text-lg font-bold hover:underline'>{answers.length} Answers</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleQuestion;