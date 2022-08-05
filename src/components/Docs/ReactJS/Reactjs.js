import React from 'react';
import Application from './Application';
import Declarative from './Declarative';
import External from './External';
import ReactHome from './ReactHome';
import SimpleComponents from './SimpleComponents';
import Stateful from './Stateful';
import UperFooter from './UperFooter';

const Reactjs = () => {
    return (
        <div>

            <ReactHome></ReactHome>
            <Declarative></Declarative>
            <SimpleComponents></SimpleComponents>
            <Stateful></Stateful>
            <Application></Application>
            <External></External>
            <UperFooter></UperFooter>
        </div>
    );
};

export default Reactjs;