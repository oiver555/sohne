/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Chair_B_Lo.gltf -o C:\Users\osain\Coding\Projects\3js\Sohne\src\Chair_B_Lo.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Chair_B_Lo(props) {
  const { nodes, materials } = useGLTF('./gltf/Chair_B_Lo.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair_B_Chair_B_Cushion.geometry} material={materials['default']} />
    </group>
  )
}

 