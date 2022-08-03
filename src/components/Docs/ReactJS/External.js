import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const External = () => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log("value:", value);
    }, []);
    return (
        <div className='mx-0 lg:mx-20 mt-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-x-12'>
                <div className='px-5 lg:px-0 mr-0 lg:mr-48'>
                    <h2 className='text-4xl font-bold'>A Component Using External Plugins</h2>
                    <p className='mt-10 text-2xl leading-9 '>React allows you to interface with other libraries and frameworks. This example uses <span className='font-bold'>remarkable</span>, an external Markdown library, to convert the texttarea's value in real time.
                    </p>
                </div>
                <div className='text-lg '>
                    <CodeMirror
                        value="class MarkdownEditor extends React.Component {
                            constructor(props) {
                              super(props);
                              this.md = new Remarkable();
                              this.handleChange = this.handleChange.bind(this);
                              this.state = { value: 'Hello, **world**!' };
                            }
                          
                            handleChange(e) {
                              this.setState({ value: e.target.value });
                            }
                          
                            getRawMarkup() {
                              return { __html: this.md.render(this.state.value) };
                            }
                          
                            render() {
                              return (
                                <div className='MarkdownEditor'>
                                  <h3>Input</h3>
                                  <label htmlFor='markdown-content'>
                                    Enter some markdown
                                  </label>
                                  <textarea
                                    id='markdown-content'
                                    onChange={this.handleChange}
                                    defaultValue={this.state.value}
                                  />
                                  <h3>Output</h3>
                                  <div
                                    className='content'
                                    dangerouslySetInnerHTML={this.getRawMarkup()}
                                  />
                                </div>
                              );
                            }
                          }
                          
                          root.render(<MarkdownEditor />);"
                        height="400px"
                        theme="dark"

                        extensions={[javascript({ jsx: true })]}
                        onChange={onChange}
                    />
                    <CodeMirror
                        value="Input
                        Enter some markdown
                        "
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

export default External;