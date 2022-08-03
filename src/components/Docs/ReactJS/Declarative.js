import React from 'react';

const Declarative = () => {
    return (
        <div className='mx-0 lg:mx-20 mt-16'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-12'>
                <div className='px-5 lg:px-0'>
                    <h2 style={{ color: '#6d6d6d' }} className='text-4xl'>Declarative</h2>
                    <p className='mt-10 text-2xl leading-9 '>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                        <br />
                        <br />
                        Declarative views make your code more predictable and easier to debug.</p>
                </div>
                <div className='px-5 lg:px-0'>
                    <h2 style={{ color: '#6d6d6d' }} className='text-4xl mt-10 lg:mt-0'>Component-Based</h2>
                    <p className='mt-10 text-2xl leading-9'>Build encapsulated components that manage their own state, then compose them to make complex UIs.
                        <br />
                        <br />
                        Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                </div>
                <div className='px-5 lg:px-0'>
                    <h2 style={{ color: '#6d6d6d' }} className='text-4xl mt-10 lg:mt-0'>Learn Once, Write Anywhere</h2>
                    <p className='mt-10 text-2xl leading-9'>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                        <br />
                        <br />
                        React can also render on the server using Node and power mobile apps using React Native.</p>
                </div>
            </div>

        </div>
    );
};

export default Declarative;