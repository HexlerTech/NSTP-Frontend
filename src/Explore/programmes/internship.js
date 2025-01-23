import React, { useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { FaRegCircleDot } from "react-icons/fa6";
import internship from "../../Assets/exploreNSTP/hatch8.png";
import Image1 from "../../Assets/exploreNSTP/internshipProgram2.png";
import Image2 from "../../Assets/exploreNSTP/nstpimage2.jpg";
// import {  BookOpen } from 'lucide-react';
import {
  Users2,
  GraduationCap,
  Target,
  NetworkIcon,
  Brain,
  ChevronRight,
  Laptop,
  Trophy,
  Building2,
  Clock,
  Building,
  Users,
  Banknote,
  CalendarDays,
  Code2,
  MessageSquare,
  Lightbulb,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/footer";
import { InternshipForm } from "../../TenancyForm/page";
import { Link } from "react-scroll";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Real-world Projects",
      icon: Laptop,
      description: "Real-world project experience",
    },
    {
      title: "Expert Mentorship",
      icon: Users2,
      description: "Mentorship from industry experts",
    },
    {
      title: "Technical Skills",
      icon: Brain,
      description: "Technical skill development",
    },
    {
      title: "Professional Network",
      icon: NetworkIcon,
      description: "Professional networking opportunities",
    },
    {
      title: "Career Guidance",
      icon: Target,
      description: "Career guidance and counseling",
    },
    {
      title: "Modern Facilities",
      icon: Building2,
      description: "Access to state-of-the-art facilities",
    },
    {
      title: "Stipend Package",
      icon: Banknote,
      description: "Stipend for the duration of internship",
    },
    {
      title: "Certification",
      icon: GraduationCap,
      description: "Certificate upon completion",
    },
    // {
    //   title: "Employment Path",
    //   icon: Building ,
    //   description: "Possibility of full-time employment"
    // },
    // {
    //   title: "Events Access",
    //   icon: CalendarDays ,
    //   description: "Access to NSTP events and workshops"
    // }
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
const ProgramSections = () => {
  const components = [
    "Structured learning modules",
    "Regular mentorship sessions",
    "Professional development workshops",
    "Real-world project experience",
  ];
  return (
    <div className="w-full  p-6 md:p-12  lg:p-24 ">
      <div className="container mx-auto  ">
        {/* Header */}
        <h1 className="text-xl lg:text-3xl mb-8 md:mb-14 flex flex-col md:flex-row items-center justify-center md:gap-2 font-extrabold leading-none tracking-tight">
          <span
            className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
            style={{
              WebkitTextStroke: "1px #000000",
              textStroke: "1px #000000",
            }}
          >
            DISCOVER
          </span>{" "}
          <span className="text-black text-3xl text-center md:text-4xl lg:text-5xl xl:text-4xl block">
            THE CURRICULUM
            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
          </span>
        </h1>

        {/* Cards Container */}
        <div className="flex flex-wrap items-center  justify-center gap-8">
      {/* Target Audience Card */}
      <div className="group relative w-[18rem] sm:w-[21rem] xl:w-[33rem] ">
        <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-white/30 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
        <div className="relative bg-gray-50 rounded-lg w-full sm:h-80 xl:h-72 p-6 shadow-xl hover:shadow-2xl transition duration-300">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Target Audience</h3>
          </div>
          <p className="text-gray-600 text-justify md:text-center leading-relaxed">
            Our program is designed for final year university students pursuing degrees in technical fields. We focus on developing practical skills and industry knowledge through hands-on experience, preparing graduates for successful careers in technology.
          </p>
        </div>
      </div>

      {/* Program Structure Card */}
      <div className="group relative w-[18rem] sm:w-[21rem] xl:w-[33rem]">
        <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-white/30 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
        <div className="relative bg-gray-50 rounded-lg w-full sm:h-80 xl:h-72 p-6 shadow-xl hover:shadow-2xl transition duration-300">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Program Structure</h3>
          </div>
          <p className="text-gray-600 text-justify md:text-center leading-relaxed">
            Our comprehensive 6-month program combines theoretical learning with practical projects. Students engage in interactive sessions, hands-on workshops, and real-world projects to build a strong foundation in modern technologies.
          </p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

// Alternative version with cards for eligibility
const EligibilitySection = () => {
  const criteria = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Academic Status",
      description: "Final year students in relevant technical fields",
    },
    {
      icon: <Trophy className="w-6 h-6 text-primary" />,
      title: "Academic Excellence",
      description: "Strong academic background",
    },
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "Technical Skills",
      description: "Basic programming knowledge",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Communication",
      description: "Good communication skills",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Innovation",
      description: "Passion for technology and innovation",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto   bg-black">
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

      <div className="flex items-center justify-center w-full sm:max-w-7xl flex-wrap gap-8 ">
        {criteria.map((item, index) => (
          <div
            key={index}
            className="group relative bg-gray-50 shadow-xl w-[18rem] sm:w-[21rem] min-h-56 rounded-lg overflow-hidden transform perspective-1000"
          >
            {/* Card Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Content Container */}
            <div className="relative p-6 flex flex-col items-center transform transition-transform duration-500 group-hover:translate-z-10">
              {/* Animated Icon Container */}
              <div className="relative w-16 h-16 mb-6">
                {/* Rotating Circles Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-2 border-primary/20 transition-transform duration-700 group-hover:rotate-45" />
                  <div className="absolute w-3/4 h-3/4 rounded-full border-2 border-primary/40 transition-transform duration-700 group-hover:-rotate-45" />
                </div>

                {/* Icon Wrapper */}
                <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-lg transform transition-all duration-500 group-hover:scale-110">
                  <div className="p-3 text-primary group-hover:text-black transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center space-y-3 relative z-10">
                <h3 className="text-xl font-semibold transform transition-all duration-300 group-hover:scale-105">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed max-w-xs mx-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

              {/* Animated Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-1 h-8 bg-primary transform rotate-45" />
                <div className="absolute bottom-0 left-0 w-8 h-1 bg-primary transform rotate-45" />
              </div>

              <div className="absolute bottom-0 right-0 w-16 h-16 transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-8 h-1 bg-primary transform -rotate-45" />
                <div className="absolute bottom-0 left-0 w-1 h-8 bg-primary transform -rotate-45" />
              </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};
const InternshipProgram = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="my-10 md:my-4 lg:my-8 pt-4 md:pt-10">
        <div className="relative w-full flex justify-center">
          <div className="relative w-full h-[31rem] overflow-hidden">
            <img
              src={Image1}
              alt="Internship Program"
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-black/20 rounded-xl" />
            <div className="absolute inset-0 text-white p-6">
              <p className="text-primary flex items-center gap-2">
                <span
                  className="underline hover:text-white cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Home
                </span>
                <ChevronRight />
                <span
                  className="underline hover:text-white cursor-pointer"
                  onClick={() => navigate("/explore")}
                >
                  Explore
                </span>
                <ChevronRight /> Internship
              </p>
              <h1 className="text-xl lg:text-3xl  flex flex-col md:flex-row  h-full items-center justify-center md:gap-2 font-extrabold leading-none tracking-tight">
                <span
                  className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
                  style={{
                    WebkitTextStroke: "1px #ffffff",
                    textStroke: "1px #ffffff",
                  }}
                >
                  INTERNSHIP
                </span>{" "}
                <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
                  PROGRAM
                  <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="  flex flex-col items-center justify-center">
          {/* Program Overview */}
          <div className="relative p-6 md:p-12  lg:p-24  ">
            <div className="flex flex-col-reverse md:flex-row items-center  gap-10 lg:gap-6 ">
              {/* Left side - Image */}
              <div className="w-full md:w-[540px] lg:w-[670px] ">
                <img
                  src={Image2}
                  alt="Program Overview"
                  className="w-full h-full rounded-md "
                />
              </div>

              {/* Right side - Content */}
              <div className="flex flex-col flex-1 ml-0 lg:ml-10 w-full ">
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

                <p className="text-base  font-normal text-gray-500 mb-4 text-justify md:text-left w-full md:w-[80%]">
                  NSTP's 6-month internship program bridges academic learning
                  and industry requirements. Our program provides hands-on
                  experience in real-world projects, mentorship from industry
                  experts, and exposure to cutting-edge technologies. Interns
                  work alongside experienced professionals in a dynamic
                  environment that fosters learning and professional growth.
                </p>
                <Link
                  to="apply"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="bg-black cursor-pointer mx-auto md:mx-0 flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform duration-300 ease-in-out w-fit"
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

          {/* Benefits Section */}
          <div className=" w-full ">
            <BenefitsSection />
          </div>
          <div className=" w-full ">
            <ProgramSections />
          </div>

          {/* Eligibility Section */}
          <div className="bg-black  p-6 md:p-12  lg:p-24   w-full ">
            <EligibilitySection />
          </div>

          {/* Apply Section */}
          <div id="apply" className=" w-full p-6 md:p-12  lg:p-24 ">
            <h1 className="text-xl lg:text-3xl mb-4  flex flex-col md:flex-row items-center justify-center md:gap-2 font-extrabold leading-none tracking-tight">
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
            <div className="text-gray-900 text-center flex flex-col items-center justify-center text-sm">
              <p className="md:max-w-2xl mx-auto text-base mb-4 text-justify md:text-center text-gray-500 ">
                Interested students can apply through their university's career
                portal or directly through NSTP's application portal.
                Applications should include a current resume, academic
                transcripts, and a brief statement of purpose. Shortlisted
                candidates will be invited for technical assessments and
                interviews.
              </p>
              <button
                className="bg-black flex gap-3 items-center  justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit  "
                onClick={() => setShowForm(!showForm)}
              >
                <span>{showForm ? "Hide Form" : "Apply Now"}</span>
                <ChevronRight className="ml-2" />
              </button>
            </div>

            {showForm && (
              <div className="">
                <InternshipForm />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InternshipProgram;
