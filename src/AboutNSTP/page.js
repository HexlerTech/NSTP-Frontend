import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useInView,
  useAnimation,
  useTransform,
} from "framer-motion";
import {  ArrowRight, MapPin, Building2, Users } from 'lucide-react';

import GoogleCloud from "../Assets/partners/google-cloud.png";
import AWS from "../Assets/partners/aws.png";
import NAMA from "../Assets/partners/nama.png";
import IASP from "../Assets/partners/iasp.png";
import NUST from "../Assets/partners/NUST.png";
import PakLaunch from "../Assets/partners/paklaunch.png";
import UBank from "../Assets/partners/U-Bank.png";
import USEmbassy from "../Assets/partners/us-embassy.png";
import ZaynVC from "../Assets/partners/zayn-vc.png";

import image4 from "../Assets/Gallery/image7.svg";
import WhyNSTP from "../Assets/about-us.webp";
import Footer from "../Components/footer";
import Partners from "../Home/Partners/partner";

const TimelineItem = ({ year, title, description, index }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="flex flex-col items-center mb-16 relative w-full"
    >
      {/* Content Container */}
      <div className="flex w-full justify-center items-center gap-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className={`flex-1 text-right ${!isEven ? "opacity-0" : ""}`}
        >
          {isEven && (
            <>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </>
          )}
        </motion.div>

        {/* Center Circle */}
        <div className="flex flex-col items-center z-10">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shrink-0">
            <span className="text-white font-bold">{year}</span>
          </div>
          {index < 7 && (
            <div className="h-24 border-l-2 border-dashed border-gray-300 my-2" />
          )}
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className={`flex-1 text-left ${isEven ? "opacity-0" : ""}`}
        >
          {!isEven && (
            <>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
const CountUp = ({ end, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const hasAnimatedBefore = localStorage.getItem(`counter-${end}`);
    if (hasAnimatedBefore) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          localStorage.setItem(`counter-${end}`, "true");
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / 2000;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isVisible]);

  return (
    <div ref={nodeRef} className="text-4xl font-bold mb-2">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

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
      title: "Establishment",
      description:
        "Established Pakistan's first incubation center, TechOne NUST Incubator.",
    },
    {
      year: 2009,
      title: "NSTP Concept",
      description: "Concept of NSTP created to foster scientific advancements.",
    },
    {
      year: 2012,
      title: "NUST Approval",
      description: "Approval from NUST Board of Governors for NSTP.",
    },
    {
      year: 2016,
      title: "Feasibility Study",
      description: "Deloitte's feasibility study confirmed NSTP's potential.",
    },
    {
      year: 2019,
      title: "Science Park Status",
      description: "Approved as Pakistan's first science park under P3A.",
    },
    {
      year: 2020,
      title: "Tech SEZ Declaration",
      description:
        "Declared Pakistan's first Tech SEZ with incentives for tech enterprises.",
    },
    {
      year: 2024,
      title: "CEMTECH Inauguration",
      description:
        "Inaugurated CEMTECH, began NUST IT Complex & Resolve Tower construction.",
    },
    {
      year: 2030,
      title: "Future Expansion",
      description:
        "Master plan includes 5-6 high-rise towers to expand NSTP's capacity.",
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
      suffix: "B+",
      label: "Revenue Generated",
    },
    {
      value: 6000,
      suffix: "+",
      label: "High-Tech Jobs Created",
    },
    {
      value: 250,
      suffix: "+",
      label: "Startups Graduated",
    },
    {
      value: 165,
      suffix: "+",
      label: "R&D Projects Supported",
    },
  ];

  return (
    <div className="bg-gray-200 min-h-screen w-full relative">
      {/* hero section  */}
      <section className="relative h-screen">
        <img src={image4} alt="hero" className="w-full h-full object-cover" />
        <div className="absolute -bottom-16 left-14 w-full ">
          <h1 className="text-8xl font-bold ">
            <div
              className="text-transparent uppercase leading-tight"
              style={{
                WebkitTextStroke: "3px #ffffff",
                textStroke: "3px #ffffff",
              }}
            >
              driving innovation
            </div>
            <div className="text-primary uppercase ">in pakistan</div>
          </h1>
        </div>
      </section>

      {/* about content  */}
      <section className="relative overflow-hidden  mt-12" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 ">
          <h1 className="text-xl lg:text-3xl mb-8 flex-wrap md:mb-14 px-6 md:px-12  lg:px-24 pt-6 md:pt-12  lg:pt-24   flex items-center justify-center gap-2 md:gap-4 font-extrabold leading-none tracking-tight">
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
          </h1>
          <p className="text-lg md:text-xl text-gray-600   font-medium mb-24 leading-loose tracking-wider max-w-5xl">
            Established in 2019, National Science & Technology Park (NSTP)
            located within Pakistan's premier STEM institution, the National
            University of Sciences & Technology (NUST), Islamabad has become a
            hub for leading R&D companies driving innovation across multiple
            industries. Equipped with advanced research facilities and a
            collaborative environment NSTP hosts renowned organizations such as
            ABB, Hytera, Rapidev, Hitit, HATO Agricultural Lighting, Rapid
            Silicon, Turkish Aerospace, Vyro and others all contributing to the
            region's advancement in cutting-edge technologies
          </p>
          <motion.div
            className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-lg"
            style={{ scale, opacity }}
          >
            <img
              src={image4}
              alt="about"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* time lines */}
      <section className="py-16 px-4">
        <h1 className="text-xl lg:text-3xl mb-8 flex-wrap md:mb-14 px-6 md:px-12  lg:px-24 pt-6 md:pt-12  lg:pt-24   flex items-center justify-center gap-2 md:gap-4 font-extrabold leading-none tracking-tight">
          <span
            className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
            style={{
              WebkitTextStroke: "1px #000000",
              textStroke: "1px #000000",
            }}
          >
            OUR
          </span>{" "}
          <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
            TIMELINE
            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
          </span>
        </h1>
        <div className="max-w-5xl mx-auto relative">
          <div className="flex flex-col items-center">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.year} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* why nstp  */}
      <section className="w-full max-w-6xl mx-auto p-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={WhyNSTP}
              alt="why choose us image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-xl lg:text-3xl mb-8 flex-wrap md:mb-14 px-6 md:px-12  lg:px-24 pt-6 md:pt-12  lg:pt-24   flex items-center justify-center gap-2 md:gap-4 font-extrabold leading-none tracking-tight">
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
                CHOOSE US
                <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
              </span>
            </h1>
            <h3 className="text-xl text-gray-700">
              The new decision-making calculus: Issue 32
            </h3>

            <p className="text-gray-600 leading-relaxed">
              What does it take to make strategic decisions when the variables
              are proliferating? What lenses do leaders now need to apply when
              they're determining the way forward on the given initiative?
            </p>

            <p className="text-gray-600 leading-relaxed">
              As the complexity of the business landscape continues to rapidly
              increase and the impact of each decision ripples outward, today's
              business leaders have even more challenges to face. In this issue,
              we explore this new decision-making calculus, examining a handful
              of the variables many leaders now contend with.
            </p>

            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Read the latest magazine
            </button>
          </div>
        </div>
      </section>

      {/* flags  */}
      <section>
        <Partners logos={partners} firstText="OUR" secondText="FLAGS" />
      </section>

      {/* number values  */}
      <section className="bg-gray-50 py-16">
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
      </section>

      {/* visit nstp  */}
      <section className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Join Pakistan's Premier
              <span className="text-blue-400"> Innovation Hub</span>
            </h2>
            <p className="text-lg text-gray-300">
              Connect with industry leaders, access world-class facilities, and accelerate your growth journey at NSTP.
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

          {/* Right Stats Grid */}
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
    </section>
      <Footer />
    </div>
  );
};

export default AboutNSTP;
