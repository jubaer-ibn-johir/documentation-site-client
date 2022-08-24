import React, { useEffect, useState } from 'react';
import TutorialCard from './TutorialCard';
import { useForm } from "react-hook-form"
import Loading from '../shared/Loading';
import './Tutorial.css'
import ScrollToTop from 'react-scroll-to-top';



const Tutorial = () => {
    const { register, handleSubmit, reset } = useForm();
    const [tutorials, setTutorial] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [isLoading, setLoading] = useState(false)

    const onSubmit = data => {
        setSearchQuery(data.searchValue)
    }
    useEffect(() => {
        setLoading(true)
        fetch(`https://polar-shore-69456.herokuapp.com/tutorial`)
            .then(res => res.json())
            .then(result => {
                if (searchQuery) {
                    const filterData = result.filter(x => x?.title?.toLowerCase().includes(searchQuery?.toLowerCase()))
                    if (filterData) {
                        setTutorial(filterData)
                        setLoading(false)
                        reset()
                    }
                }
                else {
                    setTutorial(result)
                    setLoading(false)
                }
            })
    }, [searchQuery])
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div style={{ backgroundColor: '#d4e0ff' }}>
            <ScrollToTop smooth color="red" top='20' />
            <div style={{ background: ' linear-gradient(90deg, rgba(1,35,119,1) 0%, rgba(126,73,195,1) 50%, rgba(73,111,224,1) 99%)' }} className=''>
                <br />
                <h1 className='text-4xl lg:text-6xl text-center mt-28 font-bold text-white'>Search Your Tutorial</h1>
                {/* <form className='flex justify-center items-center mt-8 mx-5 pb-11' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Search Tutorial..." class="input w-full max-w-xs outline-none" {...register("searchValue", { required: true, maxLength: 20 })} />
                    <input className='bg-primary text-white h-11 rounded-md px-3 cursor-pointer' type="submit" value="Search" />
                </form> */}
                {/* <div className='bg-white w-[500px] flex justify-items-center'> */}
                <div class="wrapper">
                    <form onSubmit={handleSubmit(onSubmit)} class="search_box">
                        <input type="text" className='input_search' placeholder='Search...' {...register("searchValue", { required: true, maxLength: 20 })} />
                        <input type="submit" value="search" class="search_btn" />
                    </form>
                </div>
                {/* </div> */}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center py-11 mx-5 lg:mx-0 gap-5'>
                {
                    tutorials.map(tutorial => <TutorialCard key={tutorial.id} tutorial={tutorial}></TutorialCard>)
                }
            </div>
        </div>
    );
};

export default Tutorial;