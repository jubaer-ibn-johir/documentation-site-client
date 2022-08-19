import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { IoIosCall } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import contactBg1 from '../../assets/contact-us/breadcumbs-section.jpg';
import contactBg2 from '../../assets/contact-us/contact-bg-hotchpotch-1.jpg';
import contactBg3 from '../../assets/contact-us/desk-bg-final2.png';
import contactBg4 from '../../assets/contact-us/contactBg4.png';
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';

const ContactUs = () => {
    const sendEmail = e => {
        e.preventDefault()

        emailjs.sendForm('service_fxrj295', 'template_2rw7uit', e.target, 'P442xSSTKMHmprr8j')
            .then(res => {
                console.log(res);
                toast('Email send successfully')
            })
    }
    return (
        <div>
            <div className='bg-orange-50'>
                <div className='pt-44 pb-10 bg-white' style={{ "box-shadow": "0 15px 15px 0px rgba(255, 102, 0, 0.2)" }}>
                    <h1 className='lg:text-5xl md:text-4xl text-3xl font-semibold text-center'>Contact Us !</h1>
                    <p className='text-center text-xl mt-2 text-gray-500'>We are always here to help you whatever way we can.</p>
                </div>
                <div>
                    <div className='max-w-7xl mx-auto lg:py-28 md:py-20 py-16'>
                        <div>
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 lg:mx-0 md:mx-5 mx-5'>
                                <div className='flex items-center p-10 rounded-md bg-white border-2 border-orange-100 hover:shadow-2xl hover:shadow-orange-300 transition-all'>
                                    <div className='mr-5 text-5xl text-orange-400'>
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h2 className='text-2xl '>Email Address</h2>
                                        <p className='text-gray-400'>teamf8512@gmail.com</p>
                                    </div>
                                </div>
                                <div className='flex items-center p-10 rounded-md bg-white border-2 border-orange-100 hover:shadow-2xl hover:shadow-orange-300 transition-all'>
                                    <div className='mr-5 text-5xl text-orange-400'>
                                        <HiLocationMarker />
                                    </div>
                                    <div>
                                        <h2 className='text-2xl '>Address</h2>
                                        <p className='text-gray-400'>351 Fairview Avenue Street, New York 12534</p>
                                    </div>
                                </div>
                                <div className='flex items-center p-10 rounded-md bg-white border-2 border-orange-100 hover:shadow-2xl hover:shadow-orange-300 transition-all'>
                                    <div className='mr-5 text-5xl text-orange-400'>
                                        <IoIosCall />
                                    </div>
                                    <div>
                                        <h2 className='text-2xl '>Phone Number</h2>
                                        <p className='text-gray-400'>+8801983459597</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:mx-0 md:mx-5 mx-5'>
                            <form action="" className='my-12 text-center' onSubmit={sendEmail}>
                                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-5'>
                                    <input type="text" required placeholder='First Name' className='rounded-md py-3 px-5 outline-none border-2 border-orange-200 text-orange-500' />
                                    <input type="text" required placeholder='Last Name' className='rounded-md py-3 px-5 outline-none border-2 border-orange-200 text-orange-500' />
                                    <input type="email" required placeholder='Email' className='rounded-md py-3 px-5 outline-none border-2 border-orange-200 text-orange-500' />
                                </div>
                                <textarea name="" id="" cols="30" rows="5" placeholder='Enter your message' className='w-full grid grid-cols-1 outline-none px-5 py-5 rounded-md border-2 border-orange-200 text-orange-500'></textarea><br />
                                <button type="submit" className='px-10 py-3 text-white font-bold rounded-md border-orange-400 border-2 bg-orange-400 hover:bg-white hover:border-orange-400 hover:border-2 hover:text-orange-500 transition-all'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='max-w-7xl mx-auto'>
                        <img src={contactBg4} alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactUs;