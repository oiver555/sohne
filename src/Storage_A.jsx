import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { animated, useSpring } from "@react-spring/three";
import { useDrag, useGesture } from "react-use-gesture";
import { GlobalStateContext, StorageContext } from "./ExpContext";
import {
  EffectComposer,
  Outline,
  Selection,
  Select,
} from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

export const Storage_A = React.forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("./gltf/Storage_A.gltf");
  const { storageARef, storageRotation } = useContext(StorageContext);
  const [
    mahBase,
    mahDoor,
    oakBase,
    oakDoor,
    walBase,
    walDoor,
    roughBase,
    roughDoor,
    aoDoor,
    aoBase,
  ] = useTexture([
    "/textures/Albedo_Mahogany_Storage_A_Base_mtl.png",
    "/textures/Albedo_Mahogany_Storage_A_Door_mtl.png",
    "/textures/Albedo_Oak_Storage_A_Base_mtl.png",
    "/textures/Albedo_Oak_Storage_A_Door_mtl.png",
    "/textures/Albedo_Walnut_Storage_A_Base_mtl.png",
    "/textures/Albedo_Walnut_Storage_A_Door_mtl.png",
    "/textures/AO_Storage_A_Base_mtl.png",
    "/textures/AO_Storage_A_Door_mtl.png",
    "/textures/Rough_Mahogany_Storage_A_Base_mtl.png",
    "/textures/Rough_Mahogany_Storage_A_Door_mtl.png",
    "/textures/Rough_Oak_Storage_A_Base_mtl.png",
    "/textures/Rough_Oak_Storage_A_Door_mtl.png",
    "/textures/Rough_Walnut_Storage_A_Base_mtl.png",
    "/textures/Rough_Walnut_Storage_A_Door_mtl.png",
    "/textures/AO_Storage_A_Door_mtl.png",
    "/textures/AO_Storage_A_Base_mtl.png",
  ]);

  mahBase.flipY = false;
  mahDoor.flipY = false;
  oakBase.flipY = false;
  oakDoor.flipY = false;
  walBase.flipY = false;
  walDoor.flipY = false;
  roughBase.flipY = false;
  roughDoor.flipY = false;
  aoDoor.flipY = false;
  aoBase.flipY = false;

  const doorMtl = new THREE.MeshStandardMaterial({
    map: mahDoor,
    aoMap: aoDoor,
    roughness: 0.2,
    roughnessMap: roughDoor,
    aoMapIntensity: 1,
  });
  const baseMtl = new THREE.MeshStandardMaterial({
    map: mahBase,
    aoMap: aoDoor,
    roughness: 0.2,
    roughnessMap: roughDoor,
    aoMapIntensity: 1,
  });

  const storageDoorRef = useRef();
  const [hovered, setHovered] = useState({
    base: false,
    door: false,
  });
  const [clicked, setClicked] = useState({
    base: false,
    door: false,
  });
  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));
  const [, frameApi] = useSpring(() => ({ x: 0, y: 0 }));

  const bindBase = useDrag(({ down, offset: [mx] }) => {
    if (!clicked.base) return;
    frameApi.start({
      x: down ? (storageARef.current.rotation.y = mx * 0.01) : 0,
      immediate: down,
    });
  });
  const bindDoor = useDrag(({ down, offset: [mx] }) => {
     if (mx > 150 || mx < 0 || !clicked.door) return;
    frameApi.start({
      x: down ? (storageDoorRef.current.position.x = mx * 0.4) : 0,
      immediate: down,
    });
  });
  const { currChair, setobjConfig, currBaseTexture } =
    useContext(GlobalStateContext);
  const deSelect = () => {
    console.log("[Storage_A.jsx] deselect()");
    setClicked({
      base: false,
      door: false,
    });
    setHovered({
      base: false,
      door: false,
    });
  };

  useImperativeHandle(ref, () => {
    return { deSelect };
  });

  return (
    <animated.group
      ref={storageARef}
      {...spring}
      {...bindBase()}
      {...props}
      scale={0.083}
      position={[19.8, 0, 14]}
      rotation-y={storageRotation.rotate}
      dispose={null}
    >
      <group rotation={[0, Math.PI / 2, 0]}>
        <Selection>
          <EffectComposer multisampling={8} autoClear={false}>
            <Outline
              blur
              kernelSize={KernelSize.VERY_SMALL}
              resolutionScale={0}
              visibleEdgeColor={"white"}
              edgeStrength={
                Object.values(clicked).some((value) => value) ? 0 : 2
              }
              width={ 500 }
            />
            <Outline
              blur
              kernelSize={KernelSize.VERY_SMALL}
              resolutionScale={0}
              visibleEdgeColor={"yellow"}
              edgeStrength={
                Object.values(clicked).some((value) => value) ? 2 : 0
              }
              width={500}
            />
            <Select enabled={hovered.base || clicked.base}>
              <animated.group>
                <mesh
                  castShadow
                  receiveShadow
                  onClick={(e) => {
                    console.log("fgghs", clicked);
                    setClicked({
                      base: true,
                      door: false,
                    });
                    setHovered({
                      base: false,
                      door: false,
                    });
                    e.stopPropagation();
                  }}
                  onPointerEnter={(e) => {
                    console.log("entered", hovered);

                    if (Object.values(clicked).some((value) => value)) return;
                    setHovered({
                      base: true,
                      door: false,
                    });
                    e.stopPropagation();
                  }}
                  onPointerOver={(e) => {
                    if (Object.values(clicked).some((value) => value)) return;
                    setHovered({
                      base: true,
                      door: false,
                    });
                    e.stopPropagation();
                  }}
                  onPointerLeave={(e) => {
                    if (Object.values(clicked).some((value) => value)) return;
                    setHovered({
                      base: false,
                      door: false,
                    });
                    e.stopPropagation();
                  }}
                  geometry={nodes.Storage_A_Base.geometry}
                  material={baseMtl}
                />
              </animated.group>

              <Select enabled={hovered.door || clicked.door}>
                <animated.group ref={storageDoorRef} {...bindDoor()}>
                  <mesh
                    castShadow
                    receiveShadow
                    onClick={(e) => {
                      setClicked({
                        base: false,
                        door: true,
                      });
                      setHovered({
                        base: false,
                        door: false,
                      });
                      e.stopPropagation();
                    }}
                    onPointerEnter={(e) => {
                      console.log(hovered, clicked);
                      if (Object.values(clicked).some((value) => value)) return;
                      setHovered({
                        base: false,
                        door: true,
                      });
                      e.stopPropagation();
                    }}
                    onPointerOver={(e) => {
                      console.log(hovered, clicked);
                      if (Object.values(clicked).some((value) => value)) return;
                      setHovered({
                        base: false,
                        door: true,
                      });
                      e.stopPropagation();
                    }}
                    onPointerLeave={(e) => {
                      if (Object.values(clicked).some((value) => value)) return;
                      setHovered({
                        base: false,
                        door: false,
                      });
                      e.stopPropagation();
                    }}
                    geometry={nodes.Storage_A_Door.geometry}
                    material={doorMtl}
                  />
                </animated.group>
              </Select>
            </Select>
          </EffectComposer>
        </Selection>
      </group>
    </animated.group>
  );
});
