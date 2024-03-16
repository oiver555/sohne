
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Bird(props) {
  const { nodes, materials } = useGLTF("./gltf/Bird.glb");
  const [bird] = useTexture([
    "/textures/livingroom/Living_Room_2_Shaded__Bird_BirdShape_rmanDefaultBakeDisplay.png",
  ]);

  bird.flipY = false;

  const birdMat = new THREE.MeshStandardMaterial({
    lightMap: bird,
  });
  return (
    <group {...props} dispose={null}>
      <group position={[-62.604, 67.206, -306.571]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BirdPIV.geometry}
          material={birdMat}
          position={[62.604, -67.206, 306.571]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/Bird.glb");