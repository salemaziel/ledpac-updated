import React from "react";

const ImageFit = ({ src, alt, className, style }) => (
  <span className={`image fit ${className}`} style={style}>
    <img src={src} alt={alt} />
  </span>
);

export default ImageFit;
