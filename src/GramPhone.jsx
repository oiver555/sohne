import React, { useRef } from "react";
import {
  useGLTF,
  useTexture,
  CubeCamera,
  Reflector,
  MeshReflectorMaterial,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";

export function GramPhone(props) {
  const { nodes, materials } = useGLTF("./gltf/GramPhone.glb");
  const [gramPhone, gramPhoneBox] = useTexture([
    "/textures/livingroom/Living_Room_3_Shaded__GramPhone_GramPhoneShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_3_Shaded__GramPhoneBox_GramPhoneBoxShape_rmanDefaultBakeDisplay.png",
  ]);
  const envTexture = useLoader(
    RGBELoader,
    "/textures/photo_studio_loft_hall_1k.hdr"
  );

  gramPhone.flipY = false;
  gramPhoneBox.flipY = false;

  const gramPhoneMat =  new THREE.MeshStandardMaterial({
    lightMap: gramPhone,
    metalness: 1,
    color: '#ffd700', // Gold color
    roughness: 0.4, // Adjust the roughness for a realistic appearance
    envMapIntensity: 1,
  });
  const gramPhoneBoxMat = new THREE.MeshStandardMaterial({
    map: gramPhoneBox,
    envMapIntensity:0

  });

  return (
    <group {...props} dispose={null}>
     
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GramPhoneBox.geometry}
        material={gramPhoneBoxMat}
        position={[120.914, 58.012, -41.805]}
        rotation={[0, 0.59, 0]}
        scale={[6.118, 4.547, 12.398]}
      />
      <group position={[120.921, 55.703, -41.95]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GramPhonePIV.geometry}
          material={gramPhoneMat}
          position={[-120.921, -55.703, 41.95]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/GramPhone.glb");
