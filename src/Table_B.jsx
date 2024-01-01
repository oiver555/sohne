/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Table_B(props) {
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
    <group ref={objRef} name="Table_B_grp" position={[0.72, 0, 0.828]} scale={0.076}>
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

useGLTF.preload("gltf/Scene_06.glb");