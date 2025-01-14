import React, { useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/footer";
import { VisitNSTPForm } from "../../TenancyForm/page";
import Image7 from "../../Assets/exploreNSTP/hatch8.png";
import Image4 from "../../Assets/exploreNSTP/nstpimage4.jpg";
import {
  Camera,
  Building2,
  Users2,
  Microscope,
  Rocket,
  BookOpen,
  Coffee,
  Users,
  HeartHandshake,
  Telescope,
  MessagesSquare,
  Network,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Presentation,
} from "lucide-react";

const VisitSections = () => {
  const targetAudiences = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Future innovators and researchers looking to explore opportunities"
    },
    {
      icon: Rocket,
      title: "Startup Founders",
      description: "Entrepreneurs seeking innovation spaces and collaboration"
    },
    {
      icon: Building2,
      title: "Educational Institutions",
      description: "Academic partners interested in research collaboration"
    },
    {
      icon: Briefcase,
      title: "Industry Partners",
      description: "Companies looking to establish research presence"
    }
  ];

  const expectations = [
    {
      title: "Guided NSTP Tour",
      description: "Comprehensive walkthrough of our state-of-the-art facilities",
      icon: Users
    },
    {
      title: "Program Overview",
      description: "Detailed presentation of available programs and initiatives",
      icon: Presentation
    },
    {
      title: "Research Labs",
      description: "Visit our cutting-edge research facilities and labs",
      icon: Microscope
    },
    {
      title: "Startup Ecosystem",
      description: "Connect with innovative startups and entrepreneurs",
      icon: Rocket
    },
    {
      title: "Innovation Management",
      description: "One-on-one meetings with program innovation managers",
      icon: Users2
    },
    {
      title: "Interactive Sessions",
      description: "Hands-on demonstration sessions and Q&A opportunities",
      icon: MessagesSquare
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Target Audience Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Target Audience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targetAudiences.map((audience, index) => (
            <div 
              key={index} 
              className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
              <p className="text-gray-600 text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expectations.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full transition-all duration-300 group-hover:w-32 group-hover:h-32" />
                
                <div className="relative">
                  <div className="mb-6 p-3 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  
                  {/* <div className="flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const VisitNSTP = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="my-10 md:my-4 lg:my-8 pt-4 md:pt-10">
        <div className="relative w-full flex justify-center">
          <div className="relative w-full h-[31rem] overflow-hidden">
            <img
              src={Image4}
              alt="NSTP Campus"
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
                <HiArrowSmRight /> Visit NSTP
              </p>
              <h1 className="font-bold text-center h-full flex items-center justify-center -mt-4 text-3xl md:text-5xl">
                Visit Our Campus
              </h1>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-20 md:px-48 mt-10 flex flex-col items-center justify-center">
          <div className="w-full lg:w-[71rem] flex flex-col items-center justify-center md:flex-row gap-6">
            <div className="md:w-3/4">
            <h2 className="text-3xl md:text-4xl font-bold text-start mb-12">Program Overview</h2>
              <p className="text-gray-600 text-justify mt-5 text-sm">
                Experience first-hand what NSTP has to offer by visiting our
                campus. Our guided tours provide a comprehensive overview of our
                facilities, programs, and the vibrant innovation ecosystem we've
                built. Whether you're a potential student, startup founder, or
                industry partner, visiting NSTP will help you understand how we
                can support your journey in technology and innovation.
              </p>
            </div>
            <div className="hidden sm:block w-1/4">
              <img
                className="rounded-full shadow-md"
                src={Image7}
                alt="Campus Overview"
              />
            </div>
          </div>

          <div className="w-full lg:w-[71rem] mt-16">
            <VisitSections />
          </div>

          <div id="schedule" className="w-full lg:w-[71rem] mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Schedule Your Visit</h2>
            <div className="text-gray-600 flex flex-col items-center justify-center text-center text-sm">
              <p>
                Campus tours are available Monday through Friday, from 9 AM to 4
                PM. Group tours can be arranged for educational institutions and
                organizations. Please schedule your visit at least one week in
                advance to ensure the best experience.
              </p>
              <button
                                      className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit mt-10 mb-7"
                onClick={() => setShowForm(!showForm)}
              >
                <span>{showForm ? "Hide Form" : "Book Your Visit"}</span>
                <HiArrowSmRight className="ml-2" />
              </button>
            </div>

            {showForm && (
              <div className="mt-10">
                <VisitNSTPForm />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VisitNSTP;
