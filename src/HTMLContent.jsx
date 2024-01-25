import { useContext, useState } from "react";
import { ChairsContext, StorageContext } from "./ExpContext";
import CategorySlider from "./CategorySlider";
import ImageSliders from "./ImageSliders";

const HTMLContent = (props) => {
  return (
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
      <CategorySlider />

     
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

      <ImageSliders  />
    </div>
  );
};

export default HTMLContent;
