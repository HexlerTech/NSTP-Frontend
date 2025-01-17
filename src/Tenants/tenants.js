// import React, { useState, useEffect } from "react";
// import nstp from "../Assets/nstp.png";
// import data from "./data";
// import hexlerLogo from "../Assets/Hexler Logo.png";

// const Tenants = () => {
//   //get the floors from the data
//   const [floors, setFloors] = useState([]);
//   const [activeFloor, setActiveFloor] = useState("All");

//   useEffect(() => {
//     const floors = data.map((tenant) => tenant.floor);
//     setFloors([...new Set(floors)]);
//   }, []);

//   // Group tenants by wing
//   const groupedTenants = data.reduce((acc, tenant) => {
//     if (tenant.floor === activeFloor || activeFloor === "All") {
//       if (!acc[tenant.wing]) {
//         acc[tenant.wing] = [];
//       }
//       acc[tenant.wing].push(tenant);
//     }
//     return acc;
//   }, {});

//   return (
//     <div className="p-6 md:p-14 lg:p-20 mt-28">
//       <h1 className="mb-5 lg:mb-10 text-2xl  lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-center flex md:flex-row flex-col md:gap-4 items-center">
//         <img src={nstp} alt="nstp" className="w-12" />
//         <span className="text-primary lg:mt-1">NSTP</span>
//         <span className="lg:mt-1"> IS HOME TO</span>{" "}
//         <span className="text-primary lg:mt-1">OVER 80 COMPANIES</span>{" "}
//       </h1>
//       <button
//         className={`bg-black text-white p-2 px-3 md:px-10 mt-2 rounded-lg mr-1 md:mr-5 ${
//           activeFloor === "All" ? "bg-primary" : "hover:bg-primary"
//         }`}
//         onClick={() => setActiveFloor("All")}
//       >
//         All
//       </button>
//       {
//         //display the floors
//         floors.map((floor) => (
//           <button
//             key={floor}
//             className={`bg-black text-white p-2 px-3 md:px-10 mt-2 rounded-lg mr-1 md:mr-5 ${
//               activeFloor === floor ? "bg-primary" : "hover:bg-primary"
//             }`}
//             onClick={() => setActiveFloor(floor)}
//           >
//             {floor}
//           </button>
//         ))
//       }
//       <div className="mt-10">
//         {Object.keys(groupedTenants).map((wing) => (
//           <div key={wing} className="mb-10">
//             <div
//               className="flex items-center w-full mb-5 rounded-xl lg:rounded-2xl p-2 md:p-7 justify-end"
//               style={{
//                 background: "linear-gradient(to right, #a7f3d0, #90C74B)",
//               }}
//             >
//               <h2 className="text-2xl ml-10 mb-0 hollow-text4">{wing}</h2>
//             </div>
//             <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 items-center">
//               {groupedTenants[wing].map((tenant) => (
//                 <div
//                   key={tenant.name}
//                   className="flex items-center gap-4 p-4 rounded-xl lg:rounded-2xl shadow-md lg:shadow-xl border h-36"
//                 >
//                   <img
//                     src={hexlerLogo}
//                     alt="tenant"
//                     className="w-20 h-20 rounded-full"
//                   />
//                   <div className="flex flex-col gap-1 lg:gap-3 ">
//                     <h1 className="text-lg lg:text-xl leading-none font-semibold lg:font-bold md:text-sm">
//                       {tenant.name}
//                     </h1>

//                     {tenant.website && (
//                       <a
//                         href={tenant.website}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="text-sm text-primary underline"
//                       >
//                         Visit Website {">"}
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tenants;



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building2, Globe, ChevronRight } from "lucide-react";
import nstp from "../Assets/nstp.png";
import data from "./data";
import hexlerLogo from "../Assets/Hexler Logo.png";

const Tenants = () => {
  const [floors, setFloors] = useState([]);
  const [activeFloor, setActiveFloor] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const floors = data.map((tenant) => tenant.floor);
    setFloors([...new Set(floors)]);
  }, []);

  // Group and filter tenants by wing and search term
  const groupedTenants = data.reduce((acc, tenant) => {
    if (
      (tenant.floor === activeFloor || activeFloor === "All") &&
      tenant.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      if (!acc[tenant.wing]) {
        acc[tenant.wing] = [];
      }
      acc[tenant.wing].push(tenant);
    }
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 mt-[70px]">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-32 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          {/* Animated circles background */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                width: Math.random() * 100 + 50 + "px",
                height: Math.random() * 100 + 50 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 10 + 5}s infinite linear`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto animate-fade-up ">
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* <img src={nstp} alt="NSTP" className="w-16 h-16"/> */}
            <h1 className="text-xl lg:text-3xl    flex items-center justify-center  gap-4 font-extrabold leading-none tracking-tight">
              <span
                className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
                style={{
                  WebkitTextStroke: "1px #ffffff",
                  textStroke: "1px #ffffff",
                }}
              >
                OUR
              </span>{" "}
              <span className="text-primary text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
                TENANTS
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-white ml-1 rounded-full align-baseline"></span>
              </span>
            </h1>
          </div>
          <p className="text-center text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Home to over 80 innovative companies pushing the boundaries of
            technology
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 ">
        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6 animate-fade-up">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <div className="absolute right-3 top-3 text-gray-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={`px-6 py-2 rounded-full transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out ${
                activeFloor === "All"
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setActiveFloor("All")}
            >
              All Floors
            </button>
            {floors.map((floor) => (
              <button
                key={floor}
                className={`px-6 py-2 rounded-full transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out ${
                  activeFloor === floor
                    ? "bg-primary text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFloor(floor)}
              >
                {floor}
              </button>
            ))}
          </div>
        </div>

        {/* Companies Grid */}
        {Object.keys(groupedTenants).map((wing) => (
          <div
            key={wing}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 animate-fade-up"
          >
            <div className="flex items-center mb-8 bg-gradient-to-r from-primary  to-primary/50 p-4 rounded-2xl">
              {/* <Building2 className="w-8 h-8 text-white mr-4" /> */}
              <span
        className="font-bold text-4xl block relative"
        style={{
          color: 'transparent',
          WebkitTextStroke: '1px #000000',
          textStroke: '1px #000000',
        }}
      >
        {wing}
        <span className=" inline-block w-2 h-2  bg-white ml-1 rounded-full align-baseline" />
      </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {groupedTenants[wing].map((tenant) => (
                <motion.div
                  key={tenant.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white w-[25rem] min-h-40 rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-primary/20 transition-colors"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={hexlerLogo}
                          alt={tenant.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg leading-tight">
                          {tenant.name}
                        </h3>
                      </div>
                    </div>

                    {tenant.website && (
                      <div className="flex items-center justify-between">
                        <a
                          href={tenant.website}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center text-primary hover:text-primary-dark"
                        >
                          <Globe className="w-4 h-4 mr-1" />
                          Visit Website
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                        <p className="text-sm text-white bg-black/80 px-4 py-1  rounded-3xl text-center mt-1">
                          {tenant.floor}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tenants;
