// import React from "react";
// import aspalogo from "../Assets/logos/aspalogo.jpg";
// import iasplogo from "../Assets/logos/iasplogo.png";
// import iAcceleratelogo from "../Assets/logos/iAccelerateLogo.png";
// import ibichinalogo from "../Assets/logos/ibi-chinalogo.png";
// import INSTPlogo from "../Assets/logos/INSTPlogo.png";
// import WTAlogo from "../Assets/logos/WTAlogo.jpg";
// import Footer from "../Components/footer";

// const data = [
//   {
//     name: "International Association of Science Parks (IASP)",
//     logo: iasplogo,
//     description:
//       "IASP is a worldwide network of Science & Technology Parks having 347 members from 77 countries. NSTP is the only full member of IASP from Pakistan.",
//   },
//   {
//     name: "World Technopolis Association (WTA)",
//     logo: WTAlogo,
//     description:
//       "WTA is a multilateral international organisation created with the purpose to connect the advancement of science and technology with local development. NSTP is the only associate member of WTA from Pakistan.",
//   },
//   {
//     name: "Asia Science Park Association (ASPA)",
//     logo: aspalogo,
//     description:
//       " ASPA is an international nongovernmental organization established in Japan in 1997 for the purpose of accomplishing the joint development in the fields of scientific technology, industry and economy in the Asian region.",
//   },
//   {
//     name: "Inter-Islamic Network on Science & Technology Parks (INSTP)",
//     logo: INSTPlogo,
//     description:
//       "INSTP is a platform for technological development among Muslim countries. NSTP is member for INSTP as well as the only Pakistani member of its Executive Council.",
//   },
//   {
//     name: "International Business Incubator (IBI) Beijing, China",
//     logo: ibichinalogo,
//     description:
//       "International Business Incubator (IBI) Beijing, China also known as Zhongguancun Science and Technology Park.  It is the most intensive scientific, education and talent resource base in China.",
//   },
//   {
//     name: "iAccelerate, Wollongong, Australia",
//     logo: iAcceleratelogo,
//     description:
//       "iAccelerate one of the leading and unique business accelerator and incubator program run by the University of Wollongong (UOW)). It’s a thriving community of like-minded entrepreneurs with vision, purpose and passion, offering a unique eco-system with exceptional education, mentoring and support.",
//   },
// ];

// const Partnerships = () => {
//   return (
//     <div>
//       <div className="mt-28 p-6 md:p-14 lg:p-20">
//         <h1 className="text-2xl lg:text-4xl mb-5">
//           Associations & Partnerships
//         </h1>
//         <p className="text-gray-700 text-justify mb-10">
//           NSTP is member and in strategic Alliance with the following
//           International organizations
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//           {data.map((item) => (
//             <div className="p-5 lg:p-10 rounded-lg border-2">
//               <div className="h-36 flex justify-center lg:justify-start items-center">
//                 <img src={item.logo} alt={item.name} className="h-20" />
//               </div>
//               <h1 className="text-2xl font-bold">{item.name}</h1>
//               <p className="text-gray-700 text-justify mt-2">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Partnerships;import React from "react";

import React from "react";
import GoogleCloud from "../Assets/partners/google-cloud.png";
import AWS from "../Assets/partners/aws.png";
import NAMA from "../Assets/partners/nama.png";
import IASP from "../Assets/partners/iasp.png";
import NUST from "../Assets/partners/NUST.png";
import PakLaunch from "../Assets/partners/paklaunch.png";
import UBank from "../Assets/partners/U-Bank.png";
import USEmbassy from "../Assets/partners/us-embassy.png";
import ZaynVC from "../Assets/partners/zayn-vc.png";
import Footer from "../Components/footer";

const Partnerships = () => {
  const data = [
    {
      name: "Google Cloud",
      logo: GoogleCloud,
      description: "A suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products. Offering cutting-edge technology solutions for businesses of all sizes.",
    },
    {
      name: "Amazon Web Services (AWS)",
      logo: AWS,
      description: "A comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Leading the cloud computing industry with innovative solutions.",
    },
    {
      name: "NAMA",
      logo: NAMA,
      description: "NAMA Group is a leading organization in Pakistan focused on innovation and technological advancement, providing diverse solutions and services across multiple sectors.",
    },
    {
      name: "IASP",
      logo: IASP,
      description: "International Association of Science Parks and Areas of Innovation, connecting science parks worldwide and fostering innovation ecosystems globally.",
    },
    {
      name: "NUST",
      logo: NUST,
      description: "National University of Sciences & Technology, one of Pakistan's premier institutions of science and technology education, driving research and innovation.",
    },
    {
      name: "PakLaunch",
      logo: PakLaunch,
      description: "A pioneering platform connecting Pakistani startups with investors and resources globally, fostering the growth of Pakistan's startup ecosystem.",
    },
    {
      name: "U Microfinance Bank",
      logo: UBank,
      description: "A leading microfinance institution in Pakistan, providing innovative financial solutions and supporting economic growth through accessible banking services.",
    },
    {
      name: "U.S. Embassy Islamabad",
      logo: USEmbassy,
      description: "The diplomatic mission of the United States in Pakistan, fostering bilateral relations and supporting collaborative initiatives in technology, education, and innovation.",
    },
    {
      name: "Zayn Capital Ventures",
      logo: ZaynVC,
      description: "A venture capital firm investing in high-potential Pakistani startups, driving innovation and supporting the growth of technology-driven businesses in the region.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}

      <div className="relative h-96 overflow-hidden bg-gradient-to-br mt-[70px] from-black via-black to-black/80">
        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
        linear-gradient(45deg, rgba(0, 0, 255, 0.1) 0%, transparent 100%)
      `,
          }}
        />

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                         linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0">
          <div
            className="absolute w-4 h-4 rounded-full bg-primary opacity-10 animate-pulse"
            style={{ top: "20%", left: "30%" }}
          />
          <div
            className="absolute w-3 h-3 rounded-full bg-primary opacity-10 animate-pulse delay-100"
            style={{ top: "60%", left: "70%" }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-primary opacity-10 animate-pulse delay-200"
            style={{ top: "40%", left: "50%" }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto  animate-fade-up flex items-center justify-center h-full flex-col">
          <div className="flex items-center justify-center gap-4 mb-4">
            {/* <img src={nstp} alt="NSTP" className="w-16 h-16"/> */}
            <h1 className="text-xl lg:text-3xl    flex items-center justify-center  gap-4 font-extrabold leading-none tracking-tight">
              <span
                className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
                style={{
                  WebkitTextStroke: "1px #ffffff",
                  textStroke: "1px #ffffff",
                }}
              >
                GLOBAL
              </span>{" "}
              <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
                PARTNERSHIPS
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
              </span>
            </h1>
          </div>
          <p className="text-center text-md md:text-lg text-gray-300 max-w-2xl mx-auto">
            NSTP is member and in strategic Alliance with leading international
            organizations, fostering innovation and technological advancement
            across borders.
          </p>
        </div>
        {/* <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
      Global <span className="text-green-400">Partnerships</span>
    </h1>
    <p className="text-xl text-gray-300 max-w-3xl">
      NSTP is member and in strategic Alliance with leading international organizations,
      fostering innovation and technological advancement across borders.
    </p>
  </div> */}
      </div>

      {/* // Partners Grid Section */}
<div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 animate-fade-up">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {data.map((item, index) => (
      <div
        key={index}
        className="group relative h-96 overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl"
      >
        {/* Initial Content */}
        <div className="absolute inset-0 w-full h-full p-6 flex flex-col items-center justify-center bg-gray-50 opacity-100 group-hover:opacity-0 transition-all duration-500">
          <div className="w-full h-32 flex items-center justify-center mb-6">
            <img
              src={item.logo}
              alt={item.name}
              className="h-24 object-contain transform group-hover:scale-90 transition-transform duration-500"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 text-center">
            {item.name}
          </h3>
        </div>

        {/* Hover Content with Modern Background */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-500">
          {/* Base Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black">
            {/* Animated Wave Pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                  <stop offset="50%" stopColor="rgba(16, 185, 129, 0.5)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.5)" />
                </linearGradient>
                <pattern id="wave-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <path d="M 0 100 Q 50 50 100 100 Q 150 150 200 100" fill="none" stroke="url(#wave-gradient)" strokeWidth="0.5">
                    <animate attributeName="d" 
                      dur="10s" 
                      repeatCount="indefinite"
                      values="
                        M 0 100 Q 50 50 100 100 Q 150 150 200 100;
                        M 0 100 Q 50 150 100 100 Q 150 50 200 100;
                        M 0 100 Q 50 50 100 100 Q 150 150 200 100"
                    />
                  </path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wave-pattern)">
                <animate attributeName="opacity" values="0.3;0.5;0.3" dur="5s" repeatCount="indefinite" />
              </rect>
            </svg>

            {/* Glowing Dots */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `floatingDot ${4 + i}s ease-in-out infinite`,
                    opacity: 0.4,
                  }}
                />
              ))}
            </div>

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
          </div>

          {/* Content Container */}
          <div className="relative h-full p-6 flex flex-col justify-center z-10 bg-gradient-to-b from-transparent via-black/10 to-black/10">
            <h3 className="text-2xl font-semibold text-white text-center mb-6 
                         transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                         transition-all duration-500">
              {item.name}
            </h3>
            
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6 
                          transform scale-x-0 group-hover:scale-x-100 
                          transition-transform duration-500 delay-100" />
            
            <p className="text-gray-200 text-sm leading-relaxed text-center
                         transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                         transition-all duration-500 delay-200">
              {item.description}
            </p>
          </div>
        </div>

        {/* Animation Keyframes */}
        <style jsx>{`
          @keyframes floatingDot {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.4;
            }
            50% {
              transform: translate(10px, -10px) scale(1.5);
              opacity: 0.6;
            }
          }
        `}</style>
      </div>
    ))}
  </div>
</div>
      <Footer />
    </div>
  );
};

export default Partnerships;
