import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const MainConcepts = () => {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <div className="mx-6  lg:mx-12">
      <h2 className="text-6xl mb-4 font-bold">Hello World</h2>
      <p className="text-2xl text-gray-500 mt-8 mb-4 leading-10">
        The smallest React example looks like this:
      </p>

      <div className="rounded">
        <CodeMirror
          className=""
          value="const root = ReactDOM.createRoot(document.getElementById('root'));
                        root.render(<h1>Hello, world!</h1>); "
          height="100px"
          theme="dark"
          padding="20px 45px 20px 26px"
          
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
        />
      </div>
      <hr />

      <div className="mt-5">
        <p className="text-xl">
          It displays a heading saying “Hello, world!” on the page.
        </p>
      </div>

      <div className="mt-5">
        <a
          className="text-xl  font-bold"
          href="/reactjs"
          style={{
            backgroundColor: "",
          }}
        >
          Try it on CodePen
        </a>
        <p className="mt-5 text-xl leading-8">
          Click the link above to open an online editor. Feel free to make some
          changes, and see how they affect the output. Most pages in this guide
          will have editable examples like this one. <br />
        </p>
      </div>
      <div>
        <h2 className="text-4xl mt-10 font-bold">How to Read This Guide</h2>
        <p className="mt-5 text-xl leading-8">
          In this guide, we will examine the building blocks of React apps:
          elements and components. Once you master them, you can create complex
          apps from small reusable pieces.
          <br />
        </p>
      </div>

      <div
        className="my-5"
        style={{
          backgroundColor: "rgba(255,229,100,0.3)",
          borderLeftColor: "#ffe564",
          borderLeftWidth: "9px",
          padding: "20px 45px 20px 26px",
        }}
      >
        <h2 className="text-xl font-bold">Tip</h2>
        <p className="text-xl leading-8 mt-2">
          This guide is designed for people who prefer{" "}
          <span className="font-bold">learning concepts step by step.</span> If
          you prefer to learn by doing, check out our{" "}
          <a href="/reactjs">practical tutorial</a>. You might find this guide
          and the tutorial complementary to each other.
        </p>
      </div>

      <div>
        <p className="mt-5 text-xl leading-8">
          This is the first chapter in a step-by-step guide about main React
          concepts. You can find a list of all its chapters in the navigation
          sidebar. If you’re reading this from a mobile device, you can access
          the navigation by pressing the button in the bottom right corner of
          your screen.
        </p>
        <p className="mt-5 text-xl leading-8">
          Every chapter in this guide builds on the knowledge introduced in
          earlier chapters.{" "}
          <span className="font-bold">
            You can learn most of React by reading the “Main Concepts” guide
            chapters in the order they appear in the sidebar.
          </span>{" "}
          For example, “<a href="/reactjs">Introducing JSX</a>” is the next
          chapter after this one.
        </p>
      </div>

      <div>
        <h2 className="text-4xl mt-10 font-bold">
          Knowledge Level Assumptions
        </h2>
        <p className="mt-5 text-xl leading-8">
          React is a JavaScript library, and so we’ll assume you have a basic
          understanding of the JavaScript language.{" "}
          <span className="font-bold">
            If you don’t feel very confident, we recommend{" "}
            <a href="/reactjs">going through a JavaScript tutorial</a> to check
            your knowledge level
          </span>{" "}
          and enable you to follow along this guide without getting lost. It
          might take you between 30 minutes and an hour, but as a result you
          won’t have to feel like you’re learning both React and JavaScript at
          the same time.
        </p>
      </div>

      <div
        className="my-5"
        style={{
          backgroundColor: "rgba(255,229,100,0.3)",
          borderLeftColor: "#ffe564",
          borderLeftWidth: "9px",
          padding: "20px 45px 20px 26px",
        }}
      >
        <h2 className="text-xl font-bold">Note</h2>
        <p className="text-xl leading-8 mt-2">
          This guide occasionally uses some newer JavaScript syntax in the
          examples. If you haven’t worked with JavaScript in the last few years,{" "}
          <a href="/reactjs">these three points</a> should get you most of the
          way.
        </p>
      </div>

      <div>
        <h2 className="text-4xl mt-10 font-bold">Let’s Get Started!</h2>
        <p className="mt-5 text-xl leading-8">
        Keep scrolling down, and you’ll find the link to the <a href="/reactjs">next chapter of this guide</a> right before the website footer.
        </p>
      </div>
      <hr className="my-5" />
        <div className="mt-10">
            <p><span>Is this page useful?</span></p>
        </div>
    </div>
  );
};

export default MainConcepts;