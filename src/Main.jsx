import "./style.css";
import OverlayHTML from "./OverlayHTML.jsx";
import Nav from "./Nav.jsx";
import HTMLContent from "./HTMLContent.jsx";
import ThreeContent from "./ThreeContent.jsx";
import { useState, useRef, useEffect } from "react";
import Footer from "./Footer.jsx";
import BannerAd from "./BannerAd.jsx";
import useConstant from "./hooks/useConstant.jsx";
import AdBlock from "./AdBlock.jsx";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Canvas } from "@react-three/fiber";
import LivingRoom from "./LivingRoom.jsx";
import { Trim } from "./html/Trim.jsx";
import { AdSlider } from "./html/AdSlider.jsx";
import { Menu } from "./html/Menu.jsx";

export default () => {
  const { outerHeight, outerWidth } = window;
  const { productCat } = useConstant();
  const scrollRef = useRef();
  const leftCheveron = useRef();
  const rightCheveron = useRef();
  useEffect(() => {
    scrollRef.current.getScrollElement().addEventListener("scroll", (event) => {
      const { scrollWidth, scrollLeft, scrollRight, clientWidth } =
        event.target;
      const isEndReach = scrollWidth - Math.round(scrollLeft) === clientWidth;

      if (isEndReach) {
        // You have reached the bottom of the container
        rightCheveron.current.style.opacity = 0;
        leftCheveron.current.style.opacity = 1;
      } else if (scrollLeft === 0) {
        rightCheveron.current.style.opacity = 1;
        leftCheveron.current.style.opacity = 0;
      }
    });
  });
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
      }}
    >
      <div style={{ height: 2000, overflowY: "scroll", overflowX: "hidden" }}>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            height: outerHeight - 100,
            position: "relative",
          }}
        >
          <OverlayHTML />
          <ThreeContent outerHeight={outerHeight} />
          <HTMLContent outerHeight={outerHeight} />
        </div>
        <Trim />

        <div style={{ width: outerWidth, marginTop: 20 }}>
          <img
            style={{ width: "100%" }}
            src="./images/AnnivSale_HP_A1_Finance_DK.webp"
          />
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: outerWidth, textAlign: "center" }}>
            <h1 style={{ fontFamily: "arial", fontSize: 40 }}>top deals</h1>
          </div>

          <div
            style={{
              right: 0,
              display: "flex",
              alignItems: "center",
              top: 0,
              fontSize: 14,
              letterSpacing: 1,
              maxLines: 1,
              width: 200,
              fontFamily: "arial",
              fontWeight: 100,
            }}
          >
            SHOP ALL DEALS
            <ChevronRight
              fontSize="small"
              style={{ fill: "black" }}
              color="black"
            />
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <AdSlider
            scrollRef={scrollRef}
            leftCheveron={leftCheveron}
            rightCheveron={rightCheveron}
          />
        </div>

        <Menu productCat={productCat} />
        <div style={{ display: "flex", justifyContent: "center", height: 600 }}>
          {/* <Canvas
            shadows
            style={{ height: "100%", flex: 0.6, alignSelf: "center" }}
          >
            <LivingRoom  />
          </Canvas> */}
          <div
            style={{
              flex: 0.3,
              height: "100%",
              // backgroundColor: "lime",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flexBasis: "calc(50% - 10px)",
                justifyContent: "center",
                display: "flex",
                height: "30%",
                // background: "red",
                padding: 5,
              }}
            >
              <img
                src="./images/sofa_calypso.webp"
                width={"100%"}
                style={{ flexShrink: 0, objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                flexBasis: "calc(50% - 10px)",
                justifyContent: "center",
                display: "flex",
                height: "30%",
                // background: "red",
                padding: 5,
              }}
            >
              <img
                src="./images/Sofa_rubyGordon.webp"
                width={"100%"}
                style={{ flexShrink: 0, objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                flexBasis: "calc(50% - 10px)",
                justifyContent: "center",
                display: "flex",
                height: "30%",
                // background: "red",
                padding: 5,
              }}
            >
              <img
                src="./images/Sofa_velvet.webp"
                width={"100%"}
                style={{ flexShrink: 0, objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                flexBasis: "calc(50% - 10px)",
                justifyContent: "center",
                display: "flex",
                height: "30%",
                // background: "red",
                padding: 5,
              }}
            >
              <img
                src="./images/Sofa_6.jpg"
                width={"100%"}
                style={{ flexShrink: 0, objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                flexBasis: "calc(50% - 10px)",
                justifyContent: "center",
                display: "flex",
                height: "30%",
                // background: "red",
                padding: 5,
              }}
            >
              <img
                src="./images/Sofa_artVan.jpg"
                width={"100%"}
                style={{ flexShrink: 0, objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                flexBasis: "calc(50% - 10px)",
                justifyContent: "center",
                display: "flex",
                height: "30%",
                // background: "red",
                padding: 5,
              }}
            >
              <img
                src="./images/sofa_5.jpeg"
                width={"100%"}
                style={{ flexShrink: 0, objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        <div style={{ margin: "50px 0px" }}>
          <BannerAd
            contentWidth={outerWidth * 0.8}
            contentHeight={outerHeight * 0.4}
            containerWidth={outerWidth}
          />
        </div>
        <Footer />
      </div>
      <Nav />
    </div>
  );
};
