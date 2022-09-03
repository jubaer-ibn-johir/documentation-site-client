import React, { useState } from "react";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../shared/Loading";
import SocialLogIn from "./SocialLogIn";
import useToken from "../../hooks/useToken";
import logo from '../../assets/logo/logo4.png';
import ScrollToTop from 'react-scroll-to-top';

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [updateProfile, updating ] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  let errorElement;
  if (error) {
    errorElement = <p className="text-red-700">Error: {error?.message}</p>;
  }

  const [token] = useToken(user);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
 if(updating){
  return <Loading></Loading>;
 }
  if (token) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
   await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName:name});
    // toast('Email sent.Verify your Email Please!!')
  };
  return (
    <div>
      <ScrollToTop smooth color="red" top='20' />
      <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center componentsCommonBody pb-56 lg:pt-36 md:pt-44 pt-20">
        <div class="flex flex-col overflow-hidden mt-16 bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div class="p-4 py-6 text-white bg-teal-500	 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div>
              <img src={logo} alt="" className="mb-5 mt-10" />
            </div>
            <p class="mt-6 font-normal text-center text-white md:mt-0">
              To get EasyDoc services by login you have to singup for our
              website. In this documentation site you are going to get chances
              to learn redux, react & next.js in an easy way. So make sure you
              have signed up for EasyDoc.
            </p>
            <p class="flex flex-col items-center justify-center mt-10 text-center">
              <span>Do you have an account?</span>
              <button className='w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-teal-700	 rounded-md shadow hover:bg-teal-500 mt-5	focus:outline-none focus:ring-blue-200 focus:ring-4"'>
                <Link to="/login">Please Login !</Link>
              </button>
            </p>
            <p class="mt-6 text-sm text-center text-gray-300">
              Read our{" "}
              <a href="#" class="underline">
                terms
              </a>{" "}
              and{" "}
              <a href="#" class="underline">
                conditions
              </a>
            </p>
          </div>
          <div class="p-5 bg-white md:flex-1 CardsCommonBg">
            <h3 class="my-4 text-2xl font-semibold text-gray-700 blackToWhite">
              Account Sing Up
            </h3>
            <form onSubmit={handleSubmit} class="flex flex-col space-y-5">
              <div class="flex flex-col space-y-1">
                <label for="name" class="text-sm font-semibold text-gray-500 blackToWhite">
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  id="name"
                  name="name"
                  autofocus
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200 CardsCommonBgSecondary "
                  required
                />
              </div>
              <div class="flex flex-col space-y-1">
                <label for="email" class="text-sm font-semibold text-gray-500 blackToWhite">
                  Email address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  autofocus
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200  CardsCommonBgSecondary"
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
                </div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  id="password"
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200  CardsCommonBgSecondary"
                  required
                />
              </div>
              {errorElement}
              <div>
                <button
                  type="submit"
                  class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-teal-500	 rounded-md shadow hover:bg-teal-600	focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Sing Up
                </button>
              </div>
              {/* <SocialLogin></SocialLogin> */}
              <SocialLogIn></SocialLogIn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
