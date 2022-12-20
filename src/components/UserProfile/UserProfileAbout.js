import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaMailBulk } from 'react-icons/fa';



const UserProfileAbout = () => {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState({});
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
    return (
        <div className='lg:w-3/5 md:w-3/5 w-96  bg-white CardsCommonBg ml-3 lg:ml-16 rounded-lg mb-72'>
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
            <div className=' flex justify-end pt-5 bg-slate-200 componentsCommonBody'>
                <div className='pr-4'>
                    <div className='h-12 w-12 rounded-full border-2  flex justify-center items-center bg-blue-800 transition-all '>
                        <a href="/"><FaFacebook className='text-white w-7 h-7 '></FaFacebook></a>
                    </div>
                </div>
                <div className='pr-4'>
                    <div style={{ backgroundColor: 'rgb(29, 161, 242)' }} className='h-12 w-12 rounded-full border-2 flex justify-center items-center bg-blue-800 transition-all '>
                        <a href="/"><FaTwitter className='text-white w-7 h-7 '></FaTwitter></a>
                    </div>
                </div>
                <div className='pr-4'>
                    <div style={{ backgroundColor: 'rgb(225, 48, 108)' }} className='h-12 w-12 rounded-full border-2 flex justify-center items-center bg-blue-800 transition-all '>
                        <a href="/"><FaMailBulk className='text-white w-7 h-7 '></FaMailBulk></a>
                    </div>
                </div>
                <div className='pr-4 '>
                    <div style={{ backgroundColor: 'rgb(29, 161, 242)' }} className='h-12 w-12 rounded-full border-2 flex justify-center items-center bg-blue-800 transition-all '>
                        <a href="/"><FaInstagram className='text-white w-7 h-7 '></FaInstagram></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserProfileAbout;