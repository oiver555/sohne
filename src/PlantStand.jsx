import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function PlantStand(props) {
  const { nodes, materials } = useGLTF("./gltf/PlantStand.glb");
  const [  stand] = useTexture([
    "/textures/livingroom/Living_Room_2_Shaded__Plant_Stand_Plant_StandShape_rmanDefaultBakeDisplay.png",
    ]);

    stand.flipY = false;
    
  
  const standMat = new THREE.MeshStandardMaterial({
    lightMap: stand,
    color: 'rgb(10,10,50)',
    metalness: 0,
    roughness: .2,
    side: THREE.DoubleSide,
    envMapIntensity: 1
  });
   

  return (
    <group {...props} dispose={null}>
      <group position={[-114.754, 14.195, -216.169]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plant_StandPIV.geometry}
          material={standMat}
          position={[114.754, -14.195, 216.169]}
        />
      </group>
    </group>
  );
}

// useGLTF.preload("./gltf/PlantStand.glb");
