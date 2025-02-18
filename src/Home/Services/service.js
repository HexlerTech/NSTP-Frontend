import React, { useState, useEffect } from "react";
import { FiAnchor } from "react-icons/fi";
import { FaSeedling } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineCalendar } from "react-icons/hi";
import { FaRegBuilding } from "react-icons/fa";
import { GiLightBulb } from "react-icons/gi";

// import workers from "../../Assets/workers.png";


const services = [
  {
    id: 1,
    title: "Anchor Tenants",
    icon: <FiAnchor />,
    description:
      "If you are a large corporation, whether national or international, that has the capacity and reputation to act as an anchor tenant for a science and technology park, NSTP offers you distinctive space and opportunities to join our prestigious community.",
  },
  {
    id: 2,
    title: "High-Tech SMEs",
    icon: <FaSeedling />,
    description:
      "If you are a high-tech small or medium enterprise, that has the drive to climb the innovative ladder and play its part in propelling the knowledge economy of the country, NSTP offers you a host of services and opportunities if you are chosen as a tenant.",
  },
  {
    id: 3,
    title: "Startups",
    icon: <AiFillStar />,
    description:
      "If you are a budding high-tech startup with an innovative idea and a kick-ass team, NSTP not only offers you subsidized space but also the possibility of investment from its esteemed angel investor network. The opportunities are endless!",
  },
  {
    id: 4,
    title: "Meeting Rooms",
    icon: <HiOutlineCalendar />,
    description:
      "NSTP provides state-of-the-art meeting rooms equipped with the latest technology for all your business discussions and presentations. Whether it's a small meeting or a large conference, we've got you covered.",
  },
  {
    id: 5,
    title: "Seminar Hall",
    icon: <FaRegBuilding />,
    description:
      "Our spacious seminar hall is perfect for hosting workshops, seminars, and large gatherings. With modern audio-visual facilities and seating arrangements, NSTP ensures a productive environment for your events.",
  },
  {
    id: 6,
    title: "Innovation Centers",
    icon: <GiLightBulb />,
    description:
      "NSTP's Innovation Centers are designed to foster creativity and collaboration. These centers offer cutting-edge resources and facilities to help turn your innovative ideas into reality.",
  },
];




const Service = () => {
  const windowHeight = window.innerHeight;

  const containerStyle = {
    width: "100%",
    height: `${windowHeight * 0.0900935961}px`,
    backgroundColor: "black",
    borderTopLeftRadius: "100% 100%",
    borderTopRightRadius: "100% 100%",
    overflow: "hidden", // To hide content that overflows due to the curved corners
  };

  return (
    // <div className="sm:mt-32 lg:mt-48 md:mt-28">
    //   <div className="hidden lg:block" style={containerStyle}></div>
    //   <div className="bg-black">
    //     <div className="flex flex-col items-center bg-black w-full relative top-0">
    //       <img
    //         src={workers}
    //         alt="workers"
    //         className=" w-5/6 sm:w-2/3 lg:w-2/3 absolute -top-10 sm:-top-20 lg:-top-44"
    //       />
    //     </div>
    //     <div className="flex flex-col relative items-center bg-black w-full mt-28 sm:mt-36">
    //       <p className="text-sm lg:text-xl italic text-primary text-center mt-10 mb-10">
    //         Ready to power your business? <br></br> NSTP offers a range of
    //         services to help you innovate and grow.
    //       </p>
    //       <h1 className="text-2xl lg:text-6xl text-white text-center">What We Offer</h1>
    //       <div className="bg-black text-white mb-5 p-6 sm:p-16 lg:p-20 pt-0 pb-0 min-h-screen flex items-center">
    //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-10">
    //           {services.map((service) => {
    //             return (
    //               <div key={service.id} className="p-3">
    //                 <div className="flex items-center space-x-3">
    //                   <p className="text-2xl text-primary">{service.icon}</p>
    //                   <h2 className="text-lg lg:text-2xl font-semibold text-black-600">
    //                     {service.title}
    //                   </h2>
    //                 </div>
    //                 <p className="text-md lg:text-xl font-light">{service.description}</p>
    //               </div>
    //             );
    //           })}
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </div>
    <div>

    </div>
  );
};

export default Service;
