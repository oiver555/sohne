import gsap from "gsap";
import {
  ChairsContext,
  GlobalStateContext,
  SceneContext,
  SofaContext,
  StorageContext,
  TablesContext,
} from "./ExpContext";
import { useContext, useEffect, useLayoutEffect, useState } from "react";

const Slider = (props) => {
  const { chairGroupPositionAPI, chairGroupPosition } =
    useContext(ChairsContext);
  const { storageGroupAPI, setStorageVis, storageGroupPosition, storageCRef } =
    useContext(StorageContext);
  const { cameraRef } = useContext(SceneContext);
  const { tableGroupPositionAPI } = useContext(TablesContext);
  const { sofaGroupPositionAPI } = useContext(SofaContext);
  const { isMobile } = useContext(GlobalStateContext);
  useLayoutEffect(() => {
    gsap.to(".slider-progress", { scaleX: 1, duration: 3 });
  });

  return (
    <>
      <div
        className="slidersVis"
        style={{
          display: "flex",
          position: "absolute",
          bottom: 50,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          zIndex: 10,
          width: "100%",
          pointerEvents: "fill",
        }}
      >
        <div
          style={{
            width: isMobile ? "50%" : "20%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
           
          }}
        >
          <div
            onClick={() => {
              chairGroupPositionAPI.start({
                position: [0, 0, 0],
              });
              storageGroupAPI.start({
                position: [0, 0, -20],
              });
              tableGroupPositionAPI.start({
                position: [0, 0, -40],
              });
              sofaGroupPositionAPI.start({
                position: [0, 0, -60],
              });

              gsap.to(cameraRef.current.position, {
                x: 100,
                y: 15,
                z: 70,
                duration: 5,
                // ease: 'power2.inOut',
              });
              gsap.to(".imagesContainer", {
                xPercent: 0,
              });
              gsap.to(".slider-progress", {
                duration: 2,
                xPercent: 0,
              });
              gsap.to(".categoryDrop", {
                duration: 2,
                y: 0,
              });
              gsap.to("#chairs", {
                duration: 1.5,
                background: "black",
              });
              gsap.to("#storage", {
                duration: 1.5,
                background: "lightgrey",
              });
              gsap.to("#tables", {
                duration: 1.5,
                background: "lightgrey",
              });
              gsap.to("#sofas", {
                duration: 1.5,
                background: "lightgrey",
              });
            }}
            id="chairs"
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "black",
            }}
          />
          <div
            onClick={() => {
              console.log("[Slider.js]");
              chairGroupPositionAPI.start({
                position: [0, 0, 20],
              });
              storageGroupAPI.start({
                position: [0, 0, 0],
              });
              tableGroupPositionAPI.start({
                position: [0, 0, -20],
              });
              sofaGroupPositionAPI.start({
                position: [0, 0, -40],
              });
              gsap.to(".imagesContainer", {
                xPercent: -100,
              });
              gsap.to(".slider-progress", {
                duration: 2,
                xPercent: 100,
              });

              gsap.to(".categoryDrop", {
                duration: 2,
                y: isMobile ? -150 : -200,
              });
              gsap.to("#chairs", {
                duration: 1.5,
                background: "lightgrey",
              });
              gsap.to("#storage", {
                duration: 1.5,
                background: "black",
              });
              gsap.to("#tables", {
                duration: 1.5,
                background: "lightgrey",
              });
              gsap.to("#sofas", {
                duration: 1.5,
                background: "lightgrey",
              });
            }}
            id="storage"
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "lightgrey",
            }}
          />
          <div
            id="tables"
            onClick={() => {
              chairGroupPositionAPI.start({
                position: [0, 0, 40],
              });
              storageGroupAPI.start({
                position: [0, 0, 20],
              });
              tableGroupPositionAPI.start({
                position: [0, 0, 0],
              });
              sofaGroupPositionAPI.start({
                position: [0, 0, -20],
              });
              // storageGroupAPI.start({
              //   to: {
              //     position: [0, 0, 20],
              //   },
              // });
              // props.tableA_springRef.start({
              //   to: {
              //     position: [0, 0, 0],
              //   },
              // });
              // props.sofaA_springRef.start({
              //   to: {
              //     position: [0, 0, -20],
              //   },
              // });
              gsap.to(".imagesContainer", {
                xPercent: -200,
              });

              gsap.to(".categoryDrop", {
                duration: 2,
                y: isMobile ? -300 : -400,
              });
              gsap.to(".slider-progress", {
                duration: 2,
                xPercent: 200,
              });
              gsap.to("#chairs", {
                duration: 1.5,
                background: "lightgrey",
              });
              gsap.to("#storage", {
                duration: 1.5,
                background: "lightgrey",
              });
              gsap.to("#tables", {
                duration: 1.5,
                background: "black",
              });
              gsap.to("#sofas", {
                duration: 1.5,
                background: "lightgrey",
              });
            }}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "lightgrey",
            }}
          />
          <div
            id="sofas"
            onClick={() => {
              chairGroupPositionAPI.start({
                position: [0, 0, 60],
              });
              storageGroupAPI.start({
                position: [0, 0, 40],
              });
              tableGroupPositionAPI.start({
                position: [0, 0, 20],
              });
              sofaGroupPositionAPI.start({
                position: [0, 0, 0],
              });
              // storageGroupAPI.start({
              //   to: {
              //     position: [0, 0, 40],
              //   },
              // });
              // props.tableA_springRef.start({
              //   to: {
              //     position: [0, 0, 20],
              //   },
              // });
              // props.sofaA_springRef.start({
              //   to: {
              //     position: [0, 0, 0],
              //   },
              // });

              gsap.to(".categoryDrop", {
                duration: 2,
                y: isMobile ? -450 : -600,
              });
              gsap.to(".imagesContainer", {
                xPercent: -300,
              });
              gsap.to(".slider-progress", {
                duration: 2,
                xPercent: 300,
              });
              gsap.to("#chairs", {
                duration: 1.5,
                background: "lightgrey",
              });
              gsap.to("#storage", {
                duration: 1.5,
                background: "lightgrey",
              });
              gsap.to("#tables", {
                duration: 1.5,
                background: "lightgrey",
              });
              gsap.to("#sofas", {
                duration: 1.5,
                background: "black",
              });
            }}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: "lightgrey",
            }}
          />
        </div>
      </div>

      <div
        className="slidersVis"
        style={{
          
          display: "flex",
          position: "absolute",
          bottom: 10,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          zIndex: 10,
          width: "100%",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: isMobile ? "60%" : "25%",
            backgroundColor: "lightgrey",
            display: "flex",
            flexDirection: "row",
            borderRadius: 5,
            justifyContent: "space-between",
          overflow: "hidden",

          }}
        >
          <div
            className="slider-progress"
            style={{
              height: 5,
              width: isMobile ? "30%" : "25%",
              borderRadius: 5,
              backgroundColor: "black",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
