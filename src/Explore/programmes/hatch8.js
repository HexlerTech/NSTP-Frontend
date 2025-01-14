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
    <div className="w-full max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Eligibility Criteria
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {criteria.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-full transition-all duration-300 group-hover:w-full group-hover:h-full group-hover:bg-primary/10" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full transition-all duration-300 group-hover:scale-150 group-hover:bg-primary/5" />

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
      icon: <NetworkIcon className="w-12 h-12 text-primary" />,
      description: "Network of MNCs, Hi-Tech SMEs and High Potential Startups",
    },
    {
      title: "Expert Mentorship",
      icon: <Users2 className="w-12 h-12 text-primary" />,
      description:
        "Network of experienced CEOs, Business Leaders, Mentors and Coaches",
    },
    {
      title: "Investment Access",
      icon: <Banknote className="w-12 h-12 text-primary" />,
      description: "Network of Venture Capitalists and Angel Investors",
    },
    {
      title: "Global Connections",
      icon: <Building2 className="w-12 h-12 text-primary" />,
      description: "Local and International Associations",
    },
    {
      title: "Legal Support",
      icon: <Scale className="w-12 h-12 text-primary" />,
      description:
        "Legal, Intellectual Property and Technology Transfer Experts",
    },
    {
      title: "Professional Space",
      icon: <Building className="w-12 h-12 text-primary" />,
      description: "Fully enabled Working Space in a Professional Environment",
    },
    {
      title: "Research Facilities",
      icon: <FlaskConicalIcon className="w-12 h-12 text-primary" />,
      description: "Multitude of Laboratories and Testing Facilities",
    },
    {
      title: "Academic Excellence",
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      description:
        "Highly Qualified Faculty Members to conduct Research and Industrial Projects",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Key Benefits
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {benefits.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Icon container */}
            <div className="mb-6 bg-primary/10 p-4 rounded-full shadow-lg">
              {item.icon}
            </div>

            {/* Title and description */}
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const CarouselSection = ({ title, items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = {
    mobile: 1, // Show 1 item on mobile
    desktop: 3, // Show 3 items on desktop
  };

  const getItemsPerPage = () => {
    return window.innerWidth < 768 ? itemsPerPage.mobile : itemsPerPage.desktop;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsPerPage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(items.length / itemsToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleItems = items.slice(
    currentSlide * itemsToShow,
    (currentSlide + 1) * itemsToShow
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {title}
      </h2>

      <div className="relative">
        <div className="flex flex-col md:flex-row gap-8">
          {visibleItems.map((item, index) => (
            <div key={index} className="flex-1">
              <div className="flex flex-col items-center p-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src={item.image || "/api/placeholder/128/128"}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {item.name}
                </h3>
                <p className="text-primary font-medium mb-2">{item.role}</p>
                <p className="text-gray-600 text-sm text-center max-w-md">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Repositioned for mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-primary w-6" : "bg-gray-300"
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

  // const teams = [
  //   {
  //     name: "TechForge Team",
  //     role: "Software Development",
  //     description:
  //       "Award-winning team developing cutting-edge solutions in cloud computing and artificial intelligence.",
  //     image: "/api/placeholder/128/128",
  //   },
  //   {
  //     name: "BioInnovate Group",
  //     role: "Biotechnology Research",
  //     description:
  //       "Pioneering team working on breakthrough solutions in healthcare and sustainable biotechnology.",
  //     image: "/api/placeholder/128/128",
  //   },
  //   {
  //     name: "FinTech Solutions",
  //     role: "Financial Technology",
  //     description:
  //       "Innovative team revolutionizing financial services through blockchain and AI technologies.",
  //     image: "/api/placeholder/128/128",
  //   },
  //   {
  //     name: "GreenTech Initiative",
  //     role: "Sustainable Technology",
  //     description:
  //       "Dedicated team developing sustainable solutions for environmental challenges.",
  //     image: "/api/placeholder/128/128",
  //   },
  // ];

  return (
    <div className="space-y-16">
      <CarouselSection title="Meet The Mentors" items={mentors} />
      {/* <CarouselSection title="Featured Teams" items={teams} /> */}
    </div>
  );
};

const Hatch = () => {
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();
  const about =
    "Hatch 8 is the nurturing space for great minds and brilliant ideas. It is a 5-month Pre-Incubation Programme for early stage startups that ensures development of entrepreneurs and their businesses. Residents in Hatch 8 are provided fully enabled working space in a professional environment, along with access to dynamic innovation ecosystem. Startups are also given support and guidance through expert mentorship and coaching, along with access to research facilities, labs and human resource.";
  const hatch8Title = "Nurturing Tomorrow's Innovations";
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
              <h1 className="font-bold text-center h-full flex items-center justify-center -mt-4  text-3xl md:text-5xl ">
                Hatch 8 Incubation
              </h1>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-20 md:px-48   mt-10 flex flex-col items-center justify-center ">
          {/* Program Overview */}
          <div className=" w-full  lg:w-[71rem]   flex flex-col items-center justify-center md:flex-row gap-6">
            <div className="md:w-3/4">
              <h2 className="text-3xl md:text-4xl font-bold text-start mb-12">
                Program Overview
              </h2>
              <p className="text-gray-600 text-justify mt-5  text-sm">
                {about}
              </p>
              <button
                onClick={() => window.open("/path-to-brochure.pdf")}
                className="w-full md:w-fit"
              >
                <Link
                  className="text-black flex items-center cursor-pointer hover:underline mt-5 justify-center md:justify-start w-full"
                  to="apply"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Apply Now <HiArrowSmRight className="ml-1" />
                </Link>
              </button>
            </div>
            <div className=" hidden sm:block  w-1/4  ">
              <img
                className="rounded-full  shadow-md"
                src={Image6}
                alt="program overview image"
              />
            </div>
          </div>

          {/* Key Benefits */}

          <div className="mt-16 w-full  lg:w-[71rem] ">
            <BenefitsSection />
          </div>

          {/* Company Logo  */}
          <div className="mt-16 w-full  lg:w-[71rem] ">
            <CompanyLogo title={hatch8Title} description={hatch8Description} />
          </div>

          {/* Eligibility */}

          <div className="mt-16 w-full  lg:w-[71rem] ">
            <EligibilitySection />
          </div>
          {/* Mentors */}
          <div className="mt-16 w-full  lg:w-[71rem] ">
            <FacultyAndTeams />
          </div>

          {/* Timeline */}
          <div className=" w-full lg:w-[71rem] ">
            <TimeLine />
          </div>
          {/* Apply */}
          <div id="apply" className="mt-16 w-full  lg:w-[71rem] ">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How to Apply
            </h2>

            <div className="text-gray-600 flex flex-col  items-center justify-center text-center text-sm mt-5">
              <p>
                Startups interested in joining the Hatch 8 Incubation Program
                can apply by filling out the application form below. Our team
                will review your application and contact qualified candidates
                for the next steps in the selection process.
              </p>
              <button
                className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit  mt-10 mb-7"
                onClick={() => setShowForm(!showForm)}
              >
                <span>{showForm ? "Hide Form" : "Apply Now"}</span>
                <ChevronRight />
              </button>
            </div>

            {showForm && (
              <div className="mt-10">
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
