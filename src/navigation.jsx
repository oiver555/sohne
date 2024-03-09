import SVG_Chat from "./SVG_Chat";
import { ChairsContext, StorageContext } from "./ExpContext";
import gsap from "gsap";
import { easings } from "@react-spring/three";
import { useContext } from "react";

const Nav = (props) => {
  const { outerHeight, outerWidth, innerWidth } = window;
  const { chairRotaionAPI, chairARef, chairGroupPosition } =
    useContext(ChairsContext);
  const { storageARef, storageRotationAPI, storageGroupPosition } =
    useContext(StorageContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: outerHeight,
        width: innerWidth,
        pointerEvents: "none",
        position: "absolute",
      }}
    >
      <div
        style={{
          height: 30,
          width: innerWidth,
          backgroundColor: "rgba(54, 53, 66, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
          marginRight: 100,
          padding: "0px 20px"
        }}
      >
        <div
          style={{
             
            display: "flex",
            color: "white",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div>Söhne</div>
          <div style={{ color: "orange" }}>&nbsp;|&nbsp;</div>
          <div>Baby & Kids</div>
          <div style={{ color: "orange" }}>&nbsp;|&nbsp;</div>
          <div>Söhne Outlet</div>
        </div>
        <div
          style={{
             
            display: "flex",
            color: "white",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div>Sneak Peek: The Orange Event</div>
          <div style={{ color: "orange" }}>&nbsp;|&nbsp;</div>
          <div>Hot Buys Starting at $399</div>
          <div style={{ color: "orange" }}>&nbsp;|&nbsp;</div>
          <div>Free Adjustable Base with Select Matresses</div>
        </div>
        <div style={{right: 40, position:"relative"}}>See if you prequalify for financing</div>
      </div>
      <div style={{ marginTop: 20 }}>
        <h3
        
          onClick={() => {
            gsap.to(".whiteCard", {
              y: outerHeight,
              duration: 2,
            });
            gsap.to(".categoryContainer, .discover, .slidersVis, .nav", {
              duration: 2,
              opacity: 1,
            });
            gsap.to("#seatingLabel, #storageLabel, #tableLabel, #sofaLabel", {
              duration: 1.5,
              opacity: 0,
            });
            gsap.to(".chairSlider, .storageSlider", {
              duration: 2.5,
              y: outerHeight,
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
            margin: 0,
            marginLeft: 40,
            position: "absolute",
            zIndex: 10,
            pointerEvents: "fill",
          }}
        >
          Söhne
        </h3>
        <div
        className="nav"
          style={{
            display: "flex",
            zIndex: 10,
            right: 0,
            position: "absolute",
            width: "30%",
            justifyContent: "space-around",
          }}
        >
          <div>
            <a>collection</a>
          </div>
          <div>
            <a>about</a>
          </div>
          <div>
            <a>contact</a>
          </div>
          <div>
            <a>icon</a>
          </div>
        </div>
      </div>
      <div
        style={{ position: "absolute", bottom: outerHeight * 0.2, right: 100 }}
      >
        <SVG_Chat width={60} height={60} />
      </div>
    </div>
  );
};

export default Nav;
