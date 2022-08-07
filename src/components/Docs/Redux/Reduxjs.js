import React from 'react';
import { Link } from 'react-router-dom';
import { VscDebugAll } from "react-icons/vsc";
import { GrSettingsOption } from "react-icons/gr";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { AiOutlinePicCenter } from "react-icons/ai";

const Reduxjs = () => {
    return (
        <div>
            <div className='flex justify-center items-center' style={{ backgroundColor: '#0FCFEC' }}>
                <div className='lg:my-40 md:my-40 my-36 text-center'>
                    <h1 className='text-white lg:text-5xl md:text-5xl text-4xl font-bold'>Redux</h1>
                    <p className='mt-5 mb-5 text-white lg:text-xl md:text-xl text-lg '>A Predictable State Container for JS Apps</p>
                    <div className='mb-5'>
                        <Link to="/get-started" className='bg-white rounded-md pt-2 pb-3 px-5 font-bold mb-5'>Get Started</Link>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto text-center my-12'>
                <div className=' lg:mx-0 md:mx-5 mx-5'>
                    <div className='inline-block text-7xl'><TiTick /></div>
                    <div>
                        <h1 className='text-2xl font-bold mb-5'>Predictable</h1>
                        <p className='text-lg text-left'>Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.</p>
                    </div>
                </div>
                <div className=' lg:mx-0 md:mx-5 mx-5'>
                    <div className='inline-block text-7xl '><AiOutlinePicCenter /></div>
                    <div>
                        <h1 className='text-2xl font-bold mb-5'>Centralized</h1>
                        <p className='text-lg text-left'>Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.</p>
                    </div>
                </div>
                <div className=' lg:mx-0 md:mx-5 mx-5'>
                    <div className='inline-block text-7xl'><VscDebugAll /></div>
                    <div>
                        <h1 className='text-2xl font-bold mb-5'>Debuggable</h1>
                        <p className='text-lg text-left'>The Redux DevTools make it easy to trace when, where, why, and how your application's state changed. Redux's architecture lets you log changes, use "time-travel debugging", and even send complete error reports to a server.</p>
                    </div>
                </div>
                <div className=' lg:mx-0 md:mx-5 mx-5'>
                    <div className='inline-block text-7xl'><GrSettingsOption /></div>
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
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto'>
                    <div>
                        <a href='https://react-redux.js.org/' style={{ color: '#0FCFEC' }} target="_blank" className='text-2xl font-bold'>React-Redux <FaExternalLinkSquareAlt className='inline' /> </a>
                        <p className='text-lg mt-3'>Official React bindings for Redux</p>
                    </div>
                    <div>
                        <a href='https://redux-toolkit.js.org/' style={{ color: '#0FCFEC' }} target="_blank" className='text-2xl font-bold'>Redux Toolkit <FaExternalLinkSquareAlt className='inline' /> </a>
                        <p className='text-lg mt-3'>The official, opinionated, batteries-included toolset for efficient Redux development</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reduxjs;