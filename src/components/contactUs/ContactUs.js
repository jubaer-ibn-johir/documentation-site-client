import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { IoIosCall } from 'react-icons/io';
import { Link } from 'react-router-dom';
import contactBg1 from '../../assets/contact-us/breadcumbs-section.jpg';
import contactBg2 from '../../assets/contact-us/contact-bg-hotchpotch-1.jpg';
import contactBg3 from '../../assets/contact-us/desk-bg-final2.png';
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
            <div>
                <div style={{ "backgroundImage": ` url(${contactBg2})`, "backgroundSize": "cover", "backgroundRepeat": "no-repeat", "backgroundPosition": "center" }}>
                    <div className='max-w-7xl mx-auto py-12'>
                        <div>
                            <div className='flex justify-center'>
                                <div>
                                    <h1 className='lg:text-5xl md:text-4xl text-3xl font-medium mt-40 mb-2 text-center'>Contact Us !</h1>
                                    <p className='lg:text-lg md:text-lg text-base lg:mx-0 md:mx-0 mx-5 text-gray-400 text-center'>We are always here to help you whatever way we can.</p>
                                </div>
                            </div>
                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 lg:mx-0 md:mx-5 mx-5'>
                                <div className='flex items-center p-10 rounded-md' style={{ backgroundColor: '#0FCFEC' }}>
                                    <div className='mr-5 text-5xl text-white'>
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h2 className='text-2xl text-white'>Email Address</h2>
                                        <p className='text-gray-200'>teamf8512@gmail.com</p>
                                    </div>
                                </div>
                                <div className='flex items-center p-10 rounded-md' style={{ backgroundColor: '#0FCFEC' }}>
                                    <div className='mr-5 text-5xl text-white'>
                                        <HiLocationMarker />
                                    </div>
                                    <div>
                                        <h2 className='text-2xl text-white'>Address</h2>
                                        <p className='text-gray-200'>351 Fairview Avenue Street, New York 12534</p>
                                    </div>
                                </div>
                                <div className='flex items-center p-10 rounded-md' style={{ backgroundColor: '#0FCFEC' }}>
                                    <div className='mr-5 text-5xl text-white'>
                                        <IoIosCall />
                                    </div>
                                    <div>
                                        <h2 className='text-2xl text-white'>Phone Number</h2>
                                        <p className='text-gray-200'>+8801983459597</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:mx-0 md:mx-5 mx-5'>
                            <form action="" className='my-12 text-center' onSubmit={sendEmail}>
                                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-5'>
                                    <input type="text" name='firstName' required placeholder='First Name' className='rounded-md py-3 px-5 outline-none border-2 border-slate-200' />
                                    <input type="text" name='lastName' required placeholder='Last Name' className='rounded-md py-3 px-5 outline-none border-2 border-slate-200' />
                                    <input type="email" name='email' required placeholder='Email' className='rounded-md py-3 px-5 outline-none border-2 border-slate-200' />
                                </div>
                                <textarea name="message" id="" cols="30" rows="5" placeholder='Enter your message' className='w-full grid grid-cols-1 outline-none px-5 py-5 rounded-md border-2 border-slate-200'></textarea><br />
                                <button type="submit" className='px-10 py-2 text-white font-bold rounded-md' style={{ backgroundColor: '#0FCFEC' }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#F6F6F6' }}>
                    <div className='max-w-7xl mx-auto'>
                        <img src={contactBg3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;