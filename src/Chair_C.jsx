/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Chair_C(props) {
  const { nodes, materials } = useGLTF("./gltf/Chair_C.glb");
  const objRef = useRef();
  const textureLoader = new THREE.TextureLoader();
  const chairdiffuse = textureLoader.load("./textures/chair_diffuse.jpg");
  chairdiffuse.flipY = false
  const chairglossiness = textureLoader.load("./textures/chair_glossiness.jpg");
  const chairnormalmap = textureLoader.load("./textures/chair_normal_map.jpg");
  const chairreflection = textureLoader.load("./textures/chair_reflection.jpg");

  const woodMat = new THREE.MeshStandardMaterial({
    map: chairdiffuse,
    roughnessMap: chairglossiness,
    roughness: 0.5,
  
    // bumpMap: TheReaderarmchairbheight,
    // bumpScale: 1,
    normalMap: chairnormalmap,
    normalScale: new THREE.Vector2(1.0, 1.0),
  });

  useFrame(() => {
    objRef.current.rotation.y -= 0.001;
  });
  return (
    <group
      ref={objRef}
      name="Chair_C_grp"
      position={[0, 0, 0]}
      rotation={[-Math.PI, 0, -Math.PI]}
      scale={0.161}
    >
      <mesh
        name="Chair_CPIV"
        castShadow
        receiveShadow
        geometry={nodes.Chair_CPIV.geometry}
        material={woodMat}
        position={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("gltf/Chair_C.glb");
