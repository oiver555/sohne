 
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
 
export default function Sofa_D(props) {
  const { nodes, materials } = useGLTF("./gltf/Sofa_D.glb");
  const textureLoader = new THREE.TextureLoader();
  const sofftexturedivanNormal = textureLoader.load(
    "/textures/sofftexture_divan_Normal.png"
  );
  const sofftexturedivanRoughness = textureLoader.load(
    "/textures/sofftexture_divan_Roughness.png"
  );

  const sofftexturedivanBaseColor = textureLoader.load(
    "/textures/sofftexture_divan_BaseColor.png"
  );
  const kitchenwooddiff2k = textureLoader.load(
    "./textures/kitchen_wood_diff_2k.jpg"
  );
  const kitchenwoodnorgl2k = textureLoader.load(
    "./textures/kitchen_wood_nor_gl_2k.jpg"
  );
  const kitchenwoodrough2k = textureLoader.load(
    "./textures/kitchen_wood_rough_2k.jpg"
  );

  kitchenwooddiff2k.wrapS = THREE.RepeatWrapping;
  kitchenwooddiff2k.wrapT = THREE.RepeatWrapping;
  kitchenwooddiff2k.repeat.set(5, 5);
  kitchenwooddiff2k.colorSpace = THREE.SRGBColorSpace;

  sofftexturedivanBaseColor.flipY = false;
  sofftexturedivanNormal.flipY = false;

  const sofaMtl = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0.0, 0.6, 1),
    map: sofftexturedivanBaseColor,
    normalMap: sofftexturedivanNormal,
    normalMapType: THREE.TangentSpaceNormalMap,
    normalScale: new THREE.Vector2(0.4, 0.4),
    sheen: 0.2,
    sheenColor: new THREE.Color(1, 1, 1),
    attenuationColor: new THREE.Color(1, 0, 0),
    attenuationDistance: 1,
    sheenRoughnessMap: sofftexturedivanRoughness,
    metalness: 0.4,
    metalnessMap: sofftexturedivanRoughness,
    envMapIntensity: 0.2,
  });
  const woodMtl = new THREE.MeshPhysicalMaterial({
    map: kitchenwooddiff2k,
    normalMap: kitchenwoodnorgl2k,
    normalMapType: THREE.TangentSpaceNormalMap,
    normalScale: new THREE.Vector2(0.4, 0.4),
    sheen: 0.2,
    sheenColor: new THREE.Color(1, 1, 1),
    attenuationColor: new THREE.Color(1, 0, 0),
    attenuationDistance: 1,
    sheenRoughnessMap: kitchenwoodrough2k,
    metalness: 0.4,
    metalnessMap: kitchenwoodrough2k,
    envMapIntensity: 0.2,
  });

  return (
    <group {...props} dispose={null} visible={false} position={[19, 0, 14]}>
      <group position={[0.147, 5.354, 0.056]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sofa_DPIV001.geometry}
          material={sofaMtl}
          position={[-0.147, -5.354, -0.056]}
        />
      </group>
      <group position={[0, 4.18, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wood_framePIV.geometry}
          material={woodMtl}
          position={[0, -4.18, 0]}
        />
      </group>
      <group position={[-0.317, 1.05, 0.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wood_legsPIV.geometry}
          material={woodMtl}
          position={[0.317, -1.05, -0.001]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/Sofa_D.glb");
