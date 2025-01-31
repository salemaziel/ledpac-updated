import React from "react";
import BackgroundImage from "./BackgroundImage";
import {sectionComponent, whiteSection, container } from "./Section.module.css";

function Section(props) {
  const {
    bg,
    textColor,
    bgImage,
    bgImageOpacity,
    bgImageRepeat,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <section
      className={`${sectionComponent} py-5 position-relative
        ${bg ? `bg-${bg}` : ''}
        ${textColor ? `text-${textColor}` : ''}
        ${bg === 'white' ? whiteSection : ''}
        ${className || ''}`}
      {...otherProps}
    >
      {bgImage && (
        <BackgroundImage
          image={bgImage}
          opacity={bgImageOpacity}
          repeat={bgImageRepeat}
        />
      )}

      <div
        className={`${container}
          ${["md", "lg"].includes(props.size) ? "py-md-5" : ""}
          ${props.size === "lg" ? "my-md-5" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;
