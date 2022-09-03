import React, { useEffect, useState } from 'react';
import './UserPofileEdit.css'
import blankPic from '../../assets/profile/user-profile.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserEditProfile = () => {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState({});
    // const { register, handleSubmit, reset } = useForm();
    // const email = user?.email
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
        <div className='lg:w-3/5 md:w-3/5 w-96  bg-slate-100 ml-3 lg:ml-16 rounded-lg  grid lg:grid-cols-2 grid-cols-1 lg:px-8 lg:mb-64 mb-48 '>
            <div className='lg:ml-0 mx-5'>
                <div>
                    <div class="avatar">
                        <div class=" w-32  lg:w-48 rounded-full ring ring-white ring-offset-base-100 ring-offset-2 ml-32 my-14 lg:ml-24 lg:mt-8 justify-center">
                            <img src={userData?.photo ? userData?.photo : blankPic} alt="user" />
                        </div>
                    </div>
                </div>
                <label >Name</label>
                <br />
                <input type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <br />
                <label >Profession</label>
                <br />
                <input type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <br />
                <label>Address</label>
                <br />
                <input type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <br />
                <label>Facebook Profile Link</label>
                <br />
                <input type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <br />
                <label>Linkedin Profile Link</label>
                <br />
                <input type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <br />
            </div>
            <div className='lg:ml-10 mx-5'>
                <div>
                    <div class="avatar">
                        <div class=" w-32  lg:w-48 rounded-full ring ring-white ring-offset-base-100 ring-offset-2 ml-32 my-14 lg:ml-24 lg:mt-8 justify-center">
                            <img src={userData?.photo ? userData?.photo : blankPic} alt="user" />
                        </div>
                    </div>
                </div>
                <label >Date of Birth</label>
                <br />
                <input type="date" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <br />
                <label >Gender</label>
                <br />
                <input type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <br />
                <label>Website</label>
                <br />
                <input type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <br />
                <label>Twitter Profile Link</label>
                <br />
                <input type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <br />
                <label>
                    Instagram Profile Link</label>
                <br />
                <input type="text" class="input input-bordered w-full max-w-md lg:p-7 p-0 mb-5" />
                <br />
            </div>
            <div className=' ml-5 lg:ml-0'>
                <label >Biography</label>
                <br />
                <textarea className=' textarea rounded-md border-4  lg:px-0 text-lg ' name="" rows="7"></textarea>
                <button className='btn btn-success  lg:pt-6 lg:pb-12 lg:px-4 lg:my-5 my-8 text-white font-semibold text-lg'  >Save to Change</button>
            </div>
        </div>
    );
};

export default UserEditProfile;