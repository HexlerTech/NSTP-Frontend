import React, { useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { FaRegCircleDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/footer";
import { CompanyForm } from "../../TenancyForm/page";
import companies from "../../Assets/exploreNSTP/visitNSTP.jpg";
import Image1 from "../../Assets/exploreNSTP/nstpimage1.jpg";
import Image2 from "../../Assets/exploreNSTP/nstpimage2.jpg";
import Image3 from "../../Assets/exploreNSTP/nstpimage3.jpg";
import Image4 from "../../Assets/exploreNSTP/nstpimage4.jpg";
import Image5 from "../../Assets/exploreNSTP/nstpimage5.jpg";
import Image6 from "../../Assets/exploreNSTP/nstpimage6.jpg";

import Image7 from "../../Assets/exploreNSTP/hatch8.png";

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
} from "lucide-react";

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
      title: "Banking Facilities",
      icon: Landmark,
      description: "Banking through HBL and Askari Bank",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Benefits</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-[15rem] min-h-52 items-center text-center"
          >
            {/* Icon container */}
            <div className="mb-6 bg-primary/10 p-4 rounded-full shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center text-primary">
                <item.icon className="w-12 h-12 text-primary" />
              </div>
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

const NSTPGallery = () => {
  const images = [
    {
      id: 1,
      src: Image1,
      alt: "NSTP Building Exteriors",
      title: "Modern Office Facilities",
    },
    {
      id: 2,
      src: Image2,
      alt: "NSTP Interior",
      title: "Collaborative Workspace",
    },
    {
      id: 3,
      src: Image3,
      alt: "NSTP Conference Room",
      title: "Meeting Spaces",
    },
    {
      id: 4,
      src: Image4,
      alt: "NSTP Innovation Lab",
      title: "Innovation Hub",
    },
    {
      id: 5,
      src: Image5,
      alt: "NSTP Campus",
      title: "Campus View",
    },
    {
      id: 6,
      src: Image6,
      alt: "NSTP Events Space",
      title: "Event Facilities",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-16">
   <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Our Facilities</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
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
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
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
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Eligibility Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eligibilityCriteria.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
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
            <h2 className="text-3xl font-bold text-center mb-12">
              Target Sectors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {targetSectors.map((sector, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
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
            <img
              src={companies}
              alt="Company Spaces"
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
              <h1 className="font-bold text-center h-full flex items-center justify-center -mt-4 text-3xl md:text-5xl">
                Company Office Space
              </h1>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-20 md:px-48 mt-10 flex flex-col items-center justify-center ">
          {/* // Program Overview */}
          <div className="w-full lg:w-[71rem] flex flex-col items-center justify-center md:flex-row gap-6">
            <div className="md:w-3/4">
            <h2 className="text-3xl md:text-4xl font-bold text-start mb-12">Program Overview</h2>
              <p className="text-gray-600 text-justify mt-5 text-sm">
                NSTP offers the companies with the best office spaces. The
                office spaces are designed to provide a comfortable and
                productive environment for the employees. The office spaces are
                equipped with all the necessary facilities and amenities to
                ensure the smooth functioning of the company. The office spaces
                are available in different sizes and can be customized according
                to the requirements of the company. The office spaces are
                located in prime locations and are well connected to the major
                business hubs of the city.
              </p>
             
            </div>
            <div className="hidden sm:block w-1/4">
              <img
                className="rounded-full shadow-md"
                src={Image7}
                alt="program overview"
              />
            </div>
          </div>
          

          <div className="w-full lg:w-[71rem] mt-16 ">
            <NSTPGallery />
          </div>

          <div className="w-full lg:w-[71rem] mt-16 ">
            <EnhancedSections />
          </div>

          <div className="w-full lg:w-[71rem] mt-16">
            <BenefitsSection />
          </div>

          <div id="apply" className="w-full lg:w-[71rem] mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How to Apply</h2>
            <div className="text-gray-600 flex flex-col items-center justify-center text-center text-sm">
              <p>
                Companies interested in renting office spaces at NSTP can fill
                the application form available on the website. The applications
                will be reviewed by the NSTP team, and the companies meeting the
                eligibility criteria will be contacted for further details.
              </p>
              <button
                                      className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit  mt-10 mb-7"
                onClick={() => setShowForm(!showForm)}
              >
                <span>{showForm ? "Hide Form" : "Apply Now"}</span>
                <HiArrowSmRight className="ml-2" />
              </button>
            </div>
          

            {showForm && (
              <div className="mt-10">
                <CompanyForm />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyInfoPage;
