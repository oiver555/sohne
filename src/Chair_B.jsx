import React, { useContext, useEffect,  useState } from "react";
import { useGLTF, useTexture, Outlines } from "@react-three/drei"; 
import * as THREE from "three";
import { animated, useSpring } from "@react-spring/three";
import { ChairsContext, GlobalStateContext } from "./ExpContext";
 import { useGesture } from "react-use-gesture";

export default function Chair_B(props) {
  console.log("[Chair.B.js]");
  const { nodes } = useGLTF("./gltf/Chair_B.glb");
  const { chairBRef, chairRotation } = useContext(ChairsContext);
  const [state, setState] = useState({
    baseHovered: false,
    baseClicked: false,
    cushionHovered: false,
    cushionClicked: false,
  }); 
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

  const woodMat = new THREE.MeshPhysicalMaterial({
    map:
      currBaseTexture === "/textures/The Reader armchair-b_diffuse.jpg"
        ? wood_00_diff
        : currBaseTexture === "/textures/red.jpg"
        ? red
        : currBaseTexture === "/textures/cyan.jpg"
        ? cyan
        : wood_00_diff,
    normalMap: wood_00_norm,
    roughnessMap: wood_00_spec,
    roughness: 0.7,
    metalness: 0.2,
    envMapIntensity: 0.2,
    bumpMap: wood_00_disp,
  });
  const fabricMat = new THREE.MeshStandardMaterial({
    map:
      currCushionTexture1 === "/textures/The Reader armchair_diffuse.jpg"
        ? fabric_00_diff
        : currCushionTexture1 === "/textures/polka_dot.jpg"
        ? polkaDot
        : fabric_00_diff,
    roughnessMap: fabric_00_spec,
    displacementMap: fabric_00_disp,
    displacementScale: 0,
    normalMap: fabric_00_nor,
    normalScale: new THREE.Vector2(1.0, 1.0),
    bumpMap: fabric_00_disp,
    bumpScale: 10,
    envMapIntensity: 0.4,
  });

  const [spring, setSpring] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));
  const bind = useGesture({
    onDrag: ({ offset: [x] }) => (chairBRef.current.rotation.y = x * 0.01),
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
      {...spring}
      {...bind()}
    >
      <group rotation={[0, 1.4, 0]}>
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
            setState({...state, cushionClicked: true});
            event.stopPropagation();
          }}
          onPointerOver={(event) => {
            if (state.baseHovered) return

            setState({...state, cushionHovered: true});

            event.stopPropagation();
          }}
          onPointerOut={(event) => {
            setState({...state, cushionHovered: false});
            event.stopPropagation();
          }}
        >
          <Outlines
            angle={0}
            thickness={state.cushionHovered || state.cushionClicked ? 1.1 : 0}
            color={state.cushionClicked ? "yellow" : "white"}
          />
        </mesh>

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
            setState({...state, baseClicked: true});            
            event.stopPropagation();
          }}
          onPointerOver={(event) => {
            if (state.cushionHovered) return
            setState({...state, baseHovered: true});
            event.stopPropagation();
          }}
          onPointerOut={(event) => {
            setState({...state, baseHovered: false});
            event.stopPropagation();
          }}
        >
            <Outlines
            angle={0}
            thickness={state.baseHovered || state.baseClicked ? 1.1 : 0}
            color={state.baseClicked ? "yellow" : "white"}
          />
         
        </mesh>
      </group>
    </animated.group>
  );
}
