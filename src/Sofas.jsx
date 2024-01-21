import { Suspense } from "react";
import { Box } from "@react-three/drei"; 
import Sofa_A from "./Sofa_A";
import Sofa_B from "./Sofa_B";
import Sofa_C from "./Sofa_C";
import Sofa_D from "./Sofa_D";

const Sofas = (props) => {
  return (
    <group>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Sofa_A />
      </Suspense>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Sofa_B />
      </Suspense>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Sofa_C />
      </Suspense>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Sofa_D />
      </Suspense>
    </group>
  );
};

export default Sofas;
