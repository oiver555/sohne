import React, { useContext, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { animated } from "@react-spring/three";
import { ChairsContext } from "./ExpContext";

export default function Chair_A_1(props) {
  const { nodes } = useMemo(() => useGLTF("./gltf/Chair_A.glb"));
  const [wood_rough, Chair_A_AO, wood, wood_norm] = useTexture([ "/textures/dark_wood_rough_2k.jpg", "/textures/Chair_A.jpg", "/textures/dark_wood_diff_2k.jpg", "/textures/dark_wood_nor_gl_2k.jpg"]);
  const { chairARef, chairRotation } = useContext(ChairsContext);

  Chair_A_AO.flipY = false;
  wood.wrapS = THREE.RepeatWrapping;
  wood.wrapT = THREE.RepeatWrapping;
  wood.repeat.set(10, 10);
  wood.flipY = true;
  wood_norm.wrapS = THREE.RepeatWrapping;
  wood_norm.wrapT = THREE.RepeatWrapping;
  wood_norm.repeat.set(10, 10);
  wood_norm.flipY = true;
  wood_rough.wrapS = THREE.RepeatWrapping;
  wood_rough.wrapT = THREE.RepeatWrapping;
  wood_rough.repeat.set(10, 10);
  wood_rough.flipY = true;

  const woodMat1 = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: wood,
        aoMap: Chair_A_AO,
        aoMapIntensity: 1,
        normalMap: wood_norm,
        roughnessMap: wood_rough,
        roughness: 0.9,
        colorWrite: true,
        dithering: true,
        flatShading: true,
        fog: true,
        normalScale: new THREE.Vector2(0.8, 0.8),
        envMapIntensity: 0.2,
      }),
    []
  );

  return (
    <animated.group
      castShadow
      ref={chairARef}
      name="Chair_A_grp"
      position={[20, -0.2, 14]}
      rotation={[0, 0, 0]}
      rotation-y={chairRotation.rotate}
      scale={0.056}
    >
      <animated.mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair_APIV.geometry}
        material={woodMat1}
        position={[-1.118, 0, -1.352]}
      />
    </animated.group>
  );
}

useGLTF.preload("gltf/Chair_A.glb");
