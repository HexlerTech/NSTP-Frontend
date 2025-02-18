import React, { useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { FaRegCircleDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/footer";
import { CompanyForm } from "../../TenancyForm/page";

import {
  Camera,
  Building2,
  LayoutGrid,
  Users2,
  Building,
  Rocket,
  Globe2,
  Wifi,
  Shield,
  Clock4,
  Fan,
  Flame,
  Train,
  Plane,
  Landmark,
  ChevronRight,
  Brain,
  Microscope,
  Link as LucideLink,
  FlaskConical,
} from "lucide-react";
import { Link } from "react-scroll";
import Animation from "../../Animation";
import LazyLoad from "../../LazyLoad";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "CCTV Surveillance",
      icon: Camera,
      description: "24/7 video surveillance coverage",
    },
    {
      title: "Special Economic Zone",
      icon: Building2,
      description: "High-tech Special Economic Zone SEZ",
    },
    {
      title: "Thematic Sectors",
      icon: LayoutGrid,
      description: "8 Thematic Sectors",
    },
    {
      title: "Hi-Tech Companies",
      icon: Building,
      description: "100+ Hi-Tech Companies",
    },
    {
      title: "Anchor Tenants & SMEs",
      icon: Users2,
      description: "41 Anchor Tenants & SMEs",
    },
    {
      title: "Startup Hub",
      icon: Rocket,
      description: "64 Startups",
    },
    {
      title: "International Presence",
      icon: Globe2,
      description: "15+ International Firms",
    },
    {
      title: "High Speed Internet",
      icon: Wifi,
      description: "Fast and reliable connectivity",
    },
    {
      title: "Security",
      icon: Shield,
      description: "Comprehensive security measures",
    },
    {
      title: "24/7 Access",
      icon: Clock4,
      description: "24/7/365 facility access",
    },
    {
      title: "Climate Control",
      icon: Fan,
      description: "HVAC (Heating and Cooling)",
    },
    {
      title: "Fire Safety",
      icon: Flame,
      description: "Fire Safety Systems",
    },
    {
      title: "Public Transport",
      icon: Train,
      description: "Access to Public Transport/Metro",
    },
    {
      title: "Airport Proximity",
      icon: Plane,
      description: "Airport is a 15-minute drive",
    },
    {
      title: "Research Facilities",
      icon: FlaskConical,
      description: "State-of-the-art research laboratories",
    },
    {
      title: "Banking Facilities",
      icon: Landmark,
      description: "Banking through HBL and Askari Bank",
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
        <h1 className="text-xl lg:text-3xl mb-8 md:mb-14 flex flex-col md:flex-row items-center justify-center md:gap-2  font-extrabold leading-none tracking-tight">
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

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12 ">
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

const NSTPGallery = () => {
  const images = [
    {
      id: 1,
      src: "/images/exploreNSTP/nstpimage1.jpg",
      alt: "NSTP Building Exteriors",
      title: "Modern Office Facilities",
    },
    {
      id: 2,
      src: "/images/exploreNSTP/nstpimage2.jpg",
      alt: "NSTP Interior",
      title: "Collaborative Workspace",
    },
    {
      id: 3,
      src: "/images/exploreNSTP/nstpimage3.jpg",
      alt: "NSTP Conference Room",
      title: "Meeting Spaces",
    },
    {
      id: 4,
      src: "/images/exploreNSTP/nstpimage4.jpg",
      alt: "NSTP Innovation Lab",
      title: "Innovation Hub",
    },
    {
      id: 5,
      src: "/images/exploreNSTP/nstpimage5.jpg",
      alt: "NSTP Campus",
      title: "Campus View",
    },
    {
      id: 6,
      src: "/images/exploreNSTP/nstpimage6.jpg",
      alt: "NSTP Events Space",
      title: "Event Facilities",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full mx-auto p-6 md:p-12  lg:p-24  bg-black  flex flex-col items-center justify-center">
      <Animation>
      <h1 className="text-xl lg:text-3xl mb-8 md:mb-14 flex flex-col md:flex-row items-center justify-center md:gap-2  font-extrabold leading-none tracking-tight">
        <span
          className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
          style={{
            WebkitTextStroke: "1px #ffffff",
            textStroke: "1px #ffffff",
          }}
        >
          EXPLORE
        </span>{" "}
        <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
          OUR FACILITIES
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
        </span>
      </h1>
      </Animation>
      <Animation>
      <div className="flex flex-wrap items-center justify-center gap-8 max-w-7xl">
      {images.map((image) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-lg w-[18rem] sm:w-[21rem] h-56 bg-white cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105"
          onClick={() => setSelectedImage(image)}
        >
          <div className="w-full h-full">
            
            <LazyLoad
              imageSrc={image.src}
              imageAlt={image.alt}
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold">{image.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
    </Animation>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
          
            <LazyLoad
              imageSrc={selectedImage.src}
              imageAlt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl font-bold p-2 hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const EnhancedSections = () => {
  const [activeTab, setActiveTab] = useState("eligibility");

  const eligibilityCriteria = [
    {
      icon: Building2,
      title: "Innovative Companies",
      description:
        "Companies with groundbreaking ideas and products that push technological boundaries",
      criteria: [
        "Demonstrated innovation in products or services",
        "Clear market potential and scalability",
        "Strong intellectual property portfolio",
      ],
    },
    {
      icon: Rocket,
      title: "Growth-Stage Companies",
      description:
        "Organizations looking to expand operations and scale their impact",
      criteria: [
        "Proven business model with market traction",
        "Clear growth strategy and expansion plans",
        "Strong financial foundation",
      ],
    },
    {
      icon: Brain,
      title: "Research-Focused Entities",
      description:
        "Organizations dedicated to advancing scientific knowledge and innovation",
      criteria: [
        "Active R&D programs",
        "Research partnerships with academic institutions",
        "Focus on emerging technologies",
      ],
    },
  ];

  const targetSectors = [
    {
      icon: Microscope,
      title: "Research Institutions",
      description:
        "Leading research organizations and laboratories pushing the boundaries of innovation",
      examples: [
        "Research laboratories",
        "Scientific institutes",
        "Innovation centers",
      ],
    },
    {
      icon: Globe2,
      title: "Global Enterprises",
      description:
        "International companies seeking to establish or expand their research presence",
      examples: [
        "Multinational corporations",
        "Global R&D centers",
        "International innovation hubs",
      ],
    },
    {
      icon: Users2,
      title: "Academic Collaborators",
      description: "Educational institutions and academic research partners",
      examples: [
        "Universities",
        "Research foundations",
        "Academic-industry partnerships",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  bg-white">
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-lg border border-[#8cc63f] p-1">
          <button
            onClick={() => setActiveTab("eligibility")}
            className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${
              activeTab === "eligibility"
                ? "bg-[#8cc63f] text-white"
                : "text-gray-600 hover:text-[#8cc63f]"
            }`}
          >
            Eligibility
          </button>
          <button
            onClick={() => setActiveTab("target")}
            className={`px-6 py-2 rounded-md text-sm font-semibold transition-colors ${
              activeTab === "target"
                ? "bg-[#8cc63f] text-white"
                : "text-gray-600 hover:text-[#8cc63f]"
            }`}
          >
            Target Sectors
          </button>
        </div>
      </div>

      <div className="mt-8">
        {activeTab === "eligibility" ? (
          <div>
            <h1 className="text-xl lg:text-3xl mb-12 flex flex-col md:flex-row items-center justify-center md:gap-2  font-extrabold leading-none tracking-tight">
              <span
                className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
                style={{
                  WebkitTextStroke: "1px #000000",
                  textStroke: "1px #000000",
                }}
              >
                ELIGIBILITY
              </span>{" "}
              <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
                CRITERIA
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
              </span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {eligibilityCriteria.map((item, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl w-[18rem] sm:w-[20rem] sm:h-[21rem] shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-[#8cc63f]/10 group-hover:bg-[#8cc63f]/20 transition-colors">
                      <item.icon className="w-8 h-8 text-[#8cc63f]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-6">
                      {item.description}
                    </p>
                    <ul className="space-y-2 text-left w-full">
                      {item.criteria.map((criterion, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#8cc63f] flex-shrink-0"></span>
                          {criterion}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-xl lg:text-3xl mb-12 flex flex-col md:flex-row items-center justify-center md:gap-2  font-extrabold leading-none tracking-tight">
              <span
                className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
                style={{
                  WebkitTextStroke: "1px #000000",
                  textStroke: "1px #000000",
                }}
              >
                TARGET
              </span>{" "}
              <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
                SECTORS
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
              </span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {targetSectors.map((sector, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl shadow-lg w-[18rem] sm:w-[20rem] sm:h-[20rem] p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-[#8cc63f]/10 group-hover:bg-[#8cc63f]/20 transition-colors">
                      <sector.icon className="w-8 h-8 text-[#8cc63f]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {sector.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">
                      {sector.description}
                    </p>
                    <ul className="space-y-2 text-left w-full">
                      {sector.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#8cc63f] flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CompanyInfoPage = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const benefits = [
    {
      title: "CCTV Surveillance",
      icon: Camera,
      description: "24/7 surveillance coverage for enhanced security",
    },
    {
      title: "Special Economic Zone",
      icon: Building2,
      description: "High-tech Special Economic Zone SEZ status",
    },
    {
      title: "Thematic Sectors",
      icon: LayoutGrid,
      description: "8 specialized thematic sectors",
    },
    {
      title: "Business Community",
      icon: Users2,
      description: "100+ Hi-Tech Companies, 41 Anchor Tenants & SMEs",
    },
    {
      title: "Startup Hub",
      icon: Rocket,
      description: "64 innovative startups",
    },
    {
      title: "Global Presence",
      icon: Globe2,
      description: "15+ International Firms",
    },
    {
      title: "High Speed Internet",
      icon: Wifi,
      description: "Fast and reliable internet connectivity",
    },
    {
      title: "Security",
      icon: Shield,
      description: "Comprehensive security measures",
    },
    {
      title: "24/7 Access",
      icon: Clock4,
      description: "Round-the-clock facility access",
    },
    {
      title: "Climate Control",
      icon: Fan,
      description: "HVAC (Heating and Cooling) systems",
    },
    {
      title: "Fire Safety",
      icon: Flame,
      description: "Advanced fire safety systems",
    },
    {
      title: "Public Transport",
      icon: Train,
      description: "Easy access to public transport/metro",
    },
    {
      title: "Airport Proximity",
      icon: Plane,
      description: "15-minute drive to airport",
    },
    {
      title: "Banking Services",
      icon: Landmark,
      description: "Banking facilities through HBL and Askari Bank",
    },
  ];

  return (
    <>
      <div className="my-10 md:my-4 lg:my-8 pt-4 md:pt-10">
        <div className="relative w-full flex justify-center">
          <div className="relative w-full h-[31rem] overflow-hidden">
           
            <LazyLoad
              imageSrc="/images/exploreNSTP/visitNSTP.jpg"
              imageAlt="Company Spaces"
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
                <HiArrowSmRight />
                <span
                  className="underline hover:text-white cursor-pointer"
                  onClick={() => navigate("/explore")}
                >
                  Explore
                </span>
                <HiArrowSmRight /> Company
              </p>
               <Animation className={"h-full"}>
              <h1 className="text-xl lg:text-3xl h-full flex flex-col md:flex-row items-center justify-center md:gap-2  font-extrabold leading-none tracking-tight">
                <span
                  className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
                  style={{
                    WebkitTextStroke: "1px #ffffff",
                    textStroke: "1px #ffffff",
                  }}
                >
                  COMPANY
                </span>{" "}
                <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
                  OFFICE SPACE
                  <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
                </span>
              </h1>
              </Animation>
            </div>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center ">
          {/* // Program Overview */}
          <Animation>
          <div className="relative  p-6 md:p-12  lg:p-24 ">
            <div className="flex flex-col-reverse md:flex-row items-center  gap-10 lg:gap-6">
              {/* Left side - Image */}
              <div className="w-full md:w-[540px] lg:w-[670px]">
               
                <LazyLoad
                  imageSrc="/images/exploreNSTP/nstpimage2.jpg"
                  imageAlt="Program Overview"
                  className="w-full h-full rounded-md "
                />
              </div>

              {/* Right side - Content */}
              <div className="flex flex-col flex-1 ml-0 lg:ml-10 w-full">
                <h1 className="text-xl lg:text-3xl mb-4 flex-wrap flex flex-col md:flex-row items-center    lg:gap-4 font-extrabold leading-none tracking-tight">
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
                  NSTP offers the companies with the best office spaces. The
                  office spaces are designed to provide a comfortable and
                  productive environment for the employees. The office spaces
                  are equipped with all the necessary facilities and amenities
                  to ensure the smooth functioning of the company. The office
                  spaces are available in different sizes and can be customized
                  according to the requirements of the company. The office
                  spaces are located in prime locations and are well connected
                  to the major business hubs of the city.
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
          </Animation>

          <div className="w-full    ">
            <NSTPGallery />
          </div>
          <Animation>
          <div className="w-full  p-6 md:p-12  lg:p-24   ">
            <EnhancedSections />
          </div>
          </Animation>

          <div className="w-full    ">
            <BenefitsSection />
          </div>

          <Animation>
          <div id="apply" className="w-full  p-6 md:p-12  lg:p-24  ">
            <h1 className="text-xl lg:text-3xl mb-4 flex flex-col md:flex-row items-center justify-center md:gap-2  font-extrabold leading-none tracking-tight">
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
            <div className="text-gray-600 flex flex-col items-center justify-center text-center text-sm">
              <p className="md:max-w-2xl mx-auto text-base text-justify md:text-center text-gray-500  mb-4">
                Companies interested in renting office spaces at NSTP can fill
                the application form available on the website. The applications
                will be reviewed by the NSTP team, and the companies meeting the
                eligibility criteria will be contacted for further details.
              </p>
              <button
                className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit  "
                onClick={() => setShowForm(!showForm)}
              >
                <span>{showForm ? "Hide Form" : "Apply Now"}</span>
                <HiArrowSmRight className="ml-2" />
              </button>
            </div>

            {showForm && (
              <div className="">
                <CompanyForm />
              </div>
            )}
          </div>
          </Animation>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyInfoPage;
