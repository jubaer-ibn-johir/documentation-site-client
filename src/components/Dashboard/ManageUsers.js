import React, { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import SingleUser from './SingleUser';

const ManageUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://polar-shore-69456.herokuapp.com/user`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])
    return (
        <div className='lg:p-8 md:p-8 p-4 bg-violet-50 h-full rounded-xl componentsCommonBody'>
            <ScrollToTop smooth color="red" top='20' />
            <div>
                <h1 className='lg:text-5xl md:text-4xl text-3xl text-center my-5 font-semibold text-violet-900 blackToWhite'>Manage Users</h1>
            </div>
            <div class="overflow-x-auto w-full shadow-xl">
                <table class="table w-full ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr >
                            <th className='CardsCommonBgSecondary' style={{ "backgroundColor": "#af92e5" }}>User</th>
                            <th className='CardsCommonBgSecondary' style={{ "backgroundColor": "#af92e5" }}>Email Address</th>
                            <th className='CardsCommonBgSecondary' style={{ "backgroundColor": "#af92e5" }}>Role</th>
                            <th className='CardsCommonBgSecondary' style={{ "backgroundColor": "#af92e5" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='CardsCommonBg'>
                        {
                            users.map((user, index) => <SingleUser index={index} key={user._id} user={user}></SingleUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;