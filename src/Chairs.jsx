import { Suspense, useContext } from "react";
import Chair_B from "./Chair_B";
import Chair_C from "./Chair_C";
import Chair_D from "./Chair_D";
import { Chair_E } from "./Chair_E";
import {Chair_A} from "./Chair_A";
import { Box, useGLTF } from "@react-three/drei";
import { ChairsContext, ExperienceContext } from "./ExpContext";
import { Chair_B_Lo } from "./Chair_B_Lo";
import { Chair_C_Lo } from "./Chair_C_Lo";
import { Chair_D_Lo } from "./Chair_D_Lo";
import { Chair_E_Lo } from "./Chair_E_Lo";
import { animated } from "@react-spring/three";
const Chairs = (props) => {
  const { chairRotation, chairsVis } = useContext(ChairsContext);
  const {chairACompRef} = useContext(ExperienceContext)
  const { nodes } = useGLTF("./gltf/Chair_A.gltf");
  console.log(nodes.Chair_A);
  return (
    <group>
      {chairsVis.a && (
        <Suspense
          fallback={
            <animated.group
              position={[20, -0.2, 14]}
              rotation-y={chairRotation.rotate}
            >
              <mesh  geometry={nodes.Chair_A.geometry}/>
            </animated.group>
          }
        >
          <Chair_A ref={chairACompRef} />
        </Suspense>
      )}
      {chairsVis.b && (
        <Suspense 
          fallback={
            <animated.group
              position={[19.8, 0, 14]}
              scale={0.104}
              rotation={[0, 1.4, 0]}
              rotation-y={chairRotation.rotate}
            >
              <Chair_B_Lo rotation={[0, 1.4, 0]} />
            </animated.group>
          }
        >
          <Chair_B />
        </Suspense>
      )}
      {chairsVis.c && (
        <Suspense
          fallback={
            <animated.group
              position={[19.8, 0, 14]}
              rotation={[0, 0, -Math.PI]}
              scale={[0.161, -0.161, 0.161]}
              rotation-y={chairRotation.rotate}
            >
              <Chair_C_Lo />
            </animated.group>
          }
        >
          <Chair_C />
        </Suspense>
      )}
      {chairsVis.d && (
        <Suspense
          fallback={
            <animated.group
              position={[19.8, 0, 14]}
              rotation-y={chairRotation.rotate}
              scale={[0.07, -0.07, 0.07]}
            >
              <Chair_D_Lo rotation={[0, 1.4, Math.PI]} />
            </animated.group>
          }
        >
          <Chair_D />
          
        </Suspense>
      )}
      {chairsVis.e && (
        <Suspense
          fallback={
            <animated.group
              position={[19, 3.2, 14]}
              scale={8}
              rotation={[0, 10, 0]}
              rotation-y={chairRotation.rotate}
            >
              <Chair_E_Lo rotation={[0, 1.5, 0]} position={[0, -0.391, 0]} />
            </animated.group>
          }
        >
          <Chair_E />
        </Suspense>
      )}
    </group>
  );
};

export default Chairs;
