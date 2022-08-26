import React from "react";
import aboutBanner from "../../assets/about-img/banner.jpg";
import aboutImg from "../../assets/about-img/about-pic.jpg";
import jubaerVai3 from "../../assets/about-img/Jubaer vai3.jpg";
import sohagVai5 from "../../assets/about-img/Sohag vai5.png";
import hridoyVai2 from "../../assets/about-img/Hridoy vai2.png";
import naeem from "../../assets/about-img/Naeem.jpg";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pb-44">
      <ScrollToTop smooth color="red" top="20" />
      {/* <div className='flex justify-center items-center lg:py-44 md:py-44 py-32' style={{ "backgroundImage": `url(${aboutBanner})`, "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover" }}>
                <h1 className='lg:text-5xl md:text-4xl text-3xl font-medium text-sky-800'>About Us</h1>
            </div> */}
      <div
        className="grid justify-items-center items-center lg:py-44 md:py-44 py-32"
        style={{
          background:
            "linear-gradient(223deg, rgba(46,107,152,1) 0%, rgba(174,199,191,1) 50%, rgba(46,107,152,1) 100%)",
        }}
      >
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-medium text-sky-800">
          About Us
        </h1>
        <p className="text-center text-xl mt-2 text-gray-500 flex justify-center items-center">
          <Link to="/">Home</Link>
          <MdOutlineNavigateNext /> About Us
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid items-center lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 my-16 lg:mx-0 md:mx-5 mx-5">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div>
            <div className="flex items-center">
              <div
                className="w-8 bg-sky-800 mr-3"
                style={{ height: "2px" }}
              ></div>
              <p className="text-sky-800">EasyDoc</p>
            </div>
            <div className="pb-5 border-b-2">
              <h2 className="lg:text-3xl md:text-2xl text-xl font-bold mb-4">
                A rich source of effective documentations.
              </h2>
              <li>
                Exporting technical documentation written in EasyDoc and hosting
                it on your website or help page should be an efficient process.
              </li>
              <li>
                documentation, just like the rest of your website, needs to be
                responsive if you want to provide your customers.
              </li>
              <li>
                Your online documentation needs to stay up-to-date. There is no
                point in providing your users with inaccurate documentation.
              </li>
            </div>
            <div>
              <blockquote>
                <p className="mt-2 text-xl" style={{ color: "#6B7280" }}>
                  “Technical documentation is an invaluable resource for your
                  users. And with fast-moving development teams and product
                  release cycles, it can be a challenge to keep your
                  documentation up-to-date, accessible, and looking
                  professional.”
                </p>
                <cite className="mt-12 italic font-bold">
                  {" "}
                  Programming Hero.
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
        <div
          className="mb-20 lg:mx-8 md:mx-5 mx-3 py-16 lg:rounded-full md:rounded-3xl rounded-3xl shadow-xl CardsCommonBg"
          style={{ backgroundColor: "#EBF8F4" }}
        >
          <div className="grid grid-cols-1 lg:gap-20 md:gap-16 gap-10">
            <div className="text-center">
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold uppercase">
                Our Perfect Team
              </h1>
            </div>
            <div className="lg:flex md:flex grid grid-cols-1 justify-center items-center lg:gap-5 md:gap-5 gap-10 lg:mx-0 md:mx-3 mx-3">
              <div className="flex justify-center items-center gap-5">
                <div className="bg-gray-400 rounded-full">
                  <img src={jubaerVai3} alt="" className="rounded-full" />
                </div>
                <div>
                  <div>
                    <h2 className="font-semibold text-xl">Jubaer Ibn Zahir</h2>
                    <p className="mt-1 mb-3 text-sky-800 blackToWhite">
                      Team Leader
                    </p>
                    <p className="text-gray-400">
                      A very talented, team leader,
                      <br /> Mr. Jubaer. His dedication helped
                      <br /> us to reach our goals.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <a
                      className="text-xl text-gray-500 hover:text-sky-800"
                      href="https://web.facebook.com/jubaeribnzahir/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="text-xl text-gray-500 hover:text-sky-800"
                      href="https://www.linkedin.com/in/jubaer-ibn-zohir-9471841aa"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      className="text-xl text-gray-500 hover:text-sky-800"
                      href="https://github.com/jubaer-ibn-johir"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5">
                <div className="bg-gray-400 rounded-full">
                  <img src={sohagVai5} alt="" className="rounded-full" />
                </div>
                <div>
                  <div>
                    <h2 className="font-semibold text-xl">
                      Rakibul Hasan Sohag
                    </h2>
                    <p className="mt-1 mb-3 text-sky-800 blackToWhite">
                      Team Member
                    </p>
                    <p className="text-gray-400">
                      Another talented, helpful team
                      <br /> member, Mr. Sohag. He helps in the
                      <br /> front-end design.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <a
                      className="text-xl text-gray-500 hover:text-sky-800"
                      href="https://www.facebook.com/profile.php?id=100010324115694"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="text-xl text-gray-500 hover:text-sky-800"
                      href="https://www.linkedin.com/in/rakibul-hasan-sohag-90b207231/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      className="text-xl text-gray-500 hover:text-sky-800"
                      href="https://github.com/Rakibulhasan70"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex md:flex grid grid-cols-1 justify-center items-center lg:gap-5 md:gap-5 gap-10 lg:mx-0 md:mx-3 mx-3">
              <div className="flex justify-center items-center gap-5">
                <div className="bg-gray-400 rounded-full">
                  <img src={hridoyVai2} alt="" className="rounded-full" />
                </div>
                <div>
                  <div>
                    <h2 className="font-semibold text-xl">
                      Saiful Islam Hridoy
                    </h2>
                    <p className="mt-1 mb-3 text-sky-800 blackToWhite">
                      Team Member
                    </p>
                    <p className="text-gray-400">
                      Mr. Hridoy, a talented, friendly
                      <br /> team member. He helps mostly
                      <br /> in the backend.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <a
                      className="text-xl text-gray-500 hover:text-sky-800"
                      href="https://www.facebook.com/saifulislam1hridoy"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="text-xl text-gray-500 hover:text-sky-800"
                      href="https://www.linkedin.com/in/saifulislam1hridoy"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      className="text-xl text-gray-500 hover:text-sky-800"
                      href="https://www.github.com/saifulislamhridoy"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5">
                <div className="bg-gray-400 rounded-full">
                  <img src={naeem} alt="" className="rounded-full" />
                </div>
                <div>
                  <div>
                    <h2 className="font-semibold text-xl">Jannatun Naeem</h2>
                    <p className="mt-1 mb-3 text-sky-800 blackToWhite">
                      Team Member
                    </p>
                    <p className="text-gray-400">
                      Mr. Naeem, a front-end designer,
                      <br /> helps in the designing part <br />
                      of this project.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <a
                      className="text-xl text-gray-500 hover:text-sky-800"
                      href="https://www.facebook.com/naeem141"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="text-xl text-gray-500 hover:text-sky-800"
                      href="https://www.linkedin.com/in/naeem141/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      className="text-xl text-gray-500 hover:text-sky-800"
                      href="https://github.com/JannatunNaeem141"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
