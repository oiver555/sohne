import { 
  OrbitControls,
  PerspectiveCamera,
  SoftShadows,
} from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { BKG } from "./BKG";
import { SceneContext } from "./ExpContext";
import Lights from "./Lights";
import Furniture from "./Furniture"; 

export default function Experience(props) {
  const sceneRef = useRef(); 
  const { cameraRef } = useContext(SceneContext);
  const targetObject = new THREE.Object3D();
  targetObject.position.y = 5;
  targetObject.position.x = 20;
  targetObject.position.z = 17;

  useThree(({ camera, scene }) => {
    scene.add(targetObject);
    sceneRef.current = scene;
    camera.lookAt(new THREE.Vector3(0, 5, 0));
  });

  return (
    <>
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

      <fog attach="fog" args={["orange", 40, 700]} />
      <SoftShadows sipze={5} samples={25} focus={2} />
      <OrbitControls makeDefault enabled={true} enableRotate={false} enableZoom={false} />
      <Lights targetObject={targetObject} />
      <Furniture />
      <BKG />
    </>
  );
}
