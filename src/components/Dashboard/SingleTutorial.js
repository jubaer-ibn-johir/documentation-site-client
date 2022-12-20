import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillDelete } from 'react-icons/ai';
import ScrollToTop from 'react-scroll-to-top';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const SingleTutorial = ({ tutorial, index }) => {
    const { _id, title, description } = tutorial
    const [user1] = useAuthState(auth)
    const [admin] = useAdmin(user1)
    const handleDelete = (id) => {
        if (admin) {
            fetch(`https://documentation-site-server.onrender.com/tutorial/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Successfully Delete Tutorial!',
                            icon: 'success',
                            confirmButtonText: 'ok'
                        })
                    }
                    else {
                        Swal.fire({
                            title: 'Faild to Delete Tutorial!',
                            icon: 'error',
                            confirmButtonText: 'ok'
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Only can delete tutorial!',
                icon: 'error',
                confirmButtonText: 'ok'
            })
        }
    }
    return (
        <tr>
            <ScrollToTop smooth color="red" top='20' />
            <th className='CardsCommonBg'>{index + 1}</th>
            <td className='font-semibold CardsCommonBg'>{title}</td>
            <td className='CardsCommonBg'>{description.slice(0, 20)}...</td>
            <th className='CardsCommonBg'>
                <div className='w-12 h-12 rounded-full bg-red-100 flex justify-center items-center'>
                    <div className='text-red-500 text-3xl leading-3'>
                        <button onClick={() => handleDelete(_id)} className='text-center'><AiFillDelete /></button>
                    </div>
                </div>
            </th>
        </tr>
    );
};

export default SingleTutorial;