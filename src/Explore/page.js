import React, { useState, useEffect } from "react";
import internship from "../Assets/exploreNSTP/internshipProgram.JPG";
import hatch8 from "../Assets/exploreNSTP/hatch8.jpg";
import cube8 from "../Assets/exploreNSTP/cube8.jpg";
import companyOffice from "../Assets/exploreNSTP/companyOffice.jpg";
import explore from "../Assets/explore.png";
import VisitNSTP from "../Assets/exploreNSTP/visitNSTP.jpg";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import "./explore.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyLoad from "../LazyLoad";

// Card Component
const Card = ({ title, description, imageSrc, imageAlt, link }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        <div className="h-48 overflow-hidden">
          {/* <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          /> */}
           <LazyLoad 
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div
          onClick={() => navigate(link)}
          className="absolute cursor-pointer  hover:bg-primary hover:scale-105 transition-all duration-500 top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2"
        >
          <ArrowRight className="w-5 h-5 text-black  " />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <button
          onClick={() => navigate(link)}
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          Learn More <ChevronRight className="ml-1 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Role Selection Button Component
const RoleButton = ({ role, selected, onClick }) => (
  <button
    onClick={onClick}
    // className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit  mt-10 mb-7"
    className={`  flex gap-3 items-center justify-center  px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit     ${
      selected
        ? "bg-primary text-white shadow-lg scale-105"
        : "bg-black text-white "
    } font-medium text-sm md:text-base whitespace-nowrap`}
  >
    {role}
  </button>
);

// Section Components
const Students = () => (
  <div className="mt-12 animate-fade-up">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Student Opportunities
      </h2>
      <p className="text-gray-500">
        Gain hands-on experience and kickstart your career in technology through
        our specialized programs designed for students.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card
        title="Internship Program"
        description="Join our comprehensive 6-month internship program designed for final-year students. Work on real projects, learn from industry experts, and build your professional network."
        imageSrc={internship}
        imageAlt="Internship Program"
        link="/explore/internship"
      />
      <Card
        title="Hatch 8 Incubation"
        description="Transform your innovative ideas into successful ventures with our startup incubation program. Access mentorship, workspace, and resources to build your startup."
        imageSrc={hatch8}
        imageAlt="Hatch 8"
        link="/explore/hatch"
      />
    </div>
  </div>
);

const EducationalInstitutes = () => (
  <div className="mt-12 animate-fade-up">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Educational Partnership Opportunities
      </h2>
      <p className="text-gray-500">
        Partner with NSTP to enhance your institution's technical education
        offerings and provide students with industry exposure.
      </p>
    </div>
    <Card
      title="Visit NSTP"
      description="Experience our world-class facilities firsthand. Our campus tours showcase state-of-the-art research labs, innovation centers, and learning spaces designed to foster technical education and career development."
      imageSrc={VisitNSTP}
      imageAlt="Visit NSTP"
      link="/explore/visit"
    />
  </div>
);

const Startup = () => (
  <div className="mt-12 animate-fade-up">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Startup Programs
      </h2>
      <p className="text-gray-500">
        Access resources, mentorship, and facilities to grow your startup in our
        innovation ecosystem.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card
        title="Hatch 8 Incubation"
        description="Perfect for early-stage startups, our incubation program provides mentorship, workspace, and essential resources to help validate and grow your business idea."
        imageSrc={hatch8}
        imageAlt="Hatch 8"
        link="/explore/hatch"
      />
      <Card
        title="Cube 8 Accelerator"
        description="Designed for growth-stage startups, our accelerator program offers advanced resources, strategic partnerships, and scaling opportunities to take your business to the next level."
        imageSrc={cube8}
        imageAlt="Cube 8"
        link="/explore/cube"
      />
    </div>
  </div>
);

const Company = () => (
  <div className="mt-12 animate-fade-up">
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        International Company Solutions
      </h2>
      <p className="text-gray-500">
        Establish your presence in the region with our comprehensive facilities
        and support services.
      </p>
    </div>
    <Card
      title="Corporate Solutions"
      description="Access premium office spaces, R&D labs, and innovation centers backed by comprehensive business support services. Leverage our strategic location and educational partnerships to drive your regional growth."
      imageSrc={companyOffice}
      imageAlt="Company Office"
      link="/explore/company"
    />
  </div>
);

// Main Component
const ExploreNSTP = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const roles = [
    "Student",
    "Startup",
    "International Company",
    "Educational Institute",
  ];

  const renderContent = () => {
    switch (selectedRole) {
      case "Student":
        return <Students />;
      case "Educational Institute":
        return <EducationalInstitutes />;
      case "Startup":
        return <Startup />;
      case "International Company":
        return <Company />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-14">
        {/* Hero Section */}
        <div className="text-center mt-16">
          <h1 className="text-xl lg:text-3xl mb-4 h-full flex flex-col md:flex-row items-center justify-center md:gap-2  font-extrabold leading-none tracking-tight">
            <span
              className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
              style={{
                WebkitTextStroke: "1px #000000",
                textStroke: "1px #000000",
              }}
            >
              EXPLORE
            </span>{" "}
            <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
              NSTP
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
            </span>
          </h1>
          <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover opportunities tailored to your needs. Select your role
            below to begin your journey with NSTP.
          </p>
        </div>

        {/* Role Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {roles.map((role) => (
            <RoleButton
              key={role}
              role={role}
              selected={selectedRole === role}
              onClick={() => setSelectedRole(role)}
            />
          ))}
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default ExploreNSTP;
