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

export default () => {
  const { outerHeight, outerWidth } = window;
  const { adBlocksData } = useConstant();

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
              <span
                style={{
                  background: "white",
                  letterSpacing: 0,
                  color: "orange",
                  fontSize: 18,
                }}
              >
                THE
              </span>
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
          <div
            style={{
              width: "90%",
              height: 200,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <SimpleBar
              ref={scrollRef}
              onLoad={() => {
                console.log(scrollRef.current);
              }}
              onScroll={(event) => {
                console.log(event);
              }}
              autoHide={false}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  backgroundColor: "green",
                  flexShrink: 0,
                  justifyContent: "flex-start",
                  position: "relative",
                  alignItems: "center",
                }}
              >
                {adBlocksData.map((data, index) => {
                  return (
                    <AdBlock
                      key={data.title}
                      title={data.title}
                      linkText={data.linkText}
                      left={50 * index}
                    />
                  );
                })}
              </div>
            </SimpleBar>
            <div
              ref={leftCheveron}
              style={{
                backgroundColor: "rgb(50,50,50)",
                height: 50,
                width: 50,
                position: "absolute",
                left: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChevronLeft
                fontSize="large"
                style={{ fill: "white" }}
                color="white"
              />
            </div>
            <div
              ref={rightCheveron}
              style={{
                backgroundColor: "rgb(50,50,50)",
                height: 50,
                width: 50,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                right: 0,
              }}
            >
              <ChevronRight
                fontSize="large"
                style={{ fill: "white" }}
                color="white"
              />
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>LIVING ROOM</div>
            <div>BEDROOM</div>
            <div>MATTRESS</div>
            <div>DINING</div>
            <div>OUTDOOR</div>
            <div>STORAGE & CLOSET</div>
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
