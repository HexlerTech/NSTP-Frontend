// import React, { useState } from "react";
// import nstplogo from "../Assets/nstp.png";
// import { TbWorldWww } from "react-icons/tb";
// import { MdEmail } from "react-icons/md";
// import { BiPhone } from "react-icons/bi";
// import { FaFax } from "react-icons/fa";
// import { BiLocationPlus } from "react-icons/bi";
// import Footer from "../Components/footer";

// // Website: nstp.pk
// // Email: info@nstp.pk
// // Ph: +92 51 9085 6428
// // Fax: +92 51 9085 6429
// // NSTP Secretariat, NUST H-12 Campus Islamabad, Pakistan

// const contactInfo = {
//   website: "nstp.pk",
//   email: "info@nstp.pk",
//   phone: "+92 51 9085 6428",
//   fax: "+92 51 9085 6429",
//   address: "NSTP Secretariat, NUST H-12 Campus Islamabad, Pakistan",
// };

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   return (
//     <div>
//       <div
//         className="flex flex-col  md:flex-row lg:justify-between mt-28 p-6 sm:p-14 md:p-20 gap-10 lg:gap-0"
//         style={{ height: "90vh" }}
//       >
//         <form className="lg:p-20 lg:pt-0 md:w-2/3">
//           <h1 className=" text-2xl md:text-4xl mb-2 md:mb-5">Contact Us</h1>
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="text"
//               name="floating_name"
//               id="floating_name"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//               onChange={(e) => setName(e.target.value)}
//             />
//             <label
//               for="floating_name"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Full name
//             </label>
//           </div>
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="email"
//               name="floating_email"
//               id="floating_email"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <label
//               for="floating_email"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Email address
//             </label>
//           </div>
//           <div className="relative z-0 w-full mb-5 group">
//             <input
//               type="text"
//               name="floating_subject"
//               id="floating_subject"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//               placeholder=" "
//               required
//               onChange={(e) => setSubject(e.target.value)}
//             />
//             <label
//               for="floating_subject"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Subject
//             </label>
//           </div>

//           <div className="relative z-0 w-full mb-5 group">
//             <textarea
//               type="text"
//               name="floating_message"
//               id="floating_message"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer h-24 lg:h-36"
//               placeholder=" "
//               required
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <label
//               for="floating_message"
//               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//             >
//               Message
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Submit
//           </button>
//         </form>
//         <div className="flex flex-col gap-4">
//           <h1 className="text-2xl md:text-4xl mb-2 lg:mb-10">Contact Info</h1>
//           <div className="flex items-center space-x-5 mb-0 md:mb-5">
//             <TbWorldWww size={30} />
//             <p>{contactInfo.website}</p>
//           </div>
//           <div className="flex items-center space-x-5 mb-0 md:mb-5">
//             <MdEmail size={30} />
//             <p>{contactInfo.email}</p>
//           </div>
//           <div className="flex items-center space-x-5 mb-0 md:mb-5">
//             <BiPhone size={30} />
//             <p>{contactInfo.phone}</p>
//           </div>
//           <div className="flex items-center space-x-5 mb-0 md:mb-5">
//             <FaFax size={30} />
//             <p>{contactInfo.fax}</p>
//           </div>
//           <div className="flex items-center space-x-5 mb-0 md:mb-5">
//             <BiLocationPlus size={30} />
//             <p>{contactInfo.address}</p>
//           </div>
//         </div>
//       </div>
//       <div className="google-map-code w-full">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13286.264708969926!2d72.993001!3d33.6424888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9675aaaaaaab%3A0xc5180922c44eb86b!2sNational%20University%20of%20Sciences%20%26%20Technology%20(NUST)!5e0!3m2!1sen!2s!4v1724059407242!5m2!1sen!2s"
//           width="100%"
//           height="450"
//           frameborder="0"
//           style={{ border: 0 }}
//           allowfullscreen=""
//           aria-hidden="false"
//           tabindex="0"
//           loading="lazy"
//         />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Contact;

// import React, { useState } from "react";
// import { TbWorldWww } from "react-icons/tb";
// import { MdEmail } from "react-icons/md";
// import { BiPhone } from "react-icons/bi";
// import { FaFax } from "react-icons/fa";
// import { BiLocationPlus } from "react-icons/bi";
// import Footer from "../Components/footer";

// const contactInfo = {
//   website: "nstp.pk",
//   email: "info@nstp.pk",
//   phone: "+92 51 9085 6428",
//   fax: "+92 51 9085 6429",
//   address: "NSTP Secretariat, NUST H-12 Campus Islamabad, Pakistan",
// };

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   return (
//     <>
//       <div className="w-full mt-28 max-w-6xl mx-auto px-4 py-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
//           Contact
//         </h1>

//         <p className="mb-8 text-gray-700">
//           Thank you for your interest in NSTP. For general inquiries, please
//           contact us at communications@nstp.org.pk
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Form Section */}
//           <form className="w-full">
//             <div className="mb-6">
//               <input
//                 type="text"
//                 className="w-full p-2 border-b border-gray-300 focus:border-[#2fb344] focus:outline-none bg-transparent"
//                 placeholder="Full name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             <div className="mb-6">
//               <input
//                 type="email"
//                 className="w-full p-2 border-b border-gray-300 focus:border-[#2fb344] focus:outline-none bg-transparent"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="mb-6">
//               <input
//                 type="text"
//                 className="w-full p-2 border-b border-gray-300 focus:border-[#2fb344] focus:outline-none bg-transparent"
//                 placeholder="Subject"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//               />
//             </div>

//             <div className="mb-6">
//               <textarea
//                 className="w-full p-2 border-b border-gray-300 focus:border-[#2fb344] focus:outline-none bg-transparent resize-none"
//                 placeholder="Message"
//                 rows={4}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-primary text-white px-8 py-2 rounded hover:bg-[#28a33b] transition-colors"
//             >
//               Submit
//             </button>
//           </form>

//           {/* Contact Info Section */}
//           <div className="space-y-6">
//             <h2 className="text-xl font-medium mb-6">Contact Info</h2>

//             <div className="flex items-center space-x-4">
//               <TbWorldWww size={20} className="text-primary" />
//               <span className="text-gray-700">{contactInfo.website}</span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <MdEmail size={20} className="text-primary" />
//               <span className="text-gray-700">{contactInfo.email}</span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <BiPhone size={20} className="text-primary" />
//               <span className="text-gray-700">{contactInfo.phone}</span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <FaFax size={20} className="text-primary" />
//               <span className="text-gray-700">{contactInfo.fax}</span>
//             </div>

//             <div className="flex items-center space-x-4">
//               <BiLocationPlus size={20} className="text-primary" />
//               <span className="text-gray-700">{contactInfo.address}</span>
//             </div>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="mt-16">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13286.264708969926!2d72.993001!3d33.6424888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9675aaaaaaab%3A0xc5180922c44eb86b!2sNational%20University%20of%20Sciences%20%26%20Technology%20(NUST)!5e0!3m2!1sen!2s!4v1724059407242!5m2!1sen!2s"
//             width="100%"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             className="w-full"
//           />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Contact;

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
          <div className="flex items-center justify-center gap-4 mb-6 ">
            {/* <img src={nstp} alt="NSTP" className="w-16 h-16"/> */}
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
          </div>
          <p className="text-center text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Join Pakistan's premier science and technology ecosystem. We're here
            to help you innovate, grow, and succeed.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        {/* Contact Cards Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-24 animate-fade-up">
          <div className="bg-white p-8 w-[21rem] min-h-64 rounded-xl group shadow-lg  transition-transform hover:scale-105 duration-500">
            <div className="w-14 h-14 bg-black group-hover:scale-105  group-hover:bg-primary transition-transform duration-500 rounded-lg flex items-center justify-center mb-6">
              <BiPhone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">{contactInfo.phone}</p>
          </div>

          <div className="bg-white p-8 w-[21rem] min-h-64 rounded-xl group shadow-lg transition-transform hover:scale-105 duration-500">
            <div className="w-14 h-14 bg-black group-hover:scale-105 group-hover:bg-primary  transition-transform duration-500 rounded-lg flex items-center justify-center mb-6">
              <MdEmail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">{contactInfo.email}</p>
          </div>

          <div className="bg-white p-8 w-[21rem] min-h-64 rounded-xl group shadow-lg transition-transform hover:scale-105 duration-500">
            <div className="w-14 h-14 bg-black group-hover:scale-105 group-hover:bg-primary  transition-transform duration-500 rounded-lg flex items-center justify-center mb-6">
              <BiLocationPlus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600">{contactInfo.address}</p>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 mb-24">
          {/* Form Section */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">
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

        {/* Social Media Section */}
        <div className="text-center pb-24">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
