import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const Application = () => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log("value:", value);
    }, []);
    return (
        <div className='mx-0 lg:mx-20 mt-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-x-12'>
                <div className='px-5 lg:px-0 mr-0 lg:mr-48'>
                    <h2 className='text-4xl font-bold'>An Application</h2>
                    <p className='mt-10 text-2xl leading-9 '>Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.
                    </p>
                </div>
                <div className='text-lg '>
                    <CodeMirror
                        value="class TodoApp extends React.Component {
                            constructor(props) {
                              super(props);
                              this.state = { items: [], text: '' };
                              this.handleChange = this.handleChange.bind(this);
                              this.handleSubmit = this.handleSubmit.bind(this);
                            }
                          
                            render() {
                              return (
                                <div>
                                  <h3>TODO</h3>
                                  <TodoList items={this.state.items} />
                                  <form onSubmit={this.handleSubmit}>
                                    <label htmlFor='new-todo'>
                                      What needs to be done?
                                    </label>
                                    <input
                                      id='new-todo'
                                      onChange={this.handleChange}
                                      value={this.state.text}
                                    />
                                    <button>
                                      Add #{this.state.items.length + 1}
                                    </button>
                                  </form>
                                </div>
                              );
                            }
                          
                            handleChange(e) {
                              this.setState({ text: e.target.value });
                            }
                          
                            handleSubmit(e) {
                              e.preventDefault();
                              if (this.state.text.length === 0) {
                                return;
                              }
                              const newItem = {
                                text: this.state.text,
                                id: Date.now()
                              };
                              this.setState(state => ({
                                items: state.items.concat(newItem),
                                text: ''
                              }));
                            }
                          }
                          
                          class TodoList extends React.Component {
                            render() {
                              return (
                                <ul>
                                  {this.props.items.map(item => (
                                    <li key={item.id}>{item.text}</li>
                                  ))}
                                </ul>
                              );
                            }
                          }
                          
                          root.render(<TodoApp />);"
                        height="400px"
                        theme="dark"

                        extensions={[javascript({ jsx: true })]}
                        onChange={onChange}
                    />
                    <CodeMirror
                        value="what needs to be done?"
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

export default Application;