/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Table_A(props) {
  const { nodes, materials } = useGLTF("/gltf/Scene_06.glb");
  const objRef = useRef();
  useFrame(() => {
    objRef.current.rotation.y += 0.001;
  });
  const textureLoader = new THREE.TextureLoader();
  const plywooddiff2k = textureLoader.load("/textures/plywood_diff_2k.jpg");
  const plywoodnorgl2k = textureLoader.load("/textures/plywood_nor_gl_2k.jpg");
  const plywoodrough2k = textureLoader.load("/textures/plywood_rough_2k.jpg");

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
  });

  return (
    <group
      ref={objRef}
      name="Table_A_grp"
      position={[0, 0, 0.387]}
      scale={0.082}
    >
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

useGLTF.preload("gltf/Scene_06.glb");