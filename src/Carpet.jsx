
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Carpet(props) {
  const { nodes, materials } = useGLTF("./gltf/Carpet.glb");
  const [carpet] = useTexture([
    "/textures/livingroom/Living_Room_3_Shaded__Carpet_CarpetShape_rmanDefaultBakeDisplay.png", 
  ]);

  carpet.flipY = false; 

  const carpetMat = new THREE.MeshStandardMaterial({
    map: carpet,
    envMapIntensity:0

  });
  return (
    <group {...props} dispose={null}>
      <group position={[72.445, 10.258, -163.889]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CarpetPIV.geometry}
          material={carpetMat}
          position={[-72.445, -10.258, 163.889]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/Carpet.glb");
