import { useContext } from "react";
import { ChairsContext, GlobalStateContext, StorageContext, TablesContext } from "./ExpContext";
import gsap from "gsap";

const Discover = (props) => {
    const { chairRotaionAPI, chairARef, chairGroupPosition } = useContext(ChairsContext);
    const { tableGroupPosition } = useContext(TablesContext);
    const { setCurrCategory } = useContext(GlobalStateContext);
    const {storageARef, storageRotationAPI, storageGroupPosition } = useContext(StorageContext);
    
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 10,
        top: 100,
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        textAlign: "center",
        pointerEvents: "none",
      }}
    >
      <button
        className="discover"
        style={{
          borderRadius: 20,
          fontSize: 15,
          border: "0px solid grey",
          padding: "10px 30px 10px 30px",
          pointerEvents: "all",
        }}
        onClick={() => {
          if (chairGroupPosition.position.get()[2] === 0) {
            console.log("Chair");
            chairRotaionAPI.update({
              from: { rotate: chairARef.current.rotation.y },
              to: [
                {
                  rotate: 6.25,
                },
              ],
              config: {
                mass: 5,
                tension: 1,
                friction: 0,
                duration: 50000,
              },
              loop: true, // Reset the animation when it reaches the end
              immediate: false,
              pause: false,
            });

            chairRotaionAPI.start();
            chairRotaionAPI.resume();

            gsap.to(".whiteCard", {
              y: 0,
              duration: 2,
            });

            gsap.to(".chairSlider", {
              duration: 2.5,
              y: 0,
              stagger: 0.04,
            });

            gsap.to(
              ".categoryContainer, .discover, .slidersVis, #seatingLabel",
              {
                duration: 1.5,
                opacity: 0,
              }
            );
            gsap.to("#seatingLabel", {
              duration: 1.5,
              opacity: 1,
            });

            gsap.to("#storageLabel", {
              duration: 1.5,
              opacity: 0,
            });
            gsap.to("#tableLabel", {
              duration: 1.5,
              opacity: 0,
            });
            gsap.to("#sofaLabel", {
              duration: 1.5,
              opacity: 0,
            });
          } else if (storageGroupPosition.position.get()[2] === 0) {
            console.log("Storage");
            // gsap.to(".chairSlider", {
            //   duration: 2.5,
            //   y: window.outerHeight,
            //   stagger: 0.04,
            // });
            storageRotationAPI.update({
              from: { rotate: storageARef.current.rotation.y },
              to: [
                {
                  rotate: 6.25,
                },
              ],
              config: {
                duration: 50000,
                precision: 0.0000001,
              },
              loop: true, // Reset the animation when it reaches the end
              immediate: false,
              pause: false,
            });

            storageRotationAPI.start();
            storageRotationAPI.resume();

            gsap.to(".whiteCard", {
              y: 0,
              duration: 2,
            });

            gsap.to(".storageSlider", {
              duration: 2.5,
              y: 0,
              stagger: 0.04,
            });
            gsap.to(".categoryContainer, .discover, .slidersVis ", {
              duration: 1.5,
              opacity: 0,
            });
            gsap.to("#storageLabel", {
              duration: 1.5,
              opacity: 1,
            });
            gsap.to("#seatingLabel", {
              duration: 1.5,
              opacity: 0,
            });
            gsap.to("#tableLabel", {
              duration: 1.5,
              opacity: 0,
            });
            gsap.to("#sofaLabel", {
              duration: 1.5,
              opacity: 0,
            });
          } else if (tableGroupPosition.position.get()[2] === 0) {
            setCurrCategory("table");
            storageRotationAPI.update({
              from: { rotate: storageARef.current.rotation.y },
              to: [
                {
                  rotate: 6.25,
                },
              ],
              config: {
                mass: 5,
                tension: 1,
                friction: 0,
                duration: 50000,
              },
              loop: true, // Reset the animation when it reaches the end
              immediate: false,
              pause: false,
            });

            storageRotationAPI.start();
            storageRotationAPI.resume();

            gsap.to(".whiteCard", {
              y: 0,
              duration: 2,
            });

            gsap.to(".chairSlider", {
              duration: 2.5,
              y: 0,
              stagger: 0.04,
            });
            gsap.to(".categoryContainer, .discover, .slidersVis ", {
              duration: 1.5,
              opacity: 0,
            });
            gsap.to("#storageLabel", {
              duration: 1.5,
              opacity: 1,
            });
            gsap.to("#seatingLabel", {
              duration: 1.5,
              opacity: 0,
            });
            gsap.to("#tableLabel", {
              duration: 1.5,
              opacity: 0,
            });
            gsap.to("#sofaLabel", {
              duration: 1.5,
              opacity: 0,
            });
          }

           
          // else if (sofaARef.current.position.z) {

          // }
        }}
      >
        discover
      </button>
    </div>
  );
};
export default Discover