import { Canvas } from "@react-three/fiber";
import "./style.css";
import ReactDOM from "react-dom/client";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Experience from "./Experience.jsx";
import { gsap } from "gsap";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useContext,
} from "react";
import Nav from "./navigation.jsx";
import Slider from "./Slider.jsx";
import SliderProgress from "./SliderProgress.jsx";
import TitleDrop from "./TitleDrop.jsx";
import CategoryDrop from "./CategoryDrop.jsx";
import { useSpring, useSpringRef, Controller } from "@react-spring/three";
import OverlayHTML from "./OverlayHTML.jsx";
import { ChairsContext } from "./ExpContext.jsx";
import HTMLContent from "./HTMLContent.jsx";

export default () => {


  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
      }}
    >
      <OverlayHTML />

      <div style={{ flexDirection: "row", display: "flex", height: "100%" }}>
        <Canvas style={{ flex: 1 }} shadows>
          <Experience />
        </Canvas>
        <HTMLContent  />
      </div>
    </div>
  );
};
