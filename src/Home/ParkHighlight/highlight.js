import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
      description: "Special Economic Zone",
    },
    {
      icon: Globe,
      value: "27+",
      label: "International Firms",
      description: "Global Presence",
    },
    {
      icon: Users,
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

    const section = document.getElementById('highlights-section');
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
    <div id="highlights-section" className="relative bg-black p-10 sm:p-24 md:p-36 w-full overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large rotating blur circles */}
        <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
          {[...Array(3)].map((_, i) => (
            <div
              key={`blur-${i}`}
              className="absolute w-96 h-96 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(139, 195, 74, 0.3), transparent 70%)',
                left: `${30 + 40 * Math.cos((2 * Math.PI * i) / 3)}%`,
                top: `${30 + 40 * Math.sin((2 * Math.PI * i) / 3)}%`,
                filter: 'blur(40px)',
                transform: `scale(${1 + Math.sin(i * Math.PI / 3)})`,
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
                animation: `slideLine ${6 + Math.random() * 4}s linear infinite`,
                animationDelay: `${-Math.random() * 6}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <hr className="border-primary/20" />
        
        {/* Header Section */}
        <div 
          className="flex flex-col md:flex-row justify-between items-start mt-9 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="mb-4 text-xl lg:text-3xl font-extrabold leading-none tracking-tight">
              <span
                className="text-transparent text-3xl sm:text-5xl lg:text-6xl block"
                style={{
                  WebkitTextStroke: "1px #ffffff",
                  textStroke: "1px #ffffff",
                }}
              >
                PARK
              </span>
              <span className="text-[#8BC34A] text-3xl sm:text-5xl lg:text-6xl block mt-2">
                HIGHLIGHTS
                <span className="text-white text-[25px] rounded-full">●</span>
              </span>
            </h1>
          </div>
          <div className="flex flex-col items-end">
            <p 
              className="text-white text-md md:text-lg md:max-w-lg md:text-right mb-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore Pakistan's premier technology park, our innovative
              initiatives, and discover how NSTP is defining the future of
              innovation through success stories and strategic collaborations
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 sm:gap-y-28">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col   items-center justify-center  gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="bg-white p-3 w-16 h-16 md:h-24 md:w-24 lg:w-28 lg:h-28 border flex items-center justify-center rounded-full">
                  {/* <IconComponent className="w-12 md:w-16 h-12 md:h-16 text-black shadow-primary shadow-xl" /> */}
                  <IconComponent className="w-12 md:w-16 h-12 md:h-16 text-black " />
                </div>
                <div className="w-full flex items-center justify-center flex-col text-center md:text-left ">
                  <div className="text-2xl lg:text-4xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="text-primary text-md lg:text-lg font-semibold">
                    {item.label}
                  </div>
                  <div className="text-gray-400 text-md lg:text-lg ">
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

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
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
      `}</style>
    </div>
  );
};

export default Highlight;
