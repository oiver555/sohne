/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useContext, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { ChairsContext } from "./ExpContext";
import { animated } from "@react-spring/three";

export default function Chair_C(props) {
  const { nodes } = useGLTF("./gltf/Chair_C.glb");

  const [chairdiffuse, chairglossiness, chairnormalmap] = useTexture([ "./textures/chair_diffuse.jpg", "./textures/chair_glossiness.jpg", "./textures/chair_normal_map.jpg"]);
  chairdiffuse.flipY = false;
  const { chairCRef, chairRotation } = useContext(ChairsContext);

  const woodMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: chairdiffuse,
        roughnessMap: chairglossiness,
        roughness: 0.5,
        envMapIntensity: 0.2,

        normalMap: chairnormalmap,
        normalScale: new THREE.Vector2(1.0, 1.0),
      }),
    []
  );

  return (
    <animated.group
      ref={chairCRef}
      name="Chair_C_grp"
      position={[19.8, 0, 14]}
      rotation={[0, 0, -Math.PI]}
      rotation-y={chairRotation.rotate}
      scale={[0.161, -0.161, 0.161]}
      visible={false}
    >
      <mesh
        name="Chair_CPIV"
        castShadow
        receiveShadow
        geometry={nodes.Chair_CPIV.geometry}
        material={woodMat}
        position={[0, 0, 0]}
      />
    </animated.group>
  );
}

useGLTF.preload("gltf/Chair_C.glb");
