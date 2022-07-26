import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import DarkModeToggle from "react-dark-mode-toggle";
import { IoIosLogIn } from 'react-icons/io'
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
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
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
        navigate('/')
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
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                    <ul class="menu-items flex items-center">
                        
                        <li><Link className=' hover:underline text-xl' to="/docs">Docs</Link></li>
                        <div className="dropdown ml-4">
                            <label tabIndex="0" className='flex items-center  hover:underline text-xl'>Blogs<IoIosArrowDown></IoIosArrowDown></label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link className=' hover:underline text-xll' to="/blog">Blog</Link></li>
                                <li><Link className='hover:underline text-xl' to="/tutorial">Tutorial</Link></li>
                            </ul>
                        </div>
                       {
                        user &&
                            <li><Link className=' hover:text-primary text-xl' to="/dashboard">Dashboard</Link></li>
                       }
                        <div className="dropdown ml-4">
                            <label tabIndex="0" className='flex items-center  hover:text-primary text-xl'>Contact us<IoIosArrowDown></IoIosArrowDown></label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link className=' hover:underline text-xl' to="/contact">Contact Us</Link></li>
                                <li><Link className=' hover:underline text-xl' to="/about">About</Link></li>
                            </ul>
                        </div>
                       { 
                       user
                       ?
                                <button onClick={handleSignOut} className='btn btn-secondary  rounded-full text-white ml4'> LogOut</button> 
                       :
                       <li><Link className='btn btn-secondary  rounded-full   w-[100px] text-white  mr-4' to="/login"><IoIosLogIn ></IoIosLogIn>Sign In</Link></li>}
                        {/* <li><Link className=' hover:underline' to="/languages">Languages</Link></li> */}
                        <li onClick={myFunction}>
                            <DarkModeToggle
                                isDarkMode={isDarkMode}
                                className='dark-mode mt-10 '
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={50}
                            />
                        </li>
                        {/* <li><Link className="btn bg-transparent text-primary mb-3 ml-4 w-[150px] btn-primary  rounded-full" to="/courses">Our Courses</Link></li>
                        <li><Link className='btn btn-primary w-[150px]  rounded-md ml-4' to="/login">Sign In</Link></li> */}
                    </ul>
                    <Link to="/"><span className='text-primary text-3xl font-bold'>E</span>asy<span className='text-secondary text-3xl font-bold'>D</span>ocs</Link>
                </div>
            </nav>
      </div>
    );
};

export default Hearder;