import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import ScrollToTop from 'react-scroll-to-top';

const CoreConcepts = () => {

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  return (
    <div className='my-10 max-w-7xl mx-auto'>
      <ScrollToTop smooth color="red" top='20' />
      <h1 className='lg:text-5xl md:text-3xl text-2xl font-bold mb-5 mt-20 lg:mx-0 md:mx-5 mx-5'>Core Concepts</h1>
      <div className='lg:mx-0 md:mx-5 mx-5'>
        <div>
          <p className='mb-5'>Imagine your app's state is described as a plain object. For example, the state of a todo app might look like this:</p>
          <div className='text-lg'>
            <CodeMirror

              value="
                            {
                                todos: [{
                                  text: 'Eat food',
                                  completed: true
                                }, {
                                  text: 'Exercise',
                                  completed: false
                                }],
                                visibilityFilter: 'SHOW_COMPLETED'
                              }
                        "

              theme="dark"
              extensions={[javascript({ jsx: true })]}
              onChange={onChange}
            />
          </div>
          <p className="my-5">This object is like a “model” except that there are no setters. This is so that different parts of the code can't change the state arbitrarily, causing hard-to-reproduce bugs.</p>
          <p className="mb-5">To change something in the state, you need to dispatch an action. An action is a plain JavaScript object (notice how we don't introduce any magic?) that describes what happened. Here are a few example actions:</p>
          <div className='text-lg'>
            <CodeMirror

              value="
                            { type: 'ADD_TODO', text: 'Go to swimming pool' }
                            { type: 'TOGGLE_TODO', index: 1 }
                            { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
                        "

              theme="dark"
              extensions={[javascript({ jsx: true })]}
              onChange={onChange}
            />
          </div>
          <p className="my-5">Enforcing that every change is described as an action lets us have a clear understanding of what’s going on in the app. If something changed, we know why it changed. Actions are like breadcrumbs of what has happened. Finally, to tie state and actions together, we write a function called a reducer. Again, nothing magical about it—it’s just a function that takes state and action as arguments, and returns the next state of the app. It would be hard to write such a function for a big app, so we write smaller functions managing parts of the state:</p>
          <div className='text-lg'>
            <CodeMirror

              value="
                            function visibilityFilter(state = 'SHOW_ALL', action) {
                                if (action.type === 'SET_VISIBILITY_FILTER') {
                                  return action.filter
                                } else {
                                  return state
                                }
                              }
                              
                              function todos(state = [], action) {
                                switch (action.type) {
                                  case 'ADD_TODO':
                                    return state.concat([{ text: action.text, completed: false }])
                                  case 'TOGGLE_TODO':
                                    return state.map((todo, index) =>
                                      action.index === index
                                        ? { text: todo.text, completed: !todo.completed }
                                        : todo
                                    )
                                  default:
                                    return state
                                }
                              }
                        "

              theme="dark"
              extensions={[javascript({ jsx: true })]}
              onChange={onChange}
            />
          </div>
          <p className="my-5">And we write another reducer that manages the complete state of our app by calling those two reducers for the corresponding state keys:</p>
          <div className='text-lg'>
            <CodeMirror

              value="
                            function todoApp(state = {}, action) {
                                return {
                                  todos: todos(state.todos, action),
                                  visibilityFilter: visibilityFilter(state.visibilityFilter, action)
                                }
                              }
                        "

              theme="dark"
              extensions={[javascript({ jsx: true })]}
              onChange={onChange}
            />
          </div>
          <p className="my-5">This is basically the whole idea of Redux. Note that we haven't used any Redux APIs. It comes with a few utilities to facilitate this pattern, but the main idea is that you describe how your state is updated over time in response to action objects, and 90% of the code you write is just plain JavaScript, with no use of Redux itself, its APIs, or any magic.</p>
        </div>
      </div>
    </div>
  );
};

export default CoreConcepts;