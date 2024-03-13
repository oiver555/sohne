import { useContext, useEffect, useState } from "react";
import {
  ChairsContext,
  GlobalStateContext,
  StorageContext,
} from "./ExpContext";
import ChairSliders from "./ChairSliders";

const ImageSliders = (props) => {
  const { chairARef, chairBRef, chairCRef, chairDRef, setChairsVis } = useContext(ChairsContext);
  const { storageARef, storageCRef, storageDRef, storageBRef, } = useContext(StorageContext);

  const { currCategory, setCurrCategory, currChair, setCurrChair } = useContext(GlobalStateContext);

  return (
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
      <div style={{ position: "absolute", pointerEvents: "none" }}>
        {/* SEATING */}
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
                setCurrChair("a")
                setChairsVis({
                  a: true,
                  b: false,
                  c: false,
                  d: false,
                });
              }}
              width="100%"
              src="./images/Chair_A.png"
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
                setCurrChair("b")
                setChairsVis({
                  a: false,
                  b: true,
                  c: false,
                  d: false,
                }); 
              }}
              width="100%"
              src="./images/Chair_B.png"
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
                setCurrChair("c")
                setChairsVis({
                  a: false,
                  b: false,
                  c: true,
                  d: false,
                })
              }}
              width="100%"
              src="./images/Chair_C.png"
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
                setCurrChair("d")
                setChairsVis({
                  a: false,
                  b: false,
                  c: false,
                  d: true,
                }) 
              }}
              width="100%"
              src="./images/Chair_D.png"
              style={{ pointerEvents: "fill" }}
            />
            <figcaption>
              Söhne Chair
              <br />
              500 &euro;
            </figcaption>
          </figure>
       

    </div>
      </div>
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
    </div>
  );
};

export default ImageSliders;
