import React, { useState, useEffect } from "react";
import internship from "../Assets/exploreNSTP/internshipProgram.JPG";
import hatch8 from "../Assets/exploreNSTP/hatch8.jpg";
import cube8 from "../Assets/exploreNSTP/cube8.jpg";
import companyOffice from "../Assets/exploreNSTP/companyOffice.jpg";
import explore from "../Assets/explore.png";
import VisitNSTP from "../Assets/exploreNSTP/visitNSTP.jpg";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./explore.css";

const Card = ({ title, description, imageSrc, imageAlt, link }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 p-5 rounded-lg flex flex-col md:flex-row justify-between w-full relative z-10 min-h-[250px]">
      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div>
          <h1 className="text-primary">{title}</h1>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
        <button
          className="text-black flex items-center hover:underline mt-4 mb-3 md:mb-0"
          onClick={() => navigate(link)}
        >
          Learn More <HiArrowRight className="ml-1" />
        </button>
      </div>
      <div className="flex justify-center md:justify-end w-full md:w-64">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-lg w-64 h-48 object-cover"
        />
      </div>
    </div>
  );
};

const Students = () => {
  return (
    <div className="mt-28 animate-fade">
      <h1 className="font-bold text-xl sm:text-3xl lg:text-4xl">
        See which programs match
      </h1>
      <div className="mt-5">
        <p className="text-gray-500">
          NSTP offers access to critical hands-on experience, training, and
          guidance. This collaborative environment will add to the professional
          growth of the students and equip them with the technical skills and
          confidence crucial for their future careers. Would you like to get
          experience from a Tech Company? Let us help you!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <div className="w-full md:w-1/2">
          <Card
            title="Internship Program"
            description="NSTP offers a 6-month internship program for students in their final year of graduation. The program is designed to give students real-world experience in the tech industry."
            imageSrc={internship}
            imageAlt="coworking"
            link="/explore/internship"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Card
            title="Hatch 8 Incubation Program"
            description="NSTP offers a co-working space for students who are working on their startup ideas. The program provides mentorship, networking opportunities, and access to resources to help students grow their startups."
            imageSrc={hatch8}
            imageAlt="hatch8"
            link="/explore/hatch"
          />
        </div>
      </div>
    </div>
  );
};

const EducationalInstitutes = () => {
  return (
    <div className="mt-28 animate-fade">
      <h1 className="font-bold text-xl sm:text-3xl lg:text-4xl">
        See which programs match
      </h1>
      <div className="mt-5">
        <p className="text-gray-700">
          NSTP offers access to critical hands-on experience, training, and
          guidance. This collaborative environment will add to the professional
          growth of the students and equip them with the technical skills and
          confidence crucial for their future careers. Would you like to get
          experience from a Tech Company? Let us help you!
        </p>
      </div>
      <div className="mt-5">
        <Card
          title="Visit NSTP"
          description="Get a first-hand experience of NSTP's world-class facilities and innovative ecosystem. Our campus tours showcase our state-of-the-art research labs, innovation centers, and learning spaces. Visit NSTP to discover how we can help your students excel in their technical education and career development."
          imageSrc={VisitNSTP}
          imageAlt="Visit NSTP"
          link="/explore/visit"
        />
      </div>
    </div>
  );
};

const Startup = () => {
  return (
    <div className="mt-28 animate-fade">
      <h1 className="font-bold text-xl sm:text-3xl lg:text-4xl">
        See which programs match
      </h1>
      <div className="mt-5">
        <p className="text-gray-700">
          NSTP offers access to critical hands-on experience, training, and
          guidance. This collaborative environment will add to the professional
          growth of the students and equip them with the technical skills and
          confidence crucial for their future careers. Would you like to get
          experience from a Tech Company? Let us help you!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <div className="w-full md:w-1/2">
          <Card
            title="Hatch 8 Incubation Program"
            description="NSTP offers a co-working space for students who are working on their startup ideas. The program provides mentorship, networking opportunities, and access to resources to help students grow their startups."
            imageSrc={hatch8}
            imageAlt="hatch8"
            link="/explore/hatch"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Card
            title="Cube 8 Accelerator Program"
            description="NSTP offers a working space for the startups who have already developed their product and are looking to scale. The program provides mentorship, networking opportunities, and access to resources to help startups grow their business."
            imageSrc={cube8}
            imageAlt="cube8"
            link="/explore/cube"
          />
        </div>
      </div>
    </div>
  );
};

const Company = () => {
  return (
    <div className="mt-28 animate-fade">
      <h1 className="font-bold text-xl sm:text-3xl lg:text-4xl">
        See which programs match
      </h1>
      <div className="mt-5">
        <p className="text-gray-700">
          NSTP provides international companies with world-class facilities,
          strategic location advantages, and a supportive ecosystem for
          innovation and growth. Whether you're looking to establish a regional
          headquarters, R&D center, or innovation hub, our infrastructure and
          support services are designed to help global enterprises thrive in the
          region.
        </p>
      </div>
      <div className="mt-5">
        <Card
          title="Company "
          description="NSTP offers international companies a comprehensive solution for establishing their presence in the region. Our state-of-the-art facilities include premium office spaces, R&D labs, and innovation centers, complemented by a full range of business support services. Companies can leverage our strategic location, access local talent through our educational partnerships, and join a thriving ecosystem of industry leaders, research institutions, and innovative startups."
          imageSrc={companyOffice}
          imageAlt="companyOffice"
          link="/explore/company"
        />
      </div>
    </div>
  );
};

const ExploreNSTP = () => {
  const navigate = useNavigate();
  const [possibleRoles, setPossibleRoles] = useState([
    "Student",
    "Startup",
    "International Company",
    "Educational Institute",
  ]);
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <div className="p-6 md:p-10 lg:p-20 mt-28 animate-fade-up">
      <h1 className="text-[#90C74B] text-4xl md:text-6xl lg:text-7xl font-bold">
        Explore NSTP
      </h1>

      <p className="mt-5 text-gray-700 text-lg sm:text-xl md:text-2xl font-semibold md:w-[50rem]">
        Help us get you to the right place! We've put together tailored journeys
        based on your needs. Just select the category that applies to you.
      </p>

      <div className="mt-5">
        <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl">
          I am a...
        </p>
        <div className="flex gap-3 xl:gap-10 flex-wrap mt-4">
          {possibleRoles.map((role) => (
            <button
              key={role}
              className={`px-6 sm:px-8 lg:px-11 py-3 lg:py-4 rounded-full text-base sm:text-lg lg:text-2xl whitespace-nowrap ${
                selectedRole === role
                  ? "bg-primary text-white"
                  : "bg-black text-white hover:bg-primary"
              }`}
              onClick={() => setSelectedRole(role)}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      {selectedRole === "Student" && <Students />}
      {selectedRole === "Educational Institute" && <EducationalInstitutes />}
      {selectedRole === "Startup" && <Startup />}
      {selectedRole === "International Company" && <Company />}
    </div>
  );
};

export default ExploreNSTP;
