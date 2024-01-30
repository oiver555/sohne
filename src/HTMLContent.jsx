import { useContext, useState } from "react";
import { ChairsContext, StorageContext } from "./ExpContext";
import CategorySlider from "./CategorySlider";
import ImageSliders from "./ImageSliders";
import WhiteCard from "./WhiteCard";
import CategoryLabels from "./CategoryLabels";

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
      <WhiteCard />
      <CategoryLabels />
      <ImageSliders />
    </div>
  );
};

export default HTMLContent;
