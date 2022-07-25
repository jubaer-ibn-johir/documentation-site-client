import React from 'react';
import Banner from './Banner';
import BuildDocuments from './BuildDocuments';
import Reviws from './Reviws';
import Solution from './Solution';


const Home = () => {
    return (
        <div>
            
            
           <Banner></Banner>
            <BuildDocuments></BuildDocuments>
           <Solution></Solution>
           <Reviws></Reviws>
           
           
        </div>
    );
};

export default Home;