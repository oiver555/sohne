import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Can(props) {
  const { nodes, materials } = useGLTF("./gltf/CanSoda.glb");
  const [can] = useTexture([
    "/textures/livingroom/Living_Room_3_Shaded__CanSoda_CanSodaShape_rmanDefaultBakeDisplay.png",
  ]);

  can.flipY = false;

  const canMat = new THREE.MeshStandardMaterial({
    map: can,
    metalness: 1,
    envMapIntensity: 0.2,
  });
  return (
    <group {...props} dispose={null}>
      <group position={[52.766, 53.045, -201.756]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CanSodaPIV.geometry}
          material={canMat}
          position={[-52.766, -53.045, 201.756]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/CanSoda.glb");
