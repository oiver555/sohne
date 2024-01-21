import { Suspense } from "react";
import { Box } from "@react-three/drei";
import Storage_A from "./Storage_A";
import Storage_B from "./Storage_B";
import Storage_C from "./Storage_C";
import Storage_D from "./Storage_D";

const Storages = (props) => {
  return (
    <group>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Storage_A />
      </Suspense>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Storage_B />
      </Suspense>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Storage_C />
      </Suspense>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Storage_D />
      </Suspense>
    </group>
  );
};

export default Storages;
