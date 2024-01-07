/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { MeshReflectorMaterial, Reflector, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Storage_C(props) {
  const { nodes, materials } = useGLTF("./gltf/Storage_C.glb");
  const objRef = useRef();
  const textureLoader = new THREE.TextureLoader();
  const kitchenenv = textureLoader.load("./textures/kitchen_env.jpg");
  const Wood027basecolor = textureLoader.load(
    "./textures/Wood_027_basecolor.jpg"
  );
  const Wood027normal = textureLoader.load("./textures/Wood_027_normal.jpg");
  const Wood027ambientOcclusion = textureLoader.load(
    "/textures/Wood_027_ambientOcclusion.jpg"
  );
  const MetalSteelBrushed001ambientOcclusion = textureLoader.load(
    "/textures/Metal_Steel_Brushed_001_ambientOcclusion.jpg"
  );
  const MetalSteelBrushed001diffuse = textureLoader.load(
    "/textures/Metal_Steel_Brushed_001_diffuse.jpg"
  );

  const MetalSteelBrushed001height = textureLoader.load(
    "/textures/Metal_Steel_Brushed_001_height.png"
  );
  const MetalSteelBrushed001metallic = textureLoader.load(
    "/textures/Metal_Steel_Brushed_001_metallic.jpg"
  );
  const MetalSteelBrushed001normal = textureLoader.load(
    "/textures/Metal_Steel_Brushed_001_normal.jpg"
  );
  MetalSteelBrushed001normal.rotation = 90;
  const MetalSteelBrushed001roughness = textureLoader.load(
    "/textures/Metal_Steel_Brushed_001_roughness.jpg"
  );

  MetalSteelBrushed001diffuse.wrapS = THREE.RepeatWrapping;
  MetalSteelBrushed001diffuse.wrapT = THREE.RepeatWrapping;
  MetalSteelBrushed001diffuse.repeat.set(10, 10);
  MetalSteelBrushed001normal.wrapS = THREE.RepeatWrapping;
  MetalSteelBrushed001normal.wrapT = THREE.RepeatWrapping;
  MetalSteelBrushed001normal.repeat.set(5, 5);
  MetalSteelBrushed001diffuse.rotation = 90;
  MetalSteelBrushed001metallic.rotation = 90;

  const CALACATTABORGHIN = textureLoader.load(
    "/textures/CALACATTA BORGHIN.jpg"
  );
  const silverMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xc0c0c0, // Silver color
    metalness: 0.5, // Fully metallic
    roughness: 0.3,
    envMapIntensity: 0.1,
    clearcoat: 0.2,
  });
  const tintedGlass = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0.05, 0.05, 0.05), // Silver color
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9,
  });

  const blackMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0.05, 0.05, 0.05), // Silver color
    metalness: 0.5, // Fully metallic
    roughness: 0.3,
    clearcoat: 0.2,
    reflectivity: 1,
    specularIntensity: 1,
    envMapIntensity: 0.1,
  });

  CALACATTABORGHIN.colorSpace = THREE.SRGBColorSpace;
  const woodMtl = new THREE.MeshPhysicalMaterial({
    // color: new THREE.Color(1, 1, 1),
    aoMap: Wood027ambientOcclusion,
    aoMapIntensity: 1,
    specularIntensity: 0.5,
    side: THREE.DoubleSide,
    normalMap: Wood027normal,
    normalMapType: THREE.TangentSpaceNormalMap,
    normalScale: new THREE.Vector2(0.2, 0.2),
    envMapIntensity: 0.1,
  });

  const marbleMtl = new THREE.MeshPhysicalMaterial({
    map: CALACATTABORGHIN,
    envMap: { kitchenenv },
    side: THREE.DoubleSide,
    specularIntensity: 1,
    reflectivity: 0.7,
    clearcoat: 0.1,
    envMapIntensity: 0.1,
  });
  const redMtl = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(1, 0, 0),
  });

  // Create a brushed steel material
  const brushedSteelMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(2, 2, 2), // Base color of the steel
    map: MetalSteelBrushed001diffuse,
    metalness: 0.4, // Fully metallic
    metalnessMap: MetalSteelBrushed001metallic,
    normalScale: new THREE.Vector2(2, 2),
    normalMap: MetalSteelBrushed001normal,
    roughnessMap: MetalSteelBrushed001roughness,
    roughness: 0.8, // Adjust the roughness for a brushed appearance
    side: THREE.DoubleSide,
    envMapIntensity: 0.1,
  });

  useFrame(() => {
    // objRef.current.rotation.y += 0.001;
  });
  return (
    <group ref={objRef} {...props} dispose={null}>
      <group position={[25, 0, 16]} rotation={[Math.PI / 2, 0, -1.8]} scale={0.03}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Body.geometry}
          material={woodMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Bottom.geometry}
          material={woodMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Drawer.geometry}
          material={woodMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Drawer_Frames.geometry}
          material={woodMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Handle.geometry}
          material={silverMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Hot_Plate_Frame.geometry}
          material={silverMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Hotplate.geometry}
        >
          <MeshReflectorMaterial
            envMap={kitchenenv}
            color={new THREE.Color(0.05, 0.05, 0.05)}
            blur={[0, 0]} // Blur ground reflections (width, height), 0 skips blur
            mixBlur={0} // How much blur mixes with surface roughness (default = 1)
            mixStrength={10} // Strength of the reflections
            mixContrast={1} // Contrast of the reflections
            resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower
            mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
            depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
            minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
            maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
            depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
            // distortion={1} // Amount of distortion based on the distortionMap texture
            // distortionMap={distortionTexture} // The red channel of this texture is used as the distortion map. Default is null
            debug={0}
          />
          ;
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Hotplate_Frame_2.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Hotplate_Knob.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Oven_Bottom.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Oven_Frame.geometry}
          material={blackMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Oven_Glass.geometry}
          material={tintedGlass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Oven_Handle.geometry}
          material={woodMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Oven_Headframe.geometry}
          material={brushedSteelMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Oven_Knob_Rings.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Oven_Knobs.geometry}
          material={woodMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Pot.geometry}
          material={brushedSteelMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Pot_Bolts.geometry}
          material={brushedSteelMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Tabletop.geometry}
          material={marbleMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo_1.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo_2.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo_3.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo_4.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo_5.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo_6.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo_7.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Logo_8.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Oven_Bolt_1.geometry}
          material={silverMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Oven_Bolt_2.geometry}
          material={silverMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Oven_Bolt_3.geometry}
          material={silverMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Button_1.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Button_2.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Button_3.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Button_4.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Button_5.geometry}
          material={redMtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Storage_C_Button_6.geometry}
          material={redMtl}
        />
      </group>
    </group>
  );
}

useGLTF.preload("gltf/Storage_C.glb");
