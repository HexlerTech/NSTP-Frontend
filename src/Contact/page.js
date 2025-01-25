

import React, { useState } from "react";
import { TbWorldWww } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import {
  FaFax,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";
import Footer from "../Components/footer";
import Animation from "../Animation";

const contactInfo = {
  website: "nstp.pk",
  email: "info@nstp.pk",
  phone: "+92 51 9085 6428",
  fax: "+92 51 9085 6429",
  address: "NSTP Secretariat, NUST H-12 Campus Islamabad, Pakistan",
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Enhanced Gradient */}
      <div className="relative h-[31rem] bg-gradient-to-br from-black/90 via-black to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -bottom-16 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/2 w-48 h-48 bg-primary/20 rounded-full blur-2xl" />
        <div className="relative max-w-7xl mx-auto  flex items-center justify-center h-full flex-col animate-fade-up">
          <div className="flex items-center justify-center gap-4 mb-4 ">
            {/* <img src={nstp} alt="NSTP" className="w-16 h-16"/> */}

        <Animation >
            <h1 className="text-xl lg:text-3xl    flex items-center justify-center  gap-4 font-extrabold leading-none tracking-tight">
              <span
                className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
                style={{
                  WebkitTextStroke: "1px #ffffff",
                  textStroke: "1px #ffffff",
                }}
              >
                LET'S
              </span>{" "}
              <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
                CONNECT
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
              </span>
            </h1>
            </Animation>
          </div>
          <Animation>
          <p className="text-center text-md md:text-lg text-gray-300 max-w-2xl mx-auto">
            Join Pakistan's premier science and technology ecosystem. We're here
            to help you innovate, grow, and succeed.
          </p>
        </Animation>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        {/* Contact Cards Grid */}
        <Animation>
        <div className="flex flex-wrap items-center justify-center gap-8 mb-24 animate-fade-up">
          <div className="bg-gray-50 p-8 w-[21rem] min-h-64 rounded-xl group shadow-lg  transition-transform hover:scale-105 duration-500">
            <div className="w-14 h-14 bg-black group-hover:scale-105  group-hover:bg-primary transition-transform duration-500 rounded-lg flex items-center justify-center mb-6">
              <BiPhone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">{contactInfo.phone}</p>
          </div>

          <div className="bg-gray-50 p-8 w-[21rem] min-h-64 rounded-xl group shadow-lg transition-transform hover:scale-105 duration-500">
            <div className="w-14 h-14 bg-black group-hover:scale-105 group-hover:bg-primary  transition-transform duration-500 rounded-lg flex items-center justify-center mb-6">
              <MdEmail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">{contactInfo.email}</p>
          </div>

          <div className="bg-gray-50 p-8 w-[21rem] min-h-64 rounded-xl group shadow-lg transition-transform hover:scale-105 duration-500">
            <div className="w-14 h-14 bg-black group-hover:scale-105 group-hover:bg-primary  transition-transform duration-500 rounded-lg flex items-center justify-center mb-6">
              <BiLocationPlus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">{contactInfo.address}</p>
          </div>
        </div>
        </Animation>

        {/* Main Contact Section */}
        <Animation>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 mb-24">
          {/* Form Section */}
          <div className="bg-gray-50 p-10 rounded-2xl shadow-lg">
          <h1 className="text-xl lg:text-3xl  flex-col sm:flex-row    flex items-center mb-5  sm:gap-4 font-extrabold leading-none tracking-tight">
              <span
                className="text-transparent text-3xl  block"
                style={{
                  WebkitTextStroke: "1px #000000",
                  textStroke: "1px #000000",
                }}
              >
                SEND US
              </span>{" "}
              <span className="text-black text-3xl  block ">
                A MESSAGE
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
              </span>
            </h1>
            <form className="space-y-6">
              <div className="relative border border-gray-200 rounded-lg p-4 focus-within:border-primary transition-colors">
                <input
                  type="text"
                  className="w-full outline-none bg-transparent"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="relative border border-gray-200 rounded-lg p-4 focus-within:border-primary transition-colors">
                <input
                  type="email"
                  className="w-full outline-none bg-transparent"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative border border-gray-200 rounded-lg p-4 focus-within:border-primary transition-colors">
                <input
                  type="text"
                  className="w-full outline-none bg-transparent"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="relative border border-gray-200 rounded-lg p-4 focus-within:border-primary transition-colors">
                <textarea
                  className="w-full outline-none bg-transparent resize-none h-32"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-8 rounded-full hover:scale-105 hover:bg-primary transition-transform duration-300 font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13286.264708969926!2d72.993001!3d33.6424888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9675aaaaaaab%3A0xc5180922c44eb86b!2sNational%20University%20of%20Sciences%20%26%20Technology%20(NUST)!5e0!3m2!1sen!2s!4v1724059407242!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-96"
            />
          </div>
        </div>
        </Animation>

        {/* Social Media Section */}
       
        <div className="text-center pb-24">
        <Animation>
        <h1 className="text-xl lg:text-3xl  mb-12  flex items-center justify-center  gap-4 font-extrabold leading-none tracking-tight">
              <span
                className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
                style={{
                  WebkitTextStroke: "1px #000000",
                  textStroke: "1px #000000",
                }}
              >
                CONTACT
              </span>{" "}
              <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
                WITH US
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
              </span>
            </h1>
            </Animation>
            <Animation>
          <div className="flex justify-center gap-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn].map(
              (Icon, index) => (
                <a key={index} href="#" className="group" >
                  <div className="w-10 md:w-14 h-10 md:h-14 bg-black rounded-full flex items-center  justify-center group-hover:bg-gradient-to-r from-primary to-primary/90 transition-all duration-300">
                    <Icon className="w-5 md:w-6 h-5 md:h-6 text-white  transition-colors duration-300" />
                  </div>
                </a>
              )
            )}
          </div>
          </Animation>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
