import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import DarkModeToggle from "react-dark-mode-toggle";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from './Loading';

const Hearder = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const myFunction = () => {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }


    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#0FCFEC") : setnavColor("transparent");
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

    const handleSignOut = () => {

        signOut(auth);
        localStorage.removeItem('accessToken')
        navigate('/login')
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <nav
                style={{
                    backgroundColor: navColor,
                    height: navSize,
                    transition: "all 1s"
                }}
                class="navbar  ">
                <div class="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div class="hamburger-lines mt-3">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                    <ul class="menu-items flex items-center">

                        <li><Link className=' hover:underline text-lg ml-[-100px] lg:ml-0 ' to="/docs">Docs</Link></li>
                        <div className="dropdown ml-4">
                            <label tabIndex="0" className='flex items-center ml-[-98px] lg:ml-0  mb-2 lg:mb-0 font-medium hover:underline text-lg '>Blogs<IoIosArrowDown></IoIosArrowDown></label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 ml-[-100px] lg:ml-0  rounded-box ">
                                <li ><Link className=' hover:underline text-lg' to="/blog">Blog</Link></li>
                                <li><Link className='hover:underline text-lg' to="/tutorial">Tutorial</Link></li>
                                <li><Link className='hover:underline text-lg' to="/courses">Courses</Link></li>
                            </ul>
                        </div>
                      
                            <li><Link className=' hover:text-primary  ml-[-102px] lg:ml-0 hover:underline' to="/admin-panel">Dashboard</Link></li>

                        <div className="dropdown ml-4">
                            <label tabIndex="0" className='flex items-center ml-[-86px] lg:ml-0  mb-2 lg:mb-0 hover:underline font-medium text-lg'>Contact us<IoIosArrowDown></IoIosArrowDown></label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 ml-[-100px] lg:ml-0  rounded-box w-52">
                                <li><Link className=' hover:underline  ' to="/contact">Contact Us</Link></li>
                                <li><Link className=' hover:underline ' to="/about">About</Link></li>
                            </ul>
                        </div>
                
                        {/* <li><Link className=' hover:underline' to="/languages">Languages</Link></li> */}
                        {
                            user
                                ?
                                <li><Link onClick={handleSignOut} className='  rounded-full ml-[-100px] lg:ml-0   w-[100px] text-white mr-4' to="/login">LogOut</Link></li>
                                :
                                <li><Link className='  rounded-full ml-[-100px] lg:ml-0 hover:underline  w-[100px] mr-4' to="/login">Login</Link></li>}

                        <li onClick={myFunction}>
                            <DarkModeToggle
                                isDarkMode={isDarkMode}
                                className='dark-mode ml-[-100px] lg:ml-0 mt-2 lg:mt-10'
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={50}
                            />
                        </li>
                    </ul>
                    <Link className='text-2xl' to="/"><span className='text-primary text-3xl font-bold'>E</span>asy<span className='text-secondary text-3xl font-bold'>D</span>ocs</Link>
                </div>
            </nav>
        </div>
    );
};

export default Hearder;