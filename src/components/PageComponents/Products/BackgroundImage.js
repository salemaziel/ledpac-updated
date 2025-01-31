import React from "react";
import {backgroundImage, repeat} from "./backgroundImage.module.css";

function BackgroundImage(props) {
  return (
    <div
      className={`${backgroundImage} ${props.repeat ? repeat : ""}`}
      style={{
        "--image": `url(${props.image})`,
        "--opacity": props.opacity,
      }}
    ></div>
  );
}

export default BackgroundImage;
