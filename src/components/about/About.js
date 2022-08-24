import React from 'react';
import aboutBg from '../../assets/about-img/aboutBg.png';
import about from '../../assets/about-img/about2.png';
import aboutImg from '../../assets/about-img/about-pic.jpg';
import jubaerVai from '../../assets/about-img/Jubaer vai2.jpg';
import sohagVai from '../../assets/about-img/Sohag vai2.jpg';
import sohagVai2 from '../../assets/about-img/Sohag vai.png';
import hridoyVai from '../../assets/about-img/Hridoy vai.png';
import naeem from '../../assets/about-img/Naeem.jpg';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';


const About = () => {
    return (
        <div>
            <ScrollToTop smooth color="red" top='20' />
            <div className='flex justify-center items-center lg:py-44 md:py-44 py-32 bg-cyan-600'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-medium text-white'>About Us</h1>
            </div>
            <div className='max-w-7xl mx-auto'>
                <div className='grid items-center lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 my-16 lg:mx-0 md:mx-5 mx-5'>
                    <div><img src={aboutImg} alt="" /></div>
                    <div>
                        <div className='flex items-center'>
                            <div className='w-8 bg-rose-500 mr-3' style={{ "height": '2px' }}></div>
                            <p className='text-rose-500'>ABOUT</p>
                        </div>
                        <div className='pb-5 border-b-2'>
                            <h2 className='lg:text-3xl md:text-2xl text-xl font-bold mb-4'>A united world, connected by technology</h2>
                            <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking.</li>
                            <li>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</li>
                            <li>Many desktop publishing packages and web page editors now use Lorem Ipsum.</li>
                        </div>
                        <div>
                            <blockquote>
                                <p className='italic text-xl' style={{ "color": '#6B7280' }}>“Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.”</p>
                                <cite className='italic font-bold'>Jhankar Mahabub, Owner & CEO, Programming Hero.</cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className='my-16'>
                    <div className='grid grid-cols-1 lg:gap-20 md:gap-16 gap-10'>
                        <div className='text-center'>
                            <h1 className='lg:text-5xl md:text-4xl text-3xl font-semibold uppercase'>Our Perfect Team</h1>
                        </div>
                        <div className='lg:flex md:flex grid grid-cols-1 justify-center items-center lg:gap-5 md:gap-5 gap-10 lg:mx-0 md:mx-3 mx-3'>
                            <div className='flex justify-center items-center gap-5'>
                                <div className='bg-gray-400 rounded-full'>
                                    <img src={jubaerVai} alt="" className='rounded-full' />
                                </div>
                                <div>
                                    <div>
                                        <h2 className='font-semibold text-xl'>Jubaer Ibn Zahir</h2>
                                        <p className='mt-1 mb-3 text-rose-500'>Team Leader</p>
                                        <p className='text-gray-400'>A very talented, team leader,<br /> Mr. Jubaer. His dedication helped<br /> us to reach our goals.</p>
                                    </div>
                                    <div className='flex items-center gap-3 mt-3'>
                                        <a className='text-xl text-gray-500 hover:text-rose-500' href="https://web.facebook.com/jubaeribnzahir/" target="_blank"><FaFacebookF /></a>
                                        <a className='text-xl text-gray-500 hover:text-rose-500' href="https://www.linkedin.com/in/jubaer-ibn-zohir-9471841aa" target="_blank"><FaLinkedinIn /></a>
                                        <a className='text-xl text-gray-500 hover:text-rose-500' href="https://github.com/jubaer-ibn-johir" target="_blank"><FaGithub /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-5'>
                                <div className='bg-gray-400 rounded-full'>
                                    <img src={sohagVai2} alt="" className='rounded-full' />
                                </div>
                                <div>
                                    <div>
                                        <h2 className='font-semibold text-xl'>Rakibul Hasan Sohag</h2>
                                        <p className='mt-1 mb-3 text-rose-500'>Team Member</p>
                                        <p className='text-gray-400'>Another talented, helpful team<br /> member, Mr. Sohag. He helps in the<br /> front-end design.</p>
                                    </div>
                                    <div className='flex items-center gap-3 mt-3'>
                                        <a className='text-xl text-gray-500 hover:text-rose-500' href="https://www.facebook.com/profile.php?id=100010324115694" target="_blank"><FaFacebookF /></a>
                                        <a className='text-xl text-gray-500 hover:text-rose-500' href="https://www.linkedin.com/in/rakibul-hasan-sohag-90b207231/" target="_blank"><FaLinkedinIn /></a>
                                        <a className='text-xl text-gray-500 hover:text-rose-500' href="https://github.com/Rakibulhasan70" target="_blank"><FaGithub /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:flex md:flex grid grid-cols-1 justify-center items-center lg:gap-5 md:gap-5 gap-10 lg:mx-0 md:mx-3 mx-3'>
                            <div className='flex justify-center items-center gap-5'>
                                <div className='bg-gray-400 rounded-full'>
                                    <img src={hridoyVai} alt="" className='rounded-full' />
                                </div>
                                <div>
                                    <div>
                                        <h2 className='font-semibold text-xl'>Saiful Islam Hridoy</h2>
                                        <p className='mt-1 mb-3 text-rose-500'>Team Member</p>
                                        <p className='text-gray-400'>Mr. Hridoy, a talented, friendly<br /> team member. He helps mostly<br /> in the backend.</p>
                                    </div>
                                    <div className='flex items-center gap-3 mt-3'>
                                        <a className='text-xl text-gray-500 hover:text-rose-500' href="https://www.facebook.com/saifulislam1hridoy" target="_blank"><FaFacebookF /></a>
                                        <a className='text-xl text-gray-500 hover:text-rose-500' href="https://www.linkedin.com/in/saifulislam1hridoy" target="_blank"><FaLinkedinIn /></a>
                                        <a className='text-xl text-gray-500 hover:text-rose-500' href="https://www.github.com/saifulislamhridoy" target="_blank"><FaGithub /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-5'>
                                <div className='bg-gray-400 rounded-full'>
                                    <img src={naeem} alt="" className='rounded-full' />
                                </div>
                                <div>
                                    <div>
                                        <h2 className='font-semibold text-xl'>Jannatun Naeem</h2>
                                        <p className='mt-1 mb-3 text-rose-500'>Team Member</p>
                                        <p className='text-gray-400'>Mr. Naeem, a front-end designer,<br /> helps in the designing part <br />of this project.</p>
                                    </div>
                                    <div className='flex items-center gap-3 mt-3'>
                                        <a className='text-xl text-gray-500 hover:text-rose-500' href="https://www.facebook.com/naeem141" target="_blank"><FaFacebookF /></a>
                                        <a className='text-xl text-gray-500 hover:text-rose-500' href="https://www.linkedin.com/in/naeem141/" target="_blank"><FaLinkedinIn /></a>
                                        <a className='text-xl text-gray-500 hover:text-rose-500' href="https://github.com/JannatunNaeem141" target="_blank"><FaGithub /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;