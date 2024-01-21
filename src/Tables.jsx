import { Suspense } from "react";
import { Box } from "@react-three/drei";
import Table_A from "./Table_A";
import Table_B from "./Table_B";
import Table_C from "./Table_C";
import Table_D from "./Table_D";

const Tables = (props) => {
  return (
    <group>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Table_A />
      </Suspense>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Table_B />
      </Suspense>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Table_C />
      </Suspense>
      <Suspense fallback={<Box position={[0, 2, 0]} />}>
        <Table_D />
      </Suspense>
    </group>
  );
};

export default Tables;
