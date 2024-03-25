
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function PlantVase1(props) {
  const { nodes, materials } = useGLTF("./gltf/PlantsVase1.glb");
  const [plantVaseMain, plantVaseBeads] = useTexture([
    "/textures/livingroom/Living_Room_2_Shaded__Vase_1_Beads_Main_Vase_1_Beads_MainShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Vase_1_Vase_1Shape_rmanDefaultBakeDisplay.png",
   ]);

   plantVaseMain.flipY = false;
   plantVaseBeads.flipY = false;
  
  const plantVaseMainMat = new THREE.MeshStandardMaterial({
    lightMap: plantVaseMain,
    color: "red",
    metalness: 1,
    roughness: .2,
    side: THREE.DoubleSide,
    envMapIntensity: .2


  });
  
  const plantVaseBeadsMat = new THREE.MeshStandardMaterial({
    lightMap: plantVaseBeads,
    color: "orange",
    metalness: .5,
    roughness: .2,
    envMapIntensity: .6
  });


  return (
    <group {...props} dispose={null}>
      <group position={[-114.954, 13.775, -195.386]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vase_1_Beads_MainPIV.geometry}
          material={plantVaseMainMat}
          position={[114.954, -13.775, 195.386]}
        />
      </group>
      <group position={[-115.343, 20.529, -195.462]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vase_1_BeadsPIV.geometry}
          material={plantVaseBeadsMat}
          position={[115.343, -20.529, 195.462]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/PlantsVase1.glb");