import React, { useEffect, useState } from "react";

import pitchus from "../../Assets/preview.png";
import {
  Building2,
  Flask,
  Users,
  BadgeDollarSign,
  Award,
  Globe,
  LineChart,
  School,
  Factory,
  FlaskConical,
  Target,
  Trophy,
  Building,
  ArrowUpRight,
  Users2,
} from "lucide-react";

const Highlight = () => {
  const highlights = [
    {
      icon: Building2,
      value: "71.3",
      label: "Acres",
      description: "Total Area",
    },
    {
      icon: Factory,
      value: "530,680",
      label: "Sq ft",
      description: "Total Space",
    },
    {
      icon: FlaskConical,
      value: "350+",
      label: "Labs",
      description: "Advanced Research Facilities",
    },
    {
      icon: Building,
      value: "SEZ & STZ",
      label: "Status",
      description: "Tax Assumptions",
    },
    {
      icon: Globe,
      value: "27+",
      label: "International Firms",
      description: "Global Presence",
    },
    {
      icon: Users2,
      value: "115+",
      label: "Companies",
      description: "Housed in NSTP",
    },
    {
      icon: BadgeDollarSign,
      value: "15B+ PKR ",
      label: "Investment",
      description: "Raised by Companies",
    },
    {
      icon: LineChart,
      value: "2.5B+ PKR ",
      label: "R&D",
      description: "Investment",
    },
    {
      icon: Award,
      value: "2x",
      label: "Awards",
      description: "Global Inspiring Solution",
    },
    {
      icon: Trophy,
      value: "3x",
      label: "Programs",
      description: "Internship Startup Programs",
    },
    {
      icon: Target,
      value: "Top 50",
      label: "SDG",
      description: "Model Zone",
    },
    {
      icon: School,
      value: "Top",
      label: "Incubator",
      description: "HEC Ranked 2021-2023",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("highlights-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div
      id="highlights-section"
      className="relative bg-black p-6 md:p-12  lg:p-24 w-full overflow-hidden"
    >
      {/* Animated Background Elements */}
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

        {/* Floating bubbles */}
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

        {/* Animated lines */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-px bg-primary/20"
              style={{
                width: `${100 + Math.random() * 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slideLine ${
                  6 + Math.random() * 4
                }s linear infinite`,
                animationDelay: `${-Math.random() * 6}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 ">
        <hr className="border-primary/20" />

        {/* Header Section with Pitch Us Circle */}
        <div className="flex flex-col md:flex-row justify-between items-center min-h-[300px] mt-9 mb-12 sm:px-7 md:px-16 ">
          <div className="flex-1  ">
            <h1 className="mb-8 text-xl lg:text-3xl font-extrabold leading-none tracking-tight">
              <span
                className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
                style={{
                  WebkitTextStroke: "1px #ffffff",
                  textStroke: "1px #ffffff",
                }}
              >
                PARK
              </span>
              <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
                HIGHLIGHTS
                <span className=" text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
              </span>
            </h1>
            <p className="text-white text-md md:text-lg md:max-w-lg ">
              Explore Pakistan's premier technology park, our innovative
              initiatives, and discover how NSTP is defining the future of
              innovation through success stories and strategic collaborations
            </p>
          </div>

          <div className="relative flex items-center justify-center mt-8 md:mt-0 ">
            <div
              className="absolute z-20 flex flex-col items-center justify-center rounded-full hover:bg-[#90C74B] transition-colors duration-300 py-3 px-2 sm:py-8 lg:py-16 sm:px-6 lg:px-11 cursor-pointer"
              onClick={() => (window.location.href = "/tenancy")}
            >
              <ArrowUpRight className="text-white text-2xl lg:text-5xl -rotate-90" />
              <span className="text-white text-xs sm:text-base lg:text-2xl font-bold mt-1">
                Pitch Us
              </span>
            </div>
            <img
              src={pitchus}
              alt="Pitch Us Circle"
              className="w-40 sm:w-56 lg:w-96 animate-spin-slow"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-12 ">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group w-[21rem] min-h-[11rem] md:min-h-[15rem]"
              >
                <div className="mb-6 bg-white w-16 md:w-24 h-16 md:h-24 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-9 md:w-12 h-9 md:h-12 text-black group-hover:text-primary transition-colors duration-300 stroke-1" />
                </div>

                <div className="w-full flex items-center justify-center flex-col text-center md:text-left">
                  <div className="text-2xl lg:text-4xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="text-primary text-md lg:text-lg font-semibold">
                    {item.label}
                  </div>
                  <div className="text-gray-400 text-md lg:text-lg">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Highlight;
