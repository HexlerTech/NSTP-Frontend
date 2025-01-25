import React, { useState } from 'react';
import { motion } from 'framer-motion';
import avionicsSolution from "../../Assets/companieslogos/avionics solutions.png";
import craft from "../../Assets/companieslogos/craft.png";
import databi from "../../Assets/companieslogos/databi.png";
import GISPLUS from "../../Assets/companieslogos/GISPLUS.png";
import hato from "../../Assets/companieslogos/hato.webp";
import HEXLER from "../../Assets/companieslogos/HEXLER.png";
import ilm from '../../Assets/companieslogos/ilm.png';
import zambeel from '../../Assets/companieslogos/zambeel.png';
import truid from '../../Assets/companieslogos/truid_logo_main.png';
import zytrics from '../../Assets/companieslogos/zytrics.png';
import Animation from '../../Animation';


const Companies = () => {
  const [hoveredCompany, setHoveredCompany] = useState(null);

  // Using your company data
  const companyNames = [
    { name: "Avionics Solution", logo: avionicsSolution },
    { name: "Craft", logo: craft },
    { name: "Databi", logo: databi },
    { name: "GISPLUS", logo: GISPLUS },
    { name: "Hato", logo: hato },
    { name: "HEXLER", logo: HEXLER },
    { name: "ILM", logo: ilm },
    { name: "Zambeel", logo: zambeel },
    { name: "Truid", logo: truid },
    { name: "Zaytrics", logo: zytrics }
  ];


  return (
    <div className="h-fit bg-black p-6 md:p-12  lg:p-24">
      <div className="container mx-auto px-4">
      <Animation>
        <div className="text-center mb-16 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="text-transparent" style={{
              WebkitTextStroke: "1px #ffffff",
              textStroke: "1px #ffffff",
            }}>
              HOME TO
            </span>{" "}
            <span className="text-white">
              100+ COMPANIES
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
       </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base text-justify md:text-center text-gray-300 mb-8">
            Large multinational corporations (MNCs), startups, small and medium-sized enterprises (SMEs), and research and development (R&D) houses from all around the world
          </p>
        </div>
        </Animation>
        <div className="max-w-7xl mx-auto ">
        <Animation>
          <motion.div 
            className="flex items-center justify-center flex-wrap gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {companyNames.map((company, index) => (
              <motion.div
                key={index}
                className="relative bg-white bg-opacity-5 w-44 sm:w-56 rounded-lg p-6 h-24 sm:h-32 flex items-center justify-center group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredCompany(index)}
                onHoverEnd={() => setHoveredCompany(null)}
              >
                <motion.img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-16 object-contain filter brightness-0 invert transition-all duration-300 group-hover:brightness-100 group-hover:invert-0"
                />
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ opacity: hoveredCompany === index ? 1 : 0 }}
                >
                  <span className="text-white text-sm font-medium">{company.name}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default Companies;