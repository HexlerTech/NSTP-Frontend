import React, { useState, useEffect } from "react";
import {
  Banknote,
  Building,
  Building2,
  Download,
  FlaskConicalIcon,
  GraduationCap,
  NetworkIcon,
  Scale,
  UserCircle2,
  Users2,
  Rocket,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {} from "lucide-react";
import { Hatch8 } from "../../TenancyForm/page";
import hatch from "../../Assets/exploreNSTP/hatch8image.jpg";
import CompanyLogo from "./CompanyLogos/companyLogo";
import Image6 from "../../Assets/exploreNSTP/hatch8.png";
import Footer from "../../Components/footer";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import TimeLine from "./Hatch8Components/timeline";
import Brochure from "../../Assets/exploreNSTP/Hatch 8 Booklet.pdf";

import Image2 from "../../Assets/exploreNSTP/nstpimage2.jpg";

const EligibilitySection = () => {
  const criteria = [
    {
      title: "Innovative Solution",
      icon: <Rocket className="w-10 h-10 text-primary" />,
      description: "Early-stage startup with innovative technology solution",
    },
    {
      title: "Dedicated Team",
      icon: <Users2 className="w-10 h-10 text-primary" />,
      description: "Committed founding team",
    },
    {
      title: "Business Potential",
      icon: <Building2 className="w-10 h-10 text-primary" />,
      description: "Clear business model and market potential",
    },
    {
      title: "Time Commitment",
      icon: <Clock className="w-10 h-10 text-primary" />,
      description: "Ready to commit to 5-month program duration",
    },
    {
      title: "Location Requirement",
      icon: <Building className="w-10 h-10 text-primary" />,
      description: "Willingness to be based at NSTP during the program",
    },
    {
      title: "Innovation Focus",
      icon: <FlaskConicalIcon className="w-10 h-10 text-primary" />,
      description:
        "Focused on technological innovation in one of NSTP's 8 thematic sectors",
    },
  ];

  return (
    <div className="w-full  mx-auto flex flex-col items-center justify-center ">
      <h1 className="text-xl lg:text-3xl mb-8 md:mb-14 flex  md:flex-row items-center justify-center gap-2 sm:gap-4 font-extrabold leading-none tracking-tight">
        <span
          className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
          style={{
            WebkitTextStroke: "1px #ffffff",
            textStroke: "1px #ffffff",
          }}
        >
          ELIGI
        </span>{" "}
        <span className="text-white text-3xl md:text-4xl sm:-ml-3 lg:text-5xl xl:text-4xl block">
          BILITY
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:max-w-7xl ">
        {criteria.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg w-[17rem] sm:w-[21rem] h-56 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Decorative background elements */}
            {/* <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-full transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:bg-primary/10" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full transition-all duration-300 group-hover:scale-150 group-hover:bg-primary/5" /> */}

            <div className="relative p-8">
              {/* Icon container */}
              <div className="mb-6 w-16 h-16 mx-auto bg-white rounded-lg shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="transform group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center relative z-10">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Strategic Networks",
      icon: NetworkIcon,
      description: "Network of MNCs, Hi-Tech SMEs and High Potential Startups",
    },
    {
      title: "Expert Mentorship",
      icon: Users2,
      description:
        "Network of experienced CEOs, Business Leaders, Mentors and Coaches",
    },
    {
      title: "Investment Access",
      icon: Banknote,
      description: "Network of Venture Capitalists and Angel Investors",
    },
    {
      title: "Global Connections",
      icon: Building2,
      description: "Local and International Associations",
    },
    {
      title: "Legal Support",
      icon: Scale,
      description:
        "Legal, Intellectual Property and Technology Transfer Experts",
    },
    {
      title: "Professional Space",
      icon: Building,
      description: "Fully enabled Working Space in a Professional Environment",
    },
    {
      title: "Research Facilities",
      icon: FlaskConicalIcon,
      description: "Multitude of Laboratories and Testing Facilities",
    },
    {
      title: "Academic Excellence",
      icon: GraduationCap,
      description:
        "Highly Qualified Faculty Members to conduct Research and Industrial Projects",
    },
  ];

  return (
    <div className="relative bg-black p-6 md:p-12  lg:p-24   w-full overflow-hidden">
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

      <div className="relative z-10 ">
        <h1 className="text-xl lg:text-3xl mb-8 md:mb-14 flex flex-col md:flex-row items-center justify-center md:gap-2 font-extrabold leading-none tracking-tight">
          <span
            className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
            style={{
              WebkitTextStroke: "1px #ffffff",
              textStroke: "1px #ffffff",
            }}
          >
            KEY
          </span>{" "}
          <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
            BENEFITS
            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
          </span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12">
          {benefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col  items-center text-center group w-[21rem] min-h-[11rem] md:min-h-[15rem]"
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
const CarouselSection = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Update itemsToShow based on screen width with more specific breakpoints
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) { // sm
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) { // md to lg
        setItemsToShow(2);
      } else { // lg and above
        setItemsToShow(3);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-center mb-8 md:mb-12">
        <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight block mb-1"
          style={{
            WebkitTextStroke: "1px #000000",
            textStroke: "1px #000000",
            color: "transparent"
          }}>
          MEET
        </span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-black">
          THE MENTORS
          <span className="inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
        </span>
      </h1>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 bg-black hover:scale-110 transition-transform duration-150 p-2 rounded-full shadow-lg z-10"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 bg-black hover:scale-110 transition-transform duration-150 p-2 rounded-full shadow-lg z-10"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden mx-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * (100 / itemsToShow))}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-none px-2 md:px-4"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="flex flex-col items-center p-2 md:p-4">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-3 md:mb-4">
                    <img
                      src={item.image || "/api/placeholder/128/128"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-center mb-1 md:mb-2">
                    {item.name}
                  </h3>
                  <p className="text-primary text-sm md:text-base font-medium mb-1 md:mb-2">
                    {item.role}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex
                  ? "bg-primary w-6"
                  : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FacultyAndTeams = () => {
  const mentors = [
    {
      name: "Dr. Sarah Johnson",
      role: "AI Research Lead",
      description:
        "Leading expert in artificial intelligence with 15+ years of experience in machine learning and neural networks.",
      image: Image6,
    },
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      description:
        "Serial entrepreneur who has successfully founded and scaled multiple tech startups in Asia and Silicon Valley.",
      image: Image6,
    },
    {
      name: "Dr. Aisha Rahman",
      role: "Innovation Director",
      description:
        "Specializes in bridging academic research with commercial applications in biotechnology and healthcare.",
      image: Image6,
    },
    {
      name: "James Wilson",
      role: "Investment Advisor",
      description:
        "Venture capital expert with a portfolio of successful tech investments across emerging markets.",
      image: Image6,
    },
  ];

  return (
    <div className="space-y-16">
      <CarouselSection items={mentors} />
    </div>
  );
};
const Hatch = () => {
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();
  const about =
    "Hatch 8 is the nurturing space for great minds and brilliant ideas. It is a 5-month Pre-Incubation Programme for early stage startups that ensures development of entrepreneurs and their businesses. Residents in Hatch 8 are provided fully enabled working space in a professional environment, along with access to dynamic innovation ecosystem. Startups are also given support and guidance through expert mentorship and coaching, along with access to research facilities, labs and human resource.";
  const hatch8TitleHollow = "FOSTERING";
  const hatch8TitleFilled = "INNOVATION";
  const hatch8Description =
    "At Hatch 8, we're fostering the next generation of groundbreaking startups through our intensive 5-month pre-incubation program. Our innovative ecosystem supports early-stage entrepreneurs across multiple technology sectors, providing them with state-of-the-art facilities, expert mentorship, and comprehensive business development support to transform brilliant ideas into market-ready ventures.";

  const FixedDownloadButton = () => {
    const handleDownload = () => {
      try {
        // Create a link element
        const link = document.createElement("a");
        link.href = Brochure; // Using the imported Brochure path
        link.download = "NSTP-Hatch8-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error downloading brochure:", error);
      }
    };

    return (
      <button
        onClick={handleDownload}
        className="fixed rounded-full bottom-8 right-8 z-50 flex items-center gap-2 bg-primary hover:bg-primary/90 px-6 py-3 hover:scale-110 transition-transform shadow-lg  duration-300 group"
      >
        <Download className="h-5 w-5  text-black group-hover:scale-110 transition-transform duration-300" />
        <span className="font-medium  text-black"> Brochure</span>
      </button>
    );
  };
  return (
    <>
      <div className=" my-10 md:my-4 lg:my-8 pt-4 md:pt-10">
        <div className="relative w-full   flex justify-center">
          {/* Image container with opacity */}
          <div className="relative w-full h-[31rem]  overflow-hidden">
            {/* Background image with overlay */}
            <img
              src={hatch}
              alt="Hatch 8"
              className="absolute inset-0 w-full h-full object-cover  brightness-50"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 rounded-xl" />

            {/* Text overlay */}
            <div className="absolute inset-0  text-white p-6">
              <p className="text-primary flex items-center gap-2">
                <span
                  className="underline hover:text-white cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Home
                </span>
                <HiArrowSmRight />
                <span
                  className="underline hover:text-white cursor-pointer"
                  onClick={() => navigate("/explore")}
                >
                  Explore
                </span>
                <HiArrowSmRight /> Company
              </p>
              <h1 className="text-xl lg:text-3xl h-full flex flex-col md:flex-row items-center justify-center md:gap-2 font-extrabold leading-none tracking-tight">
                <span
                  className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
                  style={{
                    WebkitTextStroke: "1px #ffffff",
                    textStroke: "1px #ffffff",
                  }}
                >
                  HATCH 8
                </span>{" "}
                <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
                  INCUBATION
                  <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="    flex flex-col items-center justify-center ">
          {/* Program Overview */}
          <div className="relative p-6 md:p-12  lg:p-24  ">
            <div className="flex flex-col-reverse md:flex-row items-center  gap-10 lg:gap-6">
              {/* Left side - Image */}
              <div className="w-full md:w-[540px] lg:w-[670px]">
                <img
                  src={Image2}
                  alt="Program Overview"
                  className="w-full h-full rounded-md "
                />
              </div>

              {/* Right side - Content */}
              <div className="flex flex-col flex-1 items-center md:items-start  ml-0 lg:ml-10 w-full">
                <h1 className="text-xl lg:text-3xl mb-8 flex-wrap flex flex-col md:flex-row items-center  md:gap-2   font-extrabold leading-none tracking-tight">
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

                <p className="text-base font-normal text-gray-500 mb-8  text-justify md:text-left w-full md:w-[80%]">
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

          {/* Key Benefits */}

          <div className=" w-full   ">
            <BenefitsSection />
          </div>

          {/* Company Logo  */}
          <div className=" w-full p-6 md:p-12  lg:p-24     ">
            <CompanyLogo
              titleHollow={hatch8TitleHollow}
              titleFilled={hatch8TitleFilled}
              description={hatch8Description}
            />
          </div>

          {/* Eligibility */}

          <div className=" w-full bg-black p-6 md:p-12  lg:p-24    ">
            <EligibilitySection />
          </div>
          {/* Mentors */}
          {/* <div className="p-6 md:p-12  lg:p-24    ">
            <FacultyAndTeams />
          </div> */}

          {/* Timeline */}
          <div className=" w-full p-6 md:p-12  lg:p-24   ">
            <TimeLine />
          </div>
          {/* Apply */}
          <div id="apply" className="px-6 md:px-12  lg:px-24 pb-6 md:pb-12  lg:pb-24   w-full">
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

            <div className="text-gray-600 flex flex-col  items-center justify-center text-center text-sm">
              <p className="md:max-w-2xl mx-auto text-base text-justify md:text-center text-gray-500  mb-4">
                Startups interested in joining the Hatch 8 Incubation Program
                can apply by filling out the application form below. Our team
                will review your application and contact qualified candidates
                for the next steps in the selection process.
              </p>
              <button
                className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit "
                onClick={() => setShowForm(!showForm)}
              >
                <span>{showForm ? "Hide Form" : "Apply Now"}</span>
                <ChevronRight />
              </button>
            </div>

            {showForm && (
              <div className="">
                <Hatch8 />
              </div>
            )}
          </div>
          <FixedDownloadButton />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hatch;
