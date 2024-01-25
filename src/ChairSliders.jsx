import { useContext, useEffect, useState } from "react";
import { ChairsContext } from "./ExpContext";

const ChairSliders = (props) => {
  const { chairGroupPosition, chairARef, chairBRef, chairCRef, chairDRef } =
    useContext(ChairsContext);

  const [currChair, setCurrChair] = useState("A");

 
  return (
    <div style={{ position: "absolute", pointerEvents: "none" }}>
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
            onMouseOver={() => {
              console.log("Chair A");
              chairARef.current.visible = true;
              chairBRef.current.visible = false;
              chairCRef.current.visible = false;
              chairDRef.current.visible = false;
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
            onMouseOver={() => {
              console.log("Chair B");
              chairARef.current.visible = false;
              chairBRef.current.visible = true;
              chairCRef.current.visible = false;
              chairDRef.current.visible = false;
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
            onMouseOver={() => {
              console.log("Chair C");
              chairARef.current.visible = false;
              chairBRef.current.visible = false;
              chairCRef.current.visible = true;
              chairDRef.current.visible = false;
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
            onMouseOver={() => {
              console.log("Chair D");
              chairARef.current.visible = false;
              chairBRef.current.visible = false;
              chairCRef.current.visible = false;
              chairDRef.current.visible = true;
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
  );
};

export default ChairSliders;
