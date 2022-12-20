import React, { useEffect, useState } from 'react';
import SingleTutorial from './SingleTutorial';
import ScrollToTop from 'react-scroll-to-top';

const TutorialsManage = () => {
    const [tutorials, setTutorials] = useState([])
    useEffect(() => {
        fetch(`https://documentation-site-server.onrender.com/tutorial`)
            .then(res => res.json())
            .then(data => setTutorials(data))
    }, [tutorials])
    return (
        <div className='lg:p-8 md:p-8 p-4 h-full bg-red-50 mb-12 componentsCommonBody'>
            <ScrollToTop smooth color="red" top='20' />
            <div>
                <h1 className='lg:text-5xl md:text-4xl text-3xl text-center my-5 font-semibold text-red-900 blackToWhite'>Manage Tutorials</h1>
            </div>
            <div class="overflow-x-auto shadow-xl">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-red-300 CardsCommonBgSecondary'></th>
                            <th className='bg-red-300 CardsCommonBgSecondary'>Tutorials</th>
                            <th className='bg-red-300 CardsCommonBgSecondary'>Short Description</th>
                            <th className='bg-red-300 CardsCommonBgSecondary'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tutorials.map((tutorial, index) => <SingleTutorial key={tutorial._id} tutorial={tutorial} index={index}></SingleTutorial>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TutorialsManage;