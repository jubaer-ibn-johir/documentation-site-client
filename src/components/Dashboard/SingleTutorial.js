import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';

const SingleTutorial = ({tutorial,index}) => {
    const {_id,title,description}=tutorial

    const handleDelete =(id)=>{
       fetch(`https://polar-shore-69456.herokuapp.com/tutorial/${id}`,{
        method:'DELETE'
       })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
                Swal.fire({
                    title: 'Successfully Delete Tutorial!',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
            else{
                Swal.fire({
                    title: 'Faild to Delete Tutorial!',
                    icon: 'error',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td className='font-semibold'>{title}</td>
        <td>{description.slice(0,20)}...</td>
        <th>
            <div className='w-12 h-12 rounded-full bg-red-100 flex justify-center items-center'>
                <div className='text-red-500 text-3xl leading-3'>
                    <button onClick={()=>handleDelete(_id)} className='text-center'><AiFillDelete /></button>
                </div>
            </div>
        </th>
    </tr>
    );
};

export default SingleTutorial;