import React from 'react';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import ScrollToTop from 'react-scroll-to-top';



const NextGetStarted = () => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);
    return (
        <div className='ml-7 mr-7'>
            <ScrollToTop smooth color="red" top='20' />
            <h2 className='lg:text-4xl text-3xl font-bold pt-5'>Getting started</h2>
            <p className='mt-5 text-xl'>Welcome to the Next.js documentation! <br />
                If you're new to Next.js, we recommend starting with the learn course. <br />
                The interactive course with quizzes will guide you through everything you need to know to use Next.js. <br />
                If you have questions about anything related to Next.js, you're always welcome to ask our community on GitHub Discussions.</p>
            <h3 className='my-5 text-2xl font-bold'>System Requirements</h3>
            <p className='text-xl'>Node.js 12.22.0 or later</p>
            <p className='text-xl'>MacOS, Windows (including WSL), and Linux are supported</p>
            <h3 className='my-5 text-2xl font-bold'>Automatic Setup</h3>
            <p className='text-xl'>We recommend creating a new Next.js app using <span className='text-pink-500'>`create-next-app`</span>, which sets up <br /> everything automatically for you. To create a project, run:</p>
            <div className='my-7'>
                <CodeMirror
                    value="
                    npx create-next-app@latest
      # or
      yarn create next-app
      # or
      pnpm create next-app
      "
                    theme={'dark'}
                    extensions={[javascript({ jsx: true })]}
                    onChange={onChange}
                />
            </div>
            <p className='text-xl'>If you want to start with a TypeScript project you can use the <span className='text-pink-500'>`--typescript`</span> flag:</p>
            <div className='my-7'>
                <CodeMirror
                    value="
                    npx create-next-app@latest --typescript
                    # or
                    yarn create next-app --typescript
                    # or
                    pnpm create next-app --typescript
                    "
                    theme={'dark'}
                    extensions={[javascript({ jsx: true })]}
                    onChange={onChange}
                />
            </div>
            <h6 className=' font-bold'>After the installation is complete:</h6>
            <p className='text-xl'>Run npm run dev or yarn dev or pnpm dev to start the development server on <span className='text-pink-500'>`http://localhost:3000`</span> <br />
                Visit <span className='text-pink-500'>`http://localhost:3000`</span> to view your application <br />
                Edit <span className='text-pink-500'>`pages/index.js`</span> and see the updated result in your browser <br />
                For more information on how to use create-next-app, you can review the create-next-app documentation.</p>
            <h3 className='my-5 text-2xl font-bold'>Manual Setup</h3>
            <p className='text-xl'>Install <span className='text-pink-500'>`next`</span> , <span className='text-pink-500'>`react`</span> and <span className='text-pink-500'>`react-dom`</span> in your project:</p>
            <div className='my-7'>
                <CodeMirror
                    value="
                    npm install next react react-dom
                    # or
                    yarn add next react react-dom
                    # or
                    pnpm add next react react-dom
                    "
                    theme={'dark'}
                    extensions={[javascript({ jsx: true })]}
                    onChange={onChange}
                />
            </div>
            <p className='text-xl'>Open <span className='text-pink-500'>`package.json`</span> and add the following <span className='text-pink-500'>`scripts`</span>:</p>
            <div className='my-7'>
                <CodeMirror
                    value='
                    "scripts": {
                        "dev": "next dev",
                        "build": "next build",
                        "start": "next start",
                        "lint": "next lint"
                      }
                      '
                    theme={'dark'}
                    extensions={[javascript({ jsx: true })]}
                    onChange={onChange}
                />
            </div>
            <p className='text-xl'>These scripts refer to the different stages of developing an application:</p>
            <p className='text-xl mt-5'>dev - Runs next dev to start Next.js in development mode <br />
                build - Runs next build to build the application for production usage <br />
                start - Runs next start to start a Next.js production server <br />
                lint - Runs next lint to set up Next.js' built-in ESLint configuration</p>
            <p className='text-xl my-5'>Create two directories pages and public at the root of your application:</p>
            <p className='text-xl'>pages - Associated with a route based on their file name. For example pages/about.js is mapped to /about
                public - Stores static assets such as images, fonts, etc. Files inside public directory can then be referenced by your code starting from the base URL (/).
                Next.js is built around the concept of pages. A page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. You can even add dynamic route parameters with the filename.

                Inside the pages directory add the index.js file to get started. This is the page that is rendered when the user visits the root of your application</p>
            <p className='text-xl mt-5'>Populate pages/index.js with the following contents:</p>
            <div className='my-7'>
                <CodeMirror
                    value='
                    function HomePage() {
                        return <div>Welcome to Next.js!</div>
                      }
                      
                      export default HomePage
                      '
                    theme={'dark'}
                    extensions={[javascript({ jsx: true })]}
                    onChange={onChange}
                />
            </div>
            <p className='text-xl mb-5'>After the set up is complete:</p>
            <p className='text-xl mb-5'>Run npm run dev or yarn dev or pnpm dev to start the development server on http://localhost:3000
                Visit http://localhost:3000 to view your application
                Edit pages/index.js and see the updated result in your browser
                So far, we get:

                Automatic compilation and bundling
                React Fast Refresh
                Static generation and server-side rendering of pages/
                Static file serving through public/ which is mapped to the base URL (/)
                In addition, any Next.js application is ready for production from the start. Read more in our Deployment documentation.</p>
        </div>
    );
};

export default NextGetStarted;