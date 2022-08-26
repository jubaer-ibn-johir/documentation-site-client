import React from 'react';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import ScrollToTop from 'react-scroll-to-top';

const GetServerSideProps = () => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);
    return (
        <div className='ml-7 mr-7'>
            <ScrollToTop smooth color="red" top='20' />
            <h2 className='lg:text-4xl text-3xl font-bold pt-5'>GetServerSideProps</h2>
            <p className='text-xl mt-5'>If you export a function called getServerSideProps (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by getServerSideProps.</p>
            <div className='my-7'>
                <CodeMirror
                    value="
                    export async function getServerSideProps(context) {
                        return {
                          props: {}, // will be passed to the page component as props
                        }
                      }
                      "
                    theme={'dark'}
                    extensions={[javascript({ jsx: true })]}
                    onChange={onChange}
                />
            </div>
            <h4 className='text-2xl font-bold'>When does getServerSideProps run</h4>
            <p className='text-xl mt-5'>getServerSideProps only runs on server-side and never runs on the browser. If a page uses getServerSideProps, then:

                When you request this page directly, getServerSideProps runs at request time, and this page will be pre-rendered with the returned props
                When you request this page on client-side page transitions through next/link or next/router, Next.js sends an API request to the server, which runs getServerSideProps
                getServerSideProps returns JSON which will be used to render the page. All this work will be handled automatically by Next.js, so you don’t need to do anything extra as long as you have getServerSideProps defined.

                You can use the next-code-elimination tool to verify what Next.js eliminates from the client-side bundle.

                getServerSideProps can only be exported from a page. You can’t export it from non-page files.

                Note that you must export getServerSideProps as a standalone function — it will not work if you add getServerSideProps as a property of the page component.

                The getServerSideProps API reference covers all parameters and props that can be used with getServerSideProps.</p>
            <h4 className='text-2xl font-bold mt-5'>When should I use getServerSideProps</h4>
            <p className='text-xl my-5'>You should use getServerSideProps only if you need to render a page whose data must be fetched at request time. This could be due to the nature of the data or properties of the request (such as authorization headers or geo location). Pages using getServerSideProps will be server side rendered at request time and only be cached if cache-control headers are configured.

                If you do not need to render the data during the request, then you should consider fetching data on the client side or getStaticProps.</p>
        </div>
    );
};

export default GetServerSideProps;