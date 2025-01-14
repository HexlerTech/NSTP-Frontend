import React from "react";
import {
  FaRocket,
  FaChartPie,
  FaHandshake,
  FaUsers,
  FaGlobe,
  FaFlag
} from "react-icons/fa";

const steps = [
  { 
    title: "Program Launch", 
    icon: <FaRocket />, 
    month: "Month 1" 
  },
  {
    title: "Growth Strategy Development",
    icon: <FaChartPie />,
    month: "Month 2"
  },
  { 
    title: "Strategic Partnerships", 
    icon: <FaHandshake />, 
    month: "Month 3" 
  },
  { 
    title: "Investor Connect", 
    icon: <FaUsers />, 
    month: "Month 4" 
  },
  { 
    title: "International Expansion", 
    icon: <FaGlobe />, 
    month: "Month 5" 
  },
  { 
    title: "Demo Day", 
    icon: <FaFlag />, 
    month: "Month 6" 
  }
];

const Timeline = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex md:min-h-[11rem] flex-col items-center w-full md:w-1/6">
          <div className="flex items-center w-full justify-center">
            {/* Timeline Line */}
            {index > 0 && (
              <div className="hidden md:block h-1 w-full bg-gray-400"></div>
            )}

            {/* Step Circle with Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shrink-0">
              {step.icon}
            </div>

            {/* Timeline Line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block h-1 w-full bg-gray-400"></div>
            )}
          </div>

          {/* Vertical Line for Mobile */}
          {index < steps.length - 1 && (
            <div className="md:hidden h-8 w-1 bg-gray-400 my-2"></div>
          )}

          {/* Step Title */}
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.month}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Timeline;