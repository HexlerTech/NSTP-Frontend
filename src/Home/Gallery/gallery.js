import React, { useEffect, useState } from "react";
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
             
              <LazyLoad
                imageSrc="/images/Gallery/image18.svg"
                imageAlt="Gallery 18"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                className="h-auto max-w-full rounded-lg"
                imageSrc="/images/Gallery/image21.svg"
                imageAlt="Gallery 21"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc="/images/Gallery/image20.svg"
                imageAlt="Gallery 20"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
           
            
            <div>
            <LazyLoad
                imageSrc="/images/Gallery/image13.svg"
                imageAlt="Gallery 13"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
            <LazyLoad
                imageSrc="/images/Gallery/image14.svg"
                imageAlt="Gallery 14"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc="/images/Gallery/image19.svg"
                imageAlt="Gallery 19"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            
            <div>
            <LazyLoad
                imageSrc="/images/Gallery/image22.svg"
                imageAlt="Gallery 22"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
            <LazyLoad
                imageSrc="/images/Gallery/image23.svg"
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
                imageSrc="/images/Gallery/image15.svg"
                imageAlt="Gallery 15"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc="/images/Gallery/image16.svg"
                imageAlt="Gallery 16"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc="/images/Gallery/image17.svg"
                imageAlt="Gallery 17"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <LazyLoad
                imageSrc="/images/Gallery/image1.svg"
                imageAlt="Gallery 1"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc="images/Gallery/image2.svg"
                imageAlt="Gallery 2"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc="images/Gallery/image3.svg"
                imageAlt="Gallery 3"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <LazyLoad
                imageSrc="/images/Gallery/image4.svg"
                imageAlt="Gallery 4"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc="images/Gallery/image5.svg"
                imageAlt="Gallery 5"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc="images/Gallery/image6.svg"
                imageAlt="Gallery 6"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc="images/Gallery/image7.svg"
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
                imageSrc="images/Gallery/image8.svg"
                imageAlt="Gallery 8"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc="images/Gallery/image10.svg"
                imageAlt="Gallery 10"
                className="h-auto max-w-full rounded-lg"
              />
            </div>
            <div>
              <LazyLoad
                imageSrc="images/Gallery/image9.svg"
                imageAlt="Gallery 9"
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
