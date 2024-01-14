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

import Furniture from "./Furniture";
import { useControls } from "leva";
import Chair_A from "./Chair_A";
import Chair_B from "./Chair_B";
import Chair_C from "./Chair_C";
import Chair_D from "./Chair_D";
import Sofa_A from "./Sofa_A";
import Sofa_B from "./Sofa_B";
import Sofa_C from "./Sofa_C";
import Sofa_D from "./Sofa_D";
import Storage_A from "./Storage_A";
import Storage_B from "./Storage_B";
import Storage_C from "./Storage_C";
import Storage_D from "./Storage_D";
import Table_A from "./Table_A";
import Table_B from "./Table_B";
import Table_C from "./Table_C";
import Table_D from "./Table_D";
import { useSpring, animated } from "@react-spring/three";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { Suspense, memo, useEffect, useRef, useState } from "react";
import { BKG_01 } from "./BKG_01";
import { Perf } from "r3f-perf";
import { Chair_E } from "./Chair_E";

export default function Experience(props) {
  const camRef = useRef();
  const sceneRef = useRef();

  const springsChair_A = useSpring({
    ref: props.chairA_spring_pos_Ref,
    from: { position: [0, 0, 0] },
  });
  const springsStorage_A = useSpring({
    ref: props.storageA_springRef,
    from: { position: [0, 0, -20] },
  });
  const springsTable_A = useSpring({
    ref: props.tableA_springRef,
    from: { position: [0, 0, -40] },
  });
  const springsSofa_A = useSpring({
    ref: props.sofaA_springRef,
    from: { position: [0, 0, -60] },
  });

  const directionalLightRef1 = useRef();
  const directionalLightRef2 = useRef();
  const rectLightRef3 = useRef();
  const ambLightRef = useRef();
  const pointLightRef = useRef();
  // useHelper(directionalLightRef1, THREE.DirectionalLightHelper, 1, "red");
  // useHelper(directionalLightRef2, THREE.DirectionalLightHelper, 10, "red");
  // useHelper(rectLightRef3, RectAreaLightHelper, 10, "red");
  // useHelper(pointLightRef, THREE.PointLightHelper, 5, "red");

  const textureLoader = new THREE.TextureLoader();
  const targetObject = new THREE.Object3D();
  const targetObject2 = new THREE.Object3D();
  targetObject.position.y = 5;
  targetObject.position.x = 20;
  targetObject.position.z = 17;
  targetObject2.position.y = 5;
  targetObject2.position.x = 20;
  targetObject2.position.z = 14.3;
  const Elsafabricref = textureLoader.load("/textures/Elsa_fabric_ref.jpg");

  Elsafabricref.wrapS = THREE.RepeatWrapping;
  Elsafabricref.wrapT = THREE.RepeatWrapping;
  Elsafabricref.repeat.set(1, 1);
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
        ref={camRef}
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
      {/* <Furniture/> */}
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
      <BKG_01 />

      <group>
        <animated.group
          ref={props.chairAGroupRef}
          position={springsChair_A.position}
        >
          <Chair_A chairARef={props.chairARef} rotation={props.rotation} />
        </animated.group>
        <animated.group
          ref={props.storageAGroupRef}
          position={springsStorage_A.position}
        >
          <Storage_A storageARef={props.storageARef} />
        </animated.group>
        <animated.group
          ref={props.tableAGroupRef}
          position={springsTable_A.position}
        >
          <Table_A tableARef={props.tableARef} />
        </animated.group>
        <animated.group
          ref={props.sofaAGroupRef}
          position={springsSofa_A.position}
        >
          <Sofa_A sofaARef={props.sofaARef} />
        </animated.group>
      </group>
      {/* <Chair_B /> */}
      {/* <Chair_C /> */}
      {/* <Chair_D /> */}
      {/* <Chair_E/> */}
      {/* <Sofa_B/>   */}
      {/* <Sofa_C/>  */}
      {/* <Sofa_D/> */}
      {/* <Storage_B /> */}
      {/* <Storage_C /> */}
      {/* <Storage_D /> */}
      {/* <Table_B /> */}
      {/* <Table_C /> */}
      {/* <Table_D /> */}
      <axesHelper position={[0, 10, 0]} />
    </>
  );
}
