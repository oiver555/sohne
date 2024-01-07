/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Chair_D(props) {
  const { nodes, materials } = useGLTF("./gltf/Chair_D.glb");
  const objRef = useRef();
  const textureLoader = new THREE.TextureLoader();
  const chairglossiness = textureLoader.load("./textures/chair_glossiness.jpg");
  const Chairpbrdiffuse = textureLoader.load(
    "./textures/Chair_pbr_diffuse.png"
  );
  Chairpbrdiffuse.flipY = false;

  const Chairpbrnormal = textureLoader.load("./textures/Chair_pbr_normal.jpg");
  Chairpbrnormal.flipY = false;
  const Chairpbrroughness = textureLoader.load(
    "/textures/Chair_pbr_roughness.png"
  );
  Chairpbrroughness.flipY = false;
  const Chairpbrspecular = textureLoader.load(
    "/textures/Chair_pbr_specular.png"
  );
  const chairreflection = textureLoader.load("./textures/chair_reflection.jpg");
  const darkwooddiff2k = textureLoader.load("./textures/dark_wood_diff_2k.jpg");

  const fabricMtl = new THREE.MeshStandardMaterial({
    map: Chairpbrdiffuse,
    
    roughnessMap: Chairpbrroughness,
    normalMap: Chairpbrnormal,
    roughness: 1,
    metalness: 0,
    envMapIntensity:.2,

  });

  useFrame(() => {
    // objRef.current.rotation.y += 0.01;
  });

  return (
    <group
      name="Chair_D_grp"
      position={[19.8, 3.8, 14]}
      rotation={[-Math.PI, 1.2, -Math.PI]}
      scale={0.011}
      ref={objRef}
    >
      <group name="Chair_D_Legs" position={[0, -167.65, 165.597]} scale={6.351}>
        <mesh
          name="Chair_D_LegsPIV"
          castShadow
          receiveShadow
          geometry={nodes.Chair_D_LegsPIV.geometry}
          material={fabricMtl}
          position={[0, -28.272, -26.076]}
        />
      </group>
      <group name="Chair_D_trim" position={[0, 93.281, 174.735]} scale={6.351}>
        <mesh
          name="Chair_D_trimPIV"
          castShadow
          receiveShadow
          geometry={nodes.Chair_D_trimPIV.geometry}
          material={fabricMtl}
          position={[0, -69.36, -27.515]}
        />
      </group>
      <group name="Chiar_D_Body" position={[0, 220.604, 104.608]} scale={6.351}>
        <mesh
          name="Chiar_D_BodyPIV"
          castShadow
          receiveShadow
          geometry={nodes.Chiar_D_BodyPIV.geometry}
          material={fabricMtl}
          position={[0, -89.409, -16.472]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("gltf/Chair_D.glb");
