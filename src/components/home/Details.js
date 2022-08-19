import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MdFeaturedPlayList } from 'react-icons/md';
import { CgFileDocument } from 'react-icons/cg';
import { FaLaptopCode } from 'react-icons/fa';

const Details = () => {
    return (
        <div className='mt-10 max-w-7xl mx-auto' >
            <div class="hero-content text-center text-neutral-content">
                <div class=" flex justify-center items-center">
                    <div className='mb-10'>
                        <h1 class="mb-2 text-2xl lg:text-4xl font-semibold tracking-wider text-black">Know about our EasyDocs</h1>
                        <p class=" text-gray-500 text-lg  lg:text-2xl">The best documentation website in online with various kinds of documentation & Feature.</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <Tabs>

                    <TabList >
                        <div className='flex'>
                            <Tab><h1 className='text-cyan-500 text-xl font-bold'>Docs</h1></Tab>
                            <Tab> <h1 className='text-cyan-500 text-xl font-bold'>Feature</h1></Tab>
                            <Tab> <h1 className='text-cyan-500 text-xl font-bold'>Technology </h1></Tab>
                        </div>
                    </TabList>

                    <TabPanel>
                        <div className='hero-content text-center flex justify-center items-center mt-10'>
                            <div className='h-16 w-16 rounded-full border-4 border-cyan-500 flex justify-center items-center p-3'>
                                <CgFileDocument className='w-12 h-12 text-cyan-500' />
                            </div>
                            <div class="title"><span>EasyDocs Documentation</span></div>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-10 justify-items-center'>
                            <div className='w-80 lg:w-full  lg:-ml-0'>
                                <h1 className='text-xl text-cyan-500 font-bold'>React js</h1>
                                <p className='text-xl  '>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. <span className=' text-cyan-500'><a href="https://firebase.google.com/" target="_blank">View more...</a></span></p>

                            </div>
                            <div className='w-80 lg:w-full  lg:-ml-0'>
                                <h1 className='text-xl text-cyan-500 font-bold'>Tailwind Css</h1>
                                <p className='text-xl'>Rapidly build modern websites without ever leaving your HTML.A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div className='w-80 lg:w-full   lg:-ml-0'>
                                <h1 className='text-xl text-cyan-500 font-bold'>Firebase for authentication</h1>
                                <p className='text-xl'>Make your app the best it can be Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.  <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div className='w-80 lg:w-full   lg:-ml-0'>
                                <h1 className='text-xl text-cyan-500  font-bold'>Heroku for server deploy</h1>
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div className='w-80 lg:w-full   lg:-ml-0'>
                                <h1 className='text-xl text-cyan-500 font-bold'>Node js & Express js for backend</h1>
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div className='w-80 lg:w-full   lg:-ml-0'>
                                <h1 className='text-xl text-cyan-500 font-bold'>MongoDB for database</h1>
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='hero-content text-center mt-10 flex justify-center items-center'>
                            <div className='h-16 w-16 rounded-full border-4 border-cyan-500 flex justify-center items-center p-3'>
                                <MdFeaturedPlayList className='w-12 h-12 text-cyan-500' />
                            </div>
                            <div class="title"><span>EasyDocs Feature</span></div>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-10 lg:mx-0 md:mx-5 mx-5'>
                            <div>
                                <h1 className='text-xl text-cyan-500 font-bold'>React js</h1>
                                <p className='text-xl'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>

                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500 font-bold'>Tailwind Css</h1>
                                <p className='text-xl'>Rapidly build modern websites without ever leaving your HTML.A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500 font-bold'>Firebase for authentication</h1>
                                <p className='text-xl'>Make your app the best it can be Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.  <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500 font-bold'>Heroku for server deploy</h1>
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500 font-bold'>Node js & Express js for backend</h1>
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500 font-bold'>MongoDB for database</h1>
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='hero-content text-center mt-10'>
                            <div className='h-16 w-16 rounded-full border-4 border-cyan-500 flex justify-center items-center p-3'>
                                <FaLaptopCode className='w-12 h-12 text-cyan-500' />
                            </div>
                            <div class="title"><span>EasyDocs Technology</span></div>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-10 lg:mx-0 md:mx-5 mx-5'>
                            <div>
                                <h1 className='text-xl text-cyan-500 font-bold'>React js</h1>
                                <p className='text-xl'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>

                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500  font-bold'>Tailwind Css</h1>
                                <p className='text-xl'>Rapidly build modern websites without ever leaving your HTML.A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500  font-bold'>Firebase for authentication</h1>
                                <p className='text-xl'>Make your app the best it can be Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.  <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500  font-bold'>Heroku for server deploy</h1>
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500 font-bold'>Node js & Express js for backend</h1>
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500 font-bold'>MongoDB for database</h1>
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-cyan-500'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Details;
