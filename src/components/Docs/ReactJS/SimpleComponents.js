import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import ScrollToTop from 'react-scroll-to-top';

const SimpleComponents = () => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log("value:", value);
    }, []);
    return (
        <div className='mx-0 lg:mx-20 mt-16'>
            <ScrollToTop smooth color="red" top='20' />
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-x-12'>
                <div className='px-5 lg:px-0 mr-0 lg:mr-48'>
                    <h2 className='text-4xl font-bold'>A Simple Component</h2>
                    <p className='mt-10 text-2xl leading-9 '>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.
                        <br />
                        <br />
                        <span className='font-bold'> JSX is optional and not required to use React.</span> Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step</p>
                </div>
                <div className='text-lg '>
                    <CodeMirror
                        value="class HelloMessage extends React.Component {
                            render() {
                              return React.createElement(
                                'div'
                                null
                                'Hello'
                                this.props.name
                              );
                            }
                          }
                          
                          root.render(React.createElement(HelloMessage, { name: 'Taylor' }));"
                        height="300px"
                        theme="dark"

                        extensions={[javascript({ jsx: true })]}
                        onChange={onChange}
                    />
                    <CodeMirror
                        value="('Hello world!');"

                        height="100px"
                        extensions={[javascript({ jsx: true })]}
                        onChange={(value, viewUpdate) => {
                            console.log("value:", value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SimpleComponents;