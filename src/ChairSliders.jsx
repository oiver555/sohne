import { useContext, useEffect, useState } from "react";
import { ChairsContext } from "./ExpContext";

const ChairSliders = (props) => {
  const {
    chairGroupPosition,
    chairARef,
    setChairsVis,
    chairBRef,
    chairCRef,
    chairDRef,
  } = useContext(ChairsContext);

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
            onClick={() => {
              console.log("Chair A");
              setChairsVis({
                a: true,
                b: false,
                c: false,
                d: false,
              });
            }}
            width="100%"
            src="./images/Chair_A_1.png"
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
              console.log("Chair B set true");
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
              setChairsVis({
                a: false,
                b: false,
                c: true,
                d: false,
              }); 
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
              setChairsVis({
                a: false,
                b: false,
                c: false,
                d: true,
              });
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
