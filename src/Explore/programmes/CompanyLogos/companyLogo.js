import React from "react";

import avionicsSolution from "../../../Assets/companieslogos/avionics solutions.png";
import craft from "../../../Assets/companieslogos/craft.png";
import databi from "../../../Assets/companieslogos/databi.png";
import GISPLUS from "../../../Assets/companieslogos/GISPLUS.png";
import hato from "../../../Assets/companieslogos/hato.webp";
import HEXLER from "../../../Assets/companieslogos/HEXLER.png";
import ilm from "../../../Assets/companieslogos/ilm.png";
import zambeel from "../../../Assets/companieslogos/zambeel.png";
import truid from "../../../Assets/companieslogos/truid_logo_main.png";
import zytrics from "../../../Assets/companieslogos/zytrics.png";
const CompanyLogo = ({ title, description }) => {
  const logos = [
    { name: "Avionics Solution", src: avionicsSolution },
    { name: "Craft", src: craft },
    { name: "Data Bi", src: databi },
    { name: "GIS Plus", src: GISPLUS },
    { name: "Hato Argicultural Lighting", src: hato },
    { name: "Hexler Tech", src: HEXLER },
    { name: "ILM International Learning Machine", src: ilm },
    { name: "Zambeel", src: zambeel },
    { name: "Trust ID", src: truid },
    { name: "Zaytrics Innovation Starts Here", src: zytrics },
    // { name: 'Hawkins', src: '/api/placeholder/200/100' },
    // { name: 'Grant Thornton', src: '/api/placeholder/200/100' }
  ];

  return (
    <div className="container mx-auto p-3 sm:p-8 mt-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
        {title}
      </h2>
      <p className="sm:text-center text-justify  text-gray-600 mb-16">{description}</p>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {logos.map((logo, index) => (
          <div className="relative group bg-white h-44 w-44 rounded-lg border p-4">
            {/* Card content wrapper */}
            <div className="relative aspect-square flex items-center justify-center">
              {/* Logo image */}
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="w-full h-full object-contain"
              />

              {/* Overlay that appears on hover */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#59aa30] to-[#a3df61] flex flex-col items-center justify-center opacity-0 scale-x-110 scale-y-125 origin-center transition-all duration-200 ease-out group-hover:opacity-100">
                <span className="text-white font-semibold px-2 text-center text-base transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
                  {logo.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
