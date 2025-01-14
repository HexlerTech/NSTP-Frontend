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
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Visit NSTP
            </h2>
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
              to="/"
              className="bg-primary flex gap-3 items-center justify-center text-black px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-white hover:scale-105 transition-transform  duration-300 ease-in-out w-fit"
            >
              Learn more
              <BookOpen className="w-5 h-5 mr-2" />
            </Link>
            <Link
              to="/"
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

      {/* footer  */}
      <div className="flex flex-col lg:flex-row justify-center items-center p-3 bg-black bg-opacity-50 w-full">
      <div className="w-full lg:w-auto p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between ">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-5">
            <div className="flex flex-col items-center lg:items-start">
              <img src={nstplogo} alt="nstp" className="w-12 mb-2 lg:me-2" />
              <h1 className="text-2xl text-center lg:text-left font-bold text-white">
                NSTP
              </h1>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <div className="hover:text-green-500 text-white flex gap-2 items-center cursor-pointer">
                    <TbWorldWww />
                    <a href={`https://${contactInfo.website}`}>
                      {contactInfo.website}
                    </a>
                  </div>
                </li>
                <li>
                  <div className="hover:text-green-500 text-white flex gap-2 items-center cursor-pointer">
                    <BiPhone />
                    <p>{contactInfo.phone}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Contact
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <div className="hover:text-green-500 text-white flex gap-2 items-center cursor-pointer">
                    <BiLocationPlus />
                    <p>{contactInfo.address}</p>
                  </div>
                </li>
                <li>
                  <div className="hover:text-green-500 text-white flex gap-2 items-center cursor-pointer">
                    <MdEmail />
                    <p>{contactInfo.email}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              NSTP
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 lg:ms-5">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.817 2.818A8.3 8.3 0 0 1 0 15.169a11.722 11.722 0 0 0 6.29 1.834c7.547 0 11.675-6.154 11.675-11.492 0-.176 0-.353-.012-.53A8.278 8.278 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .194a9.8 9.8 0 0 0-3.104 19.102c.49.09.668-.212.668-.47 0-.232-.01-.847-.013-1.66-2.722.59-3.3-1.31-3.3-1.31-.445-1.117-1.086-1.415-1.086-1.415-.89-.604.066-.592.066-.592.984.07 1.503 1.008 1.503 1.008.877 1.5 2.3 1.067 2.86.816.09-.626.343-1.067.625-1.312-2.172-.243-4.454-1.072-4.454-4.771 0-1.054.387-1.916 1.021-2.593-.103-.246-.443-1.243.097-2.59 0 0 .82-.26 2.683.988a9.35 9.35 0 0 1 4.877 0c1.86-1.248 2.68-.988 2.68-.988.543 1.347.203 2.344.1 2.59.637.677 1.02 1.54 1.02 2.593 0 3.71-2.288 4.525-4.468 4.763.351.3.663.891.663 1.796 0 1.296-.012 2.34-.012 2.656 0 .26.175.563.67.467A9.8 9.8 0 0 0 10 .194Z" />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.478 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.238-.01-1.024-.013-1.857-2.782.605-3.368-1.343-3.368-1.343-.454-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.609.069-.609 1.004.07 1.53 1.031 1.53 1.031.893 1.528 2.344 1.087 2.91.832.09-.648.35-1.087.637-1.332-2.183-.248-4.478-1.076-4.478-4.797 0-1.06.384-1.932 1.016-2.612-.104-.25-.44-1.258.096-2.624 0 0 .826-.264 2.708.999a9.399 9.399 0 0 1 4.932 0c1.878-1.263 2.705-.999 2.705-.999.539 1.366.202 2.374.099 2.624.63.68 1.014 1.552 1.014 2.612 0 3.73-2.3 4.545-4.49 4.79.357.309.675.923.675 1.86 0 1.343-.012 2.428-.012 2.756 0 .268.178.58.688.481C17.138 18.165 20 14.42 20 10c0-5.522-4.478-10-10-10Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">LinkedIn account</span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CTA;
