import gsap from "gsap";
import { useEffect, useLayoutEffect } from "react";

const SliderProgress = (props) => {
  useLayoutEffect(() => {
    gsap.to(".slider-progress", { scaleX: 1, duration: 3 });
  });

  useEffect(() => {
    if (props.category === "Seating") {
      gsap.to(".slider-progress", {
        duration: 2,
        xPercent: 0,
      });
    } else if (props.category === "Storage") {
      gsap.to(".slider-progress", {
        duration: 2,
        xPercent: 100,
      });
    } else if (props.category === "Chair") {
      gsap.to(".slider-progress", {
        duration: 2,
        xPercent: 200,
      });
    } else if (props.category === "Table") {
      gsap.to(".slider-progress", {
        duration: 2,
        xPercent: 300,
      });
      console.log("Table");
    } else if (props.category === "Sofa") {
      gsap.to(".slider-progress", {
        duration: 2,
        xPercent: 400,
      });
      console.log("Sofa");
    }
  }, [props.category]);

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
            width: "20%",
            borderRadius: 5,
            backgroundColor: "black",
          }}
        />
      </div>
    </div>
  );
};

export default SliderProgress;
