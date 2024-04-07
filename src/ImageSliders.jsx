import { useContext, useEffect, useState } from "react";
import {
  ChairsContext,
  GlobalStateContext,
  SceneContext,
  StorageContext,
} from "./ExpContext";
import useConstant from "./hooks/useConstant";
import CategoryLabels from "./CategoryLabels";
import gsap from "gsap";
import * as THREE from "three";

const ImageSliders = (props) => {
  const { chairARef, chairBRef, chairCRef, chairDRef, setChairsVis } =
    useContext(ChairsContext);
  const { cameraRef } = useContext(SceneContext);
  const {
    storageARef,
    storageCRef,
    storageGroupPosition,
    storageDRef,
    storageBRef,
    storageVis,
    setStorageVis,
  } = useContext(StorageContext);

  const { outerHeight, outerWidth } = window;
  const { currCategory, setCurrCategory, currChair, setCurrChair } =
    useContext(GlobalStateContext);
  const { chairsVis, chairGroupPosition } = useContext(ChairsContext);
  const { navHeight } = useConstant();

  return (
    <div
      className="whiteCard"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflowY: "auto",
        alignItems: "center",
        backgroundColor: "white",
        position: "absolute",
        paddingTop: navHeight + 50,
        transform: `translateY(${window.outerHeight}px)`,
      }}
    >
      {currCategory === "Chair" &&
        chairGroupPosition.position.get()[2] === 0 && (
          <div
            style={{
              position: "absolute",
              pointerEvents: "none",
              paddingBottom: navHeight + 50,
            }}
          >
            {/* SEATING */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                WebkitFlexWrap: "wrap",
                justifyContent: "center",
                pointerEvents: "none",
                height: "100%",
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
                  onClick={() => {
                    console.log("Chair A");
                    setCurrChair("a");
                    setChairsVis({
                      a: true,
                      b: false,
                      c: false,
                      d: false,
                      e: false,
                    });
                  }}
                  width="100%"
                  src="./images/Chair_A.webp"
                  style={{ pointerEvents: "fill" }}
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
                  onClick={() => {
                    setCurrChair("b");
                    setChairsVis({
                      a: false,
                      b: true,
                      c: false,
                      d: false,
                      e: false,
                    });
                  }}
                  width="100%"
                  src="./images/Chair_B.webp"
                  style={{ pointerEvents: "fill" }}
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
                  onClick={() => {
                    console.log("Chair C");
                    setCurrChair("c");
                    setChairsVis({
                      a: false,
                      b: false,
                      c: true,
                      d: false,
                      e: false,
                    });
                  }}
                  width="100%"
                  src="./images/Chair_C.webp"
                  style={{ pointerEvents: "fill" }}
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
                  onClick={() => {
                    console.log("Chair D");
                    setCurrChair("d");
                    setChairsVis({
                      a: false,
                      b: false,
                      c: false,
                      d: true,
                      e: false,
                    });
                  }}
                  width="100%"
                  src="./images/Chair_D.webp"
                  style={{ pointerEvents: "fill" }}
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
                  onClick={() => {
                    console.log("Chair E");
                    setCurrChair("e");
                    setChairsVis({
                      a: false,
                      b: false,
                      c: false,
                      d: false,
                      e: true,
                    });
                  }}
                  width="100%"
                  src="./images/Chair_E.webp"
                  style={{ pointerEvents: "fill" }}
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
                  width="100%"
                  src="./images/Chair_E.webp"
                  style={{ pointerEvents: "fill", opacity: 0 }}
                />
                <figcaption>
                  Söhne Chair
                  <br />
                  500 &euro;
                </figcaption>
              </figure>
            </div>
          </div>
        )}
      {currCategory === "Storage" && (
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            paddingBottom: navHeight + 50,
          }}
        >
          {/* STORAGE */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              WebkitFlexWrap: "wrap",
              justifyContent: "center",
              pointerEvents: "none",
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
                onClick={() => {
                  setStorageVis({
                    a: true,
                    b: false,
                    c: false,
                    d: false,
                  });
                }}
                width="100%"
                src="./images/Storage_A.jpg"
                style={{ pointerEvents: "fill" }}
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
                onClick={() => {
                  setStorageVis({
                    a: false,
                    b: true,
                    c: false,
                    d: false,
                  });
                  cameraRef.current.lookAt(new THREE.Vector3(0, 2, 0));
                  gsap.to(cameraRef.current.position, {
                    x: 100,
                    y: 15,
                    z: 70,
                    duration: 1,
                    onUpdate: () =>
                      cameraRef.current.lookAt(new THREE.Vector3(0, 2, 0)),
                  });
                  gsap.to(cameraRef.current, {
                    fov: 10,
                    duration: 1,
                    onUpdate: () =>
                      cameraRef.current.lookAt(new THREE.Vector3(0, 2, 0)),
                  });
                }}
                width="100%"
                src="./images/Storage_B.jpg"
                style={{ pointerEvents: "fill" }}
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
                onClick={() => {
                  cameraRef.current.lookAt(new THREE.Vector3(0, 2, 0));
                  gsap.to(cameraRef.current.position, {
                    x: 110,
                    y: 15,
                    z: 75,
                    duration: 1,
                    onUpdate: () =>
                      cameraRef.current.lookAt(new THREE.Vector3(0, 2, 0)),
                  });
                  gsap.to(cameraRef.current, {
                    fov: 10,
                    duration: 1,
                    onUpdate: () =>
                      cameraRef.current.lookAt(new THREE.Vector3(0, 2, 0)),
                  });
                  setStorageVis({
                    a: false,
                    b: false,
                    c: true,
                    d: false,
                  });
                }}
                width="100%"
                src="./images/Storage_C.jpg"
                style={{ pointerEvents: "fill" }}
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
                onClick={() => {
                  setStorageVis({
                    a: false,
                    b: false,
                    c: false,
                    d: true,
                  });
                }}
                width="100%"
                src="./images/Storage_D.jpg"
                style={{ pointerEvents: "fill" }}
              />
              <figcaption>
                Söhne Storage
                <br />
                500 &euro;
              </figcaption>
            </figure>
          </div>
        </div>
      )}
      {/* TABLE */}
      {currCategory === "Table" && (
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            paddingBottom: navHeight + 50,
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              WebkitFlexWrap: "wrap",
              justifyContent: "center",
              pointerEvents: "none",
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
                onClick={() => {
                  setTableVis({
                    a: true,
                    b: false,
                    c: false,
                    d: false,
                  });
                }}
                width="100%"
                src="./images/Table_A.jpg"
                style={{ pointerEvents: "fill" }}
              />
              <figcaption>
                Söhne Storage
                <br />
                500 &euro;
              </figcaption>
            </figure>
            <figure
              className="tableSlider"
              style={{
                width: "40%",
                margin: 10,
                transform: "translateY(1000px)",
              }}
            >
              <img
                onClick={() => {
                  setTableVis({
                    a: false,
                    b: true,
                    c: false,
                    d: false,
                  });
                  cameraRef.current.lookAt(new THREE.Vector3(0, 2, 0));
                  gsap.to(cameraRef.current.position, {
                    x: 100,
                    y: 15,
                    z: 70,
                    duration: 1,
                    onUpdate: () =>
                      cameraRef.current.lookAt(new THREE.Vector3(0, 2, 0)),
                  });
                  gsap.to(cameraRef.current, {
                    fov: 10,
                    duration: 1,
                    onUpdate: () =>
                      cameraRef.current.lookAt(new THREE.Vector3(0, 2, 0)),
                  });
                }}
                width="100%"
                src="./images/Storage_B.jpg"
                style={{ pointerEvents: "fill" }}
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
                onClick={() => {
                  cameraRef.current.lookAt(new THREE.Vector3(0, 2, 0));
                  gsap.to(cameraRef.current.position, {
                    x: 110,
                    y: 15,
                    z: 75,
                    duration: 1,
                    onUpdate: () =>
                      cameraRef.current.lookAt(new THREE.Vector3(0, 2, 0)),
                  });
                  gsap.to(cameraRef.current, {
                    fov: 10,
                    duration: 1,
                    onUpdate: () =>
                      cameraRef.current.lookAt(new THREE.Vector3(0, 2, 0)),
                  });
                  setTableVis({
                    a: false,
                    b: false,
                    c: true,
                    d: false,
                  });
                }}
                width="100%"
                src="./images/Storage_C.jpg"
                style={{ pointerEvents: "fill" }}
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
                onClick={() => {
                  setTableVis({
                    a: false,
                    b: false,
                    c: false,
                    d: true,
                  });
                }}
                width="100%"
                src="./images/Storage_D.jpg"
                style={{ pointerEvents: "fill" }}
              />
              <figcaption>
                Söhne Storage
                <br />
                500 &euro;
              </figcaption>
            </figure>
          </div>
        </div>
      )}
      <CategoryLabels />
    </div>
  );
};

export default ImageSliders;
