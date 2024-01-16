import gsap from "gsap";
import { useEffect, useLayoutEffect } from "react";

const SliderProgress = (props) => {
  useLayoutEffect(() => {
    gsap.to(".slider-progress", { scaleX: 1, duration: 3 });
  });

  return (
    <div
      className="slidersVis"
      style={{
        display: "flex",
        position: "absolute",
        bottom: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        zIndex: 10,
        width: "100%",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "25%",
          backgroundColor: "lightgrey",
          display: "flex",
          flexDirection: "row",
          borderRadius: 5,
          justifyContent: "space-between",
        }}
      >
        <div
          className="slider-progress"
          style={{
            height: 5,
            width: "25%",
            borderRadius: 5,
            backgroundColor: "black",
          }}
        />
      </div>
    </div>
  );
};

export default SliderProgress;
