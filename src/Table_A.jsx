/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Table_A(props) {
  const { nodes } = useGLTF("./gltf/Table_A.glb");
  const [plywooddiff2k, plywoodnorgl2k, plywoodrough2k] = useTexture([
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
    envMapIntensity: 0.3,
  });

  return (
    <group name="Table_A_grp" position={[19, 0, 13]} scale={0.082}>
      <mesh
        name="Table_A_large"
        castShadow
        receiveShadow
        geometry={nodes.Table_A_large.geometry}
        material={plyMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        name="Table_A_medium"
        castShadow
        receiveShadow
        geometry={nodes.Table_A_medium.geometry}
        material={plyMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        name="Table_A_small"
        castShadow
        receiveShadow
        geometry={nodes.Table_A_small.geometry}
        material={plyMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

// useGLTF.preload("gltf/Table_A.glb");
