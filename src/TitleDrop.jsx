import { gsap } from "gsap";
import { useEffect } from "react";

const TitleDrop = (props) => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });

    tl.fromTo(
      ".test",
      {
        yPercent: -200,
      },
      {
        duration: 0.1,
        ease: "sine",
        yoyo: false,
        stagger: 0.1,
      },

      2
    );
    tl.to(
      ".test",
      {
        duration: 1,
        yPercent: 15,
        ease: "sine",
        yoyo: false,
        stagger: 0.1,
      },
      ">"
    );

    tl.to(
      ".test",
      {
        duration: 1,
        ease: "sine",
        yoyo: false,
        paused: true,
        stagger: 0.1,
      },
      ">"
    );

    tl.to(
      ".test",
      {
        duration: 2,
        yPercent: 150,
        ease: "sine",
        yoyo: false,
        stagger: 0.1,
      },
      ">"
    );
    tl.play(true);
  }, []);

  return (
    <div
      style={{
        height: 400,
        pointerEvents: "none",
        width: window.innerWidth,
        position: "absolute",
        overflow: "hidden",
        top: "25%",
      }}
    >
      <div
        style={{
          // position: "absolute",
          width: window.innerWidth,
          height: window.innerHeight,
          zIndex: 10,
           
          fontSize: 250,
          // transform: "translateY(-100%)",
          justifyContent: "center",
          display: "flex",
          position: "absolute",
        }}
      >
        <span className="test" style={{ display: "inline-block" }}>
          S
        </span>
        <span className="test" style={{ display: "inline-block" }}>
          ö
        </span>
        <span className="test" style={{ display: "inline-block" }}>
          h
        </span>
        <span className="test" style={{ display: "inline-block" }}>
          n
        </span>
        <span className="test" style={{ display: "inline-block" }}>
          e
        </span>
      </div>
    </div>
  );
};

export default TitleDrop;
