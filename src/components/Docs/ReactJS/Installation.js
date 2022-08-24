import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

const Installation = () => {
    return (
        <div className='mx-6 lg:mx-12'>
            <ScrollToTop smooth color="red" top='20' />
            <h2 className='text-6xl font-bold'>Getting Started</h2>
            <p className='text-2xl text-gray-500 mt-10 leading-10'>This page is an overview of the React documentation and related
                <br />
                resources.</p>
            <p className='mt-5 text-xl'><span className='font-bold'>React</span> is a JavaScript library for building user interfaces. Learn what React is all about on our <br />
                homepage or in the tutorial.</p>
            <br />
            <br />
            <hr />

            <div className='mt-5'>
                <li className='mt-5 text-xl font-semibold'>Try React</li>
                <li className='mt-5 text-xl font-semibold'>Learn React</li>
                <li className='mt-5 text-xl font-semibold'>Staying Informed</li>
                <li className='mt-5 text-xl font-semibold'>Versioned Documentation</li>
                <li className='mt-5 text-xl font-semibold'>Something Missing?</li>
            </div>

            <div>
                <h2 className='text-3xl mt-10 font-bold'>Try React</h2>
                <p className='mt-5 text-xl leading-8'>React has been designed from the start for gradual adoption, and <span className='font-bold'>you can use as little or as much React <br /> as you need </span>.
                    Whether you want to get a taste of React, add some interactivity
                    to a simple HTML page,<br /> or start a complex React-powered app, the links in this section will help you get started.

                </p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>Online Playgrounds</h2>
                <p className='mt-5 text-xl leading-8'>If you're interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.
                    <br />
                    <br />
                    <p>If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

                    </p>
                </p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>Add React to a Website</h2>
                <p className='mt-5 text-xl leading-8'>You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

                </p>
            </div>

            <div>
                <h2 className='text-3xl mt-10 font-bold'>Create a New React App</h2>
                <p className='mt-5 text-xl leading-8'>When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!
                    <br />
                    <br />
                    <p>As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

                    </p>
                </p>
            </div>

            <div>
                <h2 className='text-3xl mt-10 font-bold'>Add React to a Website</h2>
                <p className='mt-5 text-xl leading-8'>You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

                </p>
            </div>
            <hr className='my-5' />

            <div>
                <h2 className='text-3xl mt-10 font-bold'>Learn React</h2>
                <p className='mt-5 text-xl leading-8'>People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.
                    <li className='my-5 '>If you prefer to <span className='font-bold'>learn by doing</span>, start with our practical tutorial.</li>
                    <li className='my-5 '>If you prefer to <span className="font-bold">learn concepts step by step</span>, start with our guide to main concepts.</li>
                    <br />
                    <p>Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.
                    </p>
                </p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>First Examples</h2>
                <p className='mt-5 text-xl leading-8'>The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.
                </p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>React for Beginners</h2>
                <p className='mt-5 text-xl leading-8'>If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!   </p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>React for Designers</h2>
                <p className='mt-5 text-xl leading-8'>If you’re coming from a design background, these resources are a great place to get started. </p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>JavaScript Resources</h2>
                <p className='mt-5 text-xl leading-8'>The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time. </p>
                <br />
                <p className='text-xl leading-8'>We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
                </p>
            </div>
            <div className='my-5' style={{
                backgroundColor: 'rgba(255,229,100,0.3)',
                borderLeftColor: '#ffe564',
                borderLeftWidth: '9px',
                padding: '20px 45px 20px 26px'
            }}>
                <h2 className='text-xl font-bold'>Tip</h2>
                <p className='text-xl leading-8 mt-2'>Whenever you get confused by something in JavaScript, MDN and javascript.info are great websites to check. There are also community support forums where you can ask for help.</p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>Practical Tutorial</h2>
                <p className='mt-5 text-xl leading-8'>If you prefer to <span className='font-bold'>learn by doing</span>, check out our practical tutorial. In this tutorial, we build a tic-tac-toe game in React. You might be tempted to skip it because you’re not into building games — but give it a chance. The techniques you’ll learn in the tutorial are fundamental to building any React apps, and mastering it will give you a much deeper understanding. </p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>Step-by-Step Guide</h2>
                <p className='mt-5 text-xl leading-8'>If you prefer to <span className='font-bold'>learn concepts step by step</span>, our guide to main concepts is the best place to start. Every next chapter in it builds on the knowledge introduced in the previous chapters so you won’t miss anything as you go along.
                </p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>Thinking in React</h2>
                <p className='mt-5 text-xl leading-8'>Many React users credit reading Thinking in React as the moment React finally “clicked” for them. It’s probably the oldest React walkthrough but it’s still just as relevant.
                </p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>Recommended Courses</h2>
                <p className='mt-5 text-xl leading-8'>Sometimes people find third-party books and video courses more helpful than the official documentation. We maintain a list of commonly recommended resources, some of which are free.
                </p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>Advanced Concepts</h2>
                <p className='mt-5 text-xl leading-8'>Once you’re comfortable with the main concepts and played with React a little bit, you might be interested in more advanced topics. This section will introduce you to the powerful, but less commonly used React features like context and refs.
                </p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>API Reference</h2>
                <p className='mt-5 text-xl leading-8'>This documentation section is useful when you want to learn more details about a particular React API. For example, React.Component API reference can provide you with details on how setState() works, and what different lifecycle methods are useful for. </p>
            </div>
            <div>
                <h2 className='text-3xl mt-10 font-bold'>Glossary and FAQ</h2>
                <p className='mt-5 mb-10 text-xl leading-8'>The glossary contains an overview of the most common terms you’ll see in the React documentation. There is also a FAQ section dedicated to short questions and answers about common topics, including making AJAX requests, component state, and file structure. </p>
            </div>
            <hr className='my-10' />

            <div>
                <h2 className='text-3xl mt-10 font-bold'>Staying Informed</h2>
                <p className='mt-5 mb-10 text-xl leading-8'>The React blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted there first.
                    <br />
                    <br />
                    You can also follow the @reactjs account on Twitter, but you won’t miss anything essential if you only read the blog.
                    <br />
                    <br />
                    Not every React release deserves its own blog post, but you can find a detailed changelog for every release in the CHANGELOG.md file in the React repository, as well as on the Releases page.
                </p>
            </div>
            <hr className='my-10' />
            <div>
                <h2 className='text-3xl mt-10 font-bold'>Versioned Documentation</h2>
                <p className='mt-5 mb-10 text-xl leading-8'>This documentation always reflects the latest stable version of React. Since React 16, you can find older versions of the documentation on a separate page. Note that documentation for past versions is snapshotted at the time of the release, and isn’t being continuously updated.</p>
            </div>
            <hr className='my-10' />
            <div>
                <h2 className='text-3xl mt-10 font-bold'>Something Missing?</h2>
                <p className='mt-5 mb-10 text-xl leading-8'>If something is missing in the documentation or if you found some part confusing, please file an issue for the documentation repository with your suggestions for improvement, or tweet at the @reactjs account. We love hearing from you!</p>
            </div>
            <div className='flex items-center gap-x-10 mb-36 mt-20'>
                <div className=''>
                    <i class="fa-solid fa-thumbs-up  text-4xl shadow-2xl " style={{ color: '#6d6d6d' }}></i>
                    <i class="fa-solid fa-thumbs-down  text-4xl shadow-2xl  ml-5" style={{ color: '#6d6d6d' }}></i>
                </div>
                <p className='text-xl'>Edit the page</p>
            </div>
        </div>
    );
};

export default Installation;