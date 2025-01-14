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

import React from "react";
import image1 from "../../Assets/highlight/image1.jpg"
import image2 from "../../Assets/highlight/image2.JPG"
import image3 from "../../Assets/highlight/image3.JPG"
import image4 from "../../Assets/highlight/image4.jpg"
import image5 from "../../Assets/highlight/image5.jpg"
import image6 from "../../Assets/highlight/image6.JPG"
import image7 from "../../Assets/highlight/image7.jpeg"
import image8 from "../../Assets/highlight/image8.jpg"
import image9 from "../../Assets/highlight/image9.jpg"
import image10 from "../../Assets/highlight/image10.JPG"
import image11 from "../../Assets/highlight/image11.jpg"
import image12 from "../../Assets/highlight/image12.jpg"
import image13 from "../../Assets/highlight/image13.jpg"
import image14 from "../../Assets/highlight/image14.jpg"
import image15 from "../../Assets/highlight/image15.jpg"
import image16 from "../../Assets/highlight/image16.JPG"
import image17 from "../../Assets/highlight/image17.JPG"
import image18 from "../../Assets/highlight/image18.jpg"
import image19 from "../../Assets/highlight/image19.jpg"
import image20 from "../../Assets/highlight/image20.jpg"



const Gallery = () => {
  return (
 
  <div className="relative w-full overflow-hidden bg-white">
  
  <div className="flex animate-scroll-right ">
  {/* <div className="flex animate-scroll-right"> */}
    {/* First set of grid */}
    <div className="min-w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 p-2">
      <div className="grid gap-2">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image1} alt="" />  
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image2} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image3} alt="" />
        </div>
      </div>
      <div className="grid gap-10">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image4} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image5} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image6} alt="" />
        </div>
      </div>
      <div className="grid gap-2">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image7} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image9} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image10} alt="" />
        </div>
      </div>
    </div>

    {/* Second set of grid (duplicate for seamless scroll) */}
    <div className="min-w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 p-2">
      <div className="grid gap-2">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image11} alt="" />  
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image12} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image13} alt="" />
        </div>
      </div>
      <div className="grid gap-10">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image14} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image15} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image16} alt="" />
        </div>
      </div>
      <div className="grid gap-2">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image17} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image18} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image19} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image20} alt="" />
        </div>
      </div>
    </div>
    {/* Third set of grid */}
    <div className="min-w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 p-2">
      <div className="grid gap-2">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image1} alt="" />  
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image2} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image3} alt="" />
        </div>
      </div>
      <div className="grid gap-10">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image4} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image5} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image6} alt="" />
        </div>
      </div>
      <div className="grid gap-2">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image7} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image8} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image9} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image10} alt="" />
        </div>
      </div>
    </div>

    {/* Fourth set of grid (duplicate for seamless scroll) */}
    <div className="min-w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 p-2">
      <div className="grid gap-2">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image11} alt="" />  
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image12} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image13} alt="" />
        </div>
      </div>
      <div className="grid gap-10">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image14} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image15} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image16} alt="" />
        </div>
      </div>
      <div className="grid gap-2">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image17} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image18} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image19} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={image20} alt="" />
        </div>
      </div>
    </div>
  </div>
  
</div>

  );
};

export default Gallery;