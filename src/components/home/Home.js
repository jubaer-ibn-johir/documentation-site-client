import React from 'react';
import Banner from './Banner';
import BuildDocuments from './BuildDocuments';
import Reviws from './Reviws';
import Solution from './Solution';
import Details from './Details';
import AddReview from './AddReview';
import ScrollToTop from "react-scroll-to-top";
import Newsletter from './Newsletter';


const Home = () => {
    return (
        <div className='overflow-x-hidden'>
            <ScrollToTop smooth color="red" top='20' />
            <Banner></Banner>
            <BuildDocuments></BuildDocuments>
            <Solution></Solution>
            <Details></Details>
            <Reviws></Reviws>
            {/* <Newsletter></Newsletter> */}
        </div>
    );
};

export default Home;