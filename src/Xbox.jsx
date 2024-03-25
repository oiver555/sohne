import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Xbox(props) {
  const { nodes, materials } = useGLTF("./gltf/Xbox.glb");
  const [xbox] = useTexture([
    "/textures/livingroom/Living_Room_3_Shaded__Xbox1_Xbox1Shape_rmanDefaultBakeDisplay.png",
  ]);

  xbox.flipY = false;

  const xboxMat = new THREE.MeshStandardMaterial({
    map: xbox,
    envMapIntensity: .5,
    metalness: .5,
    roughness: .1
  });
  return (
    <group {...props} dispose={null}>
      <group position={[6.1, 71.054, -296.478]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Xbox1PIV.geometry}
          material={xboxMat}
          position={[-6.1, -71.054, 296.478]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/Xbox.glb");