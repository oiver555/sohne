import React, { useContext, useEffect, useMemo, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { animated, useSpring } from "@react-spring/three";
import { ChairsContext, GlobalStateContext } from "./ExpContext";
import { useGesture } from "react-use-gesture";
import {
  EffectComposer,
  Outline,
  Selection,
  Select,
} from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

export default function Chair_A_1(props) {
  const { nodes } = useMemo(() => useGLTF("./gltf/Chair_A.glb"));
  const [hovered, setHovered] = useState(null);
  const [wood_rough, Chair_A_AO, wood1, wood_norm, ply_diff, wood2] =
    useTexture([
      "/textures/dark_wood_rough_2k.jpg",
      "/textures/Chair_A.jpg",
      "/textures/dark_wood_diff_2k.jpg",
      "/textures/dark_wood_nor_gl_2k.jpg",
      "/textures/wood_diff_1.jpg",
      "/textures/wood_diff_2.jpg",
    ]);
  const { chairARef, chairRotation } = useContext(ChairsContext);
  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));
  const bind = useGesture({
    onDrag: ({ offset: [x] }) => (chairARef.current.rotation.y = x * 0.01),
  });
  const { currChair, setobjConfig, currObjMaterialRef, currBaseTexture } =
    useContext(GlobalStateContext);

  Chair_A_AO.flipY = false;
  wood2.wrapS = THREE.RepeatWrapping;
  wood2.wrapT = THREE.RepeatWrapping;
  wood2.repeat.set(20, 20);
  wood2.flipY = true;
  wood2.colorSpace = THREE.SRGBColorSpace;
  ply_diff.wrapS = THREE.RepeatWrapping;
  ply_diff.wrapT = THREE.RepeatWrapping;
  ply_diff.repeat.set(10, 10);
  ply_diff.flipY = true;
  ply_diff.colorSpace = THREE.SRGBColorSpace;
  wood1.wrapS = THREE.RepeatWrapping;
  wood1.wrapT = THREE.RepeatWrapping;
  wood1.repeat.set(10, 10);
  wood1.flipY = true;
  wood_norm.wrapS = THREE.RepeatWrapping;
  wood_norm.wrapT = THREE.RepeatWrapping;
  wood_norm.repeat.set(10, 10);
  wood_norm.flipY = true;
  wood_rough.wrapS = THREE.RepeatWrapping;
  wood_rough.wrapT = THREE.RepeatWrapping;
  wood_rough.repeat.set(10, 10);
  wood_rough.flipY = true;
  const woodMat1 = new THREE.MeshStandardMaterial({
    map:
      currBaseTexture === "/textures/dark_wood_diff_2k.jpg"
        ? wood1
        : currBaseTexture === "/textures/wood_diff_2.jpg"
        ? wood2
        : ply_diff,
    aoMap: Chair_A_AO,
    aoMapIntensity: 1,
    normalMap: wood_norm,
    roughnessMap: wood_rough,
    roughness: 0.9,
    colorWrite: true,
    dithering: true,
    fog: true,
    normalScale: new THREE.Vector2(0.8, 0.8),
    envMapIntensity: 0.2,
  });

  useEffect(() => {
    if (currChair === "a") {
      setobjConfig({
        baseTextures: [
          "/textures/dark_wood_diff_2k.jpg",
          "/textures/wood_diff_1.jpg",
          "/textures/wood_diff_2.jpg",
        ],
        cushionTextures: [],
      });
    }
  }, [currChair]);

  return (
    <animated.group
      {...spring}
      {...bind()}
      castShadow
      ref={chairARef}
      name="Chair_A_grp"
      position={[20, -0.2, 14]}
      rotation={[0, 0, 0]}
      rotation-y={chairRotation.rotate}
      scale={0.056}
    >
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            kernelSize={KernelSize.VERY_SMALL}
            resolutionScale={0}
            visibleEdgeColor="white"
            edgeStrength={2}
            width={500}
          />
          <Select enabled={hovered}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chair_APIV.geometry}
              material={woodMat1}
              position={[-1.118, 0, -1.352]}
              onPointerOver={() => {
                console.log("Chair A");
                if (hovered || chairARef.current.visible === false) return;
                setHovered(true);
              }}
              onPointerOut={() => {
                setHovered(false);
              }}
            />
          </Select>
        </EffectComposer>
      </Selection>
    </animated.group>
  );
}

useGLTF.preload("gltf/Chair_A.glb");
