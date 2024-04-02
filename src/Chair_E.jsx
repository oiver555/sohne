import React, { useContext, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { animated, useSpring } from "@react-spring/three";
import { useGesture } from "react-use-gesture";
import { ChairsContext } from "./ExpContext";
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
} from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

export function Chair_E(props) {
  console.log("[Chair_E.js]");
  const { nodes } = useGLTF("./gltf/Chair_E.glb");
  const { chairERef, chairRotation } = useContext(ChairsContext);
  const [
    ChairEbackbackShape,
    ChairEconnectorconnectorShape,
    ChairEcushioncushionShape,
    ChairElegslegsShape,
    ChairEstoppersstoppersShape,
    MKSmartMaterialVol13Wood10BC,
    MKSmartMaterialVol13Wood10N,
    MKSmartMaterialVol13Wood10R,
    Elsafabricd,
    wood01,
  ] = useTexture([
    "/textures/Chair_E_back_backShape_rmanDefaultBakeDisplay.jpg",
    "/textures/Chair_E_connector_connectorShape_rmanDefaultBakeDisplay.jpg",
    "/textures/Chair_E_cushion_cushionShape_rmanDefaultBakeDisplay.jpg",
    "/textures/Chair_E_legs_legsShape_rmanDefaultBakeDisplay.jpg",
    "/textures/Chair_E_stoppers_stoppersShape_rmanDefaultBakeDisplay.jpg",
    "/textures/MK_SmartMaterial_Vol13_Wood_10_BC.jpg",
    "/textures/MK_SmartMaterial_Vol13_Wood_10_N.jpg",
    "/textures/MK_SmartMaterial_Vol13_Wood_10_R.jpg",
    "/textures/Elsa_fabric_d.jpg",
    "/textures/wood_01.jpg",
  ]);
  const [hovered, setHovered] = useState({
    base: false,
    cushion: false,
  });

  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));
  const bind = useGesture({
    onDrag: ({ offset: [x] }) => (chairERef.current.rotation.y = x * 0.01),
  });

  Elsafabricd.wrapS = THREE.RepeatWrapping;
  Elsafabricd.wrapT = THREE.RepeatWrapping;
  Elsafabricd.repeat.set(3, 3);

  MKSmartMaterialVol13Wood10BC.flipY = false;
  MKSmartMaterialVol13Wood10N.flipY = false;
  MKSmartMaterialVol13Wood10R.flipY = false;
  MKSmartMaterialVol13Wood10BC.wrapS = THREE.RepeatWrapping;
  MKSmartMaterialVol13Wood10BC.wrapT = THREE.RepeatWrapping;
  MKSmartMaterialVol13Wood10BC.repeat.set(5, 5);
  MKSmartMaterialVol13Wood10N.wrapS = THREE.RepeatWrapping;
  MKSmartMaterialVol13Wood10N.wrapT = THREE.RepeatWrapping;
  MKSmartMaterialVol13Wood10N.repeat.set(5, 5);
  MKSmartMaterialVol13Wood10R.wrapS = THREE.RepeatWrapping;
  MKSmartMaterialVol13Wood10R.wrapT = THREE.RepeatWrapping;
  MKSmartMaterialVol13Wood10R.repeat.set(5, 5);

  ChairEbackbackShape.flipY = false;
  ChairEconnectorconnectorShape.flipY = false;
  ChairEcushioncushionShape.flipY = false;
  ChairElegslegsShape.flipY = false;
  ChairEstoppersstoppersShape.flipY = false;
  wood01.wrapS = THREE.RepeatWrapping;
  wood01.wrapT = THREE.RepeatWrapping;
  wood01.repeat.set(5, 5);

  const cushion = new THREE.MeshStandardMaterial({
    color: "teal",
    bumpMap: Elsafabricd,
    bumpScale: 20,
    roughnessMap: Elsafabricd,
    roughness: 0.9,

    aoMap: ChairEcushioncushionShape,
    aoMapIntensity: 1,
    envMapIntensity: 0.2,
  });

  const legs = new THREE.MeshPhysicalMaterial({
    map: MKSmartMaterialVol13Wood10BC,
    roughnessMap: MKSmartMaterialVol13Wood10R,
    roughness: 0.5,
    aoMap: ChairElegslegsShape,
    reflectivity: 0.2,
    specularIntensity: 0.3,
    aoMapIntensity: 1,
    envMapIntensity: 0.2,
  });

  const stoppers = new THREE.MeshPhysicalMaterial({
    color: "silver",
    roughness: 0,
    aoMap: ChairEstoppersstoppersShape,
    reflectivity: 10,
    specularIntensity: 0.3,
    aoMapIntensity: 1,
    envMapIntensity: 0.2,
  });

  const back = new THREE.MeshPhysicalMaterial({
    map: MKSmartMaterialVol13Wood10BC,
    roughnessMap: MKSmartMaterialVol13Wood10R,
    roughness: 0.5,
    normalMap: MKSmartMaterialVol13Wood10N,
    normalScale: new THREE.Vector2(1, 1),
    reflectivity: 0.2,
    specularIntensity: 0.3,
    aoMap: ChairEbackbackShape,
    aoMapIntensity: 1,
    envMapIntensity: 0.2,
    side: THREE.DoubleSide,
  });
  const connector = new THREE.MeshPhysicalMaterial({
    map: MKSmartMaterialVol13Wood10BC,
    roughnessMap: MKSmartMaterialVol13Wood10R,
    roughness: 0.5,
    normalMap: MKSmartMaterialVol13Wood10N,
    normalScale: new THREE.Vector2(1, 1),
    reflectivity: 0.2,
    specularIntensity: 0.3,
    aoMap: ChairEconnectorconnectorShape,
    aoMapIntensity: 1,
    envMapIntensity: 0.2,
  });

  return (
    <animated.group
      position={[19, 3.2, 14]}
      scale={8}
      rotation={[0, 10, 0]}
      ref={chairERef}
      rotation-y={chairRotation.rotate}
      name="Chair_E_grp"
      {...spring}
      {...bind()}
    >
      <group rotation={[0, 1.5, 0]} position={[0, -0.391, 0]}>
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
            <Select enabled={hovered.base}>
              <group position={[-0.008, 0.55, -0.023]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.backPIV.geometry}
                  material={back}
                  position={[0.008, -0.55, 0.023]}
                  onPointerOver={(event) => {
                    setHovered({
                      base: true,
                      cushion: false,
                    });
                    event.stopPropagation();
                  }}
                  onPointerOut={(event) => {
                    setHovered({
                      base: false,
                      cushion: false,
                    });
                    event.stopPropagation();
                  }}
                />
              </group>

              <group position={[-0.006, 0.226, -0.012]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.connectorPIV.geometry}
                  material={connector}
                  position={[0.006, -0.226, 0.012]}
                  onPointerOver={(event) => {
                    setHovered({
                      base: true,
                      cushion: false,
                    });
                    event.stopPropagation();
                  }}
                  onPointerOut={(event) => {
                    setHovered({
                      base: false,
                      cushion: false,
                    });
                    event.stopPropagation();
                  }}
                />
              </group>

              <group position={[-0.006, 0.108, -0.012]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.legsPIV.geometry}
                  material={legs}
                  position={[0.006, -0.108, 0.012]}
                  onPointerOver={(event) => {
                    setHovered({
                      base: true,
                      cushion: false,
                    });
                    event.stopPropagation();
                  }}
                  onPointerOut={(event) => {
                    setHovered({
                      base: false,
                      cushion: false,
                    });
                    event.stopPropagation();
                  }}
                />
              </group>
            </Select>
            <Select enabled={hovered.cushion}>
              <group position={[0, 0.654, 0.007]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.cushionPIV.geometry}
                  material={cushion}
                  position={[0, -0.654, -0.007]}
                  onPointerOver={(event) => {
                    setHovered({
                      base: false,
                      cushion: true,
                    });
                    event.stopPropagation();
                  }}
                  onPointerOut={(event) => {
                    setHovered({
                      base: false,
                      cushion: false,
                    });
                    event.stopPropagation();
                  }}
                />
              </group>
            </Select> 
              <group position={[-0.006, 0.005, -0.012]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.stoppersPIV.geometry}
                  material={stoppers}
                  position={[0.006, -0.005, 0.012]}
                  onPointerOver={(event) => {
                    setHovered({
                      legs: false,
                      connector: false,
                      cushion: false,
                      back: false,
                      stoppers: true,
                    });
                    event.stopPropagation();
                  }}
                  onPointerOut={(event) => {
                    setHovered({
                      legs: false,
                      connector: false,
                      cushion: false,
                      back: false,
                      stoppers: false,
                    });
                    event.stopPropagation();
                  }}
                />
              </group>
            
          </EffectComposer>
        </Selection>
      </group>
    </animated.group>
  );
}

 