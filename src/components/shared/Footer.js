import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import footerArrow from '../../assets/footer-img/left-arrow.png';
import footerShap from '../../assets/footer-img/footer-shap-1.png';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo/logo4.png'
import whiteLogo from '../../assets/logo/white logo.png';
import newsletterImg from '../../assets/home-img/newsletter.png';
import { ThemeContext } from '../../App';
import { useForm } from 'react-hook-form';
import { FaEnvelope } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { IoIosCall } from 'react-icons/io';

const Footer = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='mt-44'>
            <div style={{ backgroundColor: '#12174E' }}>
                <div>
                    <div className='lg:max-w-4xl md:max-w-4xl max-w-full mx-auto'>
                        <div className='flex items-center justify-between lg:px-14 md:px-14 px-0 py-5'>
                            <div className='lg:flex md:flex grid grid-cols-1 lg:gap-0 md:gap-0 gap-3 items-center justify-between lg:rounded-3xl md:rounded-3xl rounded-md bg-slate-200 w-full lg:px-12 md:px-5 px-3 py-5 -mt-32 CardsCommonBg'>
                                <div className='lg:w-2/5 md:w-2/5 w-full grid grid-cols-1 lg:justify-items-start md:justify-items-start justify-items-center'>
                                    <img src={newsletterImg} alt="" className='-mt-32' />
                                    <h2 className='text-4xl mt-5 font-bold blackToWhite' style={{ color: '#0E1133' }}>Newsletter</h2>
                                    <p className='text-base text-gray-600 my-5 commonParagraph'>Subscribe and get notification from us</p>
                                </div>
                                <div className='lg:w-3/5 md:w-3/5 w-full'>
                                    <form onSubmit={handleSubmit(onSubmit)} className='lg:flex md:flex grid grid-cols-1 justify-items-center lg:gap-0 md:gap-0 gap-3 lg:mx-0 md:mx-0 mx-5'>
                                        <input {...register("firstName", { required: true, maxLength: 20 })} className='text-base bg-white h-12 lg:w-96 md:w-96 w-64 rounded-md px-5 active:border-none active:outline-none focus:outline-none CardsCommonBgSecondary' placeholder='Email Address *' />
                                        <input type="submit" value="Subscribe" className='text-white text-lg font-medium bg-blue-900 h-12 rounded-md cursor-pointer px-5 ml-2 ' />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{ position: "absolute", right: "0", bottom: "0", zIndex: "-1" }}>
                        <img className='h-[300px]' src={footerShap} alt="" />
                    </div>
                    <div className='max-w-7xl mx-auto'>
                        <div className='lg:flex md:grid md:grid-cols-2 grid grid-cols-1 justify-between mb-6 ml-9 lg:mx-20'>
                            <div>
                                {/* <label> {theme === "light" ? "Light" : "Dark"}</label> */}
                                {/* <h2 className='font-bold text-2xl py-8'><Link to="/"><span className='text-primary text-3xl font-bold'>E</span>asy<span className='text-secondary text-3xl font-bold'>D</span>ocs</Link></h2> */}
                                {/* <Link to="/"><img src={theme === "light" ? `${logo}` : `${whiteLogo}`} alt="" className='mb-5 mt-10' /></Link> */}
                                <Link to='/'><img src={whiteLogo} alt="" className='mb-5 mt-10' /></Link>
                                <p className='text-gray-400'>Manage any project from start to finish with <br />
                                    highly customizable views that make project <br />
                                    planning a breezed out formal.</p>
                                {/* <div className='flex gap-x-5 mt-6'>
                                    <a href="/"><FaFacebook className='text-blue-500 w-7 h-7'></FaFacebook></a>
                                    <a href="/"><FaLinkedin className='text-blue-800 w-7 h-7'></FaLinkedin></a>
                                    <a href="/"><FaYoutube className='text-red-600 w-7 h-7'></FaYoutube></a>
                                    <a href="/"><FaTwitter className='text-blue-600 w-7 h-7'></FaTwitter></a>
                                </div> */}
                                <div className='flex lg:gap-x-5 md:gap-x-3 gap-x-2 mt-6'>
                                    <div className='lg:h-12 md:h-10 h-8 lg:w-12 md:w-10 w-8 rounded-full border-2 border-slate-400 hover:border-blue-800 flex justify-center items-center hover:bg-blue-800 transition-all'>
                                        <a href="/"><FaFacebook className='hover:text-white text-slate-400 lg:w-7 md:w-5 w-4 lg:h-7 md:h-5 h-4'></FaFacebook></a>
                                    </div>
                                    <div className='lg:h-12 md:h-10 h-8 lg:w-12 md:w-10 w-8 rounded-full border-2 border-slate-400 hover:border-blue-800 flex justify-center items-center hover:bg-blue-800 transition-all'>
                                        <a href="/"><FaLinkedin className='hover:text-white text-slate-400 lg:w-7 md:w-5 w-4 lg:h-7 md:h-5 h-4'></FaLinkedin></a>
                                    </div>
                                    <div className='lg:h-12 md:h-10 h-8 lg:w-12 md:w-10 w-8 rounded-full border-2 border-slate-400 hover:border-blue-800 flex justify-center items-center hover:bg-blue-800 transition-all'>
                                        <a href="/"><FaYoutube className='hover:text-white text-slate-400 lg:w-7 md:w-5 w-4 lg:h-7 md:h-5 h-4'></FaYoutube></a>
                                    </div>
                                    <div className='lg:h-12 md:h-10 h-8 lg:w-12 md:w-10 w-8 rounded-full border-2 border-slate-400 hover:border-blue-800 flex justify-center items-center hover:bg-blue-800 transition-all'>
                                        <a href="/"><FaTwitter className='hover:text-white text-slate-400 lg:w-7 md:w-5 w-4 lg:h-7 md:h-5 h-4'></FaTwitter></a>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <h2 className='text-2xl font-medium py-8 text-white'>Quick Links</h2>
                                <div className=''>
                                    <li className='list-none text-gray-400'><Link className='hover:text-primary' to="/docs">Documentation</Link></li>
                                    <li className='list-none text-gray-400'><Link className='hover:text-primary' to="/ask">Ask Question</Link></li>
                                    <li className='list-none text-gray-400'><Link className='hover:text-primary' to="/blog">Blogs</Link></li>
                                    <li className='list-none text-gray-400'><Link className='hover:text-primary' to="/courses">Courses</Link></li>
                                </div>
                            </div>
                            <div className=''>
                                <h2 className='text-2xl font-medium py-8 text-white'>Quick Links</h2>
                                <div className=''>
                                    <li className='list-none text-gray-400'><Link className='hover:text-primary' to="/tutorial">Tutorials</Link></li>
                                    <li className='list-none text-gray-400'><Link className='hover:text-primary' to="/contact">Contact Us</Link></li>
                                    <li className='list-none text-gray-400'><Link className='hover:text-primary' to="/about">About Us</Link></li>
                                </div>
                            </div>
                            <div className=''>
                                <h2 className='text-2xl font-medium py-8 text-white'>Contact Us</h2>
                                <div className='grid grid-cols-1 gap-5'>
                                    <li className='list-none flex items-center gap-3 text-gray-400'><HiLocationMarker className='text-gray-300 text-2xl' /><span>Easy Doc, Dhaka, Bangladesh</span></li>
                                    <li className='list-none flex items-center gap-3 text-gray-400'><FaEnvelope className='text-gray-300 text-2xl' /><span>Official:</span>teamf8512@gmail.com</li>
                                    <li className='list-none flex items-center gap-3 text-gray-400'><IoIosCall className='text-gray-300 text-2xl' /><span>Helpline:</span><span>+8801983459597</span></li>
                                </div>
                            </div>
                            {/* <div className=''>
                                <h2 className='text-2xl font-medium py-8'>Quick Links</h2>
                                <div className='grid grid-cols-2 gap-x-10 gap-y-3'>
                                    <li className='list-none '><Link className='hover:text-primary' to="/docs">Documentation</Link></li>
                                    <li className='list-none '><Link className='hover:text-primary' to="/ask">Ask Question</Link></li>
                                    <li className='list-none '><Link className='hover:text-primary' to="/blog">Blogs</Link></li>
                                    <li className='list-none '><Link className='hover:text-primary' to="/courses">Courses</Link></li>
                                    <li className='list-none '><Link className='hover:text-primary' to="/tutorial">Tutorials</Link></li>
                                    <li className='list-none '><Link className='hover:text-primary' to="/contact">Contact Us</Link></li>
                                    <li className='list-none '><Link className='hover:text-primary' to="/about">About Us</Link></li>
                                </div>
                            </div> */}
                            {/* <div>
                                <h2 className='text-2xl font-medium py-8'>Newsletter</h2>
                                <div class="form-control">
                                    <label class="input-group">
                                        <input type="text" placeholder="info@site.com" onFocus={{ borderd: "none" }} className="input bg-slate-100 focus:outline-none" />
                                        <span className='bg-cyan-500 text-white'>Email</span>
                                    </label>
                                </div>
                                <div className='mt-7'>
                                    <span style={{ position: "relative", fontSize: "14px", marginTop: "120px" }}>
                                        Try for free once
                                        <img style={{ top: "-14px", right: "-63px", position: 'absolute' }} src={footerArrow} alt="" />
                                    </span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <hr />
                    <p className='text-center py-5 text-cyan-700 commonParagraph'>© 2022 All Rights Reserved by EasyDocs</p>
                </div>
            </div >
        </div >
    );
};

export default Footer;