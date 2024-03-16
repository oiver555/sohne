
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";


export function Plants(props) {
  const { nodes, materials } = useGLTF("./gltf/Plants.glb");
  const [  plantStraws, plantStems] = useTexture([
    "/textures/livingroom/Living_Room_2_Shaded__Plant_Grass_Straws_Plant_Grass_StrawsShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Plant_Stems_Plant_StemsShape_rmanDefaultBakeDisplay.png",
    ]);

    plantStraws.flipY = false;
    plantStems.flipY = false;
    
  
  const plantStrawsMat = new THREE.MeshStandardMaterial({
    lightMap: plantStraws,
  });
  const plantStemsMat = new THREE.MeshStandardMaterial({
    lightMap: plantStems,
  });
   
  return (
    <group {...props} dispose={null}>
      <group position={[-118.237, 62.389, -248.306]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plant_Grass_StrawsPIV.geometry}
          material={plantStrawsMat}
          position={[118.237, -62.389, 248.306]}
        />
      </group>
      <group position={[-114.978, 56.717, -209.881]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plant_StemsPIV.geometry}
          material={plantStemsMat}
          position={[114.978, -56.717, 209.881]}
        />
      </group>
      <group position={[-114.938, 59.424, -210.055]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plant_LeavesPIV.geometry}
          material={materials["lambert1.033"]}
          position={[114.938, -59.424, 210.055]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/Plants.glb");
