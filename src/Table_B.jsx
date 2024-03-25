/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Table_B(props) {
  const { nodes, materials } = useGLTF("./gltf/Table_B.glb");
  
  const [plywooddiff2k,
    plywoodnorgl2k,
    plywoodrough2k] = useTexture([
      "./textures/plywood_diff_2k.jpg",
      "./textures/plywood_nor_gl_2k.jpg",
      "./textures/plywood_rough_2k.jpg",
  ]);


 
  const plyMaterial = new THREE.MeshPhysicalMaterial({
    // color:plywooddiff2k, // Base color of the steel
    map: plywooddiff2k,
    // metalness: 0.4, // Fully metallic
    // metalnessMap: MetalSteelBrushed001metallic,
    normalScale: new THREE.Vector2(2, 2),
    normalMap: plywoodnorgl2k,
    roughnessMap: plywoodrough2k,
    roughness: 0.8, // Adjust the roughness for a brushed appearance
    side: THREE.DoubleSide,
    envMapIntensity: 0.2,
  });

  return (
    <group
      
      name="Table_B_grp"
      position={[19, 0, 13]}
      scale={0.08}

      visible={false}
    >
      <group name="Table_B_Legs" position={[0.018, 31.773, 1.291]}>
        <mesh
          name="Table_B_LegsPIV"
          castShadow
          receiveShadow
          geometry={nodes.Table_B_LegsPIV.geometry}
          material={plyMaterial}
          position={[-0.018, -31.773, -1.291]}
        />
      </group>
      <mesh
        name="Table_B_Top"
        castShadow
        receiveShadow
        geometry={nodes.Table_B_Top.geometry}
        material={plyMaterial}
        position={[0.018, 0.099, 1.291]}
        rotation={[-Math.PI / 2, 0, -0.488]}
        scale={[0.775, 0.775, 0.737]}
      />
      <mesh
        name="Table_B_Vase"
        castShadow
        receiveShadow
        geometry={nodes.Table_B_Vase.geometry}
        material={plyMaterial}
        position={[0.138, 73.101, 10.188]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.775}
      />
    </group>
  );
}

// useGLTF.preload("gltf/Table_B.glb");
