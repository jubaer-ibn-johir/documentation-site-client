import React from 'react';
import { Link } from 'react-router-dom';
import { VscDebugAll } from "react-icons/vsc";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { AiOutlinePicCenter } from "react-icons/ai";
import ScrollToTop from 'react-scroll-to-top';
import { useNavigate } from "react-router-dom";

const Reduxjs = () => {
    const navigate = useNavigate();
    const navigateToDetail = id => {
        navigate('/get-started')
    }
    return (
        <div className='overflow-hidden'>
            <ScrollToTop smooth color="red" top='20' />
            {/* <div className='bg-cyan-50'>
                <div className='flex justify-center items-center' style={{ "backgroundColor": '#0FCFEC' }}>
                    <div className='my-24 text-center'>
                        <h1 className='text-white lg:text-5xl md:text-5xl text-4xl font-medium'>Redux</h1>
                        <p className='mt-2 mb-12 text-white lg:text-xl md:text-xl text-lg '>A Predictable State Container for JS Apps</p>
                        <div className='mb-5'>
                            <Link to="/get-started" className='bg-white border-2 border-white rounded-md pt-2 pb-3 px-7 font-medium text-cyan-500 hover:text-white hover:bg-cyan-500 hover:border-2 hover:border-white transition-all'>Get Started</Link>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto text-center my-24'>
                    <div className=' lg:mx-0 md:mx-5 mx-5 bg-white border-cyan-100 border-2 p-5 rounded-xl transition-all hover:shadow-xl hover:shadow-cyan-300'>
                        <div className='inline-block text-7xl ' style={{ 'color': '#0FCFEC' }}><TiTick /></div>
                        <div>
                            <h1 className='text-2xl font-bold mb-5'>Predictable</h1>
                            <p className='text-lg text-left'>Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.</p>
                        </div>
                    </div>
                    <div className=' lg:mx-0 md:mx-5 mx-5  bg-white border-cyan-100 border-2 p-5 rounded-xl transition-all hover:shadow-xl hover:shadow-cyan-300'>
                        <div className='inline-block text-7xl' style={{ 'color': '#0FCFEC' }}><AiOutlinePicCenter /></div>
                        <div>
                            <h1 className='text-2xl font-bold mb-5'>Centralized</h1>
                            <p className='text-lg text-left'>Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.</p>
                        </div>
                    </div>
                    <div className=' lg:mx-0 md:mx-5 mx-5  bg-white border-cyan-100 border-2 p-5 rounded-xl transition-all hover:shadow-xl hover:shadow-cyan-300'>
                        <div className='inline-block text-7xl' style={{ 'color': '#0FCFEC' }}><VscDebugAll /></div>
                        <div>
                            <h1 className='text-2xl font-bold mb-5'>Debuggable</h1>
                            <p className='text-lg text-left'>The Redux DevTools make it easy to trace when, where, why, and how your application's state changed. Redux's architecture lets you log changes, use "time-travel debugging", and even send complete error reports to a server.</p>
                        </div>
                    </div>
                    <div className=' lg:mx-0 md:mx-5 mx-5  bg-white border-cyan-100 border-2 p-5 rounded-xl transition-all hover:shadow-xl hover:shadow-cyan-300'>
                        <div className='inline-block text-7xl text-cyan-500' style={{ 'color': '#0FCFEC' }}><MdOutlineSettingsSuggest /></div>
                        <div>
                            <h1 className='text-2xl font-bold mb-5'>Flexible</h1>
                            <p className='text-lg text-left'>Redux works with any UI layer, and has a large ecosystem of addons to fit your needs.</p>
                        </div>
                    </div>
                </div>
                <div className='text-center py-12 lg:mx-0 md:mx-0 mx-5'>
                    <div>
                        <h3 className='text-2xl font-bold mb-10'>Other Libraries from the Redux Team</h3>
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl lg:mx-auto md:mx-5 mx-auto'>
                        <div className='bg-white p-8 rounded-xl border-2 border-cyan-200 hover:shadow-xl hover:shadow-cyan-300 transition-all'>
                            <a href='https://react-redux.js.org/' style={{ color: '#0FCFEC' }} target="_blank" className='text-2xl font-bold'>React-Redux <FaExternalLinkSquareAlt className='inline' /> </a>
                            <p className='text-lg mt-3'>Official React bindings for Redux</p>
                        </div>
                        <div className='bg-white p-8 rounded-xl border-2 border-cyan-200 hover:shadow-xl hover:shadow-cyan-300 transition-all'>
                            <a href='https://redux-toolkit.js.org/' style={{ color: '#0FCFEC' }} target="_blank" className='text-2xl font-bold'>Redux Toolkit <FaExternalLinkSquareAlt className='inline' /> </a>
                            <p className='text-lg mt-3'>The official, opinionated, batteries-included toolset for efficient Redux development</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className=''>
                <div className='flex justify-center items-center' style={{ "background": 'linear-gradient(223deg, rgba(50,154,176,1) 0%, rgba(125,221,241,1) 50%, rgba(64,130,144,1) 100%)' }}>
                    <div className='my-24 text-center'>
                        <h1 className='text-white lg:text-5xl md:text-5xl text-4xl font-bold'>Redux</h1>
                        <p className='mt-2 mb-12 text-white lg:text-xl md:text-xl text-lg '>A Predictable State Container for JS Apps</p>
                        <div className='mb-5'>

                            <button className='rounded-md pt-2 pb-3 px-7 font-bold bg-white text-black transition-all' onClick={() => navigateToDetail()}>Get Started</button>

                            {/* <Link to="/get-started" className='rounded-md pt-2 pb-3 px-7 font-bold  text-white transition-all commonButton'>Get Started</Link> */}
                            {/* <button onClick={handleClick()} className='rounded-md pt-2 pb-3 px-7 font-bold  text-white transition-all commonButton'>Get Started</button> */}
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto text-center my-24'>
                    <div 
                    className=' lg:mx-0 md:mx-5 mx-5 bg-white CardsCommonBg border-cyan-400 border-t-8 border-b-8 shadow-md p-5 rounded-xl transition-all hover:shadow-xl hover:shadow-cyan-300 grid justify-items-center'
                    
                        data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    
                    >
                        {/* <div className='inline-block text-7xl ' style={{ 'color': '#0FCFEC' }}><TiTick /></div> */}
                        <div className='h-20 w-20 rounded-full border-2 flex justify-center items-center mt-12' style={{ 'border': '2px solid #0FCFEC' }}>
                            <figure class="">
                                <TiTick className='w-12 h-12' style={{ 'color': '#0FCFEC' }} />
                            </figure>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold my-5'>Predictable</h1>
                            <p className='text-lg text-left commonParagraph'>Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.</p>
                        </div>
                    </div>
                    <div 
                    className=' lg:mx-0 md:mx-5 mx-5  bg-white CardsCommonBg border-cyan-400 border-t-8 border-b-8 shadow-md p-5 rounded-xl transition-all hover:shadow-xl hover:shadow-cyan-300 grid justify-items-center'  
                        data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        {/* <div className='inline-block text-7xl' style={{ 'color': '#0FCFEC' }}><AiOutlinePicCenter /></div> */}
                        <div className='h-20 w-20 rounded-full border-2 flex justify-center items-center mt-12' style={{ 'border': '2px solid #0FCFEC' }}
                          
                        
                        
                        >
                            <figure class="">
                                <AiOutlinePicCenter className='w-12 h-12' style={{ 'color': '#0FCFEC' }} />
                            </figure>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold mb-5'>Centralized</h1>
                            <p className='text-lg text-left commonParagraph'>Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.</p>
                        </div>
                    </div>
                    <div 
                    className=' lg:mx-0 md:mx-5 mx-5  bg-white CardsCommonBg border-cyan-400 border-t-8 border-b-8 shadow-md p-5 rounded-xl transition-all hover:shadow-xl hover:shadow-cyan-300 grid justify-items-center'
                    
                     
                        data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    
                    >
                        {/* <div className='inline-block text-7xl' style={{ 'color': '#0FCFEC' }}><VscDebugAll /></div> */}
                        <div className='h-20 w-20 rounded-full border-2 flex justify-center items-center mt-12' style={{ 'border': '2px solid #0FCFEC' }}
                        
                           
                        
                        >
                            <figure class="">
                                <VscDebugAll className='w-12 h-12' style={{ 'color': '#0FCFEC' }} />
                            </figure>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold mb-5'>Debuggable</h1>
                            <p className='text-lg text-left commonParagraph'>The Redux DevTools make it easy to trace when, where, why, and how your application's state changed.</p>
                        </div>
                    </div>
                    <div 
                    className=' lg:mx-0 md:mx-5 mx-5  bg-white CardsCommonBg border-cyan-400 border-t-8 border-b-8 shadow-md p-5 rounded-xl transition-all hover:shadow-xl hover:shadow-cyan-300 grid justify-items-center'
                    
                        data-aos="flip-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"   
                    
                    >
                        {/* <div className='inline-block text-7xl text-cyan-500' style={{ 'color': '#0FCFEC' }}><GrSettingsOption /></div> */}
                        {/* <div className='inline-block text-7xl text-cyan-500' style={{ 'color': '#0FCFEC' }}><MdOutlineSettingsSuggest /></div> */}
                        <div className='h-20 w-20 rounded-full border-2 flex justify-center items-center mt-12' style={{ 'border': '2px solid #0FCFEC' }}
                        
                       
                        >
                            <figure class="">
                                <MdOutlineSettingsSuggest className='w-12 h-12' style={{ 'color': '#0FCFEC' }} />
                            </figure>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold mb-5'>Flexible</h1>
                            <p className='text-lg text-left commonParagraph'>Redux works with any UI layer, and has a large ecosystem of addons to fit your needs.</p>
                        </div>
                    </div>
                </div>
                <div className='text-center py-12 lg:mx-0 md:mx-0 mx-5'>
                    <div>
                        <h3 className='text-2xl font-bold mb-10 reactHomeHead'>Other Libraries from the Redux Team</h3>
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl lg:mx-auto md:mx-5 mx-auto'>
                        <div 
                        className='bg-white CardsCommonBg p-8 rounded-xl border-2 border-cyan-200 hover:shadow-xl hover:shadow-cyan-300 transition-all'
                        
                            data-aos="fade-down-right"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                        
                        >
                            <a href='https://react-redux.js.org/' style={{ color: '#0FCFEC' }} target="_blank" className='text-2xl font-bold'>React-Redux <FaExternalLinkSquareAlt className='inline' /> </a>
                            <p className='text-lg mt-3 commonParagraph'>Official React bindings for Redux</p>
                        </div>
                        <div 
                        className='bg-white CardsCommonBg p-8 rounded-xl border-2 border-cyan-200 hover:shadow-xl hover:shadow-cyan-300 transition-all'
                            data-aos="fade-down-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                        
                        
                        >
                            <a href='https://redux-toolkit.js.org/' style={{ color: '#0FCFEC' }} target="_blank" className='text-2xl font-bold'>Redux Toolkit <FaExternalLinkSquareAlt className='inline' /> </a>
                            <p className='text-lg mt-3 commonParagraph'>The official, opinionated, batteries-included toolset for efficient Redux development</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reduxjs;