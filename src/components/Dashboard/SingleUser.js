import React from 'react';
import avatar1 from '../../assets/home-img/img-1.png';

const SingleUser = () => {
    return (
        <tr>
        <td>
            <div class="flex items-center space-x-3">
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src={avatar1} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div class="font-bold">Reid Semiras</div>
                </div>
            </div>
        </td>
        <td>reidsemiras@gmail.com</td>
        <td>User</td>
        <th>
            <button class="btn btn-sm mr-2 text-white border-none" style={{ "backgroundColor": "#09b70c" }}>Make Admin</button>
            <button class="btn btn-sm text-white border-none" style={{ "backgroundColor": "#e54747" }}>Delete</button>
        </th>
    </tr>
    );
};

export default SingleUser;