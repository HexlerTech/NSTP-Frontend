import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import News1 from "../../Assets/news/zayn-vc.jpg";
import News2 from "../../Assets/news/nust-award.jpg";
import News3 from "../../Assets/news/nstp-sez.jpg";
import News4 from "../../Assets/news/nust.jpg";
import News5 from "../../Assets/news/sez.jpg";
import News6 from "../../Assets/news/federal.jpg";
import { Link } from "react-router-dom";

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default is 3 cards

  const pressArticles = [
    
    {
      date: "August 13, 2024",
      image: News2,
      logo: "Business Recorder",
      title: "NUST awarded special technology zone’s status...",
      link: "https://www.brecorder.com/news/40317231",
    },
    {
      date: "December 05, 2021",
      image: News3,
      logo: "Daily Times",
      title: "NSTP SEZ body approves entry of two enterprises...",
      link: "https://www.brecorder.com/news/40137879",
    },
    {
      date: "July 16, 2021",
      image: News4,
      logo: "menabytes",
      title: "NUST signs agreement with consortium for development of technology park...",
      link: "https://www.brecorder.com/news/40107546",
    },
    {
      date: "December 05, 2021",
      image: News5,
      logo: "Business Recorder",
      title: "SEZs tool to enhance investment...",
      link: "https://tribune.com.pk/story/2332527/sezs-tool-to-enhance-investment",
    },
    {
      date: "December 15, 2023",
      image: News6,
      logo: "Daily Times",
      title: "Federal Minister MoST visits Nust...",
      link: "https://www.brecorder.com/news/40278725/federal-minister-most-visits-nust",
    },
    {
      date: "June 04, 2024",
      image: News1,
      logo: "menabytes",
      title: "Zayn Venture Capital becomes Resident VC at NSTP-NUST...",
      link: "https://www.brecorder.com/news/40306731/zayn-venture-capital-becomes-resident-vc-at-nstp-nust",
    },
  ];

  const allSlides = [...pressArticles, ...pressArticles];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allSlides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Update cardsToShow based on screen width
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1); // Small screens (below 'sm')
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Medium screens ('md')
      } else {
        setCardsToShow(3); // Large screens and above ('lg')
      }
    };

    updateCardsToShow(); // Run on initial render
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-xl lg:text-3xl mb-12   flex flex-col sm:flex-row items-center justify-center  sm:gap-4 font-extrabold leading-none tracking-tight">
        <span
          className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
          style={{
            WebkitTextStroke: "1px #000000",
            textStroke: "1px #000000",
          }}
        >
          NSTP IN
        </span>{" "}
        <span className="text-BLACK text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
           THE NEWS
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
        </span>
      </h1>

        <div className="relative ">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-6 top-1/2  -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-black hover:scale-110 transition-transform duration-150 p-2 sm:p-4 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-3 sm:w-6 h-3 sm:h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-6 top-1/2  -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-black hover:scale-110 transition-transform duration-150  p-2 sm:p-4 rounded-full shadow-lg"
          >
            <ChevronRight className="w-3 sm:w-6 h-3 sm:h-6 text-white" />
          </button>

          {/* Cards Container */}
          <div className="relative overflow-hidden">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${(currentIndex % pressArticles.length) * (100 / cardsToShow)}%)`,
    }}
  >
    {allSlides.map((article, index) => (
      <Link 
        to={article.link} 
        target="_blank"
        key={index}
        className="flex-none px-2"
        style={{ width: `${100 / cardsToShow}%` }}
      >
        <div className="relative group cursor-pointer">
          <div className="relative h-64 overflow-hidden rounded-lg">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-50">
              <div className="absolute top-4 left-4">
                <h3 className="text-white text-2xl font-bold">
                  {article.logo}
                </h3>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-gray-200 mb-2">{article.date}</p>
                <h4 className="text-white text-lg font-semibold">
                  {article.title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {pressArticles.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === currentIndex % pressArticles.length
                    ? "bg-primary"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
