import { useContext } from "react";
import { ChairsContext, SofaContext, StorageContext, TablesContext } from "./ExpContext";
import { animated } from "@react-spring/three";
import Chairs from "./Chairs";
import Storages from "./Storages";
import Tables from "./Tables";
import Sofas from "./Sofas";

const Furniture = (props) => {
    const { chairGroupPosition } = useContext(ChairsContext);
    const { storageGroupPosition } = useContext(StorageContext);
    const { tableGroupPosition } = useContext(TablesContext);
    const { sofaGroupPosition } = useContext(SofaContext);
  return (
    <>
      <animated.group position={chairGroupPosition.position}>
        <Chairs />
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

export default Furniture
