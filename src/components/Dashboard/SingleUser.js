import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import avatar1 from '../../assets/home-img/img-1.png';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const SingleUser = ({user}) => {
    const {email,photo,_id,name,role}=user
    const [user1]=useAuthState(auth)
   const [admin]=useAdmin(user1)
    const makeAdmin =()=>{
        fetch(`https://polar-shore-69456.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Successfully Make Admin!',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
            else{
                Swal.fire({
                    title: 'Faild to Make Admin!',
                    icon: 'error',
                    confirmButtonText: 'ok'
                  })
            }
        })

    }

    const handleDelete =(id)=>{
        fetch(`https://polar-shore-69456.herokuapp.com/user/${id}`,{
         method:'DELETE'
        })
         .then(res=>res.json())
         .then(data=>{
             if(data.deletedCount >0){
                 Swal.fire({
                     title: 'Successfully Delete User!',
                     icon: 'success',
                     confirmButtonText: 'ok'
                   })
             }
             else{
                 Swal.fire({
                     title: 'Faild to Delete User!',
                     icon: 'error',
                     confirmButtonText: 'ok'
                   })
             }
         })
     }
    return (
        <tr>
        <td>
            <div class="flex items-center space-x-3">
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src={photo ? photo : avatar1} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div class="font-bold">{name ? name : "User"}</div>
                </div>
            </div>
        </td>
        <td>{email}</td>
        <td>{role ? role : "User"}</td>
        <th>
           {role !=="admin" && <button onClick={makeAdmin} class="btn btn-sm mr-2 text-white border-none" style={{ "backgroundColor": "#09b70c" }}>Make Admin</button>}
            <button onClick={()=>handleDelete(_id)} class="btn btn-sm text-white border-none" style={{ "backgroundColor": "#e54747" }}>Delete</button>
        </th>
    </tr>
    );
};

export default SingleUser;