import React from "react";
import { aspectRatio, inner} from "./AspectRatio.module.css";

function AspectRatio(props) {
  return (
    <div
      className={aspectRatio}
      style={{
        paddingBottom: (1 / props.ratio) * 100 + "%",
      }}
    >
      <div className={inner}>{props.children}</div>
    </div>
  );
}

export default AspectRatio;
