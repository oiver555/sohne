import { Canvas } from "@react-three/fiber";
import "./style.css";
import ReactDOM from "react-dom/client";
import Furniture from "./Furniture.jsx";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Experience from "./Experience.jsx";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useState } from "react";
import Nav from "./navigation.jsx";
import Slider from "./Slider.jsx";
import SliderProgress from "./SliderProgress.jsx";
import TitleDrop from "./TitleDrop.jsx";
import CategoryDrop from "./CategoryDrop.jsx";

export default () => {
  const [category, setCategory] = useState("Chairs");
  const tl = gsap.timeline({ repeat: 0 });

  useEffect(() => {
    tl.fromTo(
      ".discover",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
      5.2
    );
    tl.play(true);
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          marginLeft: 40,
          position: "absolute",
          zIndex: 10,
        }}
      >
        Söhne
      </h3>

      {/* Button */}
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          top: 100,
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <button
          className="discover"
          style={{
            borderRadius: 20,
            fontSize: 15,
            border: ".5px solid grey",
            padding: "10px 30px 10px 30px",
          }}
        >
          Discover
        </button>
      </div>

      {/* Category Slider/Picker */}
      <Slider setCategory={setCategory} category={category} />
      <SliderProgress category={category} />

      <Nav />
      <div style={{ flexDirection: "row", display: "flex", height: "100%" }}>
        <Canvas style={{ flex: 1 }} shadows>
          <Experience category={category}/>
        </Canvas>
        <div style={{ flex: 1,  }}>
          <img
            style={{ width: "100%", height: 'auto',  transform: 'scaleX(-1)' }}
            src="./images/Chair_A.png"
          />
        </div>
      </div>
      <TitleDrop />
      <CategoryDrop category={category} />
    </div>
  );
};
