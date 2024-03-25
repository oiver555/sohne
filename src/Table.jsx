/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 C:\Users\osain\Coding\Projects\3js\Sohne\public\gltf\remainder\Table.glb -o C:\Users\osain\Coding\Projects\3js\Sohne\src\Table.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Table(props) {
  const { nodes, materials } = useGLTF('./gltf/Table.glb')
  const [ tableLegs,table,] = useTexture([
    "/textures/livingroom/Living_Room_3_Shaded__Table_Legs_Table_LegsShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_3_Shaded__Table_Surface_Table_SurfaceShape_rmanDefaultBakeDisplay.png",
   ]);

  tableLegs.flipY = false;
  table.flipY = false;
  
  const tableLegsMat = new THREE.MeshPhysicalMaterial({
    // map: tableLegs,
    metalness: 1,
    clearcoat:1,
    clearcoatRoughness: 0,
    reflectivity: 1,
    color:"silver",
    envMapIntensity: 1,
    // ior: 32,
    sheen: 1,
    sheenColor: "orange"

  });
  const tableMat = new THREE.MeshStandardMaterial({
    map: table,
    envMapIntensity: 0

  });
  return (
    <group {...props} dispose={null}>
      <group position={[74.426, 10.297, -43.994]}>
        <mesh geometry={nodes.Table_SurfacePIV.geometry} material={tableMat} position={[-74.426, -10.297, 43.994]} />
      </group>
      <group position={[74.426, 31.746, -43.994]}>
        <mesh geometry={nodes.Table_LegsPIV.geometry} material={tableLegsMat} position={[-74.426, -31.746, 43.994]} />
      </group>
    </group>
  )
}

// useGLTF.preload('./gltf/Table.glb')
