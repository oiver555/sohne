/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 C:\Users\osain\Coding\Projects\3js\Sohne\Maya\scenes\Table_C.gltf -o C:\Users\osain\Coding\Projects\3js\Sohne\src\Table_C.jsx 
*/

import React, { useContext, useEffect, useMemo, useState, useRef } from "react"
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from "three";
import { animated, useSpring } from "@react-spring/three"
import { useGesture } from "react-use-gesture";
import { GlobalStateContext } from "./ExpContext"

export const Table_C = (props) => {
   const { nodes, materials } = useGLTF('./gltf/Table_C.gltf')
const mat1 = new THREE.MeshStandardMaterial({})
const mat2 = new THREE.MeshStandardMaterial({})
const [] = useTexture([])
const [hovered, setHovered] = useState(false)
 const [spring, set] = useSpring(() => ({
                rotation: [0, 0, 0],
                config: { friction: 10 },
              }));
const bind = useGesture({
                onDrag: ({ offset: [x] }) => (""),
              });
const {} = useContext()
 const {  currChair, setobjConfig, currBaseTexture } = useContext(GlobalStateContext);

  return (
    <animated.group  {...spring} {...bind()}  {...props} dispose={null}>
      <mesh castShadow receiveShadow  geometry={nodes.Table_C_Body.geometry} material={materials.body} />
      <mesh castShadow receiveShadow  geometry={nodes.Table_C_Top.geometry} material={materials.top1} />
      <mesh castShadow receiveShadow  geometry={nodes.Table_C_Stand.geometry} material={materials.base} />
    </animated.group>
  )
}


