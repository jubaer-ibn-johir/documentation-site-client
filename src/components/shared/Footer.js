import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import footerArrow from '../../assets/footer-img/left-arrow.png';
import footerShap from '../../assets/footer-img/footer-shap-1.png';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo/logo4.png'
import whiteLogo from '../../assets/logo/white logo.png';
import newsletterImg from '../../assets/footer-img/newsletter.png';
import { ThemeContext } from '../../App';
import { useForm } from 'react-hook-form';

const Footer = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div >
            <div style={{ backgroundColor: 'blue'}}>
                    <div>
                    <div className='max-w-4xl mx-auto ' >
                        <div className='flex items-center justify-between rounded-3xl px-14 py-5'>
                            <div className=' flex items-center justify-between rounded-3xl py-5   -mt-32 bg-slate-400 p-5 '>
                              <div>
                                    <img src={newsletterImg} alt=""/>
                                    <h2 className='text-4xl mt-5 font-bold' style={{ color: '#0E1133' }}>Newsletter</h2>
                                    <p className='text-base text-gray-600 my-5'>Subscribe and get notification from us</p>
                              </div>
                              <div className='ml-20'>
                                    <form onSubmit={handleSubmit(onSubmit)} className='flex lg:mx-0 md:mx-0 mx-5'>
                                        <input {...register("firstName", { required: true, maxLength: 20 })} className='text-base bg-white h-12 lg:w-96 md:w-96 w-64 rounded-md px-5 active:border-none active:outline-none focus:outline-none' placeholder='Email Address *' />
                                        <input type="submit" value="Subscribe" className='text-white text-lg font-medium bg-blue-900 h-12 rounded-md cursor-pointer px-8 ml-2 ' />
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
                        <div className='lg:flex justify-between mb-6 ml-9 lg:mx-20'>
                            <div>
                                {/* <label> {theme === "light" ? "Light" : "Dark"}</label> */}
                                {/* <h2 className='font-bold text-2xl py-8'><Link to="/"><span className='text-primary text-3xl font-bold'>E</span>asy<span className='text-secondary text-3xl font-bold'>D</span>ocs</Link></h2> */}
                                <Link to="/"><img src={theme === "light" ? `${logo}` : `${whiteLogo}`} alt="" className='mb-5 mt-10' /></Link>
                                <p className=''>Manage any project from start to finish with <br />
                                    highly customizable views that make project <br />
                                    planning a breezed out formal.</p>
                                <div className='flex gap-x-5 mt-6'>
                                    <a href="/"><FaFacebook className='text-blue-500 w-7 h-7'></FaFacebook></a>
                                    <a href="/"><FaLinkedin className='text-blue-800 w-7 h-7'></FaLinkedin></a>
                                    <a href="/"><FaYoutube className='text-red-600 w-7 h-7'></FaYoutube></a>
                                    <a href="/"><FaTwitter className='text-blue-600 w-7 h-7'></FaTwitter></a>
                                </div>
                            </div>
                            <div className=''>
                                <h2 className='text-2xl font-medium py-8'>Quick Links</h2>
                                <li className='list-none mb-2'><a className='hover:text-primary' href="/">Documentation</a></li>
                                <li className='list-none mb-2'><a className='hover:text-primary' href="/">Technical Support</a></li>
                                <li className='list-none mb-2'><a className='hover:text-primary' href="/">My Account</a></li>
                                <li className='list-none'><a className='hover:text-primary' href="/">Marketplace</a></li>
                            </div>
                            <div>
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
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className='text-center py-5 text-cyan-700'>© 2022 All Rights Reserved by EasyDocs</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;