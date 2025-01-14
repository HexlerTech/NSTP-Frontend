import React, { useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { FaRegCircleDot } from "react-icons/fa6";
import internship from "../../Assets/exploreNSTP/hatch8.png";
import Image1 from "../../Assets/exploreNSTP/internshipProgram2.png";
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
  BookOpen
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/footer";
import { InternshipForm } from "../../TenancyForm/page";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Real-world Projects",
      icon: <Laptop className="w-12 h-12 text-primary" />,
      description: "Real-world project experience"
    },
    {
      title: "Expert Mentorship",
      icon: <Users2 className="w-12 h-12 text-primary" />,
      description: "Mentorship from industry experts"
    },
    {
      title: "Technical Skills",
      icon: <Brain className="w-12 h-12 text-primary" />,
      description: "Technical skill development"
    },
    {
      title: "Professional Network",
      icon: <NetworkIcon className="w-12 h-12 text-primary" />,
      description: "Professional networking opportunities"
    },
    {
      title: "Career Guidance",
      icon: <Target className="w-12 h-12 text-primary" />,
      description: "Career guidance and counseling"
    },
    {
      title: "Modern Facilities",
      icon: <Building2 className="w-12 h-12 text-primary" />,
      description: "Access to state-of-the-art facilities"
    },
    {
      title: "Stipend Package",
      icon: <Banknote className="w-12 h-12 text-primary" />,
      description: "Stipend for the duration of internship"
    },
    {
      title: "Certification",
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      description: "Certificate upon completion"
    },
    {
      title: "Employment Path",
      icon: <Building className="w-12 h-12 text-primary" />,
      description: "Possibility of full-time employment"
    },
    {
      title: "Events Access",
      icon: <CalendarDays className="w-12 h-12 text-primary" />,
      description: "Access to NSTP events and workshops"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Benefits</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-12px)] md:w-[calc(25%-18px)] flex flex-col items-center text-center"
          >
            {/* Icon container */}
            <div className="mb-6 bg-primary/10 p-4 rounded-full shadow-lg">
              {item.icon}
            </div>

            {/* Title and description */}
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const ProgramSections = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Target Audience Section */}
      <div className="mb-20">
        <div className="flex flex-col items-center mb-12">
          <div className="w-20 h-20 rounded-full bg-[#ebf7eb] flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-[#82c341]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Target Audience</h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600">
            Final year university students pursuing degrees in Computer Science, 
            Software Engineering, Information Technology, or related technical fields.
          </p>
        </div>
      </div>

      {/* Program Overview Section */}
      <div>
      <div className="flex flex-col items-center mb-12">
  <div className="w-20 h-20 rounded-full bg-[#ebf7eb] flex items-center justify-center mb-4">
    <BookOpen className="w-8 h-8 text-[#82c341]" />
  </div>
  <h2 className="text-3xl md:text-4xl font-bold text-center">Program Structure</h2>
</div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#ebf7eb] rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#82c341]" />
              </div>
              <h3 className="text-xl font-semibold">Duration</h3>
            </div>
            <p className="text-gray-600">
              A comprehensive 6-month program featuring structured learning modules 
              and hands-on project work.
            </p>
          </div>

          <div className="bg-[#ebf7eb] rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Users2 className="w-6 h-6 text-[#82c341]" />
              </div>
              <h3 className="text-xl font-semibold">Components</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#82c341]" />
                <span>Structured learning modules</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#82c341]" />
                <span>Regular mentorship sessions</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#82c341]" />
                <span>Professional development workshops</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#82c341]" />
                <span>Real-world project experience</span>
              </li>
            </ul>
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
      description: "Final year students in relevant technical fields"
    },
    {
      icon: <Trophy className="w-6 h-6 text-primary" />,
      title: "Academic Excellence",
      description: "Strong academic background"
    },
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "Technical Skills",
      description: "Basic programming knowledge"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Communication",
      description: "Good communication skills"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "Innovation",
      description: "Passion for technology and innovation"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Eligibility</h2>
      <div className="flex flex-wrap gap-6 w-full justify-center ">
        {criteria.map((item, index) => (
          <div key={index} className="bg-white w-[20rem] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
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
              <h1 className="font-bold text-center h-full flex items-center justify-center -mt-4 text-3xl md:text-5xl">
                Internship Program
              </h1>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-20 md:px-48 mt-10 flex flex-col items-center justify-center">
          {/* Program Overview */}
          <div className="w-full lg:w-[71rem] flex flex-col items-center justify-center md:flex-row gap-6">
            <div className="md:w-3/4">
            <h2 className="text-3xl md:text-4xl font-bold text-start mb-5">Program Overview</h2>
              <p className="text-gray-600 text-justify mt-5 text-sm">
                NSTP's 6-month internship program bridges academic learning and industry requirements. Our program provides hands-on experience in real-world projects, mentorship from industry experts, and exposure to cutting-edge technologies. Interns work alongside experienced professionals in a dynamic environment that fosters learning and professional growth.
              </p>
            </div>
            <div className="hidden sm:block w-1/4">
              <img
                src={internship}
                alt="internship"
                className="rounded-full shadow-md"
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 w-full lg:w-[71rem]">
            <BenefitsSection />
          </div>
          <div className="mt-16 w-full lg:w-[71rem]">
            <ProgramSections/>
          </div>

          {/* Eligibility Section */}
          <div className="mt-16 w-full lg:w-[71rem]">
            <EligibilitySection />
          </div>

          {/* Apply Section */}
          <div className="mt-16 w-full lg:w-[71rem]">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How to Apply</h2>
            <div className="text-gray-600 text-center flex flex-col items-center justify-center text-sm">
              <p>
                Interested students can apply through their university's career portal or directly through NSTP's application portal. Applications should include a current resume, academic transcripts, and a brief statement of purpose. Shortlisted candidates will be invited for technical assessments and interviews.
              </p>
              <button
                                      className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit  mt-10 mb-7"
                onClick={() => setShowForm(!showForm)}
              >
                <span>{showForm ? "Hide Form" : "Apply Now"}</span>
                <ChevronRight className="ml-2" />
              </button>
            </div>

            {showForm && (
              <div className="mt-10">
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