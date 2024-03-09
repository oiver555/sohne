import React, { useContext, useEffect, useMemo, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
} from "@react-three/postprocessing";
import * as THREE from "three";
import { animated } from "@react-spring/three";
import { ChairsContext, GlobalStateContext } from "./ExpContext";
import { KernelSize } from "postprocessing";

export default function Chair_B(props) {
  const { nodes } = useMemo(() => useGLTF("./gltf/Chair_B.glb"));
  const { chairBRef, chairRotation } = useContext(ChairsContext);
  const [baseHovered, setBaseHovered] = useState(false);
  const [cushionHovered, setCushionHovered] = useState(false);
  const {
    setobjConfig,
    currChair,
    currBaseTexture,
    setCurrBaseTexture,
    setCurrCushionTexture1,
    currCushionTexture1,
  } = useContext(GlobalStateContext);
  const [
    fabric_00_diff,
    fabric_00_disp,
    fabric_00_nor,
    fabric_00_spec,
    wood_00_spec,
    wood_00_disp,
    wood_00_diff,
    wood_00_norm,
    polkaDot,
    red,
    cyan,
  ] = useTexture([
    "/textures/The Reader armchair_diffuse.jpg",
    "/textures/The Reader armchair_height.jpg",
    "/textures/The Reader armchair_normal.jpg",
    "/textures/The Reader armchair_glossiness.jpg",
    "/textures/The Reader armchair-b_glossiness.jpg",
    "/textures/The Reader armchair-b_height.jpg",
    "/textures/The Reader armchair-b_diffuse.jpg",
    "/textures/The Reader armchair-b_normal.jpg",
    "/textures/polka_dot.jpg",
    "/textures/red.jpg",
    "/textures/cyan.jpg",
  ]);

  polkaDot.wrapS = THREE.RepeatWrapping;
  polkaDot.wrapT = THREE.RepeatWrapping;
  polkaDot.repeat.set(2, 2);
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
        map:
          currBaseTexture === "/textures/The Reader armchair-b_diffuse.jpg"
            ? wood_00_diff
            : currBaseTexture === "/textures/red.jpg"
            ? red
            : cyan,
        normalMap: wood_00_norm,
        roughnessMap: wood_00_spec,
        roughness: 0.7,
        metalness: 0.2,
        envMapIntensity: 0.2,
        bumpMap: wood_00_disp,
      })
  );

  const fabricMat = new THREE.MeshStandardMaterial({
    map:
      currCushionTexture1 === "/textures/The Reader armchair_diffuse.jpg"
        ? fabric_00_diff
        : polkaDot,
    roughnessMap: fabric_00_spec,
    displacementMap: fabric_00_disp,
    displacementScale: 0,
    normalMap: fabric_00_nor,
    normalScale: new THREE.Vector2(1.0, 1.0),
    bumpMap: fabric_00_disp,
    bumpScale: 10,
    envMapIntensity: 0.4,
  });

  useEffect(() => {
    if (currChair === "b") {
      setobjConfig({
        baseTextures: [],
        cushionTextures: [
          "/textures/The Reader armchair_diffuse.jpg",
          "/textures/polka_dot.jpg",
        ],
      });
      setCurrBaseTexture("/textures/The Reader armchair-b_diffuse.jpg");
      setCurrCushionTexture1("/textures/The Reader armchair_diffuse.jpg");
    }
  }, [currChair]);

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
            <Select
              enabled={cushionHovered}
              backgroundColor="red"
              onChange={(selected) => {
                console.log(selected);
              }}
            >
              <mesh
                name="Chair_B_Cushion"
                castShadow
                receiveShadow
                geometry={nodes.Chair_B_Cushion.geometry}
                material={fabricMat}
                onClick={(event) => {
                  setobjConfig({
                    baseTextures: [],
                    cushionTextures: [
                      "/textures/The Reader armchair_diffuse.jpg",
                      "/textures/polka_dot.jpg",
                    ],
                  });
                  event.stopPropagation();
                }}
                onPointerMove={(event) => {
                  if (cushionHovered) return;
                  setCushionHovered(true);
                  event.stopPropagation();
                }}
                onPointerOut={() => setCushionHovered(false)}
              />
            </Select>
            <Select
              enabled={baseHovered}
             
            >
              <mesh
                name="Chair_B_Wood"
                castShadow
                receiveShadow
                geometry={nodes.Chair_B_Wood.geometry}
                material={woodMat}
                onClick={(event) => {
                  setobjConfig({
                    baseTextures: [
                      "/textures/The Reader armchair-b_diffuse.jpg",
                      "/textures/red.jpg",
                      "/textures/cyan.jpg",
                    ],
                    cushionTextures: [],
                  });
                  event.stopPropagation();
                }}
                
                onPointerMove={(event) => {
                  console.log("Chair B");
                  if (baseHovered) return;
                  setBaseHovered(true);
                  event.stopPropagation();
                }}
                onPointerOut={() => setBaseHovered(false)}
              />
            </Select>
          </EffectComposer>
        </Selection>
      </group>
    </animated.group>
  );
}

useGLTF.preload("gltf/Chair_B.glb");
