import { Canvas } from "@react-three/fiber";
import "./style.css";
import ReactDOM from "react-dom/client";
import Furniture from "./Furniture.jsx";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Experience from "./Experience.jsx";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Nav from "./navigation.jsx";
import Slider from "./Slider.jsx";
import SliderProgress from "./SliderProgress.jsx";
import TitleDrop from "./TitleDrop.jsx";
import CategoryDrop from "./CategoryDrop.jsx";
import { useSpring, useSpringRef, Controller } from "@react-spring/three";

export default () => {
  const tl = gsap.timeline({ repeat: 0 });
  const chairA_spring_pos_Ref = useSpringRef();
  const chairA_spring_rot_Ref = useSpringRef();
  const storageA_springRef = useSpringRef();
  const tableA_springRef = useSpringRef();
  const sofaA_springRef = useSpringRef();
  const chairAGroupRef = useRef();
  const storageAGroupRef = useRef();
  const tableAGroupRef = useRef();
  const sofaAGroupRef = useRef();
  const chairARef = useRef();
  const storageARef = useRef();
  const tableARef = useRef();
  const sofaARef = useRef();

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

  const [rotation, api] = useSpring(() => {
    return {
      ref: chairA_spring_rot_Ref,
      from: { rotation: 0 },
      loop: true,
      to: [
        {
          rotation: 6.25,
        },
      ],
    };
  });


  
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
        }}
      >
        <button
          className="discover"
          style={{
            borderRadius: 20,
            fontSize: 15,
            border: "0px solid grey",
            padding: "10px 30px 10px 30px",
          }}
          onClick={() => {
            if (chairARef.current.position.z) {
              console.log("Hey there");
              api.start({
                to: [
                  {
                    rotation: 6.25,
                  },
                ],
                config: {
                  mass: 5,
                  tension: 1,
                  friction: 0,
                  duration: 50000,
                },
                loop: true, // Reset the animation when it reaches the end
                immediate: false,
                pause: false,
              });
            } else if (storageARef.current.position.z) {
            } else if (tableARef.current.position.z) {
            } else if (sofaARef.current.position.z) {
            }
          }}
        >
          discover
        </button>
      </div>

      {/* Category Slider/Picker */}
      <Slider
        chairA_spring_pos_Ref={chairA_spring_pos_Ref}
        storageA_springRef={storageA_springRef}
        tableA_springRef={tableA_springRef}
        sofaA_springRef={sofaA_springRef}
      />
      <SliderProgress />

      <Nav />
      <div style={{ flexDirection: "row", display: "flex", height: "100%" }}>
        <Canvas style={{ flex: 1 }} shadows>
          <Experience
            rotation={rotation}
            storageA_springRef={storageA_springRef}
            tableA_springRef={tableA_springRef}
            sofaA_springRef={sofaA_springRef}
            chairA_spring_pos_Ref={chairA_spring_pos_Ref}
            chairARef={chairARef}
            storageARef={storageARef}
            tableARef={tableARef}
            sofaARef={sofaARef}
            chairAGroupRef={chairAGroupRef}
            storageAGroupRef={storageAGroupRef}
            tableAGroupRef={tableAGroupRef}
            sofaAGroupRef={sofaAGroupRef}
          />
        </Canvas>
        <div style={{ flex: 1 }}>
          <img
            style={{ width: "100%", height: "auto", transform: "scaleX(-1)" }}
            src="./images/Chair_A.png"
          />
        </div>
      </div>
      {/* <TitleDrop />
      <CategoryDrop /> */}
    </div>
  );
};
