import React, { useContext, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { animated } from "@react-spring/three";
import { ChairsContext } from "./ExpContext";

export default function Chair_B(props) {
  const { nodes } = useMemo(() => useGLTF("./gltf/Chair_B.glb"));
  const { chairBRef, chairRotation } = useContext(ChairsContext);

  const [
    fabric_00_diff,
    fabric_00_disp,
    fabric_00_nor,
    fabric_00_spec,
    wood_00_spec,
    wood_00_disp,
    wood_00_diff,
    wood_00_norm,
  ] = useTexture([ "/textures/The Reader armchair_diffuse.jpg", "/textures/The Reader armchair_height.jpg", "/textures/The Reader armchair_normal.jpg", "/textures/The Reader armchair_glossiness.jpg", "/textures/The Reader armchair-b_glossiness.jpg", "/textures/The Reader armchair-b_height.jpg", "/textures/The Reader armchair-b_diffuse.jpg", "/textures/The Reader armchair-b_normal.jpg",]);

  wood_00_diff.flipY = false;
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

  const woodMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        map: wood_00_diff,
        normalMap: wood_00_norm,
        roughnessMap: wood_00_spec,
        roughness: 0.7,
        metalness: 0.2,
        envMapIntensity: 0.2,
        bumpMap: wood_00_disp,
      })
  );

  const fabricMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: fabric_00_diff,
        roughnessMap: fabric_00_spec,
        displacementMap: fabric_00_disp,
        displacementScale: 0,
        normalMap: fabric_00_nor,
        normalScale: new THREE.Vector2(1.0, 1.0),
        bumpMap: fabric_00_disp,
        bumpScale: 10,
        envMapIntensity: 0.4,
      }),
    []
  );

  return (
    <animated.group
      ref={chairBRef}
      name="Chair_B_grp"
      position={[19.8, 0, 14]}
      rotation-y={chairRotation.rotate}
      scale={0.104}
      visible={false}
    >
      <group rotation={[0, 1.4, 0]}>
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
    </animated.group>
  );
}

useGLTF.preload("gltf/Chair_B.glb");
