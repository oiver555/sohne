import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Lamp(props) {
  const { nodes, materials } = useGLTF("./gltf/Lamp.glb");
  const [ shadeTex] = useTexture([
    "/textures/livingroom/Living_Room_3_Shaded__Lamp_Shade_Outter_Lamp_Shade_OutterShape_rmanDefaultBakeDisplay.png",
    ]);


    shadeTex.flipY = false;
  const lamp = new THREE.MeshPhysicalMaterial({
    color: "#ffd700", // Gold color
    envMapIntensity: 0.5,
    metalness: 1,
    clearcoat: 1,
    clearcoatRoughness: 0,
    reflectivity: 0,
    iridescence: .2,
    roughness: 0.5, // Adjust the roughness for a realistic appearance
  });
  const shade = new THREE.MeshStandardMaterial({
    color: "tan", // Gold color
    lightMap: shadeTex,
    envMapIntensity: 0.5,
    metalness: 0, 
    roughness: 0.5, // Adjust the roughness for a realistic appearance
  });

  return (
    <group {...props} dispose={null}>
      <group position={[-59.203, 97.878, -121.981]}>
        <mesh
          geometry={nodes.Lamp_BasePIV.geometry}
          material={lamp}
          position={[59.203, -97.878, 121.981]}
        />
      </group>
      <group position={[-36.332, 143.831, -121.947]}>
        <mesh
          geometry={nodes.Lamp_Shade_OutterPIV.geometry}
          material={shade}
          position={[36.332, -143.831, 121.947]}
        />
      </group>
    </group>
  );
}

// useGLTF.preload("./gltf/Lamp.glb");
