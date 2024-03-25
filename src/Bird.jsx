
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Bird(props) {
  const { nodes, materials } = useGLTF("./gltf/Bird.glb");
  const [bird] = useTexture([
    "/textures/livingroom/Living_Room_3_Shaded__Bird_BirdShape_rmanDefaultBakeDisplay.png",
  ]);

  bird.flipY = false;

  const birdMat = new THREE.MeshPhysicalMaterial({

    color: '#ffd700', // Gold color
    envMapIntensity:.5,
    metalness: .8,
    clearcoat: 1,
    clearcoatRoughness: 0,
   reflectivity: .8,
   transmission: 1,
specularColor: "red",
   specularIntensity: 20,


iridescence: 2,
    roughness: 0.2, // Adjust the roughness for a realistic appearance
 
  });
  return (
    <group {...props} dispose={null}>
      <group position={[-62.604, 67.206, -306.571]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BirdPIV.geometry}
          material={birdMat}
          position={[62.604, -67.206, 306.571]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/Bird.glb");