import { Suspense, useContext } from "react";
import { Box } from "@react-three/drei";
import { Table_A } from "./Table_A";
import { Table_B } from "./Table_B";
import { Table_C } from "./Table_C";
import { Table_D } from "./Table_D";
import { ExperienceContext, TablesContext } from "./ExpContext";

const Tables = (props) => {
  const { tablesVis, setTableVis } = useContext(TablesContext);
  const { tableACompRef } = useContext(ExperienceContext);

  return (
    <group>
      {tablesVis.a && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Table_A ref={tableACompRef} />
        </Suspense>
      )}
      {tablesVis.b && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Table_B />
        </Suspense>
      )}
      {tablesVis.c && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Table_C />
        </Suspense>
      )}
      {tablesVis.d && (
        <Suspense fallback={<Box position={[0, 2, 0]} />}>
          <Table_D />
        </Suspense>
      )}
    </group>
  );
};

export default Tables;
