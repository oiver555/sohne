import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Lamp(props) {
  const { nodes, materials } = useGLTF("./gltf/Lamp.glb");
  const [
    shade,
    leg,
    shadeOutter,
    shadeInner,
    shadeBracket,
    bolts,
    hinge,
    shadeTrim3,
    shadeTrim4,
    base,
    shadeTrim1,
    joint,
    shadeTrim2,
  ] = useTexture([
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Shade_Inner_Lamp_Shade_InnerShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Leg_Lamp_LegShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Shade_Outter_Lamp_Shade_OutterShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Shade_Inner_Lamp_Shade_InnerShape_rmanDefaultBakeDisplay.png",
    
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Shade_Bracket_Lamp_Shade_BracketShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Bolts_Lamp_BoltsShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Shade_Hinge_Lamp_Shade_HingeShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Shade_Trim_3_Lamp_Shade_Trim_3Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Shade_Trim_4_Lamp_Shade_Trim_4Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Base_Lamp_BaseShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Shade_Trim_1_Lamp_Shade_Trim_1Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Joint_Lamp_JointShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Lamp_Shade_Trim_2_Lamp_Shade_Trim_2Shape_rmanDefaultBakeDisplay.png",    
  ]);

  shade.flipY = false
  leg.flipY = false
  shadeOutter.flipY = false
  shadeInner.flipY = false
  shadeBracket.flipY = false
  bolts.flipY = false
  hinge.flipY = false
  shadeTrim3.flipY = false
  shadeTrim4.flipY = false
  base.flipY = false
  shadeTrim1.flipY = false
  joint.flipY = false
  shadeTrim2.flipY = false

  const shadeMat = new THREE.MeshStandardMaterial({
    lightMap: shade,
  });
  const legMat = new THREE.MeshStandardMaterial({
    lightMap: leg,
  });
  const shadeOutterMat = new THREE.MeshStandardMaterial({
    lightMap: shadeOutter,
  });
  const shadeInnerMat = new THREE.MeshStandardMaterial({
    lightMap: shadeInner,
  });
  const shadeBracketMat = new THREE.MeshStandardMaterial({
    lightMap: shadeBracket,
  });
  const boltsMat = new THREE.MeshStandardMaterial({
    lightMap: bolts,
  });
  const hingeMat = new THREE.MeshStandardMaterial({
    lightMap: hinge,
  });
  const shadeTrim3Mat = new THREE.MeshStandardMaterial({
    lightMap: shadeTrim3,
  });
  const shadeTrim4Mat = new THREE.MeshStandardMaterial({
    lightMap: shadeTrim4,
  });
  const baseMat = new THREE.MeshStandardMaterial({
    lightMap: base,
  });
  const shadeTrim1Mat = new THREE.MeshStandardMaterial({
    lightMap: shadeTrim1,
  });
  const shadeTrim2Mat = new THREE.MeshStandardMaterial({
    lightMap: shadeTrim2,
  });
  const jointMat = new THREE.MeshStandardMaterial({
    lightMap: joint,
  });

  return (
    <group {...props} dispose={null}>
      <group position={[-36.222, 149.749, -122.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_Shade_Trim_4PIV.geometry}
          material={shadeTrim4Mat}
          position={[36.222, -149.749, 122.005]}
        />
      </group>
      <group position={[-36.422, 172.109, -122.005]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_Shade_Trim_3PIV.geometry}
          material={shadeTrim3Mat}
          position={[36.422, -172.109, 122.005]}
        />
      </group>
      <group position={[-36.33, 162.897, -122.006]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_Shade_Trim_2PIV.geometry}
          material={shadeTrim2Mat}
          position={[36.33, -162.897, 122.006]}
        />
      </group>
      <group position={[-36.773, 162.922, -121.914]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_Shade_Trim_1PIV.geometry}
          material={shadeTrim1Mat}
          position={[36.773, -162.922, 121.914]}
        />
      </group>
      <group position={[-36.332, 143.831, -121.947]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_Shade_OutterPIV.geometry}
          material={shadeOutterMat}
          position={[36.332, -143.831, 121.947]}
        />
      </group>
      <group position={[-36.282, 144.127, -122.109]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_Shade_InnerPIV.geometry}
          material={shadeInnerMat}
          position={[36.282, -144.127, 122.109]}
        />
      </group>
      <group position={[-36.25, 166.581, -121.888]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_Shade_HingePIV.geometry}
          material={hingeMat}
          position={[36.25, -166.581, 121.888]}
        />
      </group>
      <group position={[-70.577, 166.157, -143.398]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_Shade_BracketPIV.geometry}
          material={shadeBracketMat}
          position={[70.577, -166.157, 143.398]}
        />
      </group>
      <group position={[-87.733, 88.842, -121.946]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_LegPIV.geometry}
          material={legMat}
          position={[87.733, -88.842, 121.946]}
        />
      </group>
      <group position={[-102.918, 84.926, -122.39]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_JointPIV.geometry}
          material={jointMat}
          position={[102.918, -84.926, 122.39]}
        />
      </group>
      <group position={[-94.497, 48.678, -121.829]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_BoltsPIV.geometry}
          material={boltsMat}
          position={[94.497, -48.678, 121.829]}
        />
      </group>
      <group position={[-85.926, 11.228, -122.217]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lamp_BasePIV.geometry}
          material={baseMat}
          position={[85.926, -11.228, 122.217]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/Lamp.glb");
