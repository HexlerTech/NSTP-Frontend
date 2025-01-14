import React, { useEffect, useState } from "react";
import { BiPieChart } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { FaIndustry } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import sectors from "../Assets/sectors.png";
import { FaArrowRight } from "react-icons/fa6";
import { BsPieChart } from "react-icons/bs";

import { FaSchool } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { BiHealth } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import { GiDefenseSatellite } from "react-icons/gi";

import agritech from "../Assets/agritech.jpg";
import autotech from "../Assets/autotech.jpg";
import deftech from "../Assets/defTech.jpg";
import edtech from "../Assets/edtech.jpg";
import energytech from "../Assets/energytech.jpg";
import fintech from "../Assets/fintech.jpg";
import healthtech from "../Assets/healthtech.jpeg";
import smarttech from "../Assets/smarttech.jpg";

import Footer from "../Components/footer";

const sectorsInfo = [
  {
    name: "AgriTech",
    image: agritech,
    icon: <FaSeedling size={30} />,
    description:
      "AgriTech theme at NSTP will focus on technologies like Smart Irrigation methods, Food Processing & Storage, Precision Agriculture, Biotechnology, Vertical Farming, Agriculture Robots, Air & Soil Monitoring Tools, Seeds, Fertilizers, Livestock and Poultry.",
  },
  {
    name: "AutoTech",
    image: autotech,
    icon: <FaBolt size={30} />,
    description:
      "Auto Tech theme at NSTP will focus its R&D on auto manufacturing with energy efficiency, optimisation of powertrains, electric vehicles, improvement of logistics systems i.e. transportation, trucking etc., safety in transportation and traffic management.",
  },
  {
    name: "DefTech",
    image: deftech,
    icon: <GiDefenseSatellite size={30} />,
    description:
      "DefTech at NSTP will focus on Aerospace, Drones, Radars, Cyber Warfare, Military Wearables, Specialized Imaging & Surveillance Equipment.",
  },
  {
    name: "EdTech",
    image: edtech,
    icon: <FaSchool size={30} />,
    description:
      "EdTech at NSTP will focus on Educational and Instructional Theories, Cognitive Tools for Learning, Computer-Based Language Learning, Assessment Systems, Trainings, Distance Education, Technology-Enhanced Classrooms and Informal Learning.",
  },
  {
    name: "EnergyTech",
    image: energytech,
    icon: <FaIndustry size={30} />,
    description:
      "EnergyTech theme at NSTP will focus its research on Biomass, Biofuels, Thermal Hydraulics, Fuel Cells, Blue Energy, Solar Energy, Wind Energy, Clean Coal, Energy Efficiency Materials and Systems.",
  },
  {
    name: "FinTech",
    image: fintech,
    icon: <FaMoneyBillWave size={30} />,
    description:
      "FinTech at NSTP will focus on Digital Payments, Blockchain, Cryptocurrency, InsurTech, RegTech, WealthTech, Lending, Crowdfunding, Personal Finance, Financial Inclusion, and Cybersecurity.",
  },
  {
    name: "HealthTech",
    image: healthtech,
    icon: <BiHealth size={30} />,
    description:
      "The HealthTech theme at NSTP will contain companies focused on research areas of Hospital Management, Patient Care, Genomics, Surgical Robotics, Telehealth, Mobile Health Apps, Online Health Services, Digital Medical Devices, Remote Monitoring, etc.",
  },
  {
    name: "SmartTech",
    image: smarttech,
    icon: <GrTechnology size={30} />,
    description:
      "SmartTech at NSTP will focus on Artificial Intelligence & Machine Learning, Data Management, Image, Video & Signal Processing, IoT, Modelling & Simulation, Networks & Network Security, Software and ICT.",
  },
];
const sectorsData = [
  {
    icon: <BiPieChart size={50} />,
    name: "Thematic Sectors",
    value: "8",
  },
  {
    icon: <GrTechnology size={50} />,
    name: "Hi-Tech Companies",
    value: "100+",
  },
  {
    icon: <FaIndustry size={50} />,
    name: "Anchor Tenants and SMEs",
    value: "41",
  },
  {
    icon: <FaSeedling size={50} />,
    name: "Startups",
    value: "64",
  },
  {
    icon: <BiWorld size={50} />,
    name: "International Firms",
    value: "15+",
  },
];

const Sectors = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }, []);

  return (
    <div>
      <div className="mt-28 p-6 lg:p-20">
        <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center gapp-5 lg:gap-20">
          {!mobileView && (
            <img
              src={sectors}
              alt="Pakistan Map"
              className="w-3/4 lg:w-1/3 md:w-1/3 rounded-3xl"
            />
          )}
          <div className="lg:w-2/3">
            <h1 className="mb-5 lg:mb-10 text-2xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900">
              SECTORS AT NSTP -{" "}
              <span className="text-primary">
                INNOVATION, ENTREPRENEURSHIP, AND TECHNOLOGY
              </span>{" "}
              NATIONWIDE
            </h1>
            {mobileView && (
              <div className="flex items-center justify-center">
                <img
                  src={sectors}
                  alt="Pakistan Map"
                  className="w-3/4 lg:w-1/3 md:w-1/3 rounded-3xl"
                />
              </div>
            )}
            {!mobileView && <div className="gap-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {sectorsData.map((info) => (
                <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center lg:justify-start gap-5">
                  <div>{info.icon}</div>
                  <div>
                    <h1 className="text-2xl font-bold">{info.value}</h1>
                    <p>{info.name}</p>
                  </div>
                </div>
              ))}
            </div>}
            <p className="mt-10 mb-10 lg:mb-0 text-md text-gray-700 text-justify">
              NSTP is a platform launched by NSTP with the ultimate aim of
              emerging as the innovation powerhouse to drive growth and create
              economic activity in the country. It is a platform designed to
              synergise researchers, creators, investors, implementers and end
              users of technologies to transform innovative ideas into
              successful products and services, while promulgating a culture of
              entrepreneurship in Pakistan by inspiring and nurturing businesses
              and entrepreneurs to develop and realise their true potential.
            </p>
            {mobileView && <div className="gap-10 grid grid-cols-2 lg:grid-cols-3">
              {sectorsData.map((info) => (
                <div className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center lg:justify-start gap-5">
                  <div>{info.icon}</div>
                  <div>
                    <h1 className="text-2xl font-bold">{info.value}</h1>
                    <p>{info.name}</p>
                  </div>
                </div>
              ))}
            </div>}
          </div>
        </div>
        <h1 className="text-xl lg:text-2xl font-bold lg:mb-2 p-6 lg:p-20 lg:pb-0 flex items-center gap-3 pb-0">
          Pakistan has a strong potential and industry drive to attract new
          high-value investment in particular sectors and thematic areas.
        </h1>
        <p className="text-md lg:pt-10 p-6 lg:p-20 text-gray-600">
          NSTP will be focusing on the thematic areas, which while showing
          potential at the national level, have also been among the areas
          wherein NUST has showed continued promise over many years, and for
          which sufficient knowledge and research base and associated facilities
          are available within the NUST premises. Moreover, Islamabad, the
          country’s capital, offers an existing industrial base and several
          comparative advantages within these sectors at the regional level.
          Following are these 8 sectors:
        </p>
        <div className="flex flex-col gap-10 p-6 lg:p-10 transition duration-500">
          {sectorsInfo.map((sector) => (
            <div
              key={sector.name}
              className="flex flex-col lg:flex-row items-start justify-between relative bg-white shadow-xl border hover:scale-105 transition duration-700 transform rounded-3xl"
            >
              <img
                src={sector.image}
                alt={sector.name}
                className="lg:w-1/3 w-full rounded-t-2xl lg:rounded-l-3xl h-60 object-cover"
              />
              <div className="p-5 lg:w-2/3">
                <div className="flex items-center gap-5 mb-4">
                  {sector.icon}
                  <h1 className="text-2xl font-bold">{sector.name}</h1>
                </div>
                <p className="text-sm lg:texl-md text-gray-700 mb-12">{sector.description}</p>
                <button className="text-black py-2 px-4 rounded-2xl bg-primary flex items-center gap-1 hover:bg-green-600 hover:text-white transition duration-500 absolute bottom-5">
                  Learn More <FaArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sectors;
