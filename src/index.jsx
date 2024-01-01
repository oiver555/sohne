import { Canvas } from "@react-three/fiber";
import "./style.css";
import ReactDOM from "react-dom/client";
import Furniture from "./Furniture.jsx";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Experience from "./Experience.jsx";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import Nav from "./navigation.jsx";
import Slider from "./Slider.jsx";
import SliderProgress from "./SliderProgress.jsx";
import CategoryTitle from "./CategoryTitle.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));



root.render(
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <h3 style={{ marginLeft: 40, position: "absolute", zIndex: 10 }}>Söhne</h3>

    <CategoryTitle />
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
    <Slider />
    <SliderProgress />

    <Nav />
    <div style={{ flexDirection: "row", display: "flex", height: "100%" }}>
      <Canvas style={{ flex: 1 }} shadows>
        <Experience />
      </Canvas>
      <div style={{ flex: 1, backgroundColor: "red" }}></div>
    </div>
  </div>
);
