import { Canvas } from "@react-three/fiber";
import "./style.css";
import ReactDOM from "react-dom/client";
import Furniture from "./Furniture.jsx";
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
import { ChairsContext, StorageContext } from "./ExpContext.jsx";

export default () => {
  const tl = gsap.timeline({ repeat: 0 });
  const { chairARef, chairBRef, chairCRef, chairDRef } = useContext(ChairsContext);
  const { storageARef, storageBRef, storageCRef, storageDRef } = useContext(StorageContext);







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
        <div
          style={{
            flex: 1,
            backgroundColor: "pink",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
            flexDirection: "column",
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
            className="whiteCard"
            style={{
              backgroundColor: "white",
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: `translateY(${window.outerHeight}px)`,
            }}
          />
          <div
            className="categoryLabel"
            style={{
              width: "100%",
              paddingLeft: 50,
              position: "relative",
            }}
          >
            <div
              id="seatingLabel"
              style={{
                fontSize: 35,
                position: "absolute",
                opacity: 0,
              }}
            >
              Seating
            </div>
            <div
              id="storageLabel"
              style={{
                fontSize: 35,
                position: "absolute",
                opacity: 0,
              }}
            >
              Storage
            </div>
            <div
              id="tableLabel"
              style={{
                fontSize: 35,
                position: "absolute",
                opacity: 0,
              }}
            >
              Table
            </div>
            <div
              id="sofaLabel"
              style={{
                fontSize: 35,
                position: "absolute",
                opacity: 0,
              }}
            >
              Sofa
            </div>
            <div
              id="sofaLabel"
              style={{
                fontSize: 35,
                position: "relative",
                opacity: 0,
              }}
            >
              placeholder
            </div>
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
            <div style={{ position: "absolute" }}>
              <div
                style={{
                 
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
                    width: "40%",
                    margin: 10,
                    transform: "translateY(1000px)",
                  }}
                >
                  <img
                    onMouseOver={() => {
                      chairARef.current.visible = true;
                      chairBRef.current.visible = false;
                      chairCRef.current.visible = false;
                      chairDRef.current.visible = false;
                    }}
                    width="100%"
                    src="./images/Chair_A.png"
                  />
                  <figcaption>
                    Söhne Chair
                    <br />
                    500 &euro;
                  </figcaption>
                </figure>
                <figure
                  className="chairSlider"
                  style={{
                    width: "40%",
                    margin: 10,
                    transform: "translateY(1000px)",
                  }}
                >
                  <img
                    onMouseOver={() => {
                      chairARef.current.visible = false;
                      chairBRef.current.visible = true;
                      chairCRef.current.visible = false;
                      chairDRef.current.visible = false;
                    }}
                    width="100%"
                    src="./images/Chair_B.png"
                  />
                  <figcaption>
                    Söhne Chair
                    <br />
                    500 &euro;
                  </figcaption>
                </figure>
                <figure
                  className="chairSlider"
                  style={{
                    width: "40%",
                    margin: 10,
                    transform: "translateY(1000px)",
                  }}
                >
                  <img
                    onMouseOver={() => {
                      chairARef.current.visible = false;
                      chairBRef.current.visible = false;
                      chairCRef.current.visible = true;
                      chairDRef.current.visible = false;
                    }}
                    width="100%"
                    src="./images/Chair_C.png"
                  />
                  <figcaption>
                    Söhne Chair
                    <br />
                    500 &euro;
                  </figcaption>
                </figure>
                <figure
                  className="chairSlider"
                  style={{
                    width: "40%",
                    margin: 10,
                    transform: "translateY(1000px)",
                  }}
                >
                  <img
                    onMouseOver={() => {
                      chairARef.current.visible = false;
                      chairBRef.current.visible = false;
                      chairCRef.current.visible = false;
                      chairDRef.current.visible = true;
                    }}
                    width="100%"
                    src="./images/Chair_D.png"
                  />
                  <figcaption>
                    Söhne Chair
                    <br />
                    500 &euro;
                  </figcaption>
                </figure>
              </div>
            </div>
            <div style={{ position: "absolute" }}>
              <div
                style={{
                 
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  WebkitFlexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <figure
                  className="storageSlider"
                  style={{
                    width: "40%",
                    margin: 10,
                    transform: "translateY(1000px)",
                  }}
                >
                  <img
                    onMouseOver={() => {
                      storageARef.current.visible = true;
                      storageBRef.current.visible = false;
                      storageCRef.current.visible = false;
                      storageDRef.current.visible = false;
                    }}
                    width="100%"
                    src="./images/Storage_A.jpg"
                  />
                  <figcaption>
                    Söhne Storage
                    <br />
                    500 &euro;
                  </figcaption>
                </figure>
                <figure
                  className="storageSlider"
                  style={{
                    width: "40%",
                    margin: 10,
                    transform: "translateY(1000px)",
                  }}
                >
                  <img
                    onMouseOver={() => {
                      storageARef.current.visible = false;
                      storageBRef.current.visible = true;
                      storageCRef.current.visible = false;
                      storageDRef.current.visible = false;
                    }}
                    width="100%"
                    src="./images/Storage_B.jpg"
                  />
                  <figcaption>
                    Söhne Storage
                    <br />
                    500 &euro;
                  </figcaption>
                </figure>
                <figure
                  className="storageSlider"
                  style={{
                    width: "40%",
                    margin: 10,
                    transform: "translateY(1000px)",
                  }}
                >
                  <img
                    onMouseOver={() => {
                      storageARef.current.visible = false;
                      storageBRef.current.visible = false;
                      storageCRef.current.visible = true;
                      storageDRef.current.visible = false;
                    }}
                    width="100%"
                    src="./images/Storage_C.jpg"
                  />
                  <figcaption>
                    Söhne Storage
                    <br />
                    500 &euro;
                  </figcaption>
                </figure>
                <figure
                  className="storageSlider"
                  style={{
                    width: "40%",
                    margin: 10,
                    transform: "translateY(1000px)",
                  }}
                >
                  <img
                    onMouseOver={() => {
                      storageARef.current.visible = false;
                      storageBRef.current.visible = false;
                      storageCRef.current.visible = false;
                      storageDRef.current.visible = true;
                    }}
                    width="100%"
                    src="./images/Storage_D.jpg"
                  />
                  <figcaption>
                    Söhne Storage
                    <br />
                    500 &euro;
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
