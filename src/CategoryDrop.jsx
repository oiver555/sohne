import { gsap } from "gsap";
import { useEffect } from "react";

const CategoryDrop = (props) => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });

    tl.fromTo(
      ".initial",
      {
        yPercent: -200,
      },
      {
        duration: 0.1,
        ease: "sine",
        stagger: 0.1,
      },
      2.5
    );
    tl.fromTo(
      ".makeVis",
      {
        opacity: 0,
      },
      {
        duration: 1,
        ease: "sine",
        opacity: 1,
      },
      ">"
    );
    tl.to(
      ".initial",
      {
        duration: 1.8,
        yPercent: 5,
        ease: "ease",
        stagger: 0.05,
      },
      ">"
    );
  }, []);

  useEffect(() => {
    if (props.category === "Seating") {
      gsap.to(".categoryDrop", {
        duration: 2,
        y: 0,
      });
    } else if (props.category === "Storage") {
      gsap.to(".categoryDrop", {
        duration: 2,
        y: -200,
      });
    } else if (props.category === "Chair") {
      gsap.to(".categoryDrop", {
        duration: 2,
        y: -400,
      });
    } else if (props.category === "Table") {
      gsap.to(".categoryDrop", {
        duration: 2,
        y: -600,
      });
      console.log("Table");
    } else if (props.category === "Sofa") {
      gsap.to(".categoryDrop", {
        duration: 2,
        y: -800,
      });
      console.log("Sofa");
    }
  }, [props.category]);

  return (
    <div
      style={{
        height: 200,
        width: window.innerWidth,
        position: "absolute",
        overflow: "hidden",
        top: "25%",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          // position: "absolute",
          width: window.innerWidth,
          height: window.innerHeight,
          zIndex: 10,
          pointerEvents: "none",
          fontSize: 150,
          // transform: "translateY(-100%)",
          alignItems: "center",
          display: "flex",
          position: "absolute",
          flexDirection: "column",
          height: 1000,
        }}
      >
        <div style={{ height: 200 }}>
          {"Seating".split("").map((letter, index) => (
            <span
              key={index}
              className="categoryDrop initial makeVis"
              style={{ display: "inline-block" }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div style={{ height: 200, background: "yellow" }}>
          {"Storage".split("").map((letter, index) => (
            <span
              key={index}
              className="makeVis categoryDrop"
              style={{ display: "inline-block" }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div style={{ height: 200, background: "purple" }}>
          {"Chair".split("").map((letter, index) => (
            <span
              key={index}
              className="makeVis categoryDrop"
              style={{ display: "inline-block" }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div style={{ height: 200, background: "blue" }}>
          {"Table".split("").map((letter, index) => (
            <span
              key={index}
              className="makeVis categoryDrop"
              style={{ display: "inline-block" }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div style={{ height: 200, background: "orange" }}>
          {"Sofa".split("").map((letter, index) => (
            <span
              key={index}
              className="makeVis categoryDrop"
              style={{ display: "inline-block" }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDrop;
