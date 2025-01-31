import React from "react";
import { Link } from "gatsby";

const ButtonLink = ({ to, className, children }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

export default ButtonLink;
