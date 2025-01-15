import React from "react";
import nstplogo from "../../Assets/nstp.png";
import { TbWorldWww } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { FaFax } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";



import {
  BookOpen,
  ArrowRight,
  Laptop,
  CircuitBoard,
  Cpu,
  Building2,
  Factory,
} from "lucide-react";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const contactInfo = {
  website: "nstp.pk",
  email: "info@nstp.pk",
  phone: "+92 51 9085 6428",
  fax: "+92 51 9085 6429",
  address: "NSTP Secretariat, NUST H-12 Campus Islamabad, Pakistan",
};
const CTA = () => {
  return (
    <div className="relative w-full min-h-[400px] mt-16 bg-gradient-to-br from-black via-black/95 to-black overflow-hidden">
      {/* Animated rotating background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large rotating circles */}
        <div className="absolute -left-1/4 -top-1/4 w-[150%] h-[150%] animate-[spin_20s_linear_infinite]">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-primary/20"
              style={{
                left: `${50 + 45 * Math.cos((2 * Math.PI * i) / 12)}%`,
                top: `${50 + 45 * Math.sin((2 * Math.PI * i) / 12)}%`,
              }}
            />
          ))}
        </div>

        {/* Medium rotating circles - opposite direction */}
        <div className="absolute left-0 top-0 w-full h-full animate-[spin_15s_linear_infinite_reverse]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-primary/15"
              style={{
                left: `${50 + 35 * Math.cos((2 * Math.PI * i) / 8)}%`,
                top: `${50 + 35 * Math.sin((2 * Math.PI * i) / 8)}%`,
              }}
            />
          ))}
        </div>

        {/* Small rotating circles */}
        <div className="absolute left-1/4 top-1/4 w-[50%] h-[50%] animate-[spin_10s_linear_infinite]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/10"
              style={{
                left: `${50 + 25 * Math.cos((2 * Math.PI * i) / 6)}%`,
                top: `${50 + 25 * Math.sin((2 * Math.PI * i) / 6)}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Radial gradients for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05),transparent_70%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Heading with outline effect */}
          <div className="inline-flex flex-col items-center justify-center space-y-2">
          <h1 className="text-xl lg:text-3xl mb-12   flex items-center justify-center  gap-4 font-extrabold leading-none tracking-tight">
        <span
          className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
          style={{
            WebkitTextStroke: "1px #ffffff",
            textStroke: "1px #ffffff",
          }}
        >
          VISIT
        </span>{" "}
        <span className="text-primary text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
          NSTP
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-white ml-1 rounded-full align-baseline"></span>
        </span>
      </h1>
            <div className="flex items-center space-x-3">
              <span className="h-0.5 w-12 bg-primary/30"></span>
              <CircuitBoard className="w-6 h-6 text-primary" />
              <span className="h-0.5 w-12 bg-primary/30"></span>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
            National Science and Technology Park at NUST provides a platform for
            innovation and technology growth in Pakistan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
            target="_blank"
              to="/about"
              className="bg-primary flex gap-3 items-center justify-center text-black px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-white hover:scale-105 transition-transform  duration-300 ease-in-out w-fit"
            >
              Learn more
              <BookOpen className="w-5 h-5 mr-2" />
            </Link>
            <Link
            target="_blank"
              to="/contact"
              className="bg-white flex gap-3 items-center justify-center text-black px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit"
            >
              Get started
              <HiArrowSmRight className="text-lg md:text-2xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle bottom pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      {/* <hr className="border-primary/20" /> */}

     
    </div>
  );
};

export default CTA;
