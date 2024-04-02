/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Sofa_B(props) {
  const { nodes, materials } = useGLTF("./gltf/Sofa_B.glb");
  const objRef = useRef();

  const [
    SofaBFabricBump,
    SofaBFabricDiffuseGray,
    SofaBFabricFoldsDisp,
    SofaBFabricNRM,
    SofaBPillowFabricDiffuse,
    SofaBPillowFabricNRM,
    SofaBPlaidFabricBump,
    SofaBPlaidFabricDiffuse,
  ] = useTexture(
   [ "./textures/Sofa_B_Fabric_Bump.jpg",
    "./textures/Sofa_B_Fabric_Diffuse_Gray.jpg",
    "./textures/Sofa_B_Fabric_Folds_Disp.jpg",
    "./textures/Sofa_B_Fabric_NRM.jpg",
    "./textures/Sofa_B_Pillow_Fabric_Diffuse.jpg",
    "./textures/Sofa_B_Pillow_Fabric_NRM.jpg",
    "./textures/Sofa_B_Plaid_Fabric_Bump.jpg",
    "./textures/Sofa_B_Plaid_Fabric_Diffuse.jpg"]
  );

  const metalLegs = new THREE.MeshStandardMaterial({
    color: "rgb(150,100,100)",
    metalness: 0.2,
    // roughness: 1,
    envMapIntensity: 0.2,
  });

  SofaBPlaidFabricDiffuse.wrapS = THREE.RepeatWrapping;
  SofaBPlaidFabricDiffuse.wrapT = THREE.RepeatWrapping;
  // SofaBPlaidFabricDiffuse.repeat.set(2,2)
  SofaBPlaidFabricDiffuse.flipY = false;

  const sofaMtl = new THREE.MeshStandardMaterial({
    map: SofaBFabricDiffuseGray,
    normalMap: SofaBFabricNRM,
    fog: true,
    toneMapped: true,
    envMapIntensity: 0.1,
    bumpMap: SofaBFabricBump,
    displacementMap: SofaBFabricFoldsDisp,
    displacementScale: 1,
  });

  const pillowMtl = new THREE.MeshStandardMaterial({
    map: SofaBPillowFabricDiffuse,
    normalMap: SofaBPillowFabricNRM,
    envMapIntensity: 0.2,
    bumpMap: SofaBPlaidFabricBump,
  });
  const blanketMtl = new THREE.MeshStandardMaterial({
    map: SofaBPlaidFabricDiffuse,
    normalMap: SofaBPillowFabricNRM,
    envMapIntensity: 0.2,
    bumpMap: SofaBPlaidFabricBump,
  });
  const tealMtl = new THREE.MeshStandardMaterial({
    color: "orange",

    envMapIntensity: 0.2,
  });

  return (
    <group
      ref={objRef}
      name="Sofa_B_grp"
      position={[19.8, 1.9, 14]}
      rotation={[-Math.PI / 2, 0, 1.7]}
      scale={0.007}
    >
      <mesh
        name="Sofa_B_Back"
        castShadow
        receiveShadow
        geometry={nodes.Sofa_B_Back.geometry}
        material={sofaMtl}
      />
      <mesh
        name="Sofa_B_Blanket"
        castShadow
        receiveShadow
        geometry={nodes.Sofa_B_Blanket.geometry}
        material={blanketMtl}
        position={[-224.212, -113.579, 171.523]}
      />
      <mesh
        name="Sofa_B_Cushion_1"
        castShadow
        receiveShadow
        geometry={nodes.Sofa_B_Cushion_1.geometry}
        material={sofaMtl}
      />
      <mesh
        name="Sofa_B_Cushion_2"
        castShadow
        receiveShadow
        geometry={nodes.Sofa_B_Cushion_2.geometry}
        material={pillowMtl}
        position={[93.411, -103.985, 344.24]}
      />
      <mesh
        name="Sofa_B_Cushion_3"
        castShadow
        receiveShadow
        geometry={nodes.Sofa_B_Cushion_3.geometry}
        material={pillowMtl}
        position={[93.411, -103.985, 344.24]}
      />
      <mesh
        name="Sofa_B_Cushion_4"
        castShadow
        receiveShadow
        geometry={nodes.Sofa_B_Cushion_4.geometry}
        material={sofaMtl}
      />
      <mesh
        name="Sofa_B_Cushion_5"
        castShadow
        receiveShadow
        geometry={nodes.Sofa_B_Cushion_5.geometry}
        material={sofaMtl}
      />
      <mesh
        name="Sofa_B_Leg"
        castShadow
        receiveShadow
        geometry={nodes.Sofa_B_Leg.geometry}
        material={metalLegs}
        position={[358.824, -363.529, -219.025]}
      />
      <mesh
        name="Sofa_B_Side"
        castShadow
        receiveShadow
        geometry={nodes.Sofa_B_Side.geometry}
        material={sofaMtl}
      />
      <mesh
        name="Sofa_B_Strap_1"
        castShadow
        receiveShadow
        geometry={nodes.Sofa_B_Strap_1.geometry}
        material={sofaMtl}
      />
      <mesh
        name="Sofa_B_Strap_2"
        castShadow
        receiveShadow
        geometry={nodes.Sofa_B_Strap_2.geometry}
        material={sofaMtl}
      />
      <mesh
        name="Sofa_B_Strap_3"
        castShadow
        receiveShadow
        geometry={nodes.Sofa_B_Strap_3.geometry}
        material={sofaMtl}
      />
      <group
        name="Sofa_B_Trim"
        position={[-25.933, 28.081, 225.195]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={10}
      >
        <mesh
          name="Sofa_B_TrimPIV"
          castShadow
          receiveShadow
          geometry={nodes.Sofa_B_TrimPIV.geometry}
          material={tealMtl}
          position={[-6.445, -48.728, -1.833]}
        />
      </group>
    </group>
  );
}

// useGLTF.preload("gltf/Sofa_B.glb");
