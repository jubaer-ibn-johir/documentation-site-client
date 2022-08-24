import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MdFeaturedPlayList } from 'react-icons/md';
import { CgFileDocument, } from 'react-icons/cg';
import { FaLaptopCode } from 'react-icons/fa';
import { IoArrowRedoSharp, IoLogoReact,  IoLogoFirebase,  } from "react-icons/io5";
import { SiHeroku, SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
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
                        <div className='grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1  mt-10 '>
                            <div >
                                <img className=' w-100' src="https://docs-client-site.vercel.app/_next/image?url=https%3A%2F%2Fwordpress-theme.spider-themes.net%2Fdocy-dark%2Fwp-content%2Fuploads%2F2019%2F04%2Fspinner_logo-1.png&w=96&q=75" alt="" />
                                <h1 className='text-2xl text-cyan-500 font-bold mt-5'>EasyDocs</h1>
                                <p className='text-xl mb-5 mt-3 '>EasyDoc is a resourceful, responsive, and high-performance online documentation website.</p>
                            </div>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-20 grid-cols-1 mt-10'>
                                <div>
                                    <div className='text-2xl mb-5 text-cyan-500'>Docs</div>
                                    <div className='flex'>
                                        <IoArrowRedoSharp className='w-12 h-12 text-cyan-500' />
                                        <h1 className='text-xl ml-6'> This is a   Documentation base web-site , where every one can learn everything about React, Redux & NextJs. This website is mainly made with ReactJs.</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-2xl mb-5 text-cyan-500'>Blogs</div>
                                    <div className='flex'>
                                        <IoArrowRedoSharp className='w-12 h-12 text-cyan-500' />
                                        <h1 className='text-xl ml-6'> The goal of the project is to give facilities to post documentation or blog and give support in making different types of documentation or blog.</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-2xl mb-5 text-cyan-500'>Dashboard</div>
                                    <div className='flex'>
                                        <IoArrowRedoSharp className='w-12 h-12 text-cyan-500' />
                                        <h1 className='text-xl ml-6'> let's come to the Dashboard. In the dashboard, we have info about a summary of all we have. and also  with various roles like Admin, User, etc.
                                        </h1>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-2xl mb-5 text-cyan-500'>ChangeLog</div>
                                    <div className='flex'>
                                        <IoArrowRedoSharp className='w-12 h-12 text-cyan-500' />
                                        <h1 className='text-xl ml-6'> This means there will be interesting features like a dark mood and a bright mood also.
                                        </h1>
                                    </div>
                                </div>
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
                        <div className='grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1  mt-10 '>
                            <div >
                                <img className=' w-20' src="https://freepikpsd.com/file/2019/10/feature-png-Transparent-Images.png" alt="" />
                                <h1 className='text-2xl text-cyan-500 font-bold mt-5'>EasyDocs Feature</h1>
                                <p className='text-xl mb-5 mt-3 '>Docy is a powerful, responsive, and high-performance online documentation.</p>
                            </div>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-20 grid-cols-1 mt-10'>
                                <div>
                                   
                                    <div className='flex'>
                                        <img className='w-10 h-10' src="https://wordpress-theme.spider-themes.net/docy/wp-content/uploads/2019/04/slack.png" alt="" />
                                        <h1 className='text-xl ml-6'>This is a magical feature which  user can post blogs, post review, can write comments on blogs.</h1>
                                    </div>
                                </div>
                                <div>

                                    <div className='flex'>
                                        <img className='w-10 h-10' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIyOSIgdmlld0JveD0iMCAwIDMwIDI5Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMwMEVDRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE0LjM5IDEzLjMxN0w3LjY3NCAyNiAyNy41IDI2IDIwLjc4NSAxMy4zMTd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODcgLTY0MCkgdHJhbnNsYXRlKDU0IDEzNikgdHJhbnNsYXRlKDI0IDQ5NikgdHJhbnNsYXRlKDEwLjUgOS41KSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik03LjY3NCAxMi4zNjZMNS4xMTYgMTcuMTIyIDEwLjU1MiAxNy4xMjJ6TTE3LjI2NyA2LjY1OUwxNC4wNyAxMy4zMTcgMjAuNzg1IDEzLjMxN3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NyAtNjQwKSB0cmFuc2xhdGUoNTQgMTM2KSB0cmFuc2xhdGUoMjQgNDk2KSB0cmFuc2xhdGUoMTAuNSA5LjUpIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNDQ0ZCRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTUuMTE2IDE3LjEyMkwwLjMyIDI2IDE1Ljk4OCAyNiAxMC41NTIgMTcuMTIyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg3IC02NDApIHRyYW5zbGF0ZSg1NCAxMzYpIHRyYW5zbGF0ZSgyNCA0OTYpIHRyYW5zbGF0ZSgxMC41IDkuNSkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNEIzMkIwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMjE5IiBkPSJNNy43MTkgMTIuMDQ5TDAgMjYgMTUuOTg4IDI2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg3IC02NDApIHRyYW5zbGF0ZSg1NCAxMzYpIHRyYW5zbGF0ZSgyNCA0OTYpIHRyYW5zbGF0ZSgxMC41IDkuNSkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNEIzMkIwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMjE5IiBkPSJNMTEuNTEyIDE4LjUxMUwxNy4zMjIgNi4zNDEgMjcuNSAyNiAxNS41MDkgMjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NyAtNjQwKSB0cmFuc2xhdGUoNTQgMTM2KSB0cmFuc2xhdGUoMjQgNDk2KSB0cmFuc2xhdGUoMTAuNSA5LjUpIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT0iIzRCMzJCMCIgc3Ryb2tlLXdpZHRoPSIxLjIxOSIgZD0iTTQuNzk3IDE3LjEyMkwxMC41NTIgMTcuMTIyTTE0LjA3IDEzLjMxN0wxNy41NTggMTMuMzE3IDIwLjc4NSAxMy4zMTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NyAtNjQwKSB0cmFuc2xhdGUoNTQgMTM2KSB0cmFuc2xhdGUoMjQgNDk2KSB0cmFuc2xhdGUoMTAuNSA5LjUpIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNBRDFCRTAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEyLjc5MSAwTDE3LjI2NyAwIDE3LjI2NyAyLjk5IDEyLjc5MSAyLjk5eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg3IC02NDApIHRyYW5zbGF0ZSg1NCAxMzYpIHRyYW5zbGF0ZSgyNCA0OTYpIHRyYW5zbGF0ZSgxMC41IDkuNSkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNEIzMkIwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMjE5IiBkPSJNMTcuMjY3IDYuOTc2VjIuOTltMCAwVjBoLTQuNDc2djIuOTloNC40NzZ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODcgLTY0MCkgdHJhbnNsYXRlKDU0IDEzNikgdHJhbnNsYXRlKDI0IDQ5NikgdHJhbnNsYXRlKDEwLjUgOS41KSIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="" />
                                        <h1 className='text-xl ml-6'>Users will have the option to manage their profiles as well.They can change their username and image also.</h1>
                                    </div>
                                </div>
                                <div>

                                    <div className='flex'>
                                        <img className='w-10 h-10' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNCIgaGVpZ2h0PSIyOSIgdmlld0JveD0iMCAwIDM0IDI5Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjNEIzMkIwIiBzdHJva2Utd2lkdGg9IjEuNTAyIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuMjUgMTYuNTEzYzEuNzQgMCAzLjE1LTEuMzM3IDMuMTUtMi45ODYgMC0xLjY1LTEuNDEtMi45ODctMy4xNS0yLjk4N1MyLjEgMTEuODc4IDIuMSAxMy41MjdjMCAxLjY1IDEuNDEgMi45ODYgMy4xNSAyLjk4NnpNMTUuOTI1IDE4LjYyMmMyLjAzIDAgMy42NzUtMS42NTIgMy42NzUtMy42OSAwLTIuMDM3LTEuNjQ1LTMuNjg5LTMuNjc1LTMuNjg5cy0zLjY3NSAxLjY1Mi0zLjY3NSAzLjY5YzAgMi4wMzcgMS42NDUgMy42ODkgMy42NzUgMy42ODl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUgLTUxMikgdHJhbnNsYXRlKDU0IDEzNikgdHJhbnNsYXRlKDI0IDM2OCkgdHJhbnNsYXRlKDguNSA5LjQ5NSkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMCAyMy4xODl2LTEuNTA1YzAtMS42OSAxLjM1LTMuMDYzIDMuMDEyLTMuMDYzaDQuMzg3Yy45OCAwIDEuODUuNDc3IDIuNDAxIDEuMjE1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUgLTUxMikgdHJhbnNsYXRlKDU0IDEzNikgdHJhbnNsYXRlKDI0IDM2OCkgdHJhbnNsYXRlKDguNSA5LjQ5NSkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2LjI1IDE2LjUxM2MtMS43NCAwLTMuMTUtMS4zMzctMy4xNS0yLjk4NiAwLTEuNjUgMS40MS0yLjk4NyAzLjE1LTIuOTg3czMuMTUgMS4zMzggMy4xNSAyLjk4N2MwIDEuNjUtMS40MSAyLjk4Ni0zLjE1IDIuOTg2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg1IC01MTIpIHRyYW5zbGF0ZSg1NCAxMzYpIHRyYW5zbGF0ZSgyNCAzNjgpIHRyYW5zbGF0ZSg4LjUgOS40OTUpIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTMxLjUgMjMuMTg5di0xLjUwNWMwLTEuNjktMS4zNS0zLjA2My0zLjAxMi0zLjA2M2gtNC4zODdjLS45OCAwLTEuODUuNDc3LTIuNDAxIDEuMjE1TTkuNDUgMjZ2LTEuODUyYzAtMi4wOCAxLjYzNC0zLjc3IDMuNjQ1LTMuNzdoNS4zMWMyLjAxMSAwIDMuNjQ1IDEuNjkgMy42NDUgMy43N1YyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg1IC01MTIpIHRyYW5zbGF0ZSg1NCAxMzYpIHRyYW5zbGF0ZSgyNCAzNjgpIHRyYW5zbGF0ZSg4LjUgOS40OTUpIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMwMEVDRkYiIGQ9Ik0xNS43NSAwTDE2LjYxNCAyLjc5MiAxOS40MTIgMi43OTIgMTcuMTQ5IDQuNTE3IDE4LjAxMyA3LjMwOSAxNS43NSA1LjU4NCAxMy40ODcgNy4zMDkgMTQuMzUxIDQuNTE3IDEyLjA4OCAyLjc5MiAxNC44ODYgMi43OTJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUgLTUxMikgdHJhbnNsYXRlKDU0IDEzNikgdHJhbnNsYXRlKDI0IDM2OCkgdHJhbnNsYXRlKDguNSA5LjQ5NSkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTguMjI1IDQuMjE2TDguNjU3IDUuNzk0IDEwLjA1NiA1Ljc5NCA4LjkyNCA2Ljc2OSA5LjM1NyA4LjM0NyA4LjIyNSA3LjM3MiA3LjA5NCA4LjM0NyA3LjUyNiA2Ljc2OSA2LjM5NCA1Ljc5NCA3Ljc5MyA1Ljc5NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NSAtNTEyKSB0cmFuc2xhdGUoNTQgMTM2KSB0cmFuc2xhdGUoMjQgMzY4KSB0cmFuc2xhdGUoOC41IDkuNDk1KSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjMDBFQ0ZGIiBkPSJNMjMuMjc1IDQuMjE2TDIzLjcwNyA1Ljc5NCAyNS4xMDYgNS43OTQgMjMuOTc0IDYuNzY5IDI0LjQwNiA4LjM0NyAyMy4yNzUgNy4zNzIgMjIuMTQzIDguMzQ3IDIyLjU3NiA2Ljc2OSAyMS40NDQgNS43OTQgMjIuODQzIDUuNzk0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg1IC01MTIpIHRyYW5zbGF0ZSg1NCAxMzYpIHRyYW5zbGF0ZSgyNCAzNjgpIHRyYW5zbGF0ZSg4LjUgOS40OTUpIi8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="" />
                                        <h1 className='text-xl ml-6'>A normal user will be counted as a viewer. They can only browse the home page and blog page. For that, they don’t have to register or log in.</h1>
                                    </div>
                                </div>
                                <div>

                                    <div className='flex'>
                                        <img className='w-10 h-10' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDMwIDM2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzRCMzJCMCIgc3Ryb2tlLXdpZHRoPSIxLjE2NSI+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNDNEM0QzQiIGQ9Ik0yNy4xNzUgMjAuMDUzTDI1LjIyIDE3LjA3bC0yLjEyMy42OWMtLjM2NS0uMjg4LS43NTYtLjU2LTEuMTU0LS43OTJsLS4xOTUtMi4yMzYtMy41MS0uNzI1LTEuMDA1IDEuOTY2Yy0uNDc0LjAzLS45NjUuMTQxLTEuNDE2LjI2MWwtMS42OS0xLjM5My0yLjk4MyAxLjk2Mi42MzggMi4wNWMtLjMzLjM1OS0uNjExLjc5LS44NTIgMS4yMzFsLTIuMTI3LjItLjczMSAzLjUxNSAxLjg2NC45NmMuMDQ1LjUuMTQ3IDEuMDMzLjI5OCAxLjUzM0w4Ljg3MiAyNy45M2wxLjk1NSAyLjk4MyAyLjAwOC0uNjVjLjM5OC4zMzguODI5LjYxOSAxLjI4NS44ODNsLjE5NSAyLjEzIDMuNTEuNzI1Ljk3Mi0xLjkxYy40OTktLjA0NS45OS0uMTU3IDEuNDktLjMxbDEuNjQ4IDEuMzg2IDMuMDA4LTEuOTc5LS42Ny0yLjFjLjMxNC0uMzgyLjU4Ny0uNzczLjgwMy0xLjE5OGwyLjE5My0uMjA3LjczMS0zLjUxNS0xLjk3OC0xLjAyN2MtLjA1NC0uNDYtLjE0OC0uOTI2LS4yNjctMS4zNzdsMS40Mi0xLjcxem0tNy43NSA2LjA1Yy0xLjE4NC43NzktMi43NS40MzMtMy41MS0uNzI1LS43NzUtMS4xODQtLjQyNy0yLjc1My43MzItMy41MTUgMS4xODMtLjc3OSAyLjc1LS40MzQgMy41MS43MjUuNzU4IDEuMTU5LjQyNyAyLjc1My0uNzMyIDMuNTE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg3IC01NzQpIHRyYW5zbGF0ZSg1NCAxMzYpIHRyYW5zbGF0ZSgyNCA0MzIpIHRyYW5zbGF0ZSgxMCA3KSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjMDBFQ0ZGIiBkPSJNOS4wMyAxNS4wMzRsLS40NzMtMS41NTYtMS4wMTkuMDNjLS4xMjMtLjE3NC0uMjU4LS4zNDMtLjQwMy0uNDk2bC4yMDItMS4wMDMtMS40NDQtLjc2OC0uNjkzLjczMWMtLjIxMi0uMDQ4LS40NDItLjA2Mi0uNjU0LS4wNjdsLS41NjEtLjgyNy0xLjU2LjQ3Ni4wMTYuOTc4Yy0uMTkuMTE1LS4zNy4yNjgtLjUzMS40M2wtLjk1OC0uMTg2TC4xOCAxNC4yMmwuNjkzLjY2Yy0uMDQ0LjIyNC0uMDY4LjQ3LS4wNjYuNzA4TDAgMTYuMTNsLjQ3MyAxLjU1Ni45NjMtLjAyN2MuMTMuMi4yODQuMzc3LjQ1LjU1MmwtLjE4OS45NTYgMS40NDQuNzY5LjY3MS0uNzExYy4yMjUuMDQ0LjQ1NS4wNTguNjkzLjA1NmwuNTQ0LjgxOCAxLjU3Mi0uNDgtLjAyMy0xLjAwNWMuMTg2LS4xMjcuMzU2LS4yNjMuNTA1LS40MmwuOTg3LjE5Ljc3My0xLjQ0NC0uNzM1LS43MDNjLjAzNi0uMjA4LjA1NC0uNDI1LjA2LS42MzdsLjg0Mi0uNTY2em0tNC4xNzMgMS42NTJjLS42MTguMTg5LTEuMjYtLjE2NC0xLjQ0NC0uNzY4LS4xODctLjYxOC4xNjctMS4yNi43NzItMS40NDQuNjE5LS4xODkgMS4yNjEuMTYzIDEuNDQ1Ljc2OC4xODMuNjA0LS4xNjcgMS4yNi0uNzczIDEuNDQ0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg3IC01NzQpIHRyYW5zbGF0ZSg1NCAxMzYpIHRyYW5zbGF0ZSgyNCA0MzIpIHRyYW5zbGF0ZSgxMCA3KSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRTJDMUZDIiBkPSJNMjAuMDAzIDUuNTkybC0uNjY4LTIuMi0xLjQ0LjA0MmMtLjE3NC0uMjQ1LS4zNjYtLjQ4NC0uNTctLjdsLjI4NS0xLjQxOEwxNS41NjkuMjNsLS45OCAxLjAzNGMtLjI5OS0uMDY4LS42MjMtLjA4OC0uOTI0LS4wOTVMMTIuODcyIDBsLTIuMjA0LjY3Mi4wMjIgMS4zODRjLS4yNjkuMTYxLS41MjIuMzc3LS43NS42MDZMOC41ODUgMi40IDcuNDk0IDQuNDRsLjk4LjkzM2MtLjA2My4zMTctLjA5Ni42NjUtLjA5NCAxLjAwMmwtMS4xNC43NjUuNjY4IDIuMiAxLjM2MS0uMDM4Yy4xODUuMjgxLjQwMS41MzMuNjM1Ljc4bC0uMjY2IDEuMzUyIDIuMDQyIDEuMDg2Ljk0OC0xLjAwNWMuMzE4LjA2My42NDIuMDgzLjk4LjA4bC43NjkgMS4xNTUgMi4yMjItLjY3OC0uMDM0LTEuNDJjLjI2NC0uMTguNTA0LS4zNzIuNzE1LS41OTVsMS4zOTUuMjcgMS4wOTItMi4wNDEtMS4wMzktLjk5NWMuMDUtLjI5My4wNzctLjU5OS4wODUtLjlsMS4xOS0uOHptLTUuODk4IDIuMzM1Yy0uODc0LjI2Ni0xLjc4MS0uMjMyLTIuMDQtMS4wODYtLjI2Ni0uODczLjIzNS0xLjc4IDEuMDktMi4wNDEuODc1LS4yNjcgMS43ODIuMjMxIDIuMDQyIDEuMDg2LjI2Ljg1NC0uMjM2IDEuNzgtMS4wOTIgMi4wNHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04NyAtNTc0KSB0cmFuc2xhdGUoNTQgMTM2KSB0cmFuc2xhdGUoMjQgNDMyKSB0cmFuc2xhdGUoMTAgNykiLz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="" />
                                        <h1 className='text-xl ml-6'>Users can ask any question on different kinds of topics. Users can answer the question of other users.</h1>
                                    </div>
                                </div>
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
                               <div className='flex mt-10'>
                                    <IoLogoReact className='w-32 h-12 text-cyan-500' />
                                    <p className='text-xl ml-6'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. <span className=' text-cyan-500'><a target="_blank" href="https://reactjs.org/">View more...</a></span></p>
                               </div>

                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500  font-bold'>Tailwind Css</h1>
                                <div className='flex mt-10' >
                                    <SiTailwindcss className='w-32 h-12 text-cyan-500' />
                                    <p className='text-xl ml-6'>Rapidly build modern websites without ever leaving your HTML.A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. <span className=' text-cyan-500'><a target="_blank" href="https://tailwindcss.com/">View more...</a></span></p>
                              </div>
                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500  font-bold'>Firebase for authentication</h1>
                                <div className='flex mt-10'>
                                    <IoLogoFirebase className='w-32 h-12 text-cyan-500' />
                                    <p className='text-xl ml-6'>Make your app the best it can be Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.  <span className=' text-cyan-500'><a target="_blank" href="https://firebase.google.com/">View more...</a></span></p>
                               </div>
                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500  font-bold'>Heroku for server deploy</h1>
                                <div className='flex mt-10'>
                                    <SiHeroku className='w-32 h-12 text-cyan-500' />
                                    <p className='text-xl ml-6'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-cyan-500'><a target="_blank" href="https://www.heroku.com/">View more...</a></span></p>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500 font-bold'>Node js & Express js for backend</h1>
                                <div className='flex mt-10'>
                                    <FaNodeJs className='w-32 h-12 text-cyan-500' />
                                    <p className='text-xl ml-6'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-cyan-500'><a target="_blank" href="https://nodejs.org/en/">View more...</a></span></p>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xl text-cyan-500 font-bold'>MongoDB for database</h1>
                                <div className='flex mt-10'>
                                    <DiMongodb className='w-32 h-12 text-cyan-500' />
                                    <p className='text-xl ml-6'>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps.Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly. <span className=' text-cyan-500'><a target="_blank" href="https://www.mongodb.com/cloud/atlas/register">View more...</a></span></p>
                               </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Details;
