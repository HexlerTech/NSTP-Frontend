import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyLoad = ({ imageSrc, imageAlt, className,wrapperClassName }) => {
  return (
    <LazyLoadImage
      src={imageSrc}
      placeholderSrc={imageSrc}
      alt={imageAlt}
      effect="blur"
      wrapperClassName={wrapperClassName || "w-full h-full"}
      className={` ${className}`}
      width="100%"
      height="100%"
      threshold={100}
      delayMethod="throttle"
      delayTime={300}
    />
  )
}

export default LazyLoad