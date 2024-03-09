import gsap from "gsap";
import Slider from "./Slider";
import { useContext } from "react";
import {
  ChairsContext,
  GlobalStateContext,
  StorageContext,
  TablesContext,
} from "./ExpContext";
import TitleDrop from "./TitleDrop";
import CategoryDrop from "./CategoryDrop";
import { easings } from "@react-spring/three";
import Discover from "./Discover";

const OverlayHTML = () => {
  const { chairRotaionAPI, chairARef } = useContext(ChairsContext);
  const { storageARef, storageRotationAPI } = useContext(StorageContext);
  const { outerHeight, outerWidth } = window;
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: outerWidth,
          }}
        >
     

          <Discover />
          <Slider />
          <TitleDrop />
          <CategoryDrop />
        </div>
      </div>
    </>
  );
};

export default OverlayHTML;
