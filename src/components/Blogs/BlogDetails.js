import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import userAvatar from "../../assets/profile/user-profile.png";

import topImg from "../../assets/blogs/blog-bg.png";
import blogImg7 from "../../assets/blogs/blog-bg.png";
import blogImg6 from "../../assets/blogs/blog-bg.png";
import blogImg5 from "../../assets/blogs/blog-bg.png";
import blogImg4 from "../../assets/blogs/blog-bg.png";

const BlogDetails = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div style={{ background: 'linear-gradient(90deg, rgba(173,173,198,1) 0%, rgba(223,205,205,1) 55%, rgba(168,186,195,1) 100%)' }} >
                <div className='max-w-7xl lg:mx-auto md:mx-12 mx-5'>
                    <div className='grid grid-cols-1 items-center lg:py-44 md:py-44 py-36'>
                        <p className='lg:text-4xl md:text-3xl text-2xl mt-5 font-bold lg:w-1/2 md:w-3/4 w-full' style={{ color: '#1d2746' }}>10 WordPress Security Issues And How to Fix Them</p>
                        <div className='flex gap-5 items-center justify-start mt-5'>
                            <div className='h-12 w-12 rounded-full'>
                                <img src={userAvatar} alt="" className='w-full rounded-full' />
                            </div>
                            <div className='lg:flex md:flex grid grid-cols-1 justify-between items-center gap-3'>
                                <p className='text-xl'>Jason Response</p>
                                <div className='flex items-center gap-3' style={{ "color": "rgb(116 116 230)" }}>
                                    <span>|</span>
                                    <p className='text-sm'>Jul 14, 2022</p>
                                    <span>|</span>
                                    <p className='text-sm'>9 Min Read</p>
                                    <span>|</span>
                                </div>
                                <p className='text-blue-500 text-base'>WordPress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-16'>
                <div className='max-w-7xl lg:mx-auto md:mx-12 mx-5'>
                    <div className='w-full lg:flex md:flex grid grid-cols-1 gap-12'>
                        <div className='lg:w-2/3 md:w-2/3 w-full'>
                            <div>
                                <img src={topImg} alt="" className='w-full h-full' />
                            </div>
                            <div>
                                <p className='my-5'>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge fanny around butty, Richard spiffing a load of old tosh porkies hunky-dory ruddy dropped a clanger. Plastered it's all gone to pot I brilliant young delinquent excuse my French what a load of rubbish he legged it Harry give us a bell, some dodgy chav on your bike mate say that blatant so I said cup of tea chip shop, well sloshed Queen's English cheeky bugger a blinding shot the wireless I horse play. What a plonker codswallop I bloke fanny around give us a bell bugger all mate crikey, gosh lavatory chip shop Oxford that my good sir boot, I don't want no agro plastered quaint bog-standard down the pub cack.</p>
                                <p>Bugger all mate chinwag skive off bender cack chap baking cakes brown bread bodge wind up, amongst mush David lurgy burke blow off bits and bobs faff about dropped a clanger, such a fibber so I said spiffing codswallop bite your arm off my lady bleeding tosser. Ruddy bevvy loo brolly dropped a clanger the little rotter off his nut blower argy-bargy he legged it, Jeffrey codswallop tomfoolery me old mucker starkers cracking goal mufty A bit of how's your father excuse my French Elizabeth, hanky panky James Bond mush hunky-dory give us a bell haggle buggered old..</p>
                                <p>He legged it that blatant brown bread some dodgy chav super a blinding shot my lady lavatory cup of char cor blimey guvnor get stuffed mate you mug cobblers off his nut pukka, give us a bell ummm I'm telling burke A bit of how's your father starkers daft hanky panky bog-standard golly gosh William a load of old tosh brolly Queen's English bits and bobs bugger, grub geeza cracking goal cheesed off bog baking cakes James Bond up the duff mufty morish do one wellies zonked I. Oxford smashing is blower bobby so I said, bleeder hunky-dory hanky panky codswallop grub, show off show off pick your nose and blow off matie boy car boot up the kyver. Knackered blatant David give us a bell he lost his bottle.</p>
                                <p className='text-2xl font-bold my-5 blackToWhite' style={{ color: '#1d2746' }}>Install Sylius via SSH</p>
                                <p className='mb-5'>Nancy boy vagabond A bit of how's your father starkers baking cakes boot dropped a clanger my lady bender blow off bugger all mate, jolly good brolly posh ummm I'm telling get stuffed mate up the duff haggle lost the plot off his nut wind up loo, I don't want no agro.</p>
                                <img src={blogImg7} alt="" />
                                <p className="my-5">I will keep the rest of the values to default so that the config file will have the defaults Sylius settings. If the need arises, you can obviously change these settings later.</p>
                                <p className="mb-5">Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge fanny around butty, Richard spiffing a load of old tosh porkies hunky-dory ruddy dropped a clanger. Plastered it's all gone to pot I brilliant young delinquent excuse my French what a load of rubbish he legged it Harry give us a bell, some dodgy chav on your bike mate say that blatant so I said cup of tea chip shop</p>
                            </div>
                            <div className='my-16'>
                                <p className='text-2xl font-bold mb-10 blackToWhite' style={{ color: '#1d2746' }}>2 - Comments</p>
                                <div>
                                    <div className='flex gap-5 justify-center my-12 w-full'>
                                        <div className='w-1/12 lg:mr-0 md:mr-3 mr-2'>
                                            <div className='lg:h-16 md:h-16 h-12 lg:w-16 md:w-16 w-12 rounded-full'>
                                                <img src={userAvatar} alt="UserImage" className='rounded-full' />
                                            </div>
                                        </div>
                                        <div className='w-11/12'>
                                            <div>
                                                <p className='text-base font-medium blackToWhite' style={{ color: '#1d2746' }}>Issac Wise</p>
                                                <p className='text-sm' style={{ color: '#6b707f' }}>July 3, 2022 at 2:14 pm</p>
                                            </div>
                                            <div className='mt-5'>
                                                <p className='text-base' style={{ color: '#6b707f' }}>
                                                    Wouldn't it be better practice to use get_the_title(..) in this case? directly accessing the post object's data member would bypass applying filters and enforcing protected and private settings, unless that's explicitly desired.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 justify-center my-12 w-full'>
                                        <div className='w-1/12 lg:mr-0 md:mr-3 mr-2'>
                                            <div className='lg:h-16 md:h-16 h-12 lg:w-16 md:w-16 w-12 rounded-full'>
                                                <img src={userAvatar} alt="UserImage" className='rounded-full' />
                                            </div>
                                        </div>
                                        <div className='w-11/12'>
                                            <div>
                                                <p className='text-base font-medium blackToWhite' style={{ color: '#1d2746' }}>Chauffina Carr</p>
                                                <p className='text-sm' style={{ color: '#6b707f' }}>July 3, 2022 at 2:14 pm</p>
                                            </div>
                                            <div className='mt-5'>
                                                <p className='text-base' style={{ color: '#6b707f' }}>
                                                    Dropped a clanger up the kyver easy peasy vagabond victoria sponge Charles tinkety tonk old fruit argy.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-12 mt-24'>
                                    <h1 className='font-bold text-2xl mb-5'>Leave a Comment</h1>
                                    <p className='mb-10 text-base' style={{ color: '#6b707f' }}>Your email address will not be published. Required fields are marked *</p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='flex mb-5 gap-5'>
                                            <input {...register("fullName")} placeholder='Full Name *' className='w-full bg-slate-100 outline-none px-5 py-2 rounded-md CardsCommonBgSecondary' />
                                            <input {...register("email")} placeholder='Email *' className='w-full bg-slate-100 outline-none px-5 py-2 rounded-md CardsCommonBgSecondary' />
                                        </div>
                                        <textarea {...register("comment")} required cols="30" rows="10" placeholder='Your Comment *' className='w-full bg-slate-100 outline-none px-5 py-2 rounded-md mb-3 CardsCommonBgSecondary' />
                                        <input type="submit" value='Post Comment' className='bg-slate-400 lg:px-8 md:px-8 px-5 lg:py-3 md:py-3 py-2 rounded-lg cursor-pointer text-white font-semibold' />
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className='lg:w-1/3 md:w-1/3 w-full'>
                            <div>
                                <div className='w-64 h-64 border-2 border-slate-500 flex justify-center items-center'>
                                    <img src={userAvatar} alt="" className='w-64 h-64 ' />
                                </div>
                                <p className='text-3xl  mt-3'>Rodney Artichoke</p>
                            </div>
                            <div className='mt-12'>
                                <p className='text-2xl font-bold mb-5'>Post Categories</p>
                                <div className='commonParagraph'>
                                    <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Creative (12)</Link></li>
                                    <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Inspiration (8)</Link></li>
                                    <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Lifestyle (3)</Link></li>
                                    <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>News (4)</Link></li>
                                    <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Photography (12)</Link></li>
                                    <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Skill (15)</Link></li>
                                    <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Tourist Tours (10)</Link></li>
                                    <li className='list-disc'><Link to='#' className='text-lg hover:text-blue-600'>Inspire (5)</Link></li>
                                </div>
                            </div>
                            <div className='mt-12 grid gap-3'>
                                <p className='text-2xl font-bold mb-5'>Recent</p>
                                <div className='flex items-center'>
                                    <div className='h-16 w-16 flex justify-center items-center mr-3'>
                                        <img src={blogImg7} alt="" className='h-16 w-16 rounded-md' />
                                    </div>
                                    <div>
                                        <p className='text-lg font-medium'>Is It Worth Buying A Premium Form Builder.</p>
                                        <p className='text-sm' style={{ color: '#6b707f' }}>January 14, 2022</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='h-16 w-16 flex justify-center items-center mr-3'>
                                        <img src={blogImg6} alt="" className='h-16 w-16 rounded-md' />
                                    </div>
                                    <div>
                                        <p className='text-lg font-medium'>10 Classic Summer Vacations</p>
                                        <p className='text-sm' style={{ color: '#6b707f' }}>April 16, 2022</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='h-16 w-16 flex justify-center items-center mr-3'>
                                        <img src={blogImg5} alt="" className='h-16 w-16 rounded-md' />
                                    </div>
                                    <div>
                                        <p className='text-lg font-medium'>How To Easily Add weForms Widget Using Elementor</p>
                                        <p className='text-sm' style={{ color: '#6b707f' }}>March 10, 2022</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='h-16 w-16 flex justify-center items-center mr-3'>
                                        <img src={blogImg4} alt="" className='h-16 w-16 rounded-md' />
                                    </div>
                                    <div>
                                        <p className='text-lg font-medium'>How to Create GDPR Consent Form In WordPress</p>
                                        <p className='text-sm' style={{ color: '#6b707f' }}>January 19, 2022</p>
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

export default BlogDetails;