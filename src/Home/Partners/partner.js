import React, { useEffect, useState } from "react";
import { LiaBuildingSolid } from "react-icons/lia";

const Partners = ({logos,firstText, secondText}) => {
  const [scrollSpeed, setScrollSpeed] = useState("35s");

  useEffect(() => {
    const updateScrollSpeed = () => {
      const baseSpeed = 35;
      const baseWidth = 1440;
      const currentWidth = window.innerWidth;
      const speedRatio = currentWidth / baseWidth;
      // Adjust speed proportionally while maintaining minimum speed
      const adjustedSpeed = Math.max(baseSpeed * speedRatio, 20);
      setScrollSpeed(`${adjustedSpeed}s`);
    };

    updateScrollSpeed();
    window.addEventListener("resize", updateScrollSpeed);
    return () => window.removeEventListener("resize", updateScrollSpeed);
  }, []);

  

  return (
    <div className="">
        <h1 className="text-xl lg:text-3xl mb-8 flex-wrap text-center md:mb-14 px-6 md:px-12  lg:px-24 pt-6 md:pt-12  lg:pt-24   flex items-center justify-center gap-2 md:gap-4 font-extrabold leading-none tracking-tight">
        <span
          className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
          style={{
            WebkitTextStroke: "1px #000000",
            textStroke: "1px #000000",
          }}
        >
          {firstText}
        </span>{" "}
        <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
          {secondText}
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
        </span>
      </h1>
      <div className="w-full bg-gray-100 h-72 mb-16">
        <div className="relative overflow-hidden h-full">
          <div
            className="flex w-[200%] h-full"
            style={{
              animation: `infinite-scroll ${scrollSpeed} linear infinite`,
            }}
          >
            {/* First set */}
            <div className="flex w-full justify-around items-center">
              {logos.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-32 md:h-48 w-32 md:w-48 mx-4 relative group shrink-0"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-48 h-48 object-contain p-2 filter grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            {/* Second set */}
            <div className="flex w-full justify-around items-center">
              {logos.map((partner, index) => (
                <div
                  key={`clone-${index}`}
                  className="flex items-center justify-center h-32 md:h-48 w-32 md:w-48 mx-4 relative group shrink-0"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-48 h-48 object-contain p-2 filter grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
