import { useContext } from "react";
import {
  ChairsContext,
  GlobalStateContext,
  SofaContext,
  StorageContext,
  TablesContext,
} from "./ExpContext";
import { animated } from "@react-spring/three";
import Chairs from "./Chairs";
import Storages from "./Storages";
import Tables from "./Tables";
import Sofas from "./Sofas";
import { Html } from "@react-three/drei";
import MaterialSwatch from "./MaterialSwatch";

const Furniture = (props) => {
  const { chairGroupPosition } = useContext(ChairsContext);
  const { storageGroupPosition } = useContext(StorageContext);
  const { tableGroupPosition } = useContext(TablesContext);
  const { sofaGroupPosition } = useContext(SofaContext);
  const { objConfig, currObjMaterialRef, currBaseTexture, setCurrBaseTexture, setCurrCushionTexture1, currCushionTexture1 } =
    useContext(GlobalStateContext);
  return (
    <>
      <animated.group position={chairGroupPosition.position}>
        <Chairs />
        <Html transform center position={[0, -6, 0]} sprite zIndexRange={[0,1]}>
          <div
            style={{
              display: "flex", 
              width: 250,
              justifyContent: "space-around",
            }}
          >
            {objConfig.baseTextures.map((texturePath) => (
              <MaterialSwatch
                key={texturePath}
                setCurrTexture={setCurrBaseTexture}
                currTexture={currBaseTexture}
                currObjMaterialRef={currObjMaterialRef}
                texturePath={texturePath}
              />
            ))}
            {objConfig.cushionTextures.map((texturePath) => (
              <MaterialSwatch
                key={texturePath}
                setCurrTexture={setCurrCushionTexture1}
                currCushionTexture1={currCushionTexture1}
                currTexture={currBaseTexture}
                currObjMaterialRef={currObjMaterialRef}
                texturePath={texturePath}
              />
            ))}
          </div>
        </Html>
      </animated.group>
      <animated.group position={storageGroupPosition.position}>
        <Storages />
      </animated.group>
      <animated.group position={tableGroupPosition.position}>
        <Tables />
      </animated.group>
      <animated.group position={sofaGroupPosition.position}>
        <Sofas />
      </animated.group>
    </>
  );
};

export default Furniture;
