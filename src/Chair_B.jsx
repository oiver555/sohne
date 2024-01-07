/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Chair_B(props) {
  const { nodes, materials } = useGLTF("./gltf/Chair_B.glb");

  const objRef = useRef();

  const textureLoader = new THREE.TextureLoader();
  const fabric_00_diff = textureLoader.load(
    "/textures/The Reader armchair_diffuse.jpg"
  );
  const fabric_00_disp = textureLoader.load(
    "/textures/The Reader armchair_height.jpg"
  );
  const fabric_00_nor = textureLoader.load(
    "/textures/The Reader armchair_normal.jpg"
  );
  const fabric_00_spec = textureLoader.load(
    "/textures/The Reader armchair_glossiness.jpg"
  );
  const wood_00_spec = textureLoader.load(
    "/textures/The Reader armchair-b_glossiness.jpg"
  );
  const wood_00_disp = textureLoader.load(
    "/textures/The Reader armchair-b_height.jpg"
  );

  const wood_00_diff = textureLoader.load(
    "/textures/The Reader armchair-b_diffuse.jpg"
  );
  const wood_00_norm = textureLoader.load(
    "/textures/The Reader armchair-b_normal.jpg"
  );

  wood_00_diff.flipY = false;
  // wood_00_diff.colorSpace = THREE.SRGBColorSpace;

 
  wood_00_norm.flipY = false;

  wood_00_spec.flipY = false;

  wood_00_disp.flipY = false;

 

  fabric_00_diff.flipY = true;
  fabric_00_diff.flipY = true;
  fabric_00_diff.flipY = false;

  fabric_00_spec.flipY = true;
  fabric_00_spec.flipY = true;
  fabric_00_spec.flipY = false;

  fabric_00_disp.flipY = true;
  fabric_00_disp.flipY = true;
  fabric_00_disp.flipY = false;

  fabric_00_nor.flipY = true;
  fabric_00_nor.flipY = true;
  fabric_00_nor.flipY = false;

  const woodMat = new THREE.MeshStandardMaterial({
    map: wood_00_diff,
    normalMap: wood_00_norm,
    roughnessMap: wood_00_spec,
    roughness: .7,
    metalness: .2,
    specular: 0,
    shininess:0,
    envMapIntensity:.2,

    // normalScale: new THREE.Vector2( 10.0  , 10.0   ),
    bumpMap: wood_00_disp,
    // bumpScale: 100.0,
  });

  const fabricMat = new THREE.MeshStandardMaterial({
    map: fabric_00_diff,
    roughnessMap: fabric_00_spec,
    displacementMap: fabric_00_disp,
    displacementScale: 0,
    normalMap: fabric_00_nor,
    normalScale: new THREE.Vector2(1.0, 1.0),
    bumpMap: fabric_00_disp,
    bumpScale: 10,
    envMapIntensity:.4,

  });

  useFrame(() => {
    // objRef.current.rotation.y += 0.01
  });

  return (
    <group
      ref={objRef}
      name="Chair_B_grp"
      position={[19.8, 0, 14]}
      rotation={[0, 1.7, 0]}
      scale={0.104}
    >
      <mesh
        name="Chair_B_Cushion"
        castShadow
        receiveShadow
        geometry={nodes.Chair_B_Cushion.geometry}
        material={fabricMat}
      />
      <mesh
        name="Chair_B_Wood"
        castShadow
        receiveShadow
        geometry={nodes.Chair_B_Wood.geometry}
        material={woodMat}
      />
    </group>
  );
}

useGLTF.preload("gltf/Chair_B.glb");
