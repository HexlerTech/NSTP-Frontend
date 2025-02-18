import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, ChevronRight } from "lucide-react";
import data from "./data";
import Footer from "../Components/footer";
import Animation from "../Animation";

const Tenants = () => {
  const [floors, setFloors] = useState([]);
  const [activeFloor, setActiveFloor] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const floors = data.map((tenant) => tenant.floor);
    setFloors([...new Set(floors)]);
  }, []);

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
    <div className="min-h-screen mt-[70px] bg-white relative">
      {/* Fixed Background */}
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: `url("/images/exploreNSTP/nstpimage2.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: -1,
        }}
      />

      {/* Background Overlay */}
      <div
        className="fixed inset-0 bg-black/40"
        style={{ zIndex: -1 }}
      />

      {/* Hero Section */}
      <div className="relative bg-black text-white py-32 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
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

       
        <div className="relative max-w-7xl mx-auto ">
          <div className="flex items-center justify-center gap-4 mb-4">
          <Animation>
            <h1 className="text-xl lg:text-3xl flex items-center justify-center gap-4 font-extrabold leading-none tracking-tight">
              <span
                className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
                style={{
                  WebkitTextStroke: "1px #ffffff",
                  textStroke: "1px #ffffff",
                }}
              >
                OUR
              </span>
              <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
                TENANTS
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
              </span>
            </h1>
            </Animation>
          </div>
          <Animation>
          <p className="text-center text-md md:text-lg text-gray-300 max-w-2xl mx-auto">
            Home to over 80 innovative companies pushing the boundaries of technology
          </p>
        </Animation>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <Animation>
        <div className="mb-12 space-y-6 ">
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
              className={`px-6 py-2 rounded-full transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out ${activeFloor === "All"
                ? "bg-primary text-white"
                : "bg-black hover:bg-primary text-white"
                }`}
              onClick={() => setActiveFloor("All")}
            >
              All Floors
            </button>
            {floors.map((floor) => (
              <button
                key={floor}
                className={`px-6 py-2 rounded-full transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out ${activeFloor === floor
                  ? "bg-primary text-white"
                  : "bg-black hover:bg-primary text-white"
                  }`}
                onClick={() => setActiveFloor(floor)}
              >
                {floor}
              </button>
            ))}
          </div>
        </div>
        </Animation>
        {/* Companies Grid */}
        <Animation>
        {Object.keys(groupedTenants).map((wing) => (
          <div
            key={wing}
            className="mb-16 "
          >
            <div className="flex items-center mb-8 bg-gradient-to-r from-black to-black/50 p-4 rounded-2xl">
              <span
                className="font-bold text-4xl block relative"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px #ffffff",
                  textStroke: "1px #ffffff",
                }}
              >
                {wing}
                <span className="inline-block w-2 h-2 bg-primary ml-1 rounded-full align-baseline" />
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {groupedTenants[wing].map((tenant) => (
                <motion.div
                  key={tenant.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 opacity-90 w-[25rem] min-h-40 rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-primary/20 transition-colors"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src="/images/Hexler Logo.png"
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
                        <p className="text-sm text-white bg-black/80 px-4 py-1 rounded-3xl text-center mt-1">
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
        </Animation>
      </div>
      <Footer />
    </div>
  );
};

export default Tenants;