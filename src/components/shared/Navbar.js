import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo/logo4.png'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import { signOut } from 'firebase/auth';
import blankPic from '../../assets/profile/user-profile.png'
import './Navbar.css'

const Navbar = () => {
  const [navSize, setnavSize] = useState("6rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#042173") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("6rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate()
  const [userData, setUserData] = useState({});
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
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
    navigate('/login')
  }
  if (loading) {
    return <Loading></Loading>
  }
  return (
      <div style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s"
      }} class="navbar text-white pt-7">
        <div class="navbar-start lg:mx-16 text-white">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul style={{backgroundColor:'#042173'}} tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
              <li className='active:bg-transparent focus:bg-transparent hover:bg-transparent'><Link className='font-bold text-white active:bg-transparent focus:bg-transparent hover:bg-transparent' to="/docs">Docs</Link></li>
              <li><Link className='font-bold' to="/ask">Ask</Link></li>
              <li><Link className='font-bold' to="/blog">Blogs</Link></li>
              <li><Link className='font-bold' to="/admin-panel">Dashboard</Link></li>
              <li tabindex="0">
                <label>
                  Pages
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </label>
                <ul class="p-2 bg-gray-400">
                  <li><Link className='font-bold' to="/courses">Cources</Link></li>
                  <li><Link className='font-bold' to="/tutorial">Tutorials</Link></li>
                  <li><Link className='font-bold' to="/contact">Contact Us</Link></li>
                  <li><Link className='font-bold' to="/about">About Us</Link></li>
                </ul>
              </li>
              {
                user ? <li tabindex="0">
                  <label className='flex items-center '><img className='w-10 h-10 rounded-full cursor-pointer' src={userData?.photo ? userData?.photo : blankPic} alt="" /></label>
                  <ul class="p-2 bg-gray-400">
                    <li><Link className='font-bold' to="/user-profile">My Profile</Link></li>
                    <li><Link onClick={handleSignOut} className='font-bold' to="/login">Logout</Link></li>
                  </ul>
                </li>
                  :
                  <li><Link className='font-bold' to="/login">Login</Link></li>
              }
            </ul>
          </div>
          <Link className='hidden lg:block' to="/"><img className='w-[120px] h-8 ' src={logo} alt="" /></Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0 mr-14 text-white">
            <li className='text-white'><Link className='font-bold active:bg-transparent focus:bg-transparent hover:bg-transparent text-white' to="/docs">Docs</Link></li>
            <li><Link className='font-bold active:bg-transparent focus:bg-transparent hover:bg-transparent text-white' to="/ask">Ask</Link></li>
            <li><Link className='font-bold active:bg-transparent focus:bg-transparent hover:bg-transparent' to="/blog">Blogs</Link></li>
            <li><Link className='font-bold active:bg-transparent focus:bg-transparent hover:bg-transparent' to="/admin-panel">Dashboard</Link></li>
            <li tabindex="0">
              <label className='active:bg-transparent focus:bg-transparent hover:bg-transparent'>
                Pages
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </label>
              <ul class="p-2 bg-gray-400">
                <li><Link className='font-bold' to="/courses">Cources</Link></li>
                <li><Link className='font-bold' to="/tutorial">Tutorials</Link></li>
                <li><Link className='font-bold' to="/contact">Contact Us</Link></li>
                <li><Link className='font-bold' to="/about">About Us</Link></li>
              </ul>
            </li>
            {
              user ? <li tabindex="0">
                <label className='flex items-center active:bg-transparent focus:bg-transparent hover:bg-transparent'><img className='w-10 h-10 rounded-full cursor-pointer' src={userData?.photo ? userData?.photo : blankPic} alt="" /></label>
                <ul class="p-2 bg-gray-400">
                  <li><Link className='font-bold' to="/user-profile">My Profile</Link></li>
                  <li><Link onClick={handleSignOut} className='font-bold' to="/login">Logout</Link></li>
                </ul>
              </li>
                :
                <li><Link className='font-bold' to="/login">Login</Link></li>
            }
          </ul>
        </div>
      </div>
  );
};

export default Navbar;