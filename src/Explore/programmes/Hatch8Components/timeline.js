// // Timeline.js
// import React from "react";
// import {
//   FaChalkboardTeacher,
//   FaLightbulb,
//   FaBook,
//   FaUsers,
//   FaGraduationCap,
// } from "react-icons/fa";

// const steps = [
//   { title: "Orientation", icon: <FaLightbulb />, month: "Month 1" },
//   {
//     title: "Mentorship and Coaching",
//     icon: <FaChalkboardTeacher />,
//     month: "Month 2",
//   },
//   { title: "Curriculum Sessions", icon: <FaBook />, month: "Month 3" },
//   { title: "Workshops and CEO Insights", icon: <FaUsers />, month: "Month 4" },
//   { title: "Graduation", icon: <FaGraduationCap />, month: "Month 5" },
// ];

// const Timeline = () => {
//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 py-8">
//     <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-4">
//       {steps.map((step, index) => (
//         <div key={index} className="flex   md:min-h-[11rem] flex-col items-center w-full md:w-1/5">
//           <div className="flex items-center w-full justify-center">
//             {/* Timeline Line */}
//             {index > 0 && (
//               <div className="hidden md:block h-1 w-full bg-gray-400"></div>
//             )}

//             {/* Step Circle with Icon */}
//             <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shrink-0">
//               {step.icon}
//             </div>

//             {/* Timeline Line */}
//             {index < steps.length - 1 && (
//               <div className="hidden md:block h-1 w-full bg-gray-400"></div>
//             )}
//           </div>

//           {/* Vertical Line for Mobile */}
//           {index < steps.length - 1 && (
//             <div className="md:hidden h-8 w-1 bg-gray-400 my-2"></div>
//           )}

//           {/* Step Title */}
//           <div className="text-center mt-4">
//             <h3 className="text-lg font-semibold">{step.title}</h3>
//             <p className="text-gray-500 text-sm">{step.month}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );
// };
 
// export default Timeline;

import React from "react";
import { Lightbulb, BookOpen, Users, GraduationCap, Presentation } from "lucide-react";

const timelineSteps = [
  { title: "Orientation", icon: <Lightbulb className="w-8 h-8" />, month: "Month 1" },
  {
    title: "Mentorship and Coaching",
    icon: <Presentation className="w-8 h-8" />,
    month: "Month 2",
  },
  { title: "Curriculum Sessions", icon: <BookOpen className="w-8 h-8" />, month: "Month 3" },
  { title: "Workshops and CEO Insights", icon: <Users className="w-8 h-8" />, month: "Month 4" },
  { title: "Graduation", icon: <GraduationCap className="w-8 h-8" />, month: "Month 5" },
];

const Timeline = () => {
  return (
    <div className="mt-16 w-full bg-black py-20">
     <h1 className="text-xl lg:text-3xl mb-12 flex flex-col md:flex-row items-center justify-center lg:gap-2 font-extrabold leading-none tracking-tight">
              <span
                className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
                style={{
                  WebkitTextStroke: "1px #ffffff",
                  textStroke: "1px #ffffff",
                }}
              >
                PROGRAM
              </span>{" "}
              <span className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
                TIMELINE
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
              </span>
            </h1>
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-4">
          {timelineSteps.map((step, index) => (
            <div key={index} className="flex md:min-h-[11rem] flex-col items-center w-full md:w-1/5">
              <div className="flex items-center w-full justify-center">
                {/* Timeline Line */}
                {index > 0 && (
                  <div className="hidden md:block h-1 w-full bg-gray-300"></div>
                )}

                {/* Step Circle with Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shrink-0">
                  {step.icon}
                </div>

                {/* Timeline Line */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:block h-1 w-full bg-gray-300"></div>
                )}
              </div>

              {/* Vertical Line for Mobile */}
              {index < timelineSteps.length - 1 && (
                <div className="md:hidden h-8 w-1 bg-gray-300 my-2"></div>
              )}

              {/* Step Title and Month */}
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-gray-200 text-sm">{step.month}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;