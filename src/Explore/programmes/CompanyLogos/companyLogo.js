import React from "react";

import LazyLoad from "../../../LazyLoad";
const CompanyLogo = ({ titleHollow, titleFilled, description }) => {
  const logos = [
    { name: "Avionics Solution", src: "/images/companieslogos/avionics solutions.png" },
    { name: "Craft", src: "/images/companieslogos/craft.png" },
    { name: "Data Bi", src: "/images/companieslogos/databi.png" },
    { name: "GIS Plus", src: "/images/companieslogos/GISPLUS.png" },
    { name: "Hato Argicultural Lighting", src: "/images/companieslogos/hato.webp" },
    { name: "Hexler Tech", src: "/images/companieslogos/HEXLER.png" },
    { name: "ILM International Learning Machine", src: "/images/companieslogos/ilm.png" },
    { name: "Zambeel", src: "/images/companieslogos/zambeel.png" },
    { name: "Trust ID", src: "/images/companieslogos/truid_logo_main.png" },
    { name: "Zaytrics Innovation Starts Here", src: "/images/companieslogos/zytrics.png" },
    // { name: 'Hawkins', src: '/api/placeholder/200/100' },
    // { name: 'Grant Thornton', src: '/api/placeholder/200/100' }
  ];

  return (
    <div className=" mx-auto   ">
      <h1 className="text-xl lg:text-3xl mb-4 flex flex-col md:flex-row items-center justify-center lg:gap-2 font-extrabold leading-none tracking-tight">
        <span
          className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
          style={{
            WebkitTextStroke: "1px #000000",
            textStroke: "1px #000000",
          }}
        >
          {titleHollow}
        </span>{" "}
        <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
          {titleFilled}
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
        </span>
      </h1>
      <p className=" md:max-w-5xl mx-auto text-base  text-justify md:text-center text-gray-500  mb-8">
        {description}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:max-w-7xl mx-auto">
        {logos.map((logo, index) => (
          <div className="relative group bg-white h-44 md:h-48 md:w-48 lg:h-56 w-44 lg:w-56 rounded-lg border p-4">
            {/* Card content wrapper */}
            <div className="relative aspect-square flex items-center justify-center">
              {/* Logo image */}
             
              <LazyLoad
                imageSrc={logo.src}
                imageAlt={`${logo.name} logo`}
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
