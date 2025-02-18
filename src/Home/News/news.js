import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Link } from "react-router-dom";
import Animation from "../../Animation";
import LazyLoad from "../../LazyLoad";

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default is 3 cards

  const pressArticles = [
    {
      date: "August 13, 2024",
      image: "/images/news/nust-award.jpg",
      title: "NUST awarded special technology zone’s status...",
      link: "https://www.brecorder.com/news/40317231",
    },
    {
      date: "December 05, 2021",
      image: "/images/news/nstp-sez.jpg",
      title: "NSTP SEZ body approves entry of two enterprises...",
      link: "https://www.brecorder.com/news/40137879",
    },
    {
      date: "July 16, 2021",
      image: "/images/news/nust.jpg",
      title:
        "NUST signs agreement with consortium for development of technology park...",
      link: "https://www.brecorder.com/news/40107546",
    },
    {
      date: "December 05, 2021",
      image: "/images/news/sez.jpg",
      title: "SEZs tool to enhance investment...",
      link: "https://tribune.com.pk/story/2332527/sezs-tool-to-enhance-investment",
    },
    {
      date: "December 15, 2023",
      image: "/images/news/federal.jpg",
      title: "Federal Minister MoST visits Nust...",
      link: "https://www.brecorder.com/news/40278725/federal-minister-most-visits-nust",
    },
    {
      date: "June 04, 2024",
      image: "/images/news/zayn-vc.jpg",
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
    <div className="w-full bg-white p-6 md:p-12  lg:p-24">
      <div className="max-w-7xl mx-auto">
        <Animation>
          <h1 className="text-xl lg:text-3xl mb-8 md:mb-14   flex flex-col sm:flex-row items-center justify-center  sm:gap-4 font-extrabold leading-none tracking-tight">
            <span
              className="text-transparent text-3xl md:text-4xl  lg:text-5xl xl:text-4xl block"
              style={{
                WebkitTextStroke: "1px #000000",
                textStroke: "1px #000000",
              }}
            >
              NSTP IN
            </span>{" "}
            <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block ">
              THE NEWS
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3  bg-primary ml-1 rounded-full align-baseline"></span>
            </span>
          </h1>
        </Animation>

        <Animation>
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
                  transform: `translateX(-${
                    (currentIndex % pressArticles.length) * (100 / cardsToShow)
                  }%)`,
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
                        {/* <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        /> */}
                        <LazyLoad
                        imageSrc={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-50">
                          <div className="absolute top-4 left-4">
                            <p className="text-gray-200">{article.date}</p>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
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
        </Animation>
      </div>
    </div>
  );
};

export default News;
