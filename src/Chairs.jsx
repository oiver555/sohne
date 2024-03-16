import { Suspense, useContext } from "react";
import Chair_B from "./Chair_B";
import Chair_C from "./Chair_C";
import Chair_D from "./Chair_D";
import { Chair_E } from "./Chair_E";
import Chair_A from "./Chair_A";
import { Box } from "@react-three/drei";
import { ChairsContext } from "./ExpContext";

const Chairs = (props) => {
  const { chairARef, chairRotation, chairsVis } = useContext(ChairsContext);

  return (
    <group>
      {chairsVis.a && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Chair_A />
        </Suspense>
      )}
      {chairsVis.b && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Chair_B />
        </Suspense>
      )}
      {chairsVis.c && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Chair_C />
        </Suspense>
      )}
      {chairsVis.d && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Chair_D />
        </Suspense>
      )}
      {chairsVis.e && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Chair_E />
        </Suspense>
      )}
    </group>
  );
};

export default Chairs;
