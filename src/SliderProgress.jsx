import gsap from "gsap";
import { useLayoutEffect } from "react";

const SliderProgress = (props) => {
  useLayoutEffect(() => {
    gsap.to(".slider-progress", { scaleX: 1, duration: 3 });
  });
  return (
    <div
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
          width: "15%",
          backgroundColor: "blue",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }} 
      >
        <div
          className="slider-progress"
          style={{
            height: 5,
            width: "100%",
            borderRadius: 5,
            backgroundColor: "yellow",
          }}
        />
      </div>
    </div>
  );
};

export default SliderProgress;
