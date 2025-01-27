// import React from "react";
// import image1 from "../../Assets/12.png";
// import image2 from "../../Assets/2.jpeg";
// import image3 from "../../Assets/3.png";
// import image4 from "../../Assets/4.jpg";
// import image6 from "../../Assets/6.jpg";
// import image7 from "../../Assets/7.jpg";
// import image8 from "../../Assets/8.jpg";
// import image9 from "../../Assets/9.jpg";
// import image10 from "../../Assets/10.jpg";
// import image11 from "../../Assets/11.jpeg";

// const Gallery = () => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 p-20">
//       <div className="grid gap-2">
//         <div>
//           <img className="h-auto max-w-full rounded-lg" src={image1} alt="" />
//         </div>
//         <div>
//           <img className="h-auto max-w-full rounded-lg" src={image2} alt="" />
//         </div>
//         <div>
//           <img className="h-auto max-w-full rounded-lg" src={image3} alt="" />
//         </div>
//       </div>
//       <div className="grid gap-10">
//         <div>
//           <img className="h-auto max-w-full rounded-lg" src={image4} alt="" />
//         </div>
//         <div>
//           <img className="h-auto max-w-full rounded-lg" src={image6} alt="" />
//         </div>
//         <div>
//           <img className="h-auto max-w-full rounded-lg" src={image7} alt="" />
//         </div>

//       </div>
//       <div className="grid gap-2">
//         <div>
//           <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
//         </div>
//         <div>
//           <img className="h-auto max-w-full rounded-lg" src={image11} alt="" />
//         </div>
//         <div>
//           <img className="h-auto max-w-full rounded-lg" src={image10} alt="" />
//         </div>
//         <div>
//           <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
// import React from "react";
// import image1 from "../../Assets/12.png";
// import image2 from "../../Assets/2.jpeg";
// import image3 from "../../Assets/3.png";
// import image4 from "../../Assets/4.jpg";
// import image6 from "../../Assets/6.jpg";
// import image7 from "../../Assets/7.jpg";
// import image8 from "../../Assets/8.jpg";
// import image9 from "../../Assets/9.jpg";
// import image10 from "../../Assets/10.jpg";
// import image11 from "../../Assets/11.jpeg";

// const Gallery = () => {
//   const images = [
//     image1, image2, image3, image4, image6,
//     image7, image8, image9, image10, image11
//   ];

//   return (
//     <div className="bg-white p-10 overflow-hidden">
//       <div className="relative w-full overflow-hidden">
//         {/* First Row */}
//         <div className="mb-8">
//           <div
//             className="flex animate-infinite-scroll"
//             style={{
//               width: '200%',
//               animation: 'infinite-scroll 40s linear infinite',
//             }}
//           >
//             {/* First set of images */}
//             <div className="flex w-1/2 justify-around">
//               {images.slice(0, 5).map((img, index) => (
//                 <div key={index} className="mx-4">
//                   <img
//                     src={img}
//                     alt={`Gallery ${index + 1}`}
//                     className="h-64 w-64 object-cover rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//             {/* Duplicate set for seamless scroll */}
//             <div className="flex w-1/2 justify-around">
//               {images.slice(0, 5).map((img, index) => (
//                 <div key={`clone-${index}`} className="mx-4">
//                   <img
//                     src={img}
//                     alt={`Gallery ${index + 1}`}
//                     className="h-64 w-64 object-cover rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Second Row - Scrolling in opposite direction */}
//         <div>
//           <div
//             className="flex"
//             style={{
//               width: '200%',
//               animation: 'infinite-scroll 40s linear infinite reverse',
//             }}
//           >
//             {/* First set of images */}
//             <div className="flex w-1/2 justify-around">
//               {images.slice(5).map((img, index) => (
//                 <div key={index} className="mx-4">
//                   <img
//                     src={img}
//                     alt={`Gallery ${index + 6}`}
//                     className="h-64 w-64 object-cover rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//             {/* Duplicate set for seamless scroll */}
//             <div className="flex w-1/2 justify-around">
//               {images.slice(5).map((img, index) => (
//                 <div key={`clone-${index}`} className="mx-4">
//                   <img
//                     src={img}
//                     alt={`Gallery ${index + 6}`}
//                     className="h-64 w-64 object-cover rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React, { useEffect, useState } from "react";
import image1 from "../../Assets/Gallery/image1.svg";
import image2 from "../../Assets/Gallery/image2.svg";
import image3 from "../../Assets/Gallery/image3.svg";
import image4 from "../../Assets/Gallery/image4.svg";
import image5 from "../../Assets/Gallery/image5.svg";
import image6 from "../../Assets/Gallery/image6.svg";
import image7 from "../../Assets/Gallery/image7.svg";
import image8 from "../../Assets/Gallery/image8.svg";
import image9 from "../../Assets/Gallery/image9.svg";
import image10 from "../../Assets/Gallery/image10.svg";
import image11 from "../../Assets/Gallery/image11.svg";
import image12 from "../../Assets/Gallery/image12.svg";
import image13 from "../../Assets/Gallery/image13.svg";
import image14 from "../../Assets/Gallery/image14.svg";
import image15 from "../../Assets/Gallery/image15.svg";
import image16 from "../../Assets/Gallery/image16.svg";
import image17 from "../../Assets/Gallery/image17.svg";
import image18 from "../../Assets/Gallery/image18.svg";
import image19 from "../../Assets/Gallery/image19.svg";
import image20 from "../../Assets/Gallery/image20.svg";
import image21 from "../../Assets/Gallery/image21.svg";
import image22 from "../../Assets/Gallery/image22.svg";
import image23 from "../../Assets/Gallery/image23.svg";
import LazyLoad from "../../LazyLoad";

const Gallery = () => {
  const [scrollSpeed, setScrollSpeed] = useState("35s");

  useEffect(() => {
    const updateScrollSpeed = () => {
      // Base speed is 35s for largest screen (1440px)
      const baseSpeed = 35;
      const baseWidth = 1440;
      const currentWidth = window.innerWidth;

      // Adjust speed proportionally to screen width
      const adjustedSpeed = Math.max(
        (baseSpeed * currentWidth) / baseWidth,
        20
      );
      setScrollSpeed(`${adjustedSpeed}s`);
    };

    // Initial calculation
    updateScrollSpeed();

    // Update on resize
    window.addEventListener("resize", updateScrollSpeed);
    return () => window.removeEventListener("resize", updateScrollSpeed);
  }, []);
  return (
    <div className="relative w-full overflow-hidden bg-white mb-8 md:mb-24">
      <div
        className="flex"
        style={{
          animation: `moveRight ${scrollSpeed} linear infinite`,
        }}
      >
        {/* <div className="flex animate-scroll-right"> */}
        {/* Second set of grid  */}

        <div className="min-w-full grid grid-cols-3 gap-4 p-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={image18}
                alt=""
              />
              <LazyLoad
                imageSrc={image18}
                imageAlt="Gallery 18"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                className="h-auto max-w-full rounded-lg"
                imageSrc={image21}
                imageAlt="Gallery 21"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc={image20}
                imageAlt="Gallery 20"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <LazyLoad
                imageSrc={image19}
                imageAlt="Gallery 19"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc={image12}
                imageAlt="Gallery 12"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
            <LazyLoad
                imageSrc={image13}
                imageAlt="Gallery 13"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
            <LazyLoad
                imageSrc={image14}
                imageAlt="Gallery 14"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            {/* <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={image1}
                alt=""
              />
            </div> */}
            <div>
            <LazyLoad
                imageSrc={image22}
                imageAlt="Gallery 22"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
            <LazyLoad
                imageSrc={image23}
                imageAlt="Gallery 23"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* First set of grid */}
        <div className="min-w-full grid grid-cols-3 gap-4 p-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
            <LazyLoad
                imageSrc={image1}
                imageAlt="Gallery 1"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
            <LazyLoad
                imageSrc={image2}
                imageAlt="Gallery 2"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
            <LazyLoad
                imageSrc={image3}
                imageAlt="Gallery 3"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <LazyLoad
                imageSrc={image15}
                imageAlt="Gallery 15"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc={image16}
                imageAlt="Gallery 16"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc={image17}
                imageAlt="Gallery 17"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <LazyLoad
                imageSrc={image4}
                imageAlt="Gallery 4"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc={image5}
                imageAlt="Gallery 5"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc={image6}
                imageAlt="Gallery 6"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc={image7}
                imageAlt="Gallery 7"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* third set of grid */}
        <div className="min-w-full grid grid-cols-3 gap-4 p-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <LazyLoad
                imageSrc={image8}
                imageAlt="Gallery 8"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc={image9}
                imageAlt="Gallery 9"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc={image10}
                imageAlt="Gallery 10"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
