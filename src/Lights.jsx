import { Environment } from "@react-three/drei";
import * as THREE from "three";

const Lights = (props) => {
  console.log("[Lights.js]");
  const targetObject2 = new THREE.Object3D();
  targetObject2.position.y = 5;
  targetObject2.position.x = 20;
  targetObject2.position.z = 14.3;
  return (
    <>
      <Environment files={"/textures/veranda_1k.hdr"} />
      <ambientLight intensity={0.4} color={"rgb(255,200,200)"} />
      <rectAreaLight
        intensity={0.3}
        width={20.0}
        height={20}
        position={[20, 13, 15]}
        rotation={[Math.PI / -2, 0, 0]}
      />
      <directionalLight
        castShadow
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
        target={props.targetObject}
        color={"white"}
      />

      <directionalLight
        target={targetObject2}
        position={[20, 6, 0]}
        intensity={0.5}
        color={"white"}
      />
    </>
  );
};

export default Lights;
