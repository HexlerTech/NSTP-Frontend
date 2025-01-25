import React, { useState, useRef,useEffect } from "react";
import { Play, Pause } from "lucide-react";
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


import GoogleCloud from "../Assets/partners/google-cloud.png";
import AWS from "../Assets/partners/aws.png";
import NAMA from "../Assets/partners/nama.png";
import IASP from "../Assets/partners/iasp.png";
import NUST from "../Assets/partners/NUST.png";
import PakLaunch from "../Assets/partners/paklaunch.png";
import UBank from "../Assets/partners/U-Bank.png";
import USEmbassy from "../Assets/partners/us-embassy.png";
import ZaynVC from "../Assets/partners/zayn-vc.png";

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
import Animation from "../Animation";

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
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateDuration = () => setDuration(video.duration);
      video.addEventListener('loadedmetadata', updateDuration);
      return () => video.removeEventListener('loadedmetadata', updateDuration);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const formatTime = (timeInSeconds) => {
    if (!timeInSeconds) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressBarClick = (e) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      const newTime = clickPosition * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVideoClick = (e) => {
    // Prevent click from triggering when clicking progress bar
    if (e.target === videoRef.current) {
      togglePlay();
    }
  };
  return (
    <div className="relative p-6 md:p-12  lg:p-24">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10  lg:gap-6">
        {/* Left side - Circle with video */}

        <div 
      className="relative w-full md:w-[540px] lg:w-[670px] group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <Animation >
      <video
        ref={videoRef}
        className="w-full h-full rounded-md cursor-pointer"
        autoPlay
        loop
        muted
        playsInline
        onClick={handleVideoClick}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={NSTPVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </Animation>

      {/* Center Play/Pause Button */}
      <button
        onClick={togglePlay}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          bg-black/50 hover:bg-black/70 text-white rounded-full p-4
          transition-all duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
      >
        {isPlaying ? (
          <Pause className="w-8 h-8" />
        ) : (
          <Play className="w-8 h-8" />
        )}
      </button>

      {/* Bottom Controls */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-black/40 py-2 px-4 transition-opacity duration-300 
          ${showControls ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Time display */}
        <div className="flex justify-between text-white text-sm mb-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Progress bar */}
        <div
          ref={progressBarRef}
          className="h-1 bg-gray-200 rounded-full cursor-pointer"
          onClick={handleProgressBarClick}
        >
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{
              width: `${(currentTime / (duration || 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>

        {/* Right side - Content */}
        <div className="flex flex-col  flex-1 ml-0 md:ml-10 lg:ml-10 w-full ">
        <Animation>
          <h1 className=" text-center md:text-left text-xl lg:text-3xl mb-4 font-extrabold leading-none tracking-tight">
            <span
              className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
              style={{
                WebkitTextStroke: "1px #000",
                textStroke: "1px #000",
              }}
            >
              NATIONAL SCIENCE AND TECHNOLOGY PARK
            </span>{" "}
            <span className="text-[#000000] text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
              PROXIMITY TO NUST'S CUTTING-EDGE INNOVATION ECOSYSTEM
              <span className="text-primary text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
            </span>
          </h1>
          </Animation>
          <Animation>
          <p className="text-base font-normal  text-gray-500 mb-4 text-justify md:text-left w-full md:w-[80%]">
            The National Science and Technology Park (NSTP) in Islamabad fosters
            innovation, housing high-tech companies, startups, research centers,
            and educational institutions. It promotes science, technology, and a
            knowledge-based economy in Pakistan through collaboration and
            resources.
          </p>
          </Animation>
          {/* About Us button */}
          <Animation>
          <Link
            to="/about"
            className="bg-black flex gap-3 mx-auto md:mx-0 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit"
          >
            About us
            <HiArrowSmRight className="text-lg md:text-2xl" />
          </Link>
          </Animation>


          {/* <Link
            to="/about"
            className="bg-black flex gap-3 items-center justify-center hover:bg-primary text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:scale-105 transition-transform duration-300 ease-in-out w-fit"
            style={{
              transformOrigin: "center",
              willChange: "transform",
            }}
          >
            <span className="flex items-center gap-3">
              About us
              <HiArrowSmRight className="text-lg md:text-2xl" />
            </span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const partners = [
    { name: "NUST", logo: NUST },
    { name: "Zayn VC", logo: ZaynVC },
    { name: "Google Cloud", logo: GoogleCloud },
    { name: "AWS", logo: AWS },
    { name: "NAMA", logo: NAMA },
    { name: "US Embassy", logo: USEmbassy },
    { name: "U-Bank", logo: UBank },
    { name: "PakLaunch", logo: PakLaunch },
    { name: "IASP", logo: IASP },
  ];
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
                    <span style={{ WebkitTextStrokeWidth: "0.4px" }} className="text-primary text-xs sm:text-sm  -ml-1 sm:-ml-2 mt-1 md:text-2xl lg:text-3xl">
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
      <div className="flex flex-col items-center justify-center  ">
      <Animation>
        <h1 className="text-xl lg:text-3xl mb-8 md:mb-24   flex items-center justify-center gap-2 sm:gap-4 font-extrabold leading-none tracking-tight">
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
        </Animation>
      </div>
      <Gallery />

      {/* <div className="flex flex-col items-center justify-center mt-6 sm:mt-28 p-10 pt-0 pb-0">
        <h1 className="mb-10   text-center  font-extrabold leading-none tracking-tight mt-20">
          <span
            className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-5xl "
            style={{
              WebkitTextStroke: "1px #000",
              textStroke: "1px #000",
            }}
          >
            HOME TO
          </span>{" "}
          <span className="text-[#000000] text-3xl md:text-4xl  lg:text-5xl xl:text-5xl ml-4">
            100+ COMPANIES
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-500 text-center mb-8">
        Large multinational corporations (MNCs), startups, small and medium-sized enterprises (SMEs), and research and development (R&D) houses from all around the world
          </p>
      </div> */}
      <Companies />
      <Partners logos={partners} firstText="OUR" secondText="PARTNERS" />
      <div className="flex flex-col items-center justify-center pb-6 md:pb-12  lg:pb-24">
      <Animation>
        <Link
          target="_blank"
          to="/tenants"
          className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit"
        >
          View All Company
          <HiArrowSmRight className="text-lg md:text-2xl" />
        </Link>
        </Animation>
      </div>
      <CTA />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
