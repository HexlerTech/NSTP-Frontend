import React from "react";
import Service from "./Services/service";
import Statistics from "./Stats/stats";
import Gallery from "./Gallery/gallery";
import Companies from "./Companies/companies";
import Partners from "./Partners/partner";
import CTA from "./CTA/page";

import pitchus from "../Assets/preview.png";
import { FiArrowUpRight } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import nstplogocolored from "../Assets/nstplogocolored.png";
import NSTPVideo from "../Assets/NSTP-video.mp4";
// import ban from "../Assets/nstp.svg";
import ban from "../Assets/nstp1.svg";
import nstp from "../Assets/nstp.png";
import decor from "../Assets/robo-arm.png";

import { BiCalendar, BiRightArrow, BiWorld } from "react-icons/bi";
import { FaSchool, FaSeedling, FaUserFriends } from "react-icons/fa";
import { PiPerson } from "react-icons/pi";
import { FaCameraRetro } from "react-icons/fa";

import Footer from "../Components/footer";
import image1 from "../Assets/12.png";
import image2 from "../Assets/2.jpeg";
import image3 from "../Assets/3.png";
import image4 from "../Assets/4.jpg";
import image6 from "../Assets/6.jpg";
import image7 from "../Assets/7.jpg";
import image8 from "../Assets/8.jpg";
import image9 from "../Assets/9.jpg";
import image10 from "../Assets/10.jpg";
import image11 from "../Assets/11.jpeg";
import "../App.css";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Highlight from "./ParkHighlight/highlight";
import Offer from "./WhatWeOffer/offer";
import News from "./News/news";

const NSTPStats = [
  {
    icon: <BiCalendar size={50} />,
    title: "Oct 2020",
    value: "Established",
  },
  {
    icon: <FaSchool size={50} />,
    title: "100+",
    value: "Hi-Tech Companies",
  },
  {
    icon: <FaSeedling size={50} />,
    title: "64",
    value: "Startups",
  },
  {
    icon: <BiWorld size={50} />,
    title: "15+",
    value: "International Firms",
  },
  {
    icon: <PiPerson size={50} />,
    title: "6000+",
    value: "Hi-Tech Jobs Created",
  },
  {
    icon: <FaUserFriends size={50} />,
    title: "2000+",
    value: "Internships Provided",
  },
];

const NSTPAbout = () => {
  return (
    <div className="relative p-6 md:p-12 lg:pt-40 lg:p-24 my-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10  lg:gap-6">
        {/* Left side - Circle with video */}

        <div className="w-full   md:w-[540px] lg:w-[670px]">
          <video
            className="w-full h-full rounded-md"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={NSTPVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col  flex-1 ml-0 md:ml-10 lg:ml-10 w-full ">
          <h1 className="mb-4 text-xl lg:text-3xl  font-extrabold leading-none tracking-tight">
            <span
              className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
              style={{
                WebkitTextStroke: "1px #000",
                textStroke: "1px #000",
              }}
            >
              NATIONAL SCIENCE AND TECHNOLOGY PARK
            </span>{" "}
            <span className="text-[#000000] text-3xl md:text-4xl lg:text-5xl xl:text-4xl block mt-2">
            PROXIMITY TO NUST'S CUTTING-EDGE INNOVATION ECOSYSTEM
              <span className="text-primary text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
            </span>
          </h1>

          <p className="text-md font-normal  text-gray-500 mb-10 lg:leading-6   md:leading-6 text-justify w-full md:w-[80%]">
            The National Science and Technology Park (NSTP) in Islamabad fosters
            innovation, housing high-tech companies, startups, research centers,
            and educational institutions. It promotes science, technology, and a
            knowledge-based economy in Pakistan through collaboration and
            resources.
          </p>

          {/* About Us button */}
          <Link
            to="/about"
            className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit"
          >
            About us
            <HiArrowSmRight className="text-lg md:text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="">
      <div className="relative w-full h-screen">
        {/* Background image with overlay */}
        <div
          style={{
            backgroundImage: `url(${ban})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0"
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content - positioned above the overlay */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top content */}
          <div className="flex items-center w-full lg:p-10 px-5 pt-10 pb-2 mt-28">
            <div className="w-full">
              <p className="text-4xl sm:text-5xl lg:text-[5.5rem] text-[#90C74B] text-left mt-5 font-semibold slide-left leading-30">
                NATIONAL SCIENCE
                <br /> <span>& TECHNOLOGY PARK</span>
              </p>
              <h3 className="text-xl sm:text-3xl lg:text-5xl text-white italic text-left mt-3 font-bold hollow-text-main3">
                Innovation PowerHouse of Pakistan
              </h3>
              <h2 className="text-sm md:text-xl text-white text-left mt-2 italic">
                Hi-Tech Economic Zone, and Special Technology Zone
              </h2>
            </div>
          </div>

          {/* Bottom content - positioned at bottom */}
          <div className="w-full overflow-hidden">
            <div className="relative w-full flex items-center justify-between px-6">
              {/* Left side with 1st and text */}
              <div className="flex items-center h-[160px] sm:h-[224px] lg:h-[384px] lg:mt-24">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <div className="flex items-start">
                    <span className="text-[#90C74B] text-4xl sm:text-7xl lg:text-8xl leading-none">
                      1
                    </span>
                    <span className="text-white text-xs sm:text-sm -ml-1 sm:-ml-2 mt-1 hollow-text2">
                      st
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-sm md:text-2xl lg:text-4xl text-white whitespace-normal">
                      Science Technology Park
                    </h1>
                    <h1 className="text-sm md:text-2xl -mt-1 lg:mt-2 lg:text-4xl text-white whitespace-normal">
                      Established by NUST
                    </h1>
                  </div>
                </div>
              </div>

              {/* Right side with rotating pitch us */}
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute z-20 flex flex-col items-center justify-center rounded-full hover:bg-[#90C74B] transition-colors duration-300 py-3 px-2 sm:py-8 lg:py-12 sm:px-6 lg:px-11 cursor-pointer"
                  onClick={() => (window.location.href = "/tenancy")}
                >
                  <FiArrowUpRight className="text-white text-2xl lg:text-5xl -rotate-90" />
                  <span className="text-white text-xs sm:text-base lg:text-2xl font-bold mt-1">
                    Pitch Us
                  </span>
                </div>
                <img
                  src={pitchus}
                  alt="Pakistan's Largest Innovation Ecosystem"
                  className="w-40 sm:w-56 lg:w-96 animate-spin-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NSTPAbout />
      {/* <Statistics /> */}
      {/* <div className="flex flex-col md:flex-row mb-16 sm:mb-0 lg:flex-row items-right md:items-center justify-center p-10 pr-0 lg:p-20 lg:pr-0 lg:pb-0 lg:pt-0">
        <div className="lg:p-0 pr-10 md:pr-0">
          <h1 className="text-2xl lg:text-5xl font-bold  tracking-tighter">
            Journey From Zero To One
          </h1>

          <h1 className="text-md lg:text-xl lg:text-left mt-5 text-justify">
            Founded by Pakistan's premier science and technology university,
            NUST, NSTP cultivates a vibrant ecosystem that supports startups and
            fosters advanced R&D and innovation for global entities. The Park is
            a hub for cutting-edge tech-based companies.
          </h1>

          <button
            className="bg-white text-black p-2 px-3 lg:px-10 mt-5 border-2 border-black w-auto sm:w-full md:w-auto lg:w-auto"
            onClick={() => (window.location.href = "/about")}
          >
            About Us
          </button>
        </div>
        <img
          src={decor}
          alt="decor"
          className="lg:w-1/4 hidden   w-1/4 md:w-1/4 md:block"
          />
        <div className="w-full  hidden  sm:flex items-right justify-end md:hidden ">

        <img
          src={decor}
          alt="decor"
          className="lg:w-1/4 hidden  sm:block w-1/4 md:w-1/4 md:block"
          />
          </div>
      </div> */}
      {/* <Service /> */}
      <Highlight />
      <Offer />
      <div className="flex flex-col items-center justify-center px-2 py-8 ">
      <h1 className="text-xl lg:text-3xl mb-12   flex items-center justify-center gap-2 sm:gap-4 font-extrabold leading-none tracking-tight">
        <span
          className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
          style={{
            WebkitTextStroke: "1px #000000",
            textStroke: "1px #000000",
          }}
        >
          LIFE
        </span>{" "}
        <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
          AT NSTP
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
        </span>
      </h1>
      </div>
      <Gallery />

      <div className="flex flex-col items-center justify-center mt-6 sm:mt-28 p-10 pt-0 pb-0">
        <h1 className="mb-10   text-center  font-extrabold leading-none tracking-tight mt-20">
          <span
            className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-5xl "
            style={{
              WebkitTextStroke: "1px #000",
              textStroke: "1px #000",
            }}
          >
            Company At
          </span>{" "}
          <span className="text-[#000000] text-3xl md:text-4xl  lg:text-5xl xl:text-5xl ml-4">
            NSTP
          </span>
        </h1>
      </div>
      <Companies />
      <Partners />
      <div className="flex flex-col items-center justify-center mt-1 p-10 pt-0 pb-0">
        <Link
        target="_blank"
          to="/tenants"
          className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit"
        >
          View All Company
          <HiArrowSmRight className="text-lg md:text-2xl" />
        </Link>
      </div>
      <CTA />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
