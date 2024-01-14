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

  const { rotation } = useSpring({
    ref: chairA_spring_rot_Ref,
    from: { rotation: 0 },
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
            border: "0px solid grey",
            padding: "10px 30px 10px 30px",
            pointerEvents: "all",
          }}
          onClick={() => {
            if (chairARef.current.position.z) {
              console.log("Hey there");
              chairA_spring_rot_Ref.start();

              gsap.to(".chairSlider", {
                duration: 4,
                y: 0,
                stagger: 0.05,
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
        <div
          style={{
            flex: 1,
            backgroundColor: "pink",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            className="imagesContainer"
            style={{
              position: "absolute",
              transform: "translateX(-0%)",
              display: "flex",
              flexDirection: "row",
              justifyItems: "flex-start",
              backgroundColor: "red",
            }}
          >
            <img
              title="chair"
              style={{ transform: "scaleX(-1)", opacity: 1 }}
              src="./images/Chairs.png"
              width={"100%"}
            />
            <img
              title="storage"
              style={{ transform: "scaleX(-1)" }}
              src="./images/Storage.png"
              width={"100%"}
            />
            <img
              title="table"
              style={{ transform: "scaleX(-1)" }}
              src="./images/Table.png"
              width={"100%"}
            />
            <img
              title="sofa"
              style={{ transform: "scaleX(-1)" }}
              src="./images/Sofa.png"
              width={"100%"}
            />
          </div>
          <div
            style={{
              height: "80%",
              display: "flex",
              flexDirection: "column",
              width: "80%",
              backgroundColor: "lime",
              alignItems: "center",
            }}
          >
            <div style={{ backgroundColor: "green", alignSelf: "flex-start" }}>
              <div style={{ alignSelf: "flex-start", fontSize: 35 }}>
                Seating
              </div>
            </div>
            <div
              style={{
                backgroundColor: "red",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                WebkitFlexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <figure
                className="chairSlider"
                style={{
                  backgroundColor: "yellow",
                  width: "40%",
                  margin: 10,
                  transform: "translateY(1000px)",
                }}
              >
                <img width="100%" src="./images/Chair_A.png" />
                <figcaption>Söhne Chair</figcaption>
              </figure>
              <figure
                className="chairSlider"
                style={{
                  backgroundColor: "yellow",
                  width: "40%",
                  margin: 10,
                  transform: "translateY(1000px)",
                }}
              >
                <img width="100%" src="./images/Chair_B.png" />
                <figcaption>Söhne Chair</figcaption>
              </figure>
              <figure
                className="chairSlider"
                style={{
                  backgroundColor: "yellow",
                  width: "40%",
                  margin: 10,
                  transform: "translateY(1000px)",
                }}
              >
                <img width="100%" src="./images/Chair_C.png" />
                <figcaption>Söhne Chair</figcaption>
              </figure>
              <figure
                className="chairSlider"
                style={{
                  backgroundColor: "yellow",
                  width: "40%",
                  margin: 10,
                  transform: "translateY(1000px)",
                }}
              >
                <img width="100%" src="./images/Chair_D.png" />
                <figcaption>Söhne Chair</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <TitleDrop />
      <CategoryDrop />
    </div>
  );
};
