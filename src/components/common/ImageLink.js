import React from "react";
import { Link } from "gatsby";

const ImageLink = ({ to, src, alt, className }) => (
  <Link to={to} className={className}>
    <img src={src} alt={alt} />
  </Link>
);

export default ImageLink;
