import React, { useState, useEffect } from "react";
import {
  Banknote,
  Building,
  Building2,
  Download,
  FlaskConicalIcon,
  GraduationCap,
  Target, // Added import
  NetworkIcon,
  Scale,
  Users2,
  Rocket,
  Clock,
  ChevronLeft,
  ChevronRight,
  Globe,
  TrendingUp, // Added import
} from "lucide-react";
import { Link } from "react-scroll";
import Footer from "../../Components/footer";
import { Cube8Form } from "../../TenancyForm/page";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "./CompanyLogos/companyLogo";
import { HiArrowSmRight } from "react-icons/hi";
import Animation from "../../Animation";
import LazyLoad from "../../LazyLoad";


const WhatWeOfferSection = () => {
  const offerings = [
    {
      title: "Access to Global Network",
      icon: NetworkIcon,
      description: "Network of Investors and VCs",
    },
    {
      title: "Professional Space",
      icon: Building,
      description: "State-of-the-art Office Space and Facilities",
    },
    {
      title: "Expert Mentorship",
      icon: Users2,
      description: "Strategic Partnerships with Industry Leaders",
    },
    {
      title: "Business Development",
      icon: Building2,
      description: "Advanced Business Development Resources",
    },
    {
      title: "Market Access",
      icon: Globe,
      description: "Market Expansion Opportunities",
    },
    {
      title: "Investment Support",
      icon: Banknote,
      description: "Investment Readiness Programs",
    },
    {
      title: "Research Access",
      icon: FlaskConicalIcon,
      description: "Access to NSTP's Research and Development Labs",
    },
    {
      title: "Legal Support",
      icon: Scale,
      description: "Legal and IP Support for International Markets",
    },
  ];

  return (
    <div className="relative bg-black  p-6 md:p-12  lg:p-24   w-full overflow-hidden">
      {/* Animated Background with Rotating Blur Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large rotating blur circles */}
        <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
          {[...Array(3)].map((_, i) => (
            <div
              key={`blur-${i}`}
              className="absolute w-96 h-96 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(139, 195, 74, 0.3), transparent 70%)",
                left: `${30 + 40 * Math.cos((2 * Math.PI * i) / 3)}%`,
                top: `${30 + 40 * Math.sin((2 * Math.PI * i) / 3)}%`,
                filter: "blur(40px)",
                transform: `scale(${1 + Math.sin((i * Math.PI) / 3)})`,
              }}
            />
          ))}
        </div>

        {/* Floating blue bubbles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`bubble-${i}`}
              className="absolute w-3 h-3 rounded-full bg-primary/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s linear infinite`,
                animationDelay: `${-Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Small green dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s linear infinite`,
                animationDelay: `${-Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
      <Animation>
        <div className="relative z-10 ">
          <h1 className="text-xl lg:text-3xl mb-8  md:mb-14 flex flex-col md:flex-row items-center justify-center md:gap-2 font-extrabold leading-none tracking-tight">
            <span
              className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
              style={{
                WebkitTextStroke: "1px #ffffff",
                textStroke: "1px #ffffff",
              }}
            >
              WHAT
            </span>{" "}
            <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
              WE OFFER
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12">
            {offerings.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group w-[21rem] min-h-[11rem] md:min-h-[15rem]"
                >
                  <div className="mb-6 bg-white w-16 md:w-24 h-16 md:h-24 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-9 md:w-12 h-9 md:h-12 text-black group-hover:text-primary transition-colors duration-300 stroke-1" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base w-5/6">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Animation>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
};

const StartupAchievementsSection = () => {
  const achievements = [
    {
      title: "Global Market Expansion",
      description: "Access international markets and scale globally",
      image: "/images/exploreNSTP/nstpimage1.jpg",
    },
    {
      title: "Scalable Operations",
      description: "Build and optimize scalable business operations",
      image: "/images/exploreNSTP/nstpimage2.jpg",
    },
    {
      title: "Investment Readiness",
      description: "Prepare for and secure significant investment",
      image: "/images/exploreNSTP/nstpimage3.jpg",
    },
    {
      title: "Strategic Partnerships",
      description: "Form valuable strategic partnerships",
      image: "/images/exploreNSTP/nstpimage4.jpg",
    },
    {
      title: "Growth Metrics",
      description: "Achieve significant growth metrics and KPIs",
      image: "/images/exploreNSTP/nstpimage5.jpg",
    },
    {
      title: "Market Compliance",
      description: "Ensure international regulatory compliance",
      image: "/images/exploreNSTP/nstpimage6.jpg",
    },
  ];

  return (
    <div className="w-full  mx-auto  flex-col flex items-center justify-center">
      <h1 className="text-xl lg:text-3xl mb-8 md:mb-14 flex flex-col md:flex-row items-center justify-center md:gap-2 font-extrabold leading-none tracking-tight">
        <span
          className="text-transparent text-3xl md:text-4xl text-center lg:text-5xl xl:text-4xl block"
          style={{
            WebkitTextStroke: "1px #000000",
            textStroke: "1px #000000",
          }}
        >
          WHAT STARTUPS
        </span>{" "}
        <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
          WILL ACHIEVE
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
        </span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8 sm:max-w-7xl">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl w-[17rem] sm:w-[21rem]  h-[21rem] shadow-lg overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              {/* Image with zoom effect */}

              <LazyLoad
                imageSrc={item.image}
                imageAlt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Decorative corner accent */}
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/20 rounded-full transition-all duration-500 group-hover:scale-150" />
            </div>

            <div className="relative p-6">
              {/* Content */}
              <div className="relative z-10 flex  flex-col items-center justify-center">
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center px-4 text-sm w-[17rem] group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent line */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100" /> */}
            </div>

            {/* Hover overlay for depth effect */}
            <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/10 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};
const ProgramRequirementsSection = () => {
  const requirements = [
    {
      title: "Proven Market Traction",
      description:
        "Demonstrate validated product-market fit with consistent revenue growth and customer base",
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
    },
    {
      title: "Dedicated Team",
      description:
        "Full-time founding team with complementary skills and commitment to growth",
      icon: <Users2 className="w-12 h-12 text-primary" />,
    },
    {
      title: "Scalable Model",
      description:
        "Clear vision for national or international expansion with scalable business model",
      icon: <Globe className="w-12 h-12 text-primary" />,
    },
    {
      title: "Growth Commitment",
      description:
        "Strong commitment to program participation and achieving ambitious growth objectives",
      icon: <Target className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <div className="w-full bg-black  p-6 md:p-12  lg:p-24  flex flex-col items-center justify-center  ">
      <Animation>
        <h1 className="text-xl lg:text-3xl mb-8 md:mb-14 flex flex-col md:flex-row items-center justify-center md:gap-2 font-extrabold leading-none tracking-tight">
          <span
            className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
            style={{
              WebkitTextStroke: "1px #ffffff",
              textStroke: "1px #ffffff",
            }}
          >
            PROGRAM
          </span>{" "}
          <span className="text-white text-3xl text-center  md:text-4xl lg:text-5xl xl:text-4xl block">
            REQUIREMENTS
            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
          </span>
        </h1>
      </Animation>
      {/* <p className="max-w-2xl mx-auto text-lg text-justify sm:text-center text-gray-300 px-4 mb-8">
          We're looking for exceptional startups that meet the following
          criteria
        </p> */}
      <Animation>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:max-w-7xl ">
          {requirements.map((req, index) => (
            <div key={index} className="transform-gpu ">
              <div className="group relative bg-gray-50 w-[18rem] sm:w-[21rem] xl:w-[32rem] min-h-72 lg:min-h-44 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">
                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                {/* Corner accent */}
                {/* <div className="hidden sm:absolute  sm:-right-12 sm:-top-12 w-12 sm:w-24 h-12 sm:h-24 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" /> */}

                <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Icon container with animation */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-45 transition-transform duration-500 group-hover:rotate-90" />
                    <div className="relative bg-white rounded-lg p-3 transform transition-transform duration-500 group-hover:rotate-12">
                      {req.icon}
                    </div>
                  </div>

                  {/* Content with hover effects */}
                  <div className="text-center sm:text-left relative z-10">
                    <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                      {req.title}
                    </h3>
                    <p className="text-gray-600 transition-colors sm:w-full duration-300 group-hover:text-gray-700">
                      {req.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-b-xl" />
              </div>
            </div>
          ))}
        </div>
      </Animation>
    </div>
  );
};

const Cube8 = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const about =
    "Cube 8 is NSTP's premier accelerator program designed for growth-stage startups ready to scale their operations and impact. This intensive 2 years program provides established startups with advanced resources, strategic mentorship, and access to a global network of investors and industry leaders. Our focus is on helping promising companies accelerate their growth, optimize their business models, and prepare for significant market expansion.";

  const hatch8TitleHollow = "DRIVING ";
  const hatch8TitleFilled = "GROWTH";
  const hatch8Description =
    "Cube 8 houses dynamic startups across eight thematic sectors, from AgriTech to SmartTech, creating a vibrant ecosystem of innovation. Our resident companies benefit from advanced resources, strategic mentorship, and global networking opportunities, working together to scale their operations and create meaningful impact in their respective industries.";

  // const whatWeOffer = [
  //   "Access to Global Network of Investors and VCs",
  //   "State-of-the-art Office Space and Facilities",
  //   "Strategic Partnerships with Industry Leaders",
  //   "Advanced Business Development Resources",
  //   "Market Expansion Opportunities",
  //   "Investment Readiness Programs",
  //   "Executive Mentorship from Industry Leaders",
  //   "Access to NSTP's Research and Development Labs",
  //   "Legal and IP Support for International Markets",
  // ];

  // const whatStartupsWillAchieve = [
  //   {
  //     name: "Global Market Expansion Strategy",
  //     icon: <MdPublic />,
  //   },
  //   {
  //     name: "Scalable Business Operations",
  //     icon: <FaChartLine />,
  //   },
  //   {
  //     name: "Investment and Funding Readiness",
  //     icon: <FaDollarSign />,
  //   },
  //   {
  //     name: "Strategic Partnership Development",
  //     icon: <FaHandshake />,
  //   },
  //   {
  //     name: "Advanced Growth Metrics",
  //     icon: <BsGraphUpArrow />,
  //   },
  //   {
  //     name: "International Regulatory Compliance",
  //     icon: <RiGovernmentLine />,
  //   },
  //   {
  //     name: "Enterprise Sales Strategy",
  //     icon: <FaBusinessTime />,
  //   },
  //   {
  //     name: "Market Leadership Position",
  //     icon: <MdRocketLaunch />,
  //   },
  // ];

  return (
    <>
      <div className="my-10 md:my-4 lg:my-8 pt-4 md:pt-10">
        <div className="relative w-full flex justify-center">
          <div className="relative w-full h-[31rem] overflow-hidden">
            <LazyLoad
              imageSrc="/images/exploreNSTP/nstpimage2.jpg"
              imageAlt="Cube 8"
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-black/20 rounded-xl" />
            <div className="absolute inset-0 text-white p-6">
              <p className="text-primary flex items-center gap-2">
                <span
                  onClick={() => navigate("/")}
                  className="underline hover:text-white cursor-pointer"
                >
                  Home
                </span>
                <ChevronRight />
                <span
                  onClick={() => navigate("/explore")}
                  className="underline hover:text-white cursor-pointer"
                >
                  Explore
                </span>
                <ChevronRight /> Accelerator
              </p>
              <Animation className={"h-full"}>
                <h1 className="text-xl lg:text-3xl h-full flex flex-col md:flex-row items-center justify-center md:gap-2 font-extrabold leading-none tracking-tight">
                  <span
                    className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
                    style={{
                      WebkitTextStroke: "1px #ffffff",
                      textStroke: "1px #ffffff",
                    }}
                  >
                    CUBE 8
                  </span>{" "}
                  <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
                    ACCELERATOR
                    <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
                  </span>
                </h1>
              </Animation>
            </div>
          </div>
        </div>

        <div className="  flex flex-col items-center justify-center">
          {/* Program Overview */}
          <Animation>
            <div className="relative p-6 md:p-12  lg:p-24  ">
              <div className="flex flex-col-reverse md:flex-row items-center  gap-10 lg:gap-6">
                {/* Left side - Image */}
                <div className="w-full md:w-[540px] lg:w-[670px]">
                  <LazyLoad
                    imageSrc="/images/exploreNSTP/nstpimage2.jpg"
                    imageAlt="Program Overview"
                    className="w-full h-full rounded-md"
                  />
                </div>

                {/* Right side - Content */}
                <div className="flex flex-col flex-1   items-center md:items-start  ml-0 lg:ml-10 w-full">
                  <h1 className="text-xl lg:text-3xl mb-4 flex-wrap flex flex-col md:flex-row items-center  md:gap-2   font-extrabold leading-none tracking-tight">
                    <span
                      className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block "
                      style={{
                        WebkitTextStroke: "1px #000000",
                        textStroke: "1px #000000",
                      }}
                    >
                      PROGRAM
                    </span>{" "}
                    <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
                      OVERVIEW
                      <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
                    </span>
                  </h1>

                  <p className="text-base font-normal text-gray-500 mb-4 text-justify md:text-left w-full md:w-[80%]">
                    {about}
                  </p>
                  <Link
                    to="apply"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="bg-black cursor-pointer flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform duration-300 ease-in-out w-fit"
                  >
                    Apply Now
                    <HiArrowSmRight className="text-lg md:text-2xl" />
                  </Link>

                  {/* Learn More button */}
                  {/* <Link
            to="/program-details"
            className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform duration-300 ease-in-out w-fit"
          >
            Learn More
            <HiArrowSmRight className="text-lg md:text-2xl" />
          </Link> */}
                </div>
              </div>
            </div>
          </Animation>

          {/* Replace your existing "what we offer" section with: */}
          <div className=" w-full ">
            <WhatWeOfferSection />
          </div>
          {/* Company Logo  */}
          <Animation>
            <div className="p-6 md:p-12  lg:p-24   w-full  ">
              <CompanyLogo
                titleHollow={hatch8TitleHollow}
                titleFilled={hatch8TitleFilled}
                description={hatch8Description}
              />
            </div>
          </Animation>

          {/* Replace your existing "what startups will achieve" section with: */}

          <Animation>
            <div className=" w-full   px-6 md:px-12  lg:px-24  pb-6 md:pb-12  lg:pb-24 ">
              <StartupAchievementsSection />
            </div>
          </Animation>
          {/* Program Requirements */}
          <div className="   w-full">
            <ProgramRequirementsSection />
          </div>
          {/* Teams */}
          {/* <div className="mt-16 w-full  lg:w-[71rem] ">
            <FacultyAndTeams />
          </div> */}

          {/* Apply Section */}
          <Animation>
            <div id="apply" className=" p-6 md:p-12  lg:p-24   w-full ">
              <h1 className="text-xl lg:text-3xl mb-4 flex flex-col md:flex-row items-center justify-center md:gap-2 font-extrabold leading-none tracking-tight">
                <span
                  className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
                  style={{
                    WebkitTextStroke: "1px #000000",
                    textStroke: "1px #000000",
                  }}
                >
                  HOW
                </span>{" "}
                <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
                  TO APPLY
                  <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
                </span>
              </h1>
              <div className="text-gray-600 text-center flex flex-col items-center justify-center text-sm ">
                <p className="md:max-w-2xl mx-auto text-base text-justify md:text-center text-gray-500  mb-4">
                  Growth-stage startups meeting our program requirements can
                  apply for the Cube 8 Accelerator Program through our
                  application form. Selected companies will be invited for
                  detailed evaluation and pitch sessions.
                </p>

                <button
                  className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit  "
                  onClick={() => setShowForm(!showForm)}
                >
                  <span>{showForm ? "Hide Form" : "Apply Now"}</span>
                  <ChevronRight />
                </button>
              </div>

              {showForm && (
                <div className="">
                  <Cube8Form />
                </div>
              )}
            </div>
          </Animation>
        </div>
      </div>{" "}
      {/* Add this closing div tag */}
      <Footer />
    </>
  );
};

export default Cube8;
