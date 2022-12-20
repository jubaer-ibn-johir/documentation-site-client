import React, { useEffect, useState } from 'react';
// import TutorialCard from './TutorialCard';
import { useForm } from "react-hook-form";
import Loading from '../shared/Loading';
import './MyClass.css'
import ScrollToTop from 'react-scroll-to-top';
import MyClassCard from '../UserProfile/MyClassCard';


const MyClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const [tutorials, setTutorial] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [isLoading, setLoading] = useState(false)

    const onSubmit = data => {
        setSearchQuery(data.searchValue)
    }
    useEffect(() => {
        setLoading(true)
        fetch(`https://documentation-site-server.onrender.com/tutorial`)
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
        <div className='componentsCommonBody pb-44' style={{ backgroundColor: '#d4e0ff' }}>
            <ScrollToTop smooth color="red" top='20' />
            <div style={{ background: ' linear-gradient(90deg, rgba(1,35,119,1) 0%, rgba(126,73,195,1) 50%, rgba(73,111,224,1) 99%)' }} className=''>
                <div className='flex justify-center items-center pt-24 pb-20'>
                    <div className='grid grid-cols-1 gap-5'>
                        <h1 className='lg:text-5xl md:text-4xl text-3xl text-center mt-28 font-bold text-white'>Search Your Class</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex lg:mx-0 md:mx-0 mx-5'>
                            <input {...register("firstName", { required: true, maxLength: 20 })} className='text-base bg-white h-12 lg:w-96 md:w-96 w-64 rounded-l-3xl px-5 active:border-none active:outline-none focus:outline-none CardsCommonBgSecondary' placeholder='Search for Topics' />
                            <input type="submit" value="Search" className='text-base bg-white h-12 rounded-r-3xl cursor-pointer px-5 ml-2 CardsCommonBgSecondary' />
                        </form>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center py-24 mx-5 lg:mx-0 gap-5'>
                    {
                        tutorials.map(tutorial => <MyClassCard key={tutorial.id} tutorial={tutorial}></MyClassCard>)
                    }
                </div>
                <ScrollToTop smooth color="red" top='20' />
            </div>
        </div>
    );
};

export default MyClass;