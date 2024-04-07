import { gsap } from "gsap";
import { useEffect, useState } from "react";

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
      4.5
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768; // You can adjust this threshold as needed
      setIsMobile(isMobileDevice);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div
      style={{
        height: isMobile ? 150 : 200,
        width: window.innerWidth,
        position: "absolute",
        overflow: "hidden",
        top: isMobile ? "2%" : "25%",
        pointerEvents: "none",
        color: "#FCFAF3",

      }}
    >
      <div
        className="categoryContainer"
        style={{
          // position: "absolute",
          width: window.innerWidth,
          zIndex: 10,
          pointerEvents: "none",
          fontSize: isMobile ?  `${150 * 0.11}vw` : 150,
          // transform: "translateY(-100%)",
          alignItems: "center",
          display: "flex",
          position: "absolute",
          flexDirection: "column",
          height: 1000,
          // backgroundColor: "red",
        }}
      >
        <div style={{ height: isMobile ? 150 : 200,   }}>
          {"Chairs".split("").map((letter, index) => (
            <span
              key={index}
              className="categoryDrop initial makeVis"
              style={{
                display: "inline-block",
                textShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div style={{ height: isMobile ? 150 : 200, background: "yellow" }}>
          {"Storage".split("").map((letter, index) => (
            <span
              key={index}
              className="makeVis categoryDrop"
              style={{
                display: "inline-block",
                textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div style={{ height: isMobile ? 150 : 200 }}>
          {"Tables".split("").map((letter, index) => (
            <span
              key={index}
              className="makeVis categoryDrop"
              style={{
                display: "inline-block",
                textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div style={{ height: isMobile ? 150 : 200 }}>
          {"Sofas".split("").map((letter, index) => (
            <span
              key={index}
              className="makeVis categoryDrop"
              style={{
                display: "inline-block",
                textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              }}
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
