import { useContext, useState } from "react";
import { ChairsContext, StorageContext } from "./ExpContext";
import CategorySlider from "./CategorySlider";
import ImageSliders from "./ImageSliders";
import WhiteCard from "./WhiteCard";
import CategoryLabels from "./CategoryLabels";
import OverlayHTML from "./OverlayHTML";

const HTMLContent = (props) => {
  const { outerHeight } = window;
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <CategorySlider />
        <WhiteCard />
        <CategoryLabels />
        <ImageSliders />
      </div>
    </>
  );
};

export default HTMLContent;
