import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useGLTF, useTexture, Outlines } from "@react-three/drei";
import * as THREE from "three";
import { animated, useSpring } from "@react-spring/three";
import { ChairsContext, GlobalStateContext } from "./ExpContext";
import { useDrag } from "react-use-gesture";
import gsap from "gsap";

export const Chair_A = React.forwardRef((props, ref) => {
  console.log("Chair_A");
  const { nodes } = useGLTF("./gltf/Chair_A.gltf");
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [wood_rough, Chair_A_AO, wood1, wood_norm, ply_diff, wood2] =
    useTexture([
      "/textures/dark_wood_rough_2k.jpg",
      "/textures/Chair_A.jpg",
      "/textures/dark_wood_diff_2k.jpg",
      "/textures/dark_wood_nor_gl_2k.jpg",
      "/textures/wood_diff_1.jpg",
      "/textures/wood_diff_2.jpg",
    ]);
  const { chairARef, chairRotation, chairsVis } = useContext(ChairsContext);
  const test = useRef();
  const [spring, setSpring] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { friction: 0 },
  }));
  const bind = useDrag(({ offset: [ox, oy], down }) => {
    if (!clicked) return;
    setSpring.start({
      rotation: [0, (ox + oy) * 0.01, 0],
      immediate: down,
    });
  });
  const { currChair, setobjConfig, currBaseTexture } =
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

  const deSelect = () => {
    setClicked(false);
  };
  useImperativeHandle(ref, () => {
    return { deSelect };
  });

  return (
    <animated.group
      {...props}
      castShadow
      ref={chairARef}
      name="Chair_A_grp"
      position={[20, -0.2, 14]}
      rotation={[0, 0, 0]}
      rotation-y={chairRotation.rotate}
      scale={0.056}
      dispose={null}
    >
      <animated.group {...spring} {...bind()}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Chair_A.geometry}
          material={woodMat1}
          position={[-1.118, 0, -1.352]}
          onClick={() => {
            // const tl = gsap.timeline();

            // // Add animations to the timeline
            // tl.to("#three-content", { flex: 1, duration: 1 }, 0); // 0 delay
            // tl.to("#html-content", { flex: 0, duration: 1 }, 0); // 0 delay

            

            setClicked(true);
          }}
          onPointerOver={(event) => {
            setHovered(true);
            event.stopPropagation();
          }}
          onPointerOut={(event) => {
            setHovered(false);
            event.stopPropagation();
          }}
        >
          {(hovered || clicked) && (
            <Outlines
              angle={0}
              thickness={hovered || clicked ? 1 : 0}
              color={clicked ? "yellow" : "white"}
              opacity={0}
            />
          )}
        </mesh>
      </animated.group>
    </animated.group>
  );
});
useGLTF.preload("gltf/Chair_A.gltf");
