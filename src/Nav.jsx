import SVG_Chat from "./SVG_Chat";
import { ChairsContext, StorageContext } from "./ExpContext";
import gsap from "gsap";
import { easings } from "@react-spring/three";
import { useContext, useEffect, useRef, useState } from "react";
import useConstant from "./hooks/useConstant";
import { ChevronLeft, Close, Search, Menu } from "@mui/icons-material";

const Nav = (props) => {
  const { outerHeight, outerWidth, innerWidth } = window;
  const [isMobile, setIsMobile] = useState(false);



  
  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768; // You can adjust this threshold as needed
      setIsMobile(isMobileDevice);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []); // Empty dependency array ensures effect runs only once

  const {
    chairRotaionAPI,
    chairARef,
    chairBRef,
    chairsVis,
    chairCRef,
    chairDRef,
    chairERef,
    chairGroupPosition,
  } = useContext(ChairsContext);
  const {
    storageARef,
    storageBRef,
    storageCRef,
    storageDRef,
    storageVis,
    storageRotationAPI,
    storageGroupPosition,
  } = useContext(StorageContext);
  const { navHeight } = useConstant();
  const inputRef = useRef();
  return (
    <>
      <div
        className="black-fill"
        style={{
          background: "rgba(0,0,0,.5)",
          position: "absolute",
          zIndex: 40,
          top: 0,
          width: outerWidth,
          height: outerHeight,
          pointerEvents: "none",
          opacity: 0,
        }}
      />
      {!isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: outerHeight,
            width: innerWidth,
            pointerEvents: "none",
            position: "absolute",
            color: "white",
          }}
        >
          <div
            style={{
              height: navHeight,
              width: innerWidth,
              backgroundColor: "rgba(54, 53, 66, 1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "white",
              marginRight: 100,
              padding: "0px 20px",
              zIndex: 3,
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
            <div style={{ right: 40, position: "relative" }}>
              See if you prequalify for financing
            </div>
          </div>
          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1, zIndex: 3 }}>
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
                  gsap.to(
                    "#seatingLabel, #storageLabel, #tableLabel, #sofaLabel",
                    {
                      duration: 1.5,
                      opacity: 0,
                    }
                  );
                  gsap.to(".chairSlider, .storageSlider", {
                    duration: 2.5,
                    y: outerHeight,
                    stagger: 0.04,
                  });
                  chairRotaionAPI.pause();
                  if (chairGroupPosition.position.get()[2] === 0) {
                    chairRotaionAPI.update({
                      from: {
                        rotate: chairsVis.a
                          ? chairARef.current.rotation.y
                          : chairsVis.b
                          ? chairBRef.current.rotation.y
                          : chairsVis.c
                          ? chairCRef.current.rotation.y
                          : chairsVis.d
                          ? chairDRef.current.rotation.y
                          : chairERef.current.rotation.y,
                      },
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
                  }

                  storageRotationAPI.pause();
                  if (storageGroupPosition.position.get()[2] === 0) {
                    storageRotationAPI.update({
                      from: {
                        rotate: storageVis.a
                          ? storageARef.current.rotation.y
                          : storageVis.b
                          ? storageBRef.current.rotation.y
                          : storageVis.c
                          ? storageCRef.current.rotation.y
                          : storageDRef.current.rotation.y,
                      },
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
                  }
                }}
                style={{
                  margin: 0,
                  marginLeft: 40,
                  zIndex: 10,
                  pointerEvents: "fill",
                  textShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
                }}
              >
                Söhne
              </h3>
            </div>
            <div
              className="nav"
              style={{
                flex: 1,
                display: "flex",
                zIndex: 4,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Search
                  style={{
                    color: "grey",
                    position: "absolute",
                    left: 5,
                    fontSize: 18,
                  }}
                />
                <input
                  ref={inputRef}
                  placeholder="Search"
                  onFocus={() => {
                    gsap.to(".black-fill", {
                      opacity: 1,
                      pointerEvents: "fill",
                    });
                  }}
                  onBlur={(e) => {
                    gsap.to(".black-fill", {
                      opacity: 0,
                      pointerEvents: "none",
                    });
                  }}
                  onChange={(e) => {
                    if (e.target.value.length) {
                      gsap.to(".search-close", {
                        opacity: 1,
                        cursor: "pointer",
                      });
                    } else {
                      gsap.to(".search-close", {
                        opacity: 0,
                        cursor: "default",
                      });
                    }
                  }}
                  autoComplete="false"
                  style={{
                    paddingLeft: 30,
                    pointerEvents: "fill",
                    fontSize: 16,
                    userSelect: "initial",
                    height: 40,
                    borderRadius: 5,
                    width: "100%",
                    border: 0,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: 5,
                    zIndex: 10,
                    pointerEvents: "fill",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    inputRef.current.value = "";
                    gsap.to(".search-close", { opacity: 0, cursor: "default" });
                  }}
                >
                  <Close
                    className="search-close"
                    style={{
                      color: "grey",
                      fontSize: 18,
                      opacity: 0,
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="nav"
              style={{
                display: "flex",
                zIndex: 3,
                width: "30%",
                justifyContent: "space-around",
                flex: 1,
                textShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
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

          <div style={{ bottom: outerHeight * 0.2, right: 100 }}>
            <SVG_Chat width={60} height={60} />
          </div>
        </div>
      )}
     {isMobile &&  <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: 20,
          }}
        >
          <Menu style={{ color: "green", fontSize: 40 }} />
          <div>Sohne</div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Search
              style={{
                color: "grey",
                position: "absolute",
                left: 5,
                fontSize: 18,
              }}
            />
            <input
              ref={inputRef}
              placeholder="Search"
              onFocus={() => {
                gsap.to(".black-fill", { opacity: 1, pointerEvents: "fill" });
              }}
              onBlur={(e) => {
                gsap.to(".black-fill", { opacity: 0, pointerEvents: "none" });
              }}
              onChange={(e) => {
                if (e.target.value.length) {
                  gsap.to(".search-close", { opacity: 1, cursor: "pointer" });
                } else {
                  gsap.to(".search-close", { opacity: 0, cursor: "default" });
                }
              }}
              autoComplete="false"
              style={{
                paddingLeft: 30,
                pointerEvents: "fill",
                fontSize: 16,
                userSelect: "initial",
                height: 40,
                borderRadius: 5,
                width: "100%",
                border: "1px solid black",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 5,
                zIndex: 10,
                pointerEvents: "fill",
                cursor: "pointer",
              }}
              onClick={() => {
                inputRef.current.value = "";
                gsap.to(".search-close", { opacity: 0, cursor: "default" });
              }}
            >
              <Close
                className="search-close"
                style={{
                  color: "grey",
                  fontSize: 18,
                  opacity: 0,
                }}
              />
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default Nav;
