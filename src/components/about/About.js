import React from 'react';
import aboutBg from '../../assets/about-img/aboutBg.png';
import about from '../../assets/about-img/about2.png';
import jubaerVai from '../../assets/about-img/Jubaer vai2.jpg';
import sohagVai from '../../assets/about-img/Sohag vai2.jpg';
import hridoyVai from '../../assets/about-img/Hridoy vai.png';
import naeem from '../../assets/about-img/Naeem.jpg';


const About = () => {
    return (
        <div>
            <div className='flex justify-center items-center py-52' style={{ "backgroundImage": `url(${aboutBg})`, 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-medium'>About Us</h1>
            </div>
            <div className='max-w-7xl mx-auto'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 my-16 lg:mx-0 md:mx-5 mx-5'>
                    <div><img src={about} alt="" /></div>
                    <div>
                        <div className='flex items-center'>
                            <div className='w-8 bg-primary mr-3' style={{ "height": '2px' }}></div>
                            <p className='text-primary'>ABOUT</p>
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
                <div className='my-12 lg:mx-0 md:mx-5 mx-5'>
                    <div className='text-center mb-12'>
                        <h1 className='lg:text-3xl md:text-2xl text-xl font-medium'>Meet our (awesome) team</h1>
                        <p className='lg:w-1/2 md:w-3/4 w-full mx-auto'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className='flex justify-center items-center mb-10'>
                        <div className='w-full bg-primary' style={{ "height": '1px' }}></div>
                        {/* <p className='mx-5'>Team Member</p> */}
                        <div className='mx-3 font-bold'>Team</div>
                        <div className='mr-3 font-bold'>Member</div>
                        <div className='w-full bg-primary' style={{ "height": '1px' }}></div>
                    </div>
                    <div className='lg:flex gap-5 lg:justify-center md:flex md:justify-center grid grid-cols-2 justify-items-center'>
                        <div>
                            <img src={jubaerVai} alt="" />
                            <p>Jubaer Ibn Zahir</p>
                            <p style={{ "color": '#6B7280' }}>MERN-Stack Developer</p>
                        </div>
                        <div>
                            <img src={sohagVai} alt="" />
                            <p>Rakibul Hasan Sohag</p>
                            <p style={{ "color": '#6B7280' }}>MERN-Stack Developer</p>
                        </div>
                        <div>
                            <img src={hridoyVai} alt="" />
                            <p>Saiful Islam Hridoy</p>
                            <p style={{ "color": '#6B7280' }}>MERN-Stack Developer</p>
                        </div>
                        <div>
                            <img src={naeem} alt="" />
                            <p>Jannatun Naeem</p>
                            <p style={{ "color": '#6B7280' }}>MERN-Stack Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;