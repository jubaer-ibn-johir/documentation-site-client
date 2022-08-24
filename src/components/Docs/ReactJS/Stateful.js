import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import ScrollToTop from 'react-scroll-to-top';

const Stateful = () => {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div className='mx-0 lg:mx-20 mt-48'>
      <ScrollToTop smooth color="red" top='20' />
      <div className='grid grid-cols-1 lg:grid-cols-2  gap-x-12'>
        <div className='px-5 lg:px-0 mr-0 lg:mr-48'>
          <h2 className='text-4xl font-bold'>A Stateful Component</h2>
          <p className='mt-10 text-2xl leading-9 '>In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().
          </p>
        </div>
        <div className='text-lg '>
          <CodeMirror
            value="class Timer extends React.Component {
                            constructor(props) {
                              super(props);
                              this.state = { seconds: 0 };
                            }
                          
                            tick() {
                              this.setState(state => ({
                                seconds: state.seconds + 1
                              }));
                            }
                          
                            componentDidMount() {
                              this.interval = setInterval(() => this.tick(), 1000);
                            }
                          
                            componentWillUnmount() {
                              clearInterval(this.interval);
                            }
                          
                            render() {
                              return React.createElement(
                                'div',
                                null,
                                'Seconds: ',
                                this.state.seconds
                              );
                            }
                          }
                          
                          root.render(React.createElement(Timer, null));"
            height="300px"
            theme="dark"

            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
          />
          <CodeMirror
            value="Second(70)"
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

export default Stateful;