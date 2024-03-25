import { useContext, useEffect, useState, fo } from "react";
import { ChairsContext, GlobalStateContext } from "./ExpContext";

const CategorySlider = (props) => {
 
  const { outerHeight } = window;
  const { currChair } = useContext(GlobalStateContext);

  return (
    <div
      className="imagesContainer"
      style={{
        position: "absolute",
        transform: "translateX(0%)",
        display: "flex",
        flexDirection: "row",
        justifyItems: "flex-start",
        height: outerHeight ,
        width: "100%",
      }}
    >
      <img
        title="chair"
        style={{
          transform: "scaleX(1)",
          opacity: 1,
          height: "auto",
          width: "100%",
          objectFit: "cover",
        }}
        src={
          currChair === "a"
            ? "./images/Chairs_A_Slider_1.webp"
            : currChair === "b"
            ? "./images/Chairs_B_Slider.png"
            : currChair === "c"
            ? "./images/Chairs_C_Slider.webp"
            : "./images/Chairs_D_Slider.png"
        }
      />

      <img
        title="storage"
        style={{ transform: "scaleX(-1)" }}
        src="./images/Storage.webp"
        width={"100%"}
      />
      <img
        title="table"
        style={{ transform: "scaleX(-1)" }}
        src="./images/Table.webp"
        width={"100%"}
      />
      <img
        title="sofa"
        style={{ transform: "scaleX(-1)" }}
        src="./images/Sofa.webp"
        width={"100%"}
      />
    </div>
  );
};

export default CategorySlider;
