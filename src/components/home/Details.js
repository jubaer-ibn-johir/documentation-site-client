import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Details = () => {
    return (
        <div className='mt-10  ' >
            <div class="hero-content text-center text-neutral-content ">
                <div class="">
                    <h1 class="mb-8 text-2xl lg:text-4xl font-semibold tracking-wider text-black">Know about our EasyDocs</h1>
                    <p class=" text-gray-500 text-xl lg:text-2xl">The best documentation website in online with various kinds of documentation & Feature.</p>
                    


                </div>
            </div>
            <div className='m-20  '>
                <Tabs>
                    <TabList>
                        <Tab><h1 className='text-primary text-xl font-bold'>Docs</h1></Tab>
                        <Tab> <h1 className='text-primary text-xl font-bold'>Feature</h1></Tab>
                        <Tab> <h1 className='text-primary text-xl font-bold'>Technology </h1></Tab>
                    </TabList>

                    <TabPanel>
                        <div className='hero-content text-center '>
                            <img className=' mt-10 w-16' src="https://www.clipartmax.com/png/middle/198-1986092_icon-documents-control-plan-icon.png" alt="" />
                            <div class="title"><span>EasyDocs Documentation</span></div>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-10 lg:mx-0 md:mx-5 mx-5'>
                            <div>
                                <h1 className='text-xl text-primary'>React js</h1><br />
                                <p className='text-xl'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>

                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>Tailwind Css</h1><br />
                                <p className='text-xl'>Rapidly build modern websites without ever leaving your HTML.A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>Firebase for authentication</h1><br />
                                <p className='text-xl'>Make your app the best it can be Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.  <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>Heroku for server deploy</h1><br />
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>Node js & Express js for backend</h1><br />
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>MongoDB for database</h1><br />
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='hero-content text-center'>
                            <img className=' mt-10  w-16' src="data:image/png;base64,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" alt="" />
                            <div class="title"><span>EasyDocs Feature</span></div>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-10 lg:mx-0 md:mx-5 mx-5'>
                            <div>
                                <h1 className='text-xl text-primary'>React js</h1><br />
                                <p className='text-xl'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>

                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>Tailwind Css</h1><br />
                                <p className='text-xl'>Rapidly build modern websites without ever leaving your HTML.A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>Firebase for authentication</h1><br />
                                <p className='text-xl'>Make your app the best it can be Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.  <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>Heroku for server deploy</h1><br />
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>Node js & Express js for backend</h1><br />
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>MongoDB for database</h1><br />
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='hero-content text-center'>
                            <img className=' mt-10 w-16' src="https://toppng.com/uploads/preview/technology-icon-orange-information-technology-icon-115535310117amjuxxw3e.png" alt="" />
                            {/* <h1 class=" text-xl mt-5 font-bold ">EasyDocs Technology</h1> */}
                            <div class="title"><span>EasyDocs Technology</span></div>
                        </div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 mt-10 lg:mx-0 md:mx-5 mx-5'>
                            <div>
                               <h1 className='text-xl text-primary'>React js</h1><br />
                                <p className='text-xl'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>

                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>Tailwind Css</h1><br />
                                <p className='text-xl'>Rapidly build modern websites without ever leaving your HTML.A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>Firebase for authentication</h1><br />
                                <p className='text-xl'>Make your app the best it can be Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.  <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p> 
                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>Heroku for server deploy</h1><br />
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>Node js & Express js for backend</h1><br />
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>
                            <div>
                                <h1 className='text-xl text-primary'>MongoDB for database</h1><br />
                                <p className='text-xl'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-primary'><a href="https://firebase.google.com/">View more...</a></span></p>
                            </div>

                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Details;
