/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 C:\Users\osain\Coding\Projects\3js\Sohne\public\gltf\remainder\Trim.glb -o C:\Users\osain\Coding\Projects\3js\Sohne\src\Trim.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Trim(props) {
  const { nodes, materials } = useGLTF('./gltf/Trim.glb')
  const [trim,  ] = useTexture([
    "/textures/livingroom/Living_Room_3_Shaded__Trims_TrimsShape_rmanDefaultBakeDisplay.png", 
  ]); 

  trim.flipY = false  
  const trimMat = new THREE.MeshStandardMaterial({
    map: trim,
    envMapIntensity: 0
  }); 
  return (
    <group {...props} dispose={null}>
      {/* <mesh geometry={nodes.Trims.geometry} material={trimMat} /> */}
    </group>
  )
}

// useGLTF.preload('./gltf/Trim.glb')
