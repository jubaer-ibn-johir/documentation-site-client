import React from 'react';
import Banner from './Banner';
import BuildDocuments from './BuildDocuments';
import Reviws from './Reviws';
import Solution from './Solution';
// import ScrollToTop from "react-scroll-to-top";


const Home = () => {
    return (
        <div>
            
            {/* <ScrollToTop smooth color="red" top='20' /> */}
           <Banner></Banner>
            <BuildDocuments></BuildDocuments>
           <Solution></Solution>
           <Reviws></Reviws>
           
           
        </div>
    );
};

export default Home;