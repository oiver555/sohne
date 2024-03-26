import { useContext, useEffect, useState } from "react";
import {
  ChairsContext,
  GlobalStateContext,
  StorageContext,
} from "./ExpContext";
import useConstant from "./hooks/useConstant";
import CategoryLabels from "./CategoryLabels";

const ImageSliders = (props) => {
  const { chairARef, chairBRef, chairCRef, chairDRef, setChairsVis } =
    useContext(ChairsContext);
  const { storageARef, storageCRef, storageDRef, storageBRef } =
    useContext(StorageContext);

  const { outerHeight, outerWidth } = window;
  const { currCategory, setCurrCategory, currChair, setCurrChair } =
    useContext(GlobalStateContext);
  const { chairsVis } = useContext(ChairsContext);
  const { storageVis } = useContext(StorageContext);
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
        {Object.values(chairsVis).some((isVis) => isVis) && (
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
                    console.log("Chair B visible set to true");
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
        {Object.values(storageVis).some((isVis) => isVis) && (
          <div style={{ position: "absolute", pointerEvents: "none" }}>
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
                    storageARef.current.visible = true;
                    storageBRef.current.visible = false;
                    storageCRef.current.visible = false;
                    storageDRef.current.visible = false;
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
                    storageARef.current.visible = false;
                    storageBRef.current.visible = true;
                    storageCRef.current.visible = false;
                    storageDRef.current.visible = false;
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
                    storageARef.current.visible = false;
                    storageBRef.current.visible = false;
                    storageCRef.current.visible = true;
                    storageDRef.current.visible = false;
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
                    storageARef.current.visible = false;
                    storageBRef.current.visible = false;
                    storageCRef.current.visible = false;
                    storageDRef.current.visible = true;
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
