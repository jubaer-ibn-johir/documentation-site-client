import React from 'react';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import ScrollToTop from 'react-scroll-to-top';

const NextPages = () => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);
    return (
        <div className='ml-7 mr-7'>
            <ScrollToTop smooth color="red" top='20' />
            <h2 className='lg:text-4xl text-3xl font-bold mt-16'>Pages</h2>
            <p className='text-xl mt-5'>In Next.js, a page is a React Component exported from a <span className='text-pink-500'>`.js`</span> , <span className='text-pink-500'>`.jsx`</span> , <span className='text-pink-500'>`.ts`</span> , or <span className='text-pink-500'>`.tsx`</span> file in the pages directory. Each page is associated with a route based on its file name.</p>
            <p className='text-xl mt-5'><span className='font-bold'>Example:</span> If you create pages/about.js that exports a React component like below, it will be accessible at /about.</p>
            <div className='my-7'>
                <CodeMirror
                    value="npx create-next-app@latest --typescript
                    # or
                    yarn create next-app --typescript
                    # or
                    pnpm create next-app --typescript"
                    height="150px"
                    theme={'dark'}
                    extensions={[javascript({ jsx: true })]}
                    onChange={onChange}
                />
            </div>
            <h3 className='text-3xl font-bold'>Pages with Dynamic Routes</h3>
            <p className='text-xl mt-5'>Next.js supports pages with dynamic routes. For example, if you create a file called pages/posts/[id].js, then it will be accessible at posts/1, posts/2, etc.</p>
            <h3 className='text-2xl font-bold my-5'>Pre-rendering</h3>
            <p className='text-xl'>By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

                Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)</p>
            <h3 className='text-2xl font-bold my-5'>Two forms of Pre-rendering</h3>
            <p className='text-xl'>Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.

                Static Generation (Recommended): The HTML is generated at build time and will be reused on each request.
                Server-side Rendering: The HTML is generated on each request.
                Importantly, Next.js lets you choose which pre-rendering form you'd like to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

                We recommend using Static Generation over Server-side Rendering for performance reasons. Statically generated pages can be cached by CDN with no extra configuration to boost performance. However, in some cases, Server-side Rendering might be the only option.

                You can also use Client-side Rendering along with Static Generation or Server-side Rendering. That means some parts of a page can be rendered entirely by client side JavaScript. To learn more, take a look at the Data Fetching documentation.</p>
            <h2 className='text-2xl font-bold my-5'>Static Generation without data</h2>
            <p className='text-xl '>By default, Next.js pre-renders pages using Static Generation without fetching data. Here's an example:</p>
            <div className='my-7'>
                <CodeMirror
                    value="function About() {
                        return <div>About</div>
                      }
                      
                      export default About"
                    height="150px"
                    theme={'dark'}
                    extensions={[javascript({ jsx: true })]}
                    onChange={onChange}
                />
            </div>
            <p className='text-xl mb-5'>Note that this page does not need to fetch any external data to be pre-rendered. In cases like this, Next.js generates a single HTML file per page during build time.</p>
        </div>
    );
};

export default NextPages;