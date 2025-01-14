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
    <>
      <div className="w-full mt-28 max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Contact
        </h1>

        <p className="mb-8 text-gray-700">
          Thank you for your interest in NSTP. For general inquiries, please
          contact us at communications@nstp.org.pk
        </p>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 ">
          {/* Form Section */}
          <form className="w-full">
            <div className="mb-6">
              <input
                type="text"
                className="w-full p-2 border-b border-gray-300 focus:border-[#2fb344] focus:outline-none bg-transparent"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="email"
                className="w-full p-2 border-b border-gray-300 focus:border-[#2fb344] focus:outline-none bg-transparent"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="w-full p-2 border-b border-gray-300 focus:border-[#2fb344] focus:outline-none bg-transparent"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <textarea
                className="w-full p-2 border-b border-gray-300 focus:border-[#2fb344] focus:outline-none bg-transparent resize-none"
                placeholder="Message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-8 py-2 rounded hover:bg-[#28a33b] transition-colors"
            >
              Submit
            </button>
          </form>

          {/* Contact Info Section */}
          <div className=" flex flex-col sm:flex-row gap-3  md:gap-44 ">
            <h2 className="text-2xl font-semibold w-52 block md:hidden  text-gray-900 mb-4">
              Contact Info
            </h2>
            <div className="flex flex-col space-y-6 max-w-md w-full">
              <div className="flex items-center space-x-4">
                <div className="w-5 flex-shrink-0">
                  <TbWorldWww size={20} className="text-primary" />
                </div>
                <span className="text-gray-700 flex-1">
                  {contactInfo.website}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-5 flex-shrink-0">
                  <MdEmail size={20} className="text-primary" />
                </div>
                <span className="text-gray-700 flex-1">
                  {contactInfo.email}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-5 flex-shrink-0">
                  <BiPhone size={20} className="text-primary" />
                </div>
                <span className="text-gray-700 flex-1">
                  {contactInfo.phone}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-5 flex-shrink-0">
                  <FaFax size={20} className="text-primary" />
                </div>
                <span className="text-gray-700 flex-1">{contactInfo.fax}</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-5 flex-shrink-0">
                  <BiLocationPlus size={20} className="text-primary" />
                </div>
                <span className="text-gray-700 flex-1">
                  {contactInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visit Us Section */}
        <div className="mt-9 sm:mt-16 flex flex-col sm:flex-row gap-3 sm:gap-20 md:gap-52 ">
          <h2 className="text-2xl font-semibold w-44  text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-gray-700  w-full">
            NSTP is located in the heart of Islamabad's technology district. We
            are easily accessible from all major routes and just a 15-minute
            drive from Islamabad International Airport.
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="mt-9 sm:mt-16  flex flex-col sm:flex-row gap-3 sm:gap-20  md:gap-52 ">
          <h2 className="text-2xl font-semibold w-44  text-gray-900 mb-4">
            Follow Us
          </h2>
          <div className="flex flex-col w-full ">
            <p className="text-gray-700 mb-6 ">
              If you are interested to stay up-to-date on NSTP's activities, we
              invite you to follow us on our social media channels.
            </p>
            <div className="flex space-x-4 ">
              <a
                href="#"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaFacebookF size={20} className="text-primary" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaTwitter size={20} className="text-primary" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaInstagram size={20} className="text-primary" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaYoutube size={20} className="text-primary" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <FaLinkedinIn size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13286.264708969926!2d72.993001!3d33.6424888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9675aaaaaaab%3A0xc5180922c44eb86b!2sNational%20University%20of%20Sciences%20%26%20Technology%20(NUST)!5e0!3m2!1sen!2s!4v1724059407242!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
