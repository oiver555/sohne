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
import { extend, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { BKG_01 } from "./BKG_01";
import Effects from "./Effects";

export default function Experience() {
  const camRef = useRef();
  const sceneRef = useRef();
  const sunRef = useRef();
  const {
    targetX,
    targetY,
    targetZ,
    sunTargetX,
    sunTargetY,
    sunTargetZ,
    targetX2,
    targetY2,
    targetZ2,
    positionX,
    positionY,
    positionZ,
  } = useControls({
    sunTargetX: {
      value: 20,
      step: 0.1,
    },
    sunTargetY: {
      value: 5,
      step: 0.1,
    },
    sunTargetZ: {
      value: 17,
      step: 0.1,
    },
    targetX: {
      value: 20,
      step: 0.1,
    },
    targetY: {
      value: 5,
      step: 0.1,
    },
    targetZ: {
      value: 17,
      step: 0.1,
    },
    targetX2: {
      value: 20,
      step: 0.1,
    },
    targetY2: {
      value: 5,
      step: 0.1,
    },
    targetZ2: {
      value: 14.3,
      step: 0.1,
    },
    positionX: {
      value: 19,
      step: 0.1,
    },
    positionY: {
      value: 7.7,
      step: 0.1,
    },
    positionZ: {
      value: 31,
      step: 0.1,
    },
  });

  const [loaded, setLoaded] = useState(false);

  extend({ SSAOPass });

  const directionalLightRef1 = useRef();
  const directionalLightRef2 = useRef();
  const rectLightRef3 = useRef();
  const ambLightRef = useRef();
  const pointLightRef = useRef();
  useHelper(directionalLightRef1, THREE.DirectionalLightHelper, 1, "red");
  useHelper(directionalLightRef2, THREE.DirectionalLightHelper, 10, "red");
  useHelper(rectLightRef3, RectAreaLightHelper, 10, "red");
  useHelper(pointLightRef, THREE.PointLightHelper, 5, "red");

  const textureLoader = new THREE.TextureLoader();
  const kitchenenv = textureLoader.load("./textures/kitchen_env.jpg");
  const targetObject = new THREE.Object3D();
  const targetObject2 = new THREE.Object3D();
  targetObject.position.y = targetY;
  targetObject.position.x = targetX;
  targetObject.position.z = targetZ;
  targetObject2.position.y = targetY2;
  targetObject2.position.x = targetX2;
  targetObject2.position.z = targetZ2;
  const Elsafabricref = textureLoader.load("/textures/Elsa_fabric_ref.jpg");

  Elsafabricref.wrapS = THREE.RepeatWrapping;
  Elsafabricref.wrapT = THREE.RepeatWrapping;
  Elsafabricref.repeat.set(1, 1);
  useProgress((state) => {
    // console.log(state.progress);

    if (state.progress === 100) {
      console.log(directionalLightRef1.current);
      // directionalLightRef1.current.shadow.bias = -0.0001
      // useHelper(directionalLightRef1.current.shadow.camera, THREE.CameraHelper, 10);
    }
  });

  useFrame(() => {
    sunRef.current.rotation.y += 0.005;
  });

  useThree(({ camera, scene }) => {
    scene.add(targetObject);
    sceneRef.current = scene;
    camera.lookAt(new THREE.Vector3(0, 5, 0));
  });

  const sunMat = new THREE.MeshStandardMaterial({
    transparent: true,
    color: "red",
    map: Elsafabricref,
    colorWrite: true,
    opacity: 1,
    alphaMap: Elsafabricref,
    side: THREE.DoubleSide,
  });

  useEffect(() => {
    console.log(sunRef);
    setLoaded(true);
  }, []);

  return (
    <>
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
      <mesh
        castShadow
        ref={sunRef}
        material={sunMat}
        scale={0.5}
        position={[sunTargetX, sunTargetY, sunTargetZ]}
      >
        <Icosahedron castShadow />
      </mesh>
      <TransformControls position={[22, 5, 17]}  mode="translate">
        <mesh castShadow scale={[0.2, 2, 0.2]}>
          <boxGeometry  castShadow />
          <meshBasicMaterial  colorWrite={false} opacity={0} color={"black"} />
        </mesh>
      </TransformControls>
      {loaded && <Effects ref={sunRef} />}
      <Environment files={"/textures/veranda_1k.hdr"} />
      <fog attach="fog" args={["orange", 40, 700]} />
      <SoftShadows size={10} samples={17} focus={0} />
      <OrbitControls makeDefault enabled={true} enableRotate />
      {/* <Furniture/> */}
      <ambientLight ref={ambLightRef} intensity={1} />
      <rectAreaLight
        intensity={0.3}
        width={20.0}
        height={20}
        position={[20, 10, 15]}
        rotation={[Math.PI / -2, 0, 0]}
        ref={rectLightRef3}
      />
      <directionalLight
        castShadow
        ref={directionalLightRef1}
        position={[positionX, positionY, positionZ]}
        intensity={1}
        target={targetObject}
        color={"white"}
      />

      <pointLight
        ref={pointLightRef}
        decay={1}
        position={[-25, 10, -30]}
        color={"rgba(255,230,194,1)"}
        distance={22}
        intensity={20}
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

      {/* Light Blocker */}
      <mesh
        receiveShadow
        rotation={[Math.PI / -12, Math.PI / 1.1, Math.PI / 1]}
        scale={[50, 4, 1]}
        castShadow
        position={[20, 4, 20]}
      >
        <planeGeometry />
        <meshStandardMaterial side={THREE.FrontSide} />
      </mesh>

      <mesh
        receiveShadow
        rotation={[Math.PI / -12, Math.PI / 1.1, Math.PI / 1]}
        scale={[50, 4, 1]}
        castShadow
        position={[20, 10, 20]}
      >
        <planeGeometry />
        <meshStandardMaterial side={THREE.FrontSide} />
      </mesh>

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
