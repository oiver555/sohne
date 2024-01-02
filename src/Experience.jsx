import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  SoftShadows,
  useHelper,
  useProgress,
} from "@react-three/drei";
import * as THREE from "three";
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
 import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BKG_01 } from "./BKG_01";

export default function Experience() {
  const camRef = useRef();
  const { targetX, targetY, targetZ, positionX, positionY, positionZ } = useControls({
    targetX: {
      value: 20,
      step: .1,
    },
    targetY: {
      value: 5,
      step: .1,
    },
    targetZ: {
      value: 17,
      step: .1,
    },
    positionX: {
      value: 19,
      step: .1,
    },
    positionY: {
      value: 12,
      step: .1,
    },
    positionZ: {
      value: 31,
      step: .1,
    },
  });

  const directionalLightRef1 = useRef();
  const directionalLightRef2 = useRef();
  const ambLightRef = useRef();
  useHelper(directionalLightRef1, THREE.DirectionalLightHelper, 1, "red");
  useHelper(directionalLightRef2, THREE.DirectionalLightHelper, 10);

  useFrame(() => {});
  const textureLoader = new THREE.TextureLoader();
  const kitchenenv = textureLoader.load("./textures/kitchen_env.jpg");
  const targetObject = new THREE.Object3D();
  targetObject.position.y = targetY;
  targetObject.position.x = targetX;
  targetObject.position.z = targetZ;

  useProgress((state) => {
    // console.log(state.progress);

    if (state.progress === 100) {
      console.log(directionalLightRef1.current);
      // directionalLightRef1.current.shadow.bias = -0.0001
      // useHelper(directionalLightRef1.current.shadow.camera, THREE.CameraHelper, 10);
    }
  });

  useThree(({ camera, scene }) => {
    scene.add(targetObject);
    camera.lookAt(new THREE.Vector3(0, 5, 0));
    console.log(camera);
  });

  return (
    <>
      <PerspectiveCamera
        ref={camRef}
        fov={10}
        // focus={30}

        makeDefault
        left={-1}
        right={1}
        top={1}
        bottom={-1}
        near={0.1}
        far={400}
        position={[100, 15, 70]}
      />
      {/* <Environment     files={"/textures/solitude_interior_2k.hdr"} /> */}
      {/* <SoftShadows size={5} samples={17} focus={0} /> */}
      <OrbitControls enabled={true} enableRotate />
      {/* <Furniture/> */}
      {/* <ambientLight ref={ambLightRef} intensity={0.2} /> */}

      <directionalLight
        castShadow
        ref={directionalLightRef1}
        position={[positionX, positionY, positionZ]}
        intensity={5}
        target={targetObject}
        color={"white"}
        // shadow-mapsize={[2048, 2048]}
        // shadow-camera-top={500}
        // shadow-camera-near={0.1}
        // shadow-camera-far={500}
        // shadow-camera-right={500}
        // shadow-camera-bottom={-500}
        // shadow-camera-left={-5}
        // shadow-normalBias={0.06}
      /> 

      {/* <directionalLight
        castShadow
        ref={directionalLightRef2}
        position={[-10, 3, 0]}
        lookAt={[-10, 30, 0]}
        intensity={1}
        shadow-mapsize={[2048, 2048]}
        color={new THREE.Color("rgb(150,150, 200)")}
        shadow-normalBias={0.06}
      /> */}
       <BKG_01 />
      <Chair_A />
      {/* <Chair_B /> */}
      {/* <Chair_C /> */}
      {/* <Chair_D /> */}
      {/* <Sofa_A />  */}
      {/* <Sofa_B/>   */}
      {/* <Sofa_C/>  */}
      {/* <Sofa_D/> */}
      {/* <Storage_A /> */}
      {/* <Storage_B /> */}
      {/* <Storage_C /> */}
      {/* <Storage_D /> */}
      {/* <Table_A /> */}
      {/* <Table_B /> */}
      {/* <Table_C /> */}
      {/* <Table_D /> */}      
      <axesHelper position={[0, 10, 0]} />
    </>
  );
}
