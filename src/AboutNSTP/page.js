import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useInView as useFramerInView, // Rename here
  useAnimation,
  useTransform,
} from "framer-motion";
import AnimatedNumbers from "react-animated-numbers";
import {
  ArrowRight,
  MapPin,
  Building2,
  Users,
  BookOpen,
  CircuitBoard,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image1 from "../Assets/img1.jpg";
import Image2 from "../Assets/img2.jpg";
import Image3 from "../Assets/img3.jpg";
import Image4 from "../Assets/img4.jpg";
import Image5 from "../Assets/img5.jpg";
import Image6 from "../Assets/img6.jpg";
import Image7 from "../Assets/img7.jpg";
import Image8 from "../Assets/img8.jpg";

import GoogleCloud from "../Assets/partners/google-cloud.png";
import AWS from "../Assets/partners/aws.png";
import NAMA from "../Assets/partners/nama.png";
import IASP from "../Assets/partners/iasp.png";
import NUST from "../Assets/partners/NUST.png";
import PakLaunch from "../Assets/partners/paklaunch.png";
import UBank from "../Assets/partners/U-Bank.png";
import USEmbassy from "../Assets/partners/us-embassy.png";
import ZaynVC from "../Assets/partners/zayn-vc.png";

import image1 from "../Assets/about.jpg";
// import image1 from "../Assets/Gallery/image1.svg";
import image2 from "../Assets/Gallery/image13.svg";
import WhyNSTP from "../Assets/about-us.svg";
import Footer from "../Components/footer";
import Partners from "../Home/Partners/partner";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Animation from "../Animation";
import LazyLoad from "../LazyLoad";

const TimelineItem = ({ year, title, description, index, total }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex-1 min-w-0 flex gap-4 sm:gap-0 flex-col-reverse sm:flex-col h-full items-center group">
      <motion.div
        initial={{ opacity: 0, y: isEven ? -20 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`  sm:absolute w-60 sm:w-44 ${
          isEven ? "sm:-top-24" : "sm:top-24"
        } text-center `}
      >
        <p className="text-sm text-gray-700 group-hover:text-primary transition-colors duration-500">
          {description}
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className="shrink-0 h-12 w-12 sm:h-16 sm:w-16 bg-neutral-900 group-hover:bg-primary rounded-full transition-colors duration-500 flex items-center justify-center"
        >
          <span className="text-base sm:text-lg font-bold text-white">
            {year}
          </span>
        </motion.div>

        {index < total - 1 && (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-full border-t-2 border-dashed border-gray-600 origin-left"
          />
        )}
      </div>
    </div>
  );
};
// const CountUp = ({ end, prefix = "", suffix = "" }) => {
//   const [count, setCount] = useState(0);
//   const nodeRef = useRef();
//   const [isVisible, setIsVisible] = useState(false);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     const hasAnimatedBefore = localStorage.getItem(`counter-${end}`);
//     if (hasAnimatedBefore) {
//       setCount(end);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           setIsVisible(true);
//           setHasAnimated(true);
//           localStorage.setItem(`counter-${end}`, "true");
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (nodeRef.current) observer.observe(nodeRef.current);
//     return () => observer.disconnect();
//   }, [end, hasAnimated]);

//   useEffect(() => {
//     if (!isVisible) return;

//     let startTime = null;
//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = (timestamp - startTime) / 2000;

//       if (progress < 1) {
//         setCount(Math.floor(end * progress));
//         requestAnimationFrame(animate);
//       } else {
//         setCount(end);
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [end, isVisible]);

//   return (
//     <div ref={nodeRef} className="text-4xl font-bold mb-2">
//       {prefix}
//       {count.toLocaleString()}
//       {suffix}
//     </div>
//   );
// };

const AboutNSTP = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  const timelineData = [
    {
      year: 2004,
      description:
        "Established Pakistan’s first incubation center, TechOne NUST Incubator.",
    },

    {
      year: 2012,
      description: "NSTP project approved by NUST Board of Governors.",
    },
    {
      year: 2016,
      description: "Deloitte's feasibility study confirmed NSTP's potential.",
    },
    {
      year: 2019,
      description:
        "Approved as Pakistan's first science park under Public Private Partnership (P3A).",
    },
    {
      year: 2020,
      description:
        "Declared Pakistan’s first Tech hi-tech SEZ with incentives for tech enterprises. ",
    },

    {
      year: 2024,
      description:
        "Inauguration of Center for Emerging Technologies (CEMTECH) with master plan for 5-6 high-rise towers to be completed.",
    },
  ];
  const partners = [
    { name: "NUST", logo: NUST },
    { name: "Zayn VC", logo: ZaynVC },
    { name: "Google Cloud", logo: GoogleCloud },
    { name: "AWS", logo: AWS },
    { name: "NAMA", logo: NAMA },
    { name: "US Embassy", logo: USEmbassy },
    { name: "U-Bank", logo: UBank },
    { name: "PakLaunch", logo: PakLaunch },
    { name: "IASP", logo: IASP },
  ];
  const stats = [
    {
      value: 20,
      prefix: "PKR ",
      suffix: " B",
      label: "in revenue generated by tenants",
    },
    {
      value: 15,
      prefix: "PKR ",
      suffix: " B",
      label: "raised in funding",
    },
    {
      value: 2.4,
      prefix: "PKR ",
      suffix: " B",
      label: "invested in R&D",
    },
    {
      value: 165,
      suffix: "+",
      label: "R&D projects supported",
    },
    {
      value: 100,
      suffix: "+",
      label: "technology transfers completed",
    },
  ];
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div className="bg-gray-200 min-h-screen w-full relative mt-12 sm:mt-0">
      {/* hero section  */}
      <section className="relative h-[30vh] sm:h-screen">
        {/* <div className="grid grid-cols-4 absolute top-0 left-0 w-full h-full">
          <div
            style={{ backgroundImage: `url(${Image1})` }}
            className="bg-cover bg-center relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:bg-opacity-20"
          ></div>
          <div
            style={{ backgroundImage: `url(${Image7})` }}
            className="bg-cover bg-center relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:bg-opacity-20"
          ></div>
          <div
            style={{ backgroundImage: `url(${Image5})` }}
            className="bg-cover bg-center relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:bg-opacity-20"
          ></div>
          <div
            style={{ backgroundImage: `url(${Image3})` }}
            className="bg-cover bg-center relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:bg-opacity-20"
          ></div>
        </div> */}
        <div className="grid grid-cols-4 absolute top-0 left-0 w-full h-full">
  <div className="relative">
    <LazyLoad
      imageSrc={Image1}
      imageAlt="Background Image 1"
      wrapperClassName="absolute inset-0"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
  </div>
  
  <div className="relative">
    <LazyLoad
      imageSrc={Image7}
      imageAlt="Background Image 2"
      wrapperClassName="absolute inset-0"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
  </div>
  
  <div className="relative">
    <LazyLoad
      imageSrc={Image5}
      imageAlt="Background Image 3"
      wrapperClassName="absolute inset-0"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
  </div>
  
  <div className="relative">
    <LazyLoad
      imageSrc={Image3}
      imageAlt="Background Image 4"
      wrapperClassName="absolute inset-0"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
  </div>
</div>
        <div className="absolute -bottom-10 left-5 sm:left-14 w-fit ">
        <Animation>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold sm:tracking-tight">
            <div
              className="text-transparent uppercase sm:leading-[0.9]"
              style={{
                WebkitTextStroke: "3px #ffffff",
                textStroke: "3px #ffffff",
              }}
            >
              driving innovation
            </div>
            <div className="text-primary uppercase sm:leading-[0.9]">
              in pakistan
            </div>
          </h1>
        </Animation>
        </div>
      </section>

      {/* about content  */}
      <section
        className="relative overflow-hidden p-6 md:p-12  xl:p-24 mt-20 sm:mt-10"
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto   ">
          {/* <h1 className="text-xl lg:text-3xl mb-6 sm:mb-8 flex-wrap    flex items-center  gap-2 md:gap-4 font-extrabold leading-none tracking-tight">
            <span
              className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
              style={{
                WebkitTextStroke: "1px #000000",
                textStroke: "1px #000000",
              }}
            >
              ABOUT
            </span>{" "}
            <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
              US
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
            </span>
          </h1> */}
             <Animation>
          <p className="text-base md:text-xl text-gray-600 font-sans text-justify md:text-left mb-24 leading-relaxed  max-w-5xl">
            Established in 2019, National Science & Technology Park (NSTP)
            located within Pakistan's premier STEM institution, the National
            University of Sciences & Technology (NUST), Islamabad has become a
            hub for leading R&D companies driving innovation across multiple
            industries. Equipped with advanced research facilities and a
            collaborative environment NSTP hosts renowned organizations such as
            ABB, Hytera, Rapidev, Hitit, HATO Agricultural Lighting, Rapid
            Silicon, Turkish Aerospace, Vyro and others all contributing to the
            region’s advancement in cutting-edge technologies.
          </p>
          </Animation>
          <motion.div
            className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-lg"
            style={{ scale, opacity }}
          >
            <img
              src={image2}
              alt="about"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* time lines */}
      <section className="p-6 md:p-12  xl:p-24 relative bg-white overflow-hidden ">
        {/* <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%)",
                filter: "blur(40px)",
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                delay: i * 5,
              }}
            />
          ))}
        </div> */}

        <div className="relative">
        <Animation>
          <h1 className="text-xl lg:text-3xl mb-8  flex items-center flex-wrap justify-center gap-1 md:gap-4 font-extrabold leading-none tracking-tight">
            <span
              className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
              style={{
                WebkitTextStroke: "1px #000000",
                textStroke: "1px #000000",
              }}
            >
              GENESIS OF
            </span>{" "}
            <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
              NSTP
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
            </span>
          </h1>
          </Animation>

          <div className="overflow-hidden py-8 sm:py-32 ">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-4 px-4 w-full sm:w-[90%] md:w-[80%] mx-auto ">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={item.year}
                  {...item}
                  index={index}
                  total={timelineData.length}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* why nstp  */}
      <section className="w-full  mx-auto p-6 md:p-12  lg:p-24  bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:flex items-center justify-center">
            <img
              src={WhyNSTP}
              alt="why choose us image"
              className="w-2/4 md:w-[80%] rounded-lg shadow-lg"
            />
          </div>

          <Animation>
          <div className="space-y-6">
            <h1 className="text-xl lg:text-3xl mb-4 md:mb-8 flex-wrap   flex items-center justify-center md:justify-start  gap-2 md:gap-4 font-extrabold leading-none tracking-tight">
              <span
                className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
                style={{
                  WebkitTextStroke: "1px #000000",
                  textStroke: "1px #000000",
                }}
              >
                WHY
              </span>{" "}
              <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
                NSTP
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
              </span>
            </h1>

            <p className="text-gray-600 sm:text-lg text-justify md:text-left leading-relaxed">
              NSTP provides a dynamic environment for innovation and growth,
              enabling businesses to collaborate across industries and research
              domains. With access to over 60 active research areas, 350
              advanced laboratories, and specialized Centers of Excellence such
              as the National Centre of Artificial Intelligence (NCA), National
              Centre of Robotics & Automation (NCRA), and N-ovative Health
              Technologies (NHT), the park empowers businesses to excel in
              transformative fields. Spanning 71.3 acres with SEZ and STZ
              statuses, NSTP offers tax exemptions, licensing opportunities, and
              technology transfer support.
            </p>

            <p className="text-gray-600 sm:text-lg text-justify md:text-left leading-relaxed">
              Its recognition as an SDG Model Zone by GASEZ underscores its
              commitment to sustainable development and high governance
              standards, further enhancing its position as Pakistan's premier
              hub for Science, Technology, and Innovation (STI).
            </p>
            <p className="text-gray-600 sm:text-lg text-justify md:text-left leading-relaxed">
              In a landmark development, Faisal Aftab of Zayn VC joined NSTP as
              Resident Venture Capitalist, bringing invaluable resources such as
              mentorship, workshops, and investment pitch opportunities. This
              collaboration strengthens the ecosystem for both startups and
              established companies, empowering them with the tools to innovate
              and scale.
            </p>

            <Link
              target="_blank"
              to="/explore"
              className="bg-black flex gap-3 items-center mx-auto md:mx-0 justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit"
            >
              Join NSTP
              <HiArrowSmRight className="text-lg md:text-2xl" />
            </Link>
          </div>
          </Animation>
        </div>
      </section>

      {/* number values  */}
      {/* <section className="bg-gray-50 p-6 md:p-12  lg:p-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-xl lg:text-3xl mb-8 flex-wrap md:mb-14 px-6 md:px-12  lg:px-24 pt-6 md:pt-12  lg:pt-24   flex items-center justify-center gap-2 md:gap-4 font-extrabold leading-none tracking-tight">
            <span
              className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
              style={{
                WebkitTextStroke: "1px #000000",
                textStroke: "1px #000000",
              }}
            >
              ECONOMIC
            </span>{" "}
            <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
              CONTRIBUTION
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      <section className="bg-white p-6 md:p-12  lg:p-24 ">
      
        <div className=" mx-auto px-4">
        <Animation>
          <h1 className="text-xl lg:text-3xl mb-8  flex items-center flex-wrap justify-center gap-1 md:gap-4 font-extrabold leading-none tracking-tight">
            <span
              className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
              style={{
                WebkitTextStroke: "1px #000000",
                textStroke: "1px #000000",
              }}
            >
              ECONOMIC
            </span>{" "}
            <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
              CONTRIBUTION
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
            </span>
          </h1>
          </Animation>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 w-56 h-32 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold sm:mb-2 flex items-center justify-center gap-2">
                  {stat.prefix}
                  {/* <CountUp end={stat.value} duration={2} separator="," /> */}
                  <AnimatedNumbers
                    animateToNumber={stat.value}
                    duration={2000}
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.4,
                    })}
                  />
                  {stat.suffix}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
       
      </section>
      {/* flags  */}
      <section>
        <Partners
          logos={partners}
          firstText="HUB FOR "
          secondText="INTERNATIONAL R&D"
        />
      </section>

      {/* visit nstp  */}
      {/* <section className="relative p-6 md:p-12  lg:p-24">
        Background Pattern
        <div className="absolute inset-0 bg-gray-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            Left Content
            <div className="text-white space-y-6">
              <h2 className="text-5xl font-bold leading-tight">
                Join Pakistan's Premier
                <span className="text-blue-400"> Innovation Hub</span>
              </h2>
              <p className="text-lg text-gray-300">
                Connect with industry leaders, access world-class facilities,
                and accelerate your growth journey at NSTP.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6 group transition-all duration-300 transform hover:translate-x-1"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 group transition-all duration-300"
                >
                  Visit Campus
                  <MapPin className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            Right Stats Grid
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <Building2 className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">250+</h3>
                <p className="text-gray-300">Startups Graduated</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <Users className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">6,000+</h3>
                <p className="text-gray-300">Jobs Created</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className=" px-6 md:px-12  lg:px-24 pb-6 md:pb-12  lg:pb-24">
      <Animation>
        <div className=" max-w-6xl mx-auto   ">
          <div className="flex flex-col items-center justify-center gap-3 ">
            {/* Heading with outline effect */}
            <div className="inline-flex flex-col  items-center justify-center space-y-2">
              <h1 className="text-xl lg:text-3xl text-center flex-col  flex items-center justify-center   font-extrabold leading-none tracking-tight">
                <span
                  className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
                  style={{
                    WebkitTextStroke: "1px #000000",
                    textStroke: "1px #000000",
                  }}
                >
                  JOIN PAKISTAN'S PREMIER
                </span>{" "}
                <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
                  INNOVATION HUB
                  <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
                </span>
              </h1>
            </div>
            <div className="flex items-center justify-center space-x-3 ">
              <span className="h-0.5 w-12 bg-primary/30"></span>
              <CircuitBoard className="w-6 h-6 text-primary" />
              <span className="h-0.5 w-12 bg-primary/30"></span>
            </div>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-base md:text-lg text-justify md:text-center text-gray-800 mb-4">
              Connect with industry leaders, access world-class facilities, and
              accelerate your growth journey at NSTP.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                target="_blank"
                to="/contact"
                className="bg-primary flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-black hover:scale-105 transition-transform  duration-300 ease-in-out w-fit"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 mr-2" />
              </Link>
              <Link
                target="_blank"
                to="/explore/visit"
                className="bg-black flex gap-3 items-center justify-center text-white px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transform hover:bg-primary hover:scale-105 transition-transform  duration-300 ease-in-out w-fit"
              >
                Visit Campus
                <MapPin className="text-lg md:text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        </Animation>
      </section>
      <Footer />
    </div>
  );
};

export default AboutNSTP;
