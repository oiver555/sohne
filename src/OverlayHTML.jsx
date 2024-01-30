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

  return (
    <>
      <h3
        onClick={() => {
          gsap.to(".whiteCard", {
            y: window.outerHeight,
            duration: 2,
          });
          gsap.to(".categoryContainer, .discover, .slidersVis", {
            duration: 2,
            opacity: 1,
          });
          gsap.to("#seatingLabel, #storageLabel, #tableLabel, #sofaLabel", {
            duration: 1.5,
            opacity: 0,
          });
          gsap.to(".chairSlider, .storageSlider", {
            duration: 2.5,
            y: window.outerHeight,
            stagger: 0.04,
          });
          chairRotaionAPI.pause();
          chairRotaionAPI.update({
            from: { rotate: chairARef.current.rotation.y },
            to: [
              {
                rotate: 0,
              },
            ],
            config: {
              mass: 5,
              tension: 180,
              friction: 12,
              duration: 2000,
              ease: easings.easeInBounce(5),
            },
            loop: false, // Reset the animation when it reaches the end
            immediate: false,
            pause: false,
          });
          chairRotaionAPI.resume();
          chairRotaionAPI.start();
          storageRotationAPI.pause();
          storageRotationAPI.update({
            from: { rotate: storageARef.current.rotation.y },
            to: [
              {
                rotate: 0,
              },
            ],
            config: {
              mass: 5,
              tension: 180,
              friction: 12,
              duration: 2000,
              ease: easings.easeInBounce(5),
            },
            loop: false, // Reset the animation when it reaches the end
            immediate: false,
            pause: false,
          });
          storageRotationAPI.resume();
          storageRotationAPI.start();
        }}
        style={{
          marginLeft: 40,
          position: "absolute",
          zIndex: 10,
        }}
      >
        Söhne
      </h3>

      <Discover />
      <Slider />
      <TitleDrop />
      <CategoryDrop />
    </>
  );
};

export default OverlayHTML;
