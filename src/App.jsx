import { useEffect, useRef, useState } from "react";
import Main from "./Main";
import {
  ChairsContext,
  StorageContext,
  TablesContext,
  SofaContext,
  SceneContext,
  GlobalStateContext,
} from "./ExpContext";
import { useSpring, useSpringRef, easings } from "@react-spring/three";

export default () => {

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
  }, []); 

  const [chairsVis, setChairsVis] = useState({
    a: true,
    b: false,
    c: false,
    d: false,
    e: false,
  });
  const [storageVis, setStorageVis] = useState({
    a: true,
    b: false,
    c: false,
    d: false,
  });
  const [tablesVis, setTableVis] = useState({
    a: true,
    b: false,
    c: false,
    d: false,
  });
  const [sofasVis, setSofasVis] = useState({
    a: true,
    b: false,
    c: false,
    d: false,
  });
  const chairARef = useRef();
  const chairBRef = useRef();
  const chairCRef = useRef();
  const chairDRef = useRef();
  const chairERef = useRef();
  const chairGroupRef = useRef();
  const storageARef = useRef();
  const storageBRef = useRef();
  const storageCRef = useRef();
  const storageDRef = useRef();
  const cameraRef = useRef();
  const livingRoomCam = useRef();
  const tableARef = useRef();
  const sofaARef = useRef();
  const currObjMaterialRef = useRef();
  const [objConfig, setobjConfig] = useState({
    baseTextures: [],
    cushionTextures: [],
    legTextures: [],
  });
  const [currBaseTexture, setCurrBaseTexture] = useState();
  const [currCushionTexture1, setCurrCushionTexture1] = useState();
  const chair_spring_pos_ctl = useSpringRef();
  const storage_spring_pos_ctl = useSpringRef();
  const [chairGroupPosition, chairGroupPositionAPI] = useSpring(() => ({
    from: { position: [0, 0, 0] },
    config: {
      mass: 1,
      tension: 5,
      friction: 3.5,
    },
  }));
  const [chairRotation, chairRotaionAPI] = useSpring(() => ({
    from: { rotate: 0 },
    to: [
      {
        rotate: 6.25,
      },
    ],
    config: {
      duration: 50000,
    },
    loop: true, // Reset the animation when it reaches the end
    immediate: false,
    pause: true,
  }));
  const [storageGroupPosition, storageGroupAPI] = useSpring(() => ({
    from: { position: [0, 0, -20] },
    config: {
      mass: 1,
      tension: 5,
      friction: 3.5,
    },
  }));

  const [tableGroupPosition, tableGroupPositionAPI] = useSpring(() => ({
    from: { position: [0, 0, -40] },
    config: {
      mass: 1,
      tension: 5,
      friction: 3.5,
    },
  }));
  const [sofaGroupPosition, sofaGroupPositionAPI] = useSpring(() => ({
    from: { position: [0, 0, -60] },
    config: {
      mass: 1,
      tension: 5,
      friction: 3.5,
    },
  }));

  const [storageRotation, storageRotationAPI] = useSpring(() => ({
    from: { rotate: 0 },
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
    pause: true,
  }));
  const [tableRotation, tableRotationAPI] = useSpring(() => ({
    from: { rotate: 0 },
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
    pause: true,
  }));

  const [currCategory, setCurrCategory] = useState("seating");
  const [currChair, setCurrChair] = useState("a");
  const [currStorage, setCurrStorage] = useState("a");

  return (
    <ChairsContext.Provider
      value={{
        chairsVis,
        setChairsVis,
        chairARef,
        chairBRef,
        chairCRef,
        chairDRef,
        chairERef,
        chair_spring_pos_ctl,
        chairGroupPosition,
        chairRotation,
        chairGroupRef,
        chairGroupPositionAPI,
        chairRotaionAPI,
      }}
    >
      <StorageContext.Provider
        value={{
          storageVis,
          setStorageVis,
          storageARef,
          storageBRef,
          storageCRef,
          storageDRef,
          storage_spring_pos_ctl,
          storageRotation,
          storageGroupAPI,
          storageGroupPosition,
          storageRotationAPI,
        }}
      >
        <TablesContext.Provider
          value={{
            tableARef,
            tableGroupPosition,
            tableGroupPositionAPI,
            tablesVis,
            setTableVis,
            tableRotation,
            tableRotationAPI,
          }}
        >
          <SofaContext.Provider
            value={{
              sofaARef,
              sofaGroupPosition,
              sofaGroupPositionAPI,
              sofasVis,
              setSofasVis,
            }}
          >
            <SceneContext.Provider
              value={{
                cameraRef,
                livingRoomCam,
              }}
            >
              <GlobalStateContext.Provider
                value={{
                  currCategory,
                  setCurrCategory,
                  currChair,
                  setCurrChair,
                  currStorage,
                  setCurrStorage,
                  objConfig,
                  setobjConfig,
                  currObjMaterialRef,
                  currBaseTexture,
                  setCurrBaseTexture,
                  currCushionTexture1,
                  setCurrCushionTexture1,
                  isMobile
                }}
              >
                <Main />
              </GlobalStateContext.Provider>
            </SceneContext.Provider>
          </SofaContext.Provider>
        </TablesContext.Provider>
      </StorageContext.Provider>
    </ChairsContext.Provider>
  );
};
