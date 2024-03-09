import "./style.css";
import OverlayHTML from "./OverlayHTML.jsx";
import Nav from "./navigation.jsx";
import HTMLContent from "./HTMLContent.jsx";
import ThreeContent from "./ThreeContent.jsx";
import { useState, use } from "react";
import Footer from "./Footer.jsx";
import BannerAd from "./BannerAd.jsx";

export default () => {
  const { outerHeight, outerWidth } = window;
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
          {/* <div
            style={{
              width: "50%",
              height: "100%",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              flexDirection: "row",
              pointerEvents: "none"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "30%",
              }}
            >
             
            </div>
          </div> */}
        </div>
        <div
          style={{
            height: 50,
            background: "orange",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 50,
            // paddingRight: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flex: 0.68,
              height: "100%",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                fontFamily: "arial",
                fontSize: 25,
                fontWeight: "bold",
                verticalAlign: "baseline",
                letterSpacing: -2,
              }}
            >
              {" "}
              <span
                style={{
                  background: "white",
                  letterSpacing: 0,
                  color: "orange",
                  fontSize: 18,
                }}
              >
                THE
              </span>{" "}
              orange event
            </div>
            <div style={{ fontSize: 25 }}>|</div>
            <div
              style={{
                fontSize: 22,
                fontFamily: "arial",
                fontWeight: "bold",
                letterSpacing: 3,
              }}
            >
              OUR BIGGEST EVENT OF THE YEAR
            </div>
            <div
              style={{
                letterSpacing: 3,
                fontWeight: "bold",
                fontFamily: "arial",
                textTransform: "uppercase",
                fontSize: 15,
              }}
            >
              Coming Soon! March 8 - 10
            </div>
          </div>
          <div style={{ display: "flex", flex: 0.2, justifyContent: "center" }}>
            <div style={{ fontFamily: "arial", letterSpacing: 2 }}>
              PREVIEW DEALS
            </div>
          </div>
        </div>

        <div style={{ width: outerWidth, marginTop: 20 }}>
          <img
            style={{ width: "100%" }}
            src="./images/AnnivSale_HP_A1_Finance_DK.webp"
          />
        </div>

        <div style={{ width: outerWidth, textAlign: "center" }}>
          <h1 style={{ fontFamily: "arial", fontSize: 40 }}>top deals</h1>
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
