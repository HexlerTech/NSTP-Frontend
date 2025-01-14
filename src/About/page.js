import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination, Mousewheel } from "swiper/modules";

import pakmap from "../Assets/pakmap.png";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { BiCalendar } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { FaClipboardList } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { PiPerson } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";

import islamabadpng from "../Assets/islamabadpng.png";
import nstppng from "../Assets/nstppng.png";
import nstplogocolored from "../Assets/nstplogocolored.png";

import "../App.css";

SwiperCore.use([Pagination, Mousewheel]);

const stats = [
  {
    icon: <PiMapPinSimpleAreaBold />,
    title: "Area",
    value: "796,100 km²",
  },
  {
    icon: <IoPeopleSharp />,
    title: "Population",
    value: "243 Million",
  },
  {
    icon: <FaLaptopCode />,
    title: "4th Largest Freelancer Community",
    value: "3 Million+",
  },
  {
    icon: <MdScience />,
    title: "Scientists & Engineers",
    value: "2 Million+",
  },
  {
    icon: <MdOutlineEmojiPeople />,
    title: "Youth",
    value: "64% of the Population",
  },
  {
    icon: <FaCity />,
    title: "Capital",
    value: "Islamabad",
  },
];

const IslamabadStats = [
  {
    icon: <PiMapPinSimpleAreaBold />,
    title: "Area",
    value: "906 km²",
  },
  {
    icon: <IoPeopleSharp />,
    title: "Population",
    value: "2,363,863 ",
  },
  {
    icon: <FaSchool />,
    title: "Educational Institutions",
    value: "1,000+",
  },
  {
    icon: <BiBook />,
    title: "Literacy Rate",
    value: "98%",
  },
  {
    icon: <MdOutlineEmojiPeople />,
    title: "Businesses",
    value: "Ranked as best business city in Pakistan",
  },
  {
    icon: <TiWeatherCloudy />,
    title: "Weather",
    value: "City with Exceptional Climate",
  },
];

const NustStats = [
  {
    icon: <BiCalendar />,
    title: "3 Decades of Excellence",
    value: "Founded in 1991",
  },
  {
    icon: <FaSchool />,
    title: "Educational Institutions",
    value: "20",
  },
  {
    icon: <FaCity />,
    title: "Campuses",
    value: "07",
  },
  {
    icon: <GiGraduateCap />,
    title: "Academic Programs",
    value: "159",
  },
  {
    icon: <GrCertificate />,
    title: "Degrees Awarded",
    value: "55,641",
  },
  {
    icon: <FaClipboardList />,
    title: "Disciplines",
    value: "07",
  },
];

const NSTPStats = [
  {
    icon: <BiCalendar />,
    title: "Oct 2020",
    value: "Established",
  },
  {
    icon: <FaSchool />,
    title: "100+",
    value: "Hi-Tech Companies",
  },
  {
    icon: <FaSeedling />,
    title: "64",
    value: "Startups",
  },
  {
    icon: <BiWorld />,
    title: "15+",
    value: "International Firms",
  },
  {
    icon: <PiPerson />,
    title: "6000+",
    value: "Hi-Tech Jobs Created",
  },
  {
    icon: <FaUserFriends />,
    title: "2000+",
    value: "Internships Provided",
  },
];

const PakistanAbout = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center lg:gap-20 md:gap-10">
        <img
          src={pakmap}
          alt="Pakistan Map"
          className="hidden lg:block lg:w-1/4 md:block md:w-1/4"
        ></img>
        <div className="lg:w-3/4">
          <h1 className="mb-4 text-xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            PAKISTAN -{" "}
            <span className="text-primary">
              THE GLOBAL DESTINATION FOR LOVERS OF{" "}
            </span>{" "}
            NATURE, FOOD, HISTORY & HOSPITALITY
          </h1>
          <p className="text-sm lg:text-md font-normal text-gray-500 mb-10 leading-6 text-justify">
            Pakistan is situated at the western periphery of South Asia and
            ranks among the most significant members of the developing world. It
            is a global destination for the admirers of nature's marvels and
            beauty. From the highest peaks in the world like K2, to the mighty
            Indus river; from mouth-watering cuisine to handcrafted pieces of
            art, Pakistan offers an experience of a lifetime to all its
            visitors. In the technological domain, Pakistan's teeming number of
            scientists, engineers, doctors, and technicians promises the country
            a bright future in science, technology, and innovation-based
            progression. Our youth is brimming with ideas and is considered
            among the most intelligent, creative and hardworking in the world.
          </p>
        </div>
      </div>
      {
        <div className=" hidden md:flex md:gap-5 lg:flex lg:flex-row justify-between gap-20 mt-20">
          {stats.map((stat) => (
            <div className="flex flex-col items-center">
              <div className="rounded-full p-4 bg-[#d6f8cb] md:text-2xl lg:text-4xl">
                {stat.icon}
              </div>
              <h2 className="text-lg font-bold mt-4 md:text-sm lg:text-lg">
                {stat.title}
              </h2>
              <p className="text-md lg:text-md font-normal text-gray-500 md:text-sm">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

const PakistanAboutMobile = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-20">
        <img src={pakmap} alt="Pakistan Map" className="w-1/2 mb-5"></img>
        <div className="lg:w-3/4">
          <h1 className="mb-4 text-xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            PAKISTAN -{" "}
            <span className="text-primary">
              THE GLOBAL DESTINATION FOR LOVERS OF{" "}
            </span>{" "}
            NATURE, FOOD, HISTORY & HOSPITALITY
          </h1>
          <p className="text-sm lg:text-md font-normal text-gray-500 mb-10 leading-6 text-justify">
            Pakistan is situated at the western periphery of South Asia and
            ranks among the most significant members of the developing world. It
            is a global destination for the admirers of nature's marvels and
            beauty. From the highest peaks in the world like K2, to the mighty
            Indus river; from mouth-watering cuisine to handcrafted pieces of
            art, Pakistan offers an experience of a lifetime to all its
            visitors. In the technological domain, Pakistan's teeming number of
            scientists, engineers, doctors, and technicians promises the country
            a bright future in science, technology, and innovation-based
            progression. Our youth is brimming with ideas and is considered
            among the most intelligent, creative and hardworking in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

const IslamabadAbout = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center gap-20 mt-10">
        <div className="lg:w-3/4">
          <h1 className="mb-4 text-xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            ISLAMABAD -{" "}
            <span className="text-primary">
              PAKISTAN'S PREMIER LOCATION FOR{" "}
            </span>{" "}
            INNOVATIVE TECHNOLOGY-DRIVEN ENTERPRISES
          </h1>
          <p className="text-sm lg:text-md font-normal text-gray-500 mb-10 leading-6 text-justify">
            Islamabad is the capital of Pakistan, and is one of the most
            picturesque and beautiful capitals in the world, in addition to
            being a safe and secure city. It is one of the most well planned and
            well developed cities of Pakistan, and embodies man's marvel of
            converting wilderness into remarkable pieces of estate. Islamabad is
            home to settlers from all nooks and corners of the country, and is a
            region-wide symbol of progress, cleanliness and urban development.
            Islamabad is recognized as the metropolitan for culture, political
            activities, education, and innovation, and the centre of ancient
            civilizations dating back to the earliest Stone Age. With an
            overwhelming majority of country's prolific research institutes,
            universities and industries within and around a 30-mile radius of
            the city, Islamabad is the most ideal location for any science and
            technology initiatives.
          </p>
        </div>
        <img
          src={islamabadpng}
          alt="Pakistan Map"
          className="hidden lg:block lg:w-1/4 md:block md:w-1/4"
        ></img>
      </div>
      {
        <div className=" hidden md:flex lg:flex lg:flex-row justify-between gap-20 mt-20 md:mt-5">
          {IslamabadStats.map((stat) => (
            <div className="flex flex-col items-center">
              <div className="rounded-full p-4 bg-[#d6f8cb] md:text-2xl lg:text-4xl">
                {stat.icon}
              </div>
              <h2 className="text-lg font-bold mt-4 md:text-sm lg:text-lg">
                {stat.title}
              </h2>
              <p className="text-md lg:text-md font-normal text-gray-500 md:text-sm text-center">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

const IslamabadAboutMobile = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20 mt-10">
        <img src={islamabadpng} alt="Pakistan Map" className="w-1/2"></img>
        <div className="lg:w-3/4">
          <h1 className="mb-4 text-xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            ISLAMABAD -{" "}
            <span className="text-primary">
              PAKISTAN'S PREMIER LOCATION FOR{" "}
            </span>{" "}
            INNOVATIVE TECHNOLOGY-DRIVEN ENTERPRISES
          </h1>
          <p className="text-sm lg:text-md font-normal text-gray-500 mb-10 leading-6 text-justify">
            Islamabad is the capital of Pakistan, and is one of the most
            picturesque and beautiful capitals in the world, in addition to
            being a safe and secure city. It is one of the most well planned and
            well developed cities of Pakistan, and embodies man's marvel of
            converting wilderness into remarkable pieces of estate. Islamabad is
            home to settlers from all nooks and corners of the country, and is a
            region-wide symbol of progress, cleanliness and urban development.
            Islamabad is recognized as the metropolitan for culture, political
            activities, education, and innovation, and the centre of ancient
            civilizations dating back to the earliest Stone Age. With an
            overwhelming majority of country's prolific research institutes,
            universities and industries within and around a 30-mile radius of
            the city, Islamabad is the most ideal location for any science and
            technology initiatives.
          </p>
        </div>
      </div>
    </div>
  );
};

const NustAbout = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center gap-20 mt-10">
        <img
          src={nstppng}
          alt="Pakistan Map"
          className="hidden lg:block lg:w-1/4 md:block md:w-1/4"
        ></img>
        <div className="lg:w-3/4">
          <h1 className="mb-4 text-xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            NATIONAL UNIVERSITY OF SCIENCES AND TECHNOLOGY -{" "}
            <span className="text-primary">
              PAKISTAN'S PREMIER UNIVERSITY FOR SCIENCE AND TECHNOLOGY
            </span>
          </h1>
          <p className="text-sm lg:text-md font-normal text-gray-500 mb-10 leading-6 text-justify">
            National University of Sciences and Technology (NUST) is a
            multi-school university with its headquarters in Islamabad,
            Pakistan. The university offers undergraduate and graduate degrees,
            including doctoral and professional degrees. The university is known
            for its strong emphasis on science and technology, and its rigorous
            academic programs. NUST is one of the top universities in Pakistan,
            and is ranked among the top 400 universities in the world. The
            university has a strong research program, and is home to several
            research centers and institutes. NUST is also known for its
            innovative teaching methods, and its focus on developing
            well-rounded students who are prepared to succeed in the global
            marketplace.
          </p>
        </div>
      </div>
      {
        <div className=" hidden md:flex lg:flex lg:flex-row justify-between gap-20 mt-20 md:mt-5">
          {NustStats.map((stat) => (
            <div className="flex flex-col items-center">
              <div className="rounded-full p-4 bg-[#d6f8cb] md:text-2xl lg:text-4xl">
                {stat.icon}
              </div>
              <h2 className="text-lg font-bold mt-4 md:text-sm lg:text-lg text-center">
                {stat.title}
              </h2>
              <p className="text-md lg:text-md font-normal text-gray-500 md:text-sm text-center">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

const NustAboutMobile = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20 mt-10">
        <img src={nstppng} alt="Pakistan Map" className="w-full"></img>
        <div className="lg:w-3/4">
          <h1 className="mb-4 text-xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            NATIONAL UNIVERSITY OF SCIENCES AND TECHNOLOGY -{" "}
            <span className="text-primary">
              PAKISTAN'S PREMIER UNIVERSITY FOR SCIENCE AND TECHNOLOGY
            </span>
          </h1>
          <p className="text-sm lg:text-md font-normal text-gray-500 mb-10 leading-6 text-justify">
            National University of Sciences and Technology (NUST) is a
            multi-school university with its headquarters in Islamabad,
            Pakistan. The university offers undergraduate and graduate degrees,
            including doctoral and professional degrees. The university is known
            for its strong emphasis on science and technology, and its rigorous
            academic programs. NUST is one of the top universities in Pakistan,
            and is ranked among the top 400 universities in the world. The
            university has a strong research program, and is home to several
            research centers and institutes. NUST is also known for its
            innovative teaching methods, and its focus on developing
            well-rounded students who are prepared to succeed in the global
            marketplace.
          </p>
        </div>
      </div>
    </div>
  );
};

const NSTPAbout = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center gap-20">
        <div className="lg:w-3/4">
          <h1 className="mb-4 text-xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            NATIONAL SCIENCE AND TECHNOLOGY PARK -{" "}
            <span className="text-primary">
              PAKISTAN'S PREMIER TECHNOLOGY PARK FOR SCIENCE AND TECHNOLOGY
            </span>
          </h1>
          <p className="text-sm lg:text-md font-normal text-gray-500 mb-10 leading-6 text-justify">
            National Science and Technology Park (NSTP) is a technology park
            located in Islamabad, Pakistan. The park is home to a number of
            high-tech companies, startups, and international firms. The park is
            designed to foster innovation and collaboration among its tenants,
            and to provide them with the resources they need to succeed. NSTP is
            also home to a number of research centers and institutes, and is
            known for its strong research program. The park is also home to a
            number of educational institutions, and is a hub for technology
            education and training. NSTP is committed to promoting science and
            technology in Pakistan, and to helping the country develop a strong,
            knowledge-based economy.
          </p>
        </div>
        <img
          src={nstplogocolored}
          alt="Pakistan Map"
          className="hidden lg:block lg:w-1/4 md:block md:w-1/4"
        ></img>
      </div>
      {
        <div className=" hidden md:flex lg:flex lg:flex-row justify-between gap-20 mt-20">
          {NSTPStats.map((stat) => (
             <div className="flex flex-col items-center">
             <div className="rounded-full p-4 bg-[#d6f8cb] md:text-2xl lg:text-4xl">
               {stat.icon}
             </div>
             <h2 className="text-lg font-bold mt-4 md:text-sm lg:text-lg text-center">
               {stat.title}
             </h2>
             <p className="text-md lg:text-md font-normal text-gray-500 md:text-sm text-center">
               {stat.value}
             </p>
           </div>
          ))}
        </div>
      }
    </div>
  );
};

const NSTPAboutMobile = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
        <img
          src={nstplogocolored}
          alt="Pakistan Map"
          className="w-1/2 mb-5"
        ></img>
        <div className="lg:w-3/4">
          <h1 className="mb-4 text-xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900">
            NATIONAL SCIENCE AND TECHNOLOGY PARK -{" "}
            <span className="text-primary">
              PAKISTAN'S PREMIER TECHNOLOGY PARK FOR SCIENCE AND TECHNOLOGY
            </span>
          </h1>
          <p className="text-sm lg:text-md font-normal text-gray-500 mb-10 leading-6 text-justify">
            National Science and Technology Park (NSTP) is a technology park
            located in Islamabad, Pakistan. The park is home to a number of
            high-tech companies, startups, and international firms. The park is
            designed to foster innovation and collaboration among its tenants,
            and to provide them with the resources they need to succeed. NSTP is
            also home to a number of research centers and institutes, and is
            known for its strong research program. The park is also home to a
            number of educational institutions, and is a hub for technology
            education and training. NSTP is committed to promoting science and
            technology in Pakistan, and to helping the country develop a strong,
            knowledge-based economy.
          </p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024); // Set your laptop screen width threshold
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className="p-4 mt-36 lg:hidden md:hidden">
        <PakistanAboutMobile />
        <IslamabadAboutMobile />
        <NustAboutMobile />
        <NSTPAboutMobile />
      </div>
      <div className="p-4 lg:p-20 no-scrollbar overflow-y-hidden hidden lg:block md:block">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          mousewheel={{ thresholdDelta: 20 }}
          className="mySwiper"
          style={{ height: "100vh" }}
        >
          <SwiperSlide>
            <div
              id="hero"
              className="h-screen flex items-center md:min-h-screen"
            >
              <PakistanAbout />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="who-we-are" className="h-screen flex items-center">
              <IslamabadAbout />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="intro" className="h-screen flex items-center">
              <NustAbout />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="intro" className="h-screen flex items-center">
              <NSTPAbout />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
