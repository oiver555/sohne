import { Suspense, useContext } from "react";
import { Box } from "@react-three/drei";
import Sofa_A from "./Sofa_A";
import Sofa_B from "./Sofa_B";
import Sofa_C from "./Sofa_C";
import Sofa_D from "./Sofa_D";
import { SofaContext } from "./ExpContext";

const Sofas = (props) => {
  const { sofasVis, setSofasVis } = useContext(SofaContext);
  return (
    <group>
      {sofasVis.a && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Sofa_A />
        </Suspense>
      )}
      {sofasVis.b && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Sofa_B />
        </Suspense>
      )}
      {sofasVis.c && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Sofa_C />
        </Suspense>
      )}
      {sofasVis.d && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Sofa_D />
        </Suspense>
      )}
    </group>
  );
};

export default Sofas;
