
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function PlantVase2(props) {
  const { nodes, materials } = useGLTF("./gltf/PlantsVase2.glb");
  const [plantVaseMain, plantVaseBeads] = useTexture([
    "/textures/livingroom/Living_Room_2_Shaded__Vase_2_Beads_Vase_2_BeadsShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Vase_2_Main_Vase_2_MainShape_rmanDefaultBakeDisplay.png",
   ]);

   plantVaseMain.flipY = false;
   plantVaseBeads.flipY = false;
  
  const plantVaseMainMat = new THREE.MeshStandardMaterial({
    lightMap: plantVaseMain,
  });
  
  const plantVaseBeadsMat = new THREE.MeshStandardMaterial({
    lightMap: plantVaseBeads,
  });


  return (
    <group {...props} dispose={null}>
      <group position={[-115.969, 21.817, -209.889]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vase_2_MainPIV.geometry}
          material={plantVaseMainMat}
          position={[115.969, -21.817, 209.889]}
        />
      </group>
      <group position={[-115.969, 21.733, -209.889]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vase_2_BeadsPIV.geometry}
          material={plantVaseBeadsMat}
          position={[115.969, -21.733, 209.889]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/PlantsVase2.glb");