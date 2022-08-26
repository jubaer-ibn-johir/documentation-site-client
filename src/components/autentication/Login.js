import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";
import SocialLogIn from "./SocialLogIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToken from "../../hooks/useToken";
import logo from '../../assets/logo/logo4.png'
import ScrollToTop from 'react-scroll-to-top';

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);
  if (token) {
    navigate(from, { replace: true });
  }
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-red-700">Error: {error?.message}</p>;
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pasword = passwordRef.current.value;
    signInWithEmailAndPassword(email, pasword);
  };
  return (
    <div>
      <ScrollToTop smooth color="red" top='20' />
      <div class="flex items-center min-h-screen p-4 bg-slate-300 lg:justify-center componentsCommonBody pb-56 lg:pt-44 md:pt-44 pt-24">
        <div class="flex flex-col  overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div class="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div>
              <img src={logo} alt="" className="mb-5 mt-10" />
            </div>
            <p class="mt-6 font-normal text-center text-white md:mt-0">
              To get EasyDoc services you have to login first. In this
              documentation site you are going to get chances to learn redux,
              react & next.js in an easy way. So what are you waiting for!!
              Login fast.
            </p>
            <p class="flex flex-col items-center justify-center mt-10 text-center">
              <span>Don't have an account?</span>
              <button className='w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-700 rounded-md drop-shadow-2xl hover:bg-blue-500 mt-5 focus:outline-none focus:ring-blue-200 focus:ring-4"'>
                <Link to="/singup">Register Now!</Link>
              </button>
            </p>
          </div>
          <div class="p-5 bg-white md:flex-1 CardsCommonBg">
            <h3 class="my-4 text-2xl font-semibold text-gray-700 blackToWhite">
              Account Login
            </h3>
            <form onSubmit={handelSubmit} class="flex flex-col space-y-5">
              <div class="flex flex-col space-y-1">
                <label for="email" class="text-sm font-semibold text-gray-500 blackToWhite">
                  Email address
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  autofocus
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 CardsCommonBgSecondary"
                  required
                />
              </div>
              <div class="flex flex-col space-y-1">
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="text-sm font-semibold text-gray-500 blackToWhite"
                  >
                    Password
                  </label>
                  <p
                    onClick={async () => {
                      await sendPasswordResetEmail(email);
                      toast("Sent email");
                    }}
                    class="text-sm text-blue-600 hover:underline focus:text-blue-800"
                  >
                    Forgot Password?
                  </p>
                </div>
                <input
                  ref={passwordRef}
                  name="password"
                  type="password"
                  id="password"
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 CardsCommonBgSecondary"
                />
              </div>
              <div class="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                />
                <label
                  for="remember"
                  class="text-sm font-semibold text-gray-500 blackToWhite"
                >
                  Remember me
                </label>
              </div>
              {errorElement}
              <div>
                <button
                  type="submit"
                  class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Log in
                </button>
              </div>
              {/* <SocialLogin></SocialLogin> */}

              <SocialLogIn></SocialLogIn>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;