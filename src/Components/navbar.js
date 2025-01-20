import React, { useEffect, useState } from "react";
import nstplogo from "../Assets/nstp-logoWhite.png";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenAbout, setIsMenuOpenAbout] = useState(false);
  const [isMenuOpenTeam, setIsMenuOpenTeam] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.pathname);
    if (window.innerWidth < 1025) {
      setMobileView(true);
    }

    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      setMobileView(window.innerWidth < 1025);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {});
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  const handleClick = (link) => {
    window.location.href = link;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuOpenAbout(!isMenuOpenAbout);
    setIsMenuOpenTeam(!isMenuOpenTeam);
  };

  return (
    <div
      className={`z-50 bg-black text-white px-4 lg:px-6 py-2 flex justify-between items-center fixed w-full ${
        isScrolling ? "bg-opacity-80" : "bg-opacity-100"
      }`}
    >
      <div
        className="flex  items-center cursor-pointer"
        onClick={() => handleClick("/")}
      >
        <img src={nstplogo} alt="nstp" className="w-28" />
        {/* <h1 className="text-lg font-bold">NSTP</h1> */}
      </div>
      {mobileView ? (
        <div>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <MdClose className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
          {isMenuOpen && (
            <div className="absolute top-14 right-4 bg-black p-5 rounded-xl border border-gray-300">
              <div className="flex flex-col space-y-3">
                {/* <a
                  href="#"
                  className={`cursor-pointer ${
                    activeLink === "/"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                  onClick={() => handleClick("/")}
                >
                  HOME
                </a> */}
                {/* <a
                  className={`cursor-pointer ${
                    activeLink === "/about"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                  onClick={() => handleClick("/about")}
                >
                  ABOUT
                </a> */}
                <div
                  className="relative group"
                  onMouseEnter={() => setIsMenuOpenAbout(true)}
                  onMouseLeave={() => setIsMenuOpenAbout(false)}
                >
                  <Link
                    className={`cursor-pointer ${
                      activeLink === "/about" ||
                      activeLink === "https://nust.edu.pk/about-us/"
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    ABOUT
                  </Link>
                  <div className="absolute hidden group-hover:block top-full left-0 bg-black border border-gray-700 rounded-lg py-1 min-w-[130px] z-50">
                    <Link
                      target="_blank"
                      className="block px-4 py-2 hover:bg-gray-800 cursor-pointer hover:text-primary"
                      // onClick={() => handleClick("/about")}
                      to={"/about"}
                    >
                      NSTP
                    </Link>
                    <Link
                      target="_blank"
                      className="block px-4 py-2 hover:bg-gray-800 cursor-pointer hover:text-primary"
                      // onClick={() => handleClick("https://nust.edu.pk/about-us/")}
                      to="https://nust.edu.pk/about-us/"
                    >
                      NUST
                    </Link>
                  </div>
                </div>
                {/* <a
                  className={`cursor-pointer ${
                    activeLink === "/innovate"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                  onClick={() => handleClick("/innovate")}
                >
                  INNOVATE PAKISTAN
                </a> */}
                <a
                  href="#"
                  className={`cursor-pointer ${
                    activeLink === "/sectors"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                  onClick={() => handleClick("/sectors")}
                >
                  SECTORS
                </a>
                <a
                  className={`cursor-pointer ${
                    activeLink === "/events"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                  onClick={() => handleClick("/events")}
                >
                  EVENTS
                </a>
                <a
                  className={`cursor-pointer ${
                    activeLink === "/partnerships"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                  onClick={() => handleClick("/partnerships")}
                >
                  PARTNERSHIPS
                </a>
                {/* <a
                  className={`cursor-pointer ${
                    activeLink === "/mentors"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                  onClick={() => handleClick("/mentors")}
                >
                  MENTORS
                </a> */}
                <div
                  className="relative group"
                  onMouseEnter={() => setIsMenuOpenTeam(true)}
                  onMouseLeave={() => setIsMenuOpenTeam(false)}
                >
                  <a
                    className={`cursor-pointer ${
                      activeLink === "/mentors" || activeLink === "/team"
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    OUR TEAM
                  </a>
                  {/* Dropdown Menu */}
                  <div className="absolute hidden group-hover:block top-full left-0 bg-black border border-gray-700 rounded-lg py-1 min-w-[120px] z-50">
                    <a
                      className="block px-4 py-2 hover:bg-gray-800 cursor-pointer hover:text-primary"
                      onClick={() => handleClick("/mentors")}
                    >
                      MENTORS
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-800 cursor-pointer hover:text-primary"
                      onClick={() => handleClick("/team")}
                    >
                      NSTP TEAM
                    </a>
                  </div>
                </div>

                <a
                  className={`cursor-pointer ${
                    activeLink === "/newsroom"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                  onClick={() => handleClick("/newsroom")}
                >
                  NEWSROOM
                </a>

                <a
                  className={`cursor-pointer ${
                    activeLink === "/tenants"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                  onClick={() => handleClick("/tenants")}
                >
                  RESIDENTS
                </a>
                <a
                  className={`cursor-pointer ${
                    activeLink === "/contact"
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                  onClick={() => handleClick("/contact")}
                >
                  CONTACT
                </a>
                <a
                  className="hover:text-gray-800 bg-primary text-black font-bold px-4 py-1 rounded-full cursor-pointer"
                  onClick={() => handleClick("/explore")}
                >
                  Explore NSTP
                </a>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex space-x-5 items-center text-md font-bold">
          {/* <a
            href="#"
            className={`cursor-pointer ${
              activeLink === "/" ? "text-primary" : "hover:text-primary"
            }`}
            onClick={() => handleClick("/")}
          >
            HOME
          </a> */}
          <div
            className="relative group"
            onMouseEnter={() => setIsMenuOpenAbout(true)}
            onMouseLeave={() => setIsMenuOpenAbout(false)}
          >
            <Link
              to="/about"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer ${
                activeLink === "/about" ||
                activeLink === "https://nust.edu.pk/about-us/"
                  ? "text-primary"
                  : "hover:text-primary"
              }`}
            >
              <span>ABOUT</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMenuOpenAbout ? "rotate-180" : ""
                }`}
              />
            </Link>
            <AnimatePresence>
              {isMenuOpenAbout && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 bg-black border border-gray-700 rounded-lg py-1 min-w-[130px] z-50 shadow-lg"
                >
                  <Link
                    to="/about"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-primary transition-colors duration-200"
                  >
                    NSTP
                  </Link>
                  <Link
                    to="https://nust.edu.pk/about-us/"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-primary transition-colors duration-200"
                  >
                    NUST
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <a
            className={`cursor-pointer ${
              activeLink === "/innovate"
                ? "text-primary"
                : "hover:text-primary"
            }`}
            onClick={() => handleClick("/innovate")}
          >
            INNOVATE PAKISTAN
          </a> */}
          <a
            href="#"
            className={`cursor-pointer ${
              activeLink === "/sectors" ? "text-primary" : "hover:text-primary"
            }`}
            onClick={() => handleClick("/sectors")}
          >
            SECTORS
          </a>
          <a
            className={`cursor-pointer ${
              activeLink === "/events" ? "text-primary" : "hover:text-primary"
            }`}
            onClick={() => handleClick("/events")}
          >
            EVENTS
          </a>
          <a
            className={`cursor-pointer ${
              activeLink === "/partnerships"
                ? "text-primary"
                : "hover:text-primary"
            }`}
            onClick={() => handleClick("/partnerships")}
          >
            PARTNERSHIPS
          </a>
          {/* <a
            className={`cursor-pointer ${
              activeLink === "/mentors" ? "text-primary" : "hover:text-primary"
            }`}
            onClick={() => handleClick("/mentors")}
          >
            MENTORS
          </a> */}

          <div
            className="relative group"
            onMouseEnter={() => setIsMenuOpenTeam(true)}
            onMouseLeave={() => setIsMenuOpenTeam(false)}
          >
            <Link
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer ${
                activeLink === "/mentors" || activeLink === "/team"
                  ? "text-primary"
                  : "hover:text-primary"
              }`}
            >
              <span>OUR TEAM</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMenuOpenTeam ? "rotate-180" : ""
                }`}
              />
            </Link>
            <AnimatePresence>
              {isMenuOpenTeam && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 bg-black border border-gray-700 rounded-lg py-1 min-w-[130px] z-50 shadow-lg"
                >
                  <Link
                    to="/mentors"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-primary transition-colors duration-200 cursor-pointer"
                    onClick={() => handleClick("/mentors")}
                  >
                    MENTORS
                  </Link>
                  <Link
                    to="/team"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-primary transition-colors duration-200 cursor-pointer"
                    onClick={() => handleClick("/team")}
                  >
                    NSTP TEAM
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a
            className={`cursor-pointer ${
              activeLink === "/newsroom" ? "text-primary" : "hover:text-primary"
            }`}
            onClick={() => handleClick("/newsroom")}
          >
            NEWSROOM
          </a>
          <a
            className={`cursor-pointer ${
              activeLink === "/tenants" ? "text-primary" : "hover:text-primary"
            }`}
            onClick={() => handleClick("/tenants")}
          >
            RESIDENTS
          </a>
          <a
            className={`cursor-pointer ${
              activeLink === "/contact" ? "text-primary" : "hover:text-primary"
            }`}
            onClick={() => handleClick("/contact")}
          >
            CONTACT
          </a>
          <a
            className="bg-primary flex gap-3 items-center justify-center text-black px-3 py-1 rounded-full text-sm md:text-[0.9rem] font-semibold transform cursor-pointer hover:bg-white hover:scale-105 transition-transform  duration-300 ease-in-out w-fit"
            onClick={() => handleClick("/explore")}
          >
            Explore NSTP
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
