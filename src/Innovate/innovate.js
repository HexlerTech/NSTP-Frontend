import React from "react";

import innovate from "../Assets/innovatepakistan.jpg";
import { FaSchool } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { BiNetworkChart } from "react-icons/bi";
import Footer from "../Components/footer";

// Platform for Collaboration – An enabling environment that connects entrepreneurs, researchers, businesses, investors, regulatory bodies, incubators, accelerators and relevant stakeholders on a single platform to come together to collaborate and contribute towards growth and prosperity of Pakistan.
// Platform for Digitization – Provides digital & physical access plus connectivity to information and knowledge economy through its centralized repository. It’s a platform that supports science and technology education and knowledge sharing that leads to commercial projects with benefits for the ecosystem and society.
// Innovation Centre – A platform which helps nurture startups from the idea stage though its Hatch 8 Program to the growth stage in its Cube 8 and Excelerate Programs to become a successful Hi-Tech SME or Anchor company.
// Intellectual Property (IP) Service – Offers the most comprehensive range of Intellectual Property service from drafting registration to commercialization and implementation.
// Business Consultancy Centre – Offers complete support for companies and startu such as assistance in feasibly studies, business registration, legal and regulatory counsel, research collaboration, testing facilities in over 330 labs, assistance in technology transfer and scaling of business.
// Financial Hub – Offers access to Venture Capital (VC) funding and Angel Investors and private public grants, along with an understanding of deal process and term sheets.

const innovateInfo = [
  {
    icon: <FaSchool size={50} />,
    title: "Educational Institutes",
    value: "40+",
  },
  {
    icon: <FcManager size={50} />,
    title: "Entrepreneurship Sessions",
    value: "110+",
  },
  {
    icon: <BiNetworkChart size={50} />,
    title: "Aspiring Founders",
    value: "10K+",
  },
];

const cardInfo = [
  {
    title: "Platform for Collaboration",
    description:
      "An enabling environment that connects entrepreneurs, researchers, businesses, investors, regulatory bodies, incubators, accelerators and relevant stakeholders on a single platform to come together to collaborate and contribute towards growth and prosperity of Pakistan.",
  },
  {
    title: "Platform for Digitization",
    description:
      "Provides digital & physical access plus connectivity to information and knowledge economy through its centralized repository. It’s a platform that supports science and technology education and knowledge sharing that leads to commercial projects with benefits for the ecosystem and society.",
  },
  {
    title: "Innovation Centre",
    description:
      "A platform which helps nurture startups from the idea stage though its Hatch 8 Program to the growth stage in its Cube 8 and Excelerate Programs to become a successful Hi-Tech SME or Anchor company.",
  },
  {
    title: "Intellectual Property (IP) Service",
    description:
      "Offers the most comprehensive range of Intellectual Property service from drafting registration to commercialization and implementation.",
  },
  {
    title: "Business Consultancy Centre",
    description:
      "Offers complete support for companies and startu such as assistance in feasibly studies, business registration, legal and regulatory counsel, research collaboration, testing facilities in over 330 labs, assistance in technology transfer and scaling of business.",
  },
  {
    title: "Financial Hub",
    description:
      "Offers access to Venture Capital (VC) funding and Angel Investors and private public grants, along with an understanding of deal process and term sheets.",
  },
];

const Innovate = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20 lg:p-20 mt-28 md:p-20 md:flex-row">
        <div className="w-3/4 md:w-full">
          <h1 className="mb-10 text-xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            INNOVATE PAKISTAN -{" "}
            <span className="text-green-400">
              INNOVATION, ENTREPRENEURSHIP, AND TECHNOLOGY
            </span>{" "}
            NATIONWIDE
          </h1>
          <div className="flex flex-col lg:flex-row gap-10">
            {innovateInfo.map((info) => (
              <div className="flex flex-row items-center gap-5">
                <div className="">{info.icon}</div>
                <div>
                  <h1 className="text-2xl font-bold">{info.value}</h1>
                  <p>{info.title}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-md text-gray-700 text-justify">
            Innovate Pakistan is a platform launched by NSTP with the ultimate
            aim of emerging as the innovation powerhouse to drive growth and
            create economic activity in the country. It is a platform designed
            to synergise researchers, creators, investors, implementers and end
            users of technologies to transform innovative ideas into successful
            products and services, while promulgating a culture of
            entrepreneurship in Pakistan by inspiring and nurturing businesses
            and entrepreneurs to develop and realise their true potential.
          </p>
        </div>
        <img src={innovate} alt="Pakistan Map" className="lg:w-1/4 md:hidden lg:rounded-3xl" />
      </div>
      <div className="bg-[#9CE37D] py-16 px-20">
        <h1 className="text-2xl font-bold mb-2">
          NSTP - A PLATFORM FOR INNOVATION
        </h1>
        <p className="text-md text-justify text-gray-700">
          Innovate Pakistan is the centralised platform focus to the promotion
          and support of technology and digitalization of Pakistan. It aims to
          make it simple for startups to nurture and groom, for companies to
          grow and scale, for investors to make investments with confidence, for
          researchers to commercialise their work, for individuals to find jobs
          and for the economy to grow. NSTP welcomes all stakeholders to join
          hands for this revolutionary initiative and help Pakistan become a
          prominent force in the innovation ecosystem and knowledge economy.
        </p>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-3 gap-10 p-10 lg:p-20 mb-20">
        {cardInfo.map((info) => (
          <div className="bg-[#FBF5F3] p-5 rounded-lg">
            <h1 className="text-2xl font-bold">{info.title}</h1>
            <p className="text-gray-700 text-justify mt-2">
              {info.description}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Innovate;
