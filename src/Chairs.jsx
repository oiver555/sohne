import { Suspense } from "react";
import Chair_B from "./Chair_B";
import Chair_C from "./Chair_C";
import Chair_D from "./Chair_D";
import { Chair_E } from "./Chair_E";
import Chair_A from "./Chair_A";
import { Box } from "@react-three/drei";

const Chairs = (props) => {
  return (
    <group>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Chair_A />
      </Suspense>

      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Chair_B  />
      </Suspense>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Chair_C  />
      </Suspense>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Chair_D  />
      </Suspense>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Chair_E  />
      </Suspense>
    </group>
  );
};

export default Chairs;
