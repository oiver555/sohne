/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Table_D(props) {
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
    <group ref={objRef} name="Table_D_grp" position={[0, 2, 0.4]} scale={0.096}>
    <group name="Table_D_grpPIV" position={[0, -21, 0]}>
      <group name="Table_D_Body" position={[0, 30.388, 0]}>
        <mesh
          name="Table_D_BodyPIV"
          castShadow
          receiveShadow
          geometry={nodes.Table_D_BodyPIV.geometry}
          material={plyMaterial}
          position={[0, -30.388, 0]}
        />
      </group>
      <mesh
        name="Table_D_Frame"
        castShadow
        receiveShadow
        geometry={nodes.Table_D_Frame.geometry}
        material={plyMaterial}
      />
      <group name="Table_D_Legs" position={[0, 9.388, 0]}>
        <mesh
          name="Table_D_LegsPIV"
          castShadow
          receiveShadow
          geometry={nodes.Table_D_LegsPIV.geometry}
          material={plyMaterial}
          position={[0, -9.388, 0]}
        />
      </group>
      <mesh
        name="Table_D_Marble"
        castShadow
        receiveShadow
        geometry={nodes.Table_D_Marble.geometry}
        material={plyMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  </group>
  );
}

useGLTF.preload("gltf/Scene_06.glb");
