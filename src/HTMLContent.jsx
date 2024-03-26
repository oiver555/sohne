import { useContext, useState } from "react";
import { ChairsContext, StorageContext } from "./ExpContext";
import CategorySlider from "./CategorySlider";
import ImageSliders from "./ImageSliders";
import CategoryLabels from "./CategoryLabels";
import useConstant from "./hooks/useConstant";

const HTMLContent = (props) => {
  const {navHeight} = useConstant()
   return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          flex: 1,
          display: "flex",
         
          // alignItems: "center",
          // justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <CategorySlider />
        <ImageSliders />
        {/* <CategoryLabels /> */}
      </div>
    </>
  );
};

export default HTMLContent;
