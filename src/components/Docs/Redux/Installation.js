import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const Installation = () => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log("value:", value);
    }, []);
    return (
        <div className='my-10 max-w-7xl mx-auto'>
            <h1 className='lg:text-5xl md:text-3xl text-2xl font-bold mb-5 mt-20 lg:mx-0 md:mx-5 mx-5'>Installation</h1>
            <div className='lg:mx-0 md:mx-5 mx-5'>
                <div>
                    <h1 className='lg:text-3xl md:text-2xl text-xl font-bold mb-5'>Redux Toolkit</h1>
                    <p className='mb-5'>Redux Toolkit includes the Redux core, as well as other key packages we feel are essential for building Redux applications (such as Redux Thunk and Reselect).</p>
                    <p className='mb-5'>It's available as a package on NPM for use with a module bundler or in a Node application:</p>
                    <div className='text-lg'>
                        <CodeMirror

                            value="
                        // NPM
                        npm install @reduxjs/toolkit
                        
                        // Yarn
                        yarn add @reduxjs/toolkit
                        "

                            theme="dark"
                            extensions={[javascript({ jsx: true })]}
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div>
                    <h1 className='lg:text-3xl md:text-2xl text-xl font-bold my-5'>Redux Core</h1>
                    <p className='mb-5'>To install the stable version:</p>
                    <div className='text-lg'>
                        <CodeMirror

                            value="
                        // NPM
                        npm install redux
                        
                        // Yarn
                        yarn add redux
                        "

                            theme="dark"
                            extensions={[javascript({ jsx: true })]}
                            onChange={onChange}
                        />
                    </div>
                    <p className="my-5">If you're not, you can access these files on unpkg, download them, or point your package manager to them.</p>
                    <p className="mb-5">Most commonly, people consume Redux as a collection of CommonJS modules. These modules are what you get when you import redux in a Webpack, Browserify, or a Node environment. If you like to live on the edge and use Rollup, we support that as well.</p>
                    <p className="mb-5">If you don't use a module bundler, it's also fine. The redux npm package includes precompiled production and development UMD builds in the dist folder. They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. For example, you can drop a UMD build as a script tag on the page, or tell Bower to install it. The UMD builds make Redux available as a window.Redux global variable.</p>
                    <p className="mb-5">The Redux source code is written in ES2015 but we precompile both CommonJS and UMD builds to ES5 so they work in any modern browser. You don't need to use Babel or a module bundler to get started with Redux.</p>
                </div>
                <div>
                    <h1 className='lg:text-3xl md:text-2xl text-xl font-bold mb-5'>Complementary Packages</h1>
                    <p className="mb-5">Most likely, you'll also need the React bindings and the developer tools.</p>
                    <div className='text-lg'>
                        <CodeMirror

                            value="
                        npm install react-redux
                        npm install --save-dev @redux-devtools/core
                        "

                            theme="dark"
                            extensions={[javascript({ jsx: true })]}
                            onChange={onChange}
                        />
                    </div>
                    <p className="my-5">Note that unlike Redux itself, many packages in the Redux ecosystem don't provide UMD builds, so we recommend using CommonJS module bundlers like Webpack and Browserify for the most comfortable development experience.</p>

                </div>
                <div>
                    <h1 className='lg:text-3xl md:text-2xl text-xl font-bold mb-5'>Create a React Redux App</h1>
                    <p className="mb-5">The recommended way to start new apps with React and Redux is by using the official Redux+JS template or Redux+TS template for Create React App, which takes advantage of Redux Toolkit and React Redux's integration with React components.</p>
                    <div className='text-lg'>
                        <CodeMirror

                            value="
                        // Redux + Plain JS template
                        npx create-react-app my-app --template redux
                        
                        // Redux + TypeScript template
                        npx create-react-app my-app --template redux-typescript
                        "

                            theme="dark"
                            extensions={[javascript({ jsx: true })]}
                            onChange={onChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installation;