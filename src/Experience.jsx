import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  SoftShadows,
  useHelper,
  useProgress,
  Resize,
  Icosahedron,
  TransformControls,
} from "@react-three/drei";
import * as THREE from "three";
import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";
import { SSAOPass } from "three-stdlib";

 import { useControls } from "leva";
import Sofa_A from "./Sofa_A";
import Sofa_B from "./Sofa_B";
import Sofa_C from "./Sofa_C";
import Sofa_D from "./Sofa_D";
import Storage_A from "./Storage_A";
import Storage_B from "./Storage_B";
import Storage_C from "./Storage_C";
import Storage_D from "./Storage_D";

import { useSpring, animated } from "@react-spring/three";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { Suspense, memo, useContext, useEffect, useRef, useState } from "react";
import { BKG_01 } from "./BKG_01";
import { Perf } from "r3f-perf";
import { Chair_E } from "./Chair_E";
import Chairs from "./Chairs";
import Storages from "./Storages";
import {
  ChairsContext,
  SceneContext,
  SofaContext,
  StorageContext,
  TablesContext,
} from "./ExpContext";
import Tables from "./Tables";
import Sofas from "./Sofas";

export default function Experience(props) {
  const sceneRef = useRef();
  const directionalLightRef1 = useRef();
  const directionalLightRef2 = useRef();
  const rectLightRef3 = useRef();
  const ambLightRef = useRef();
  const pointLightRef = useRef();
  const { chairGroupPosition } = useContext(ChairsContext);
  const { storageGroupPosition, storageCRef } = useContext(StorageContext);
  const { tableGroupPosition } = useContext(TablesContext);
  const { sofaGroupPosition } = useContext(SofaContext);
  const { cameraRef } = useContext(SceneContext);
  // useHelper(directionalLightRef1, THREE.DirectionalLightHelper, 1, "red");
  // useHelper(directionalLightRef2, THREE.DirectionalLightHelper, 10, "red");
  // useHelper(rectLightRef3, RectAreaLightHelper, 10, "red");
  // useHelper(pointLightRef, THREE.PointLightHelper, 5, "red");

   const targetObject = new THREE.Object3D();
  const targetObject2 = new THREE.Object3D();
  targetObject.position.y = 5;
  targetObject.position.x = 20;
  targetObject.position.z = 17;
  targetObject2.position.y = 5;
  targetObject2.position.x = 20;
  targetObject2.position.z = 14.3;
 
 
  useProgress((state) => {});

  useThree(({ camera, scene }) => {
    scene.add(targetObject);
    sceneRef.current = scene;
    camera.lookAt(new THREE.Vector3(0, 5, 0));
  });


   return (
    <>
      {/* <Perf /> */}
      <PerspectiveCamera
        ref={cameraRef}
        fov={10}
        makeDefault
        left={-1}
        right={1}
        top={1}
        bottom={-1}
        near={0.1}
        far={400}
        position={[100, 15, 70]}
      />

      {/* {loaded && <Effects ref={sunRef} />} */}
      <Environment files={"/textures/veranda_1k.hdr"} />
      <fog attach="fog" args={["orange", 40, 700]} />
      <SoftShadows size={5} samples={25} focus={2} />
      <OrbitControls makeDefault enabled={true} enableRotate />
       <ambientLight
        ref={ambLightRef}
        intensity={0.4}
        color={"rgb(255,200,200)"}
      />
      <rectAreaLight
        intensity={0.3}
        width={20.0}
        height={20}
        position={[20, 13, 15]}
        rotation={[Math.PI / -2, 0, 0]}
        ref={rectLightRef3}
      />
      <directionalLight
        castShadow
        ref={directionalLightRef1}
        position={[19, 7.7, 31]}
        intensity={1}
        scale={[0.1, 0.1, 0.1]}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0}
        shadow-camera-far={200}
        shadow-camera-top={30}
        shadow-camera-right={30}
        shadow-camera-bottom={-30}
        shadow-camera-left={-30}
        target={targetObject}
        color={"white"}
      />

      <directionalLight
        ref={directionalLightRef2}
        target={targetObject2}
        // castShadow
        position={[20, 6, 0]}
        intensity={0.5}
        color={"white"}
      />
      <Suspense>
        <BKG_01 />
      </Suspense>
      <group>
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
      </group>

      {/* <Sofa_B/>   */}
      {/* <Sofa_C/>  */}
      {/* <Sofa_D/> */}
      {/* <Storage_B /> */}
      {/* <Storage_C /> */}
      {/* <Storage_D /> */}
      {/* <Table_B /> */}
      {/* <Table_C /> */}
      {/* <Table_D /> */}
      {/* <axesHelper position={[0, 10, 0]} /> */}
    </>
  );
}
