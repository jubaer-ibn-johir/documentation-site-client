import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const WhyRedux = () => {

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  return (
    <div className='my-10 max-w-7xl mx-auto'>
      <h1 className='lg:text-5xl md:text-3xl text-2xl font-bold mb-5 mt-20 lg:mx-0 md:mx-5 mx-5'>Why Redux Toolkit is How To Use Redux Today</h1>
      <div className='lg:mx-0 md:mx-5 mx-5'>
        <div>
          <h1 className='lg:text-3xl md:text-2xl text-xl font-bold mb-5'>What is Redux Toolkit?</h1>
          <p className='mb-5'>Redux Toolkit (also known as "RTK" for short) is our official recommended approach for writing Redux logic. The @reduxjs/toolkit package wraps around the core redux package, and contains API methods and common dependencies that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.</p>
          <p className='mb-5 font-bold'>If you are writing any Redux logic today, you should be using Redux Toolkit to write that code!</p>
          <p className='mb-5'>RTK includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once.</p>
          <p className='mb-5'>Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, Redux Toolkit can help you make your Redux code better.</p>
        </div>
        <div>
          <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold mb-5'>How Redux Toolkit Is Different Than the Redux Core</h1>
          <h1 className='lg:text-3xl md:text-2xl text-xl font-bold mb-5'>What Is "Redux"?</h1>
          <p className="mb-5">The first thing to ask is, "what is Redux?"</p>
          <p className="mb-5">Redux is really:</p>
          <li>A single store containing "global" state</li>
          <li>Dispatching plain object actions to the store when something happens in the app</li>
          <li>Pure reducer functions looking at those actions and returning immutably updated state</li>
          <p className="my-5">While it's not required, your Redux code also normally includes:</p>
          <li>Action creators that generate those action objects</li>
          <li>Middleware to enable side effects</li>
          <li>Thunk functions that contain sync or async logic with side effects</li>
          <li>Normalized state to enable looking up items by ID</li>
          <li>Memoized selector functions with the Reselect library for optimizing derived data</li>
          <li>The Redux DevTools Extension to view your action history and state changes</li>
          <li>TypeScript types for actions, state, and other functions</li>
          <p className="my-5">Additionally, Redux is normally used with the React-Redux library to let your React components talk to a Redux store.</p>
        </div>
        <div>
          <h1 className='lg:text-3xl md:text-2xl text-xl font-bold mb-5'>What Does the Redux Core Do?</h1>
          <p className="mb-5">The Redux core is a very small and deliberately unopinionated library. It provides a few small API primitives:</p>
          <li>createStore to actually create a Redux store</li>
          <li>combineReducers to combine multiple slice reducers into a single larger reducer</li>
          <li>applyMiddleware to combine multiple middleware into a store enhancer</li>
          <li>compose to combine multiple store enhancers into a single store enhancer</li>
          <p className="my-5">Other than that, all the other Redux-related logic in your app has to be written entirely by you.</p>
          <p className="mb-5">The good news is that this means Redux can be used in many different ways. The bad news is that there are no helpers to make any of your code easier to write.</p>
          <p className="mb-5">For example, a reducer function is just a function. Prior to Redux Toolkit, you'd typically write it that reducer with a switch statement and manual updates. You'd also probably have hand-written action creators and action type constants along with it:</p>
          <div className='text-lg'>
            <CodeMirror

              value="
                            const ADD_TODO = 'ADD_TODO'
                            const TODO_TOGGLED = 'TODO_TOGGLED'
                            
                            export const addTodo = text => ({
                              type: ADD_TODO,
                              payload: { text, id: nanoid() }
                            })
                            
                            export const todoToggled = id => ({
                              type: TODO_TOGGLED,
                              payload: id
                            })
                            
                            export const todosReducer = (state = [], action) => {
                              switch (action.type) {
                                case ADD_TODO:
                                  return state.concat({
                                    id: action.payload.id,
                                    text: action.payload.text,
                                    completed: false
                                  })
                                case TODO_TOGGLED:
                                  return state.map(todo => {
                                    if (todo.id !== action.payload.id) return todo
                            
                                    return {
                                      ...todo,
                                      completed: !todo.completed
                                    }
                                  })
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
          <p className="my-5">None of this code specifically depends on any API from the redux core library. But, this is a lot of code to write. Immutable updates required a lot of hand-written object spreads and array operations, and it was very easy to make mistakes and accidentally mutate state in the process (always the #1 cause of Redux bugs!). It was also common, though not strictly required, to spread the code for one feature across multiple files like actions/todos.js, constants/todos.js, and reducers/todos.js.</p>
          <p className="mb-5">Additionally, store setup usually required a series of steps to add commonly used middleware like thunks and enable Redux DevTools Extension support, even though these are standard tools used in almost every Redux app.</p>
        </div>
        <div>
          <h1 className='lg:text-3xl md:text-2xl text-xl font-bold mb-5'>What Does Redux Toolkit Do?</h1>
          <p className="mb-5">While these were the patterns originally shown in the Redux docs, they unfortunately require a lot of very verbose and repetitive code. Most of this boilerplate isn't necessary to use Redux. On top of that, the boilerplate-y code lead to more opportunities to make mistakes.</p>
          <p className="mb-5 font-bold">We specifically created Redux Toolkit to eliminate the "boilerplate" from hand-written Redux logic, prevent common mistakes, and provide APIs that simplify standard Redux tasks.</p>
          <p className="mb-5">Redux Toolkit starts with two key APIs that simplify the most common things you do in every Redux app:</p>
          <li>configureStore sets up a well-configured Redux store with a single function call, including combining reducers, adding the thunk middleware, and setting up the Redux DevTools integration. It also is easier to configure than createStore, because it takes named options parameters.</li>
          <li>createSlice lets you write reducers that use the Immer library to enable writing immutable updates using "mutating" JS syntax like state.value = 123, with no spreads needed. It also automatically generates action creator functions for each reducer, and generates action type strings internally based on your reducer's names. Finally, it works great with TypeScript.</li>
          <p className="my-5">That means that the code you write can be drastically simpler. For example, that same todos reducer could just be:</p>
          <div className='text-lg'>
            <CodeMirror

              value="
                            import { createSlice } from '@reduxjs/toolkit'

                            const todosSlice = createSlice({
                              name: 'todos',
                              initialState: [],
                              reducers: {
                                todoAdded(state, action) {
                                  state.push({
                                    id: action.payload.id,
                                    text: action.payload.text,
                                    completed: false
                                  })
                                },
                                todoToggled(state, action) {
                                  const todo = state.find(todo => todo.id === action.payload)
                                  todo.completed = !todo.completed
                                }
                              }
                            })
                            
                            export const { todoAdded, todoToggled } = todosSlice.actions
                            export default todosSlice.reducer
                        "

              theme="dark"
              extensions={[javascript({ jsx: true })]}
              onChange={onChange}
            />
          </div>
          <p className="my-5">All of the action creators and action types are generated automatically, and the reducer code is shorter and easier to understand. It's also much more clear what's actually being updated in each case.</p>
          <p className="mb-5">With configureStore, the store setup can be simplified down to:</p>
          <div className='text-lg'>
            <CodeMirror

              value="
                            import { configureStore } from '@reduxjs/toolkit'
                            import todosReducer from '../features/todos/todosSlice'
                            import filtersReducer from '../features/filters/filtersSlice'
                            
                            export const store = configureStore({
                              reducer: {
                                todos: todosReducer,
                                filters: filtersReducer
                              }
                            })
                        "

              theme="dark"
              extensions={[javascript({ jsx: true })]}
              onChange={onChange}
            />
          </div>
          <p className="my-5">Note that this one configureStore call automatically does all the usual setup work you'd have done manually:</p>
          <li>The slice reducers were automatically passed to combineReducers()</li>
          <li>The redux-thunk middleware was automatically added</li>
          <li>Dev-mode middleware was added to catch accidental mutations</li>
          <li>The Redux DevTools Extension was automatically set up</li>
          <li>The middleware and DevTools enhancers were composed together and added to the store</li>
          <p className="my-5">At the same time, configureStore provides the options to let users modify any of those default behaviors (like turning off thunks and adding sagas, or disabling the DevTools in production),</p>
          <p className="mb-5">From there, Redux Toolkit includes other APIs for common Redux tasks:</p>
          <li>createAsyncThunk: abstracts the standard "dispatch actions before/after an async request" pattern</li>
          <li>createEntityAdapter: prebuilt reducers and selectors for CRUD operations on normalized state</li>
          <li>createSelector: a re-export of the standard Reselect API for memoized selectors</li>
          <li>createListenerMiddleware: a side effects middleware for running logic in response to dispatched actions</li>
          <p className="my-5">Finally, the RTK package also includes "RTK Query", a full data fetching and caching solution for Redux apps, as a separate optional @reduxjs/toolkit/query entry point. It lets you define endpoints (REST, GraphQL, or any async function), and generates a reducer and middleware that fully manage fetching data, updating loading state, and caching results. It also automatically generates React hooks that can be used in components to fetch data, like const [data, isFetching] = useGetPokemonQuery('pikachu')</p>
          <p className="mb-5">Each of these APIs is completely optional and designed for specific use cases, and you can pick and choose which APIs you actually use in your app. But, all of them are highly recommended to help with those tasks.</p>
          <p className="mb-5">Note that Redux Toolkit is still "Redux"! There's still a single store, with dispatched action objects for updates, and reducers that immutably update state, plus the ability to write thunks for async logic, manage normalized state, type your code with TypeScript, and use the DevTools. There's just way less code you have to write for the same results!</p>
        </div>
        <div>
          <h1 className='lg:text-3xl md:text-2xl text-xl font-bold mb-5'>Why We Want You To Use Redux Toolkit</h1>
          <p className='mb-5'>As Redux maintainers, our opinion is:</p>
          <p className="mb-5 font-bold">We want all Redux users to write their Redux code with Redux Toolkit, because it simplifies your code and eliminates many common Redux mistakes and bugs!</p>
          <p className="mb-5">The "boilerplate" and complexity of the early Redux patterns was never a necessary part of Redux. Those patterns only existed because:</p>
          <li>The original "Flux Architecture" used some of those same approaches</li>
          <li>The early Redux docs showed things like action type constants to enable separating code into different files by type</li>
          <li>JavaScript is a mutable language by default, and writing immutable updates required manual object spreads and array updates</li>
          <li>Redux was originally built in just a few weeks and intentionally designed to be just a few API primitives</li>
          <p className="my-5">Additionally, the Redux community has adopted some specific approaches that add additional boilerplate:</p>
          <li>Emphasizing use of the redux-saga middleware as a common approach for writing side effects</li>
          <li>Insisting on hand-writing TS types for Redux action objects and creating union types to limit what actions can be dispatched at the type level</li>
          <p className="my-5">Over the years, we've seen how people actually used Redux in practice. We've seen how the community wrote hundreds of add-on libraries for tasks like generating action types and creators, async logic and side effects, and data fetching. We've also seen the problems that have consistently caused pain for our users, like accidentally mutating state, writing dozens of lines of code just to make one simple state update, and having trouble tracing how a codebase fits together. We've helped thousands of users who were trying to learn and use Redux and struggling to understand how all the pieces fit together, and were confused by the number of concepts and amount of extra code they had to write. We know what problems our users are facing.</p>
          <p className="mb-5 font-bold">We specifically designed Redux Toolkit to solve those problems!</p>
          <li>Redux Toolkit simplifies store setup down to a single clear function call, while retaining the ability to fully configure the store's options if you need to</li>
          <li>Redux Toolkit eliminates accidental mutations, which have always been the #1 cause of Redux bugs</li>
          <li>Redux Toolkit eliminates the need to write any action creators or action types by hand</li>
          <li>Redux Toolkit eliminates the need to write manual and error-prone immutable update logic</li>
          <li>Redux Toolkit makes it easy to write a Redux feature's code in one file, instead of spreading it across multiple separate files</li>
          <li>Redux Toolkit offers excellent TS support, with APIs that are designed to give you excellent type safety and minimize the number of types you have to define in your code</li>
          <li>RTK Query can eliminate the need to write any thunks, reducers, action creators, or effect hooks to manage fetching data and tracking loading state</li>
          <p className="my-5">Because of this:</p>
          <p className="mb-5 font-bold">We specifically recommend that our users should use Redux Toolkit (the @reduxjs/toolkit package), and should not use the legacy redux core package for any new Redux code today!</p>
          <p className="mb-5">Even for existing applications, we recommend at least switching out createStore for configureStore as the dev-mode middleware will also help you catch accidental mutation and serializability errors in existing code bases. We also want to encourage you to switch the reducers you are using most (and any ones you write in the future) over to createSlice - the code will be shorter and easier to understand, and the safety improvements will save you time and effort going forward.</p>
          <p className="mb-5">The redux core package still works, but today we consider it to be obsolete. All of its APIs are also re-exported from @reduxjs/toolkit, and configureStore does everything createStore does but with better default behavior and configurability.</p>
          <p className="mb-5">It is useful to understand the lower-level concepts, so that you have a better understanding of what Redux Toolkit is doing for you. That's why the "Redux Fundamentals" tutorial shows how Redux works, with no abstractions. But, it shows those examples solely as a learning tool, and finishes by showing you how Redux Toolkit simplifies the older hand-written Redux code.</p>
          <p className="mb-5">If you are using the redux core package by itself, your code will continue to work. But, we strongly encourage you to switch over to @reduxjs/toolkit, and update your code to use the Redux Toolkit APIs instead!</p>
        </div>
      </div>
    </div>
  );
};

export default WhyRedux;