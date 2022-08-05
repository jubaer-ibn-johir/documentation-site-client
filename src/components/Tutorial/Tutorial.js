import React, { useEffect, useState } from 'react';
import TutorialCard from './TutorialCard';
import tutorialBg from '../../assets/blogs/blog-bg.png'
import { useForm } from "react-hook-form"


const Tutorial = () => {
    const { register, handleSubmit ,reset} = useForm();
    const [tutorials, setTutorial] = useState([])
    useEffect(() => {
        fetch('tutorials.json')
            .then(res => res.json())
            .then(data => setTutorial(data))
    }, [])
    const onSubmit = data => {
        
        console.log(data)
    };
    return (
        <div>
            <div style={{ backgroundImage: `url(${tutorialBg})`, height: "80vh" }}>
                <br />
                <h1 className='text-4xl lg:text-6xl text-center mt-20 font-bold'>Search Your Tutorial</h1>
                    <form className='flex justify-center items-center mt-8 mx-5' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Search Tutorial..." class="input w-full max-w-xs" {...register("searchValue", { required: true, maxLength: 20 })} />
                        <input className='bg-primary text-white h-11 rounded-md px-3 cursor-pointer' type="submit" value="Search" />
                    </form>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5'>
                {
                    tutorials.map(tutorial => <TutorialCard key={tutorial.id} tutorial={tutorial}></TutorialCard>)
                }
            </div>
        </div>
    );
};

export default Tutorial;