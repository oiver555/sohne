import React, { useContext, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { ExperienceContext } from "./ExpContext";

export function BKG(props) {
  const { nodes, materials } = useGLTF("./gltf/BKG_01.gltf");
  const [marble00, wall1LightMap, wall2LightMap, floorLightMap] = useTexture([
    "./textures/marble_00.jpg",
    "./textures/wall_1.jpg",
    "./textures/wall_2.jpg",
    "./textures/floor.jpg",
  ]);
  const { storageCCompRef, storageBCompRef, storageACompRef, tableACompRef } = useContext(ExperienceContext);
  wall1LightMap.flipY = false;
  wall2LightMap.flipY = false;
  floorLightMap.flipY = false;
  floorLightMap.colorSpace = THREE.SRGBColorSpace;

  const wall1 = new THREE.MeshPhysicalMaterial({
    lightMap: wall1LightMap,
    map: marble00,
    envMapIntensity: 0,
    side: THREE.DoubleSide,
  });

  const wall2 = new THREE.MeshPhysicalMaterial({
    lightMap: wall2LightMap,
    map: marble00,
    side: THREE.DoubleSide,
    envMapIntensity: 0,
  });
  const floor = new THREE.MeshPhysicalMaterial({
    map: marble00,
    // aoMap: floorLightMap,
    color: new THREE.Color("rgba(240,245,255,1)"),
    lightMap: floorLightMap,
    lightMapIntensity: 1,
    side: THREE.DoubleSide,
    envMapIntensity: 0.0,
  });

  return (
    <group
      {...props}
      dispose={null}
      onPointerDown={(e) => {
        // console.log("Background CLicked", e, e.intersections.length);
        if (e.intersections.length < 4 && storageCCompRef.current) { 
          storageCCompRef.current.deSelect();
          e.stopPropagation();
        }
        if (e.intersections.length < 4 && storageBCompRef.current) { 
          storageBCompRef.current.deSelect();
          e.stopPropagation();
        }
        if (e.intersections.length < 4 && storageACompRef.current) { 
          storageACompRef.current.deSelect();
          e.stopPropagation();
        }
        if (e.intersections.length < 4 && tableACompRef.current) { 
          tableACompRef.current.deSelect();
          e.stopPropagation();
        }
      }}
    >
      <group position={[-5.427, 0.082, -21.46]}>
        <group position={[0, 0, 9.789]} scale={[442.959, 72.322, 442.959]}>
          <mesh
            geometry={nodes.FloorPIV.geometry}
            material={floor}
            position={[0, 0.5, 0]}
          />
        </group>
        <group
          position={[-36.161, 36.161, 9.789]}
          scale={[72.322, 72.322, 72.322]}
        >
          <mesh
            geometry={nodes.Wall_1PIV.geometry}
            material={wall1}
            position={[0.5, 0, 0]}
            scale={[1, 5, 1]}
          />
        </group>
        <mesh
          castShadow
          geometry={nodes.Wall_2.geometry}
          material={wall2}
          position={[0, 15.507, -6.894]}
          scale={[2.365, 33.869, 28.96]}
        />
        <mesh
          receiveShadow
          rotation={[Math.PI * -0.5, Math.PI * 0.0, Math.PI * 0]}
          position={[20, 0.01, 35]}
          scale={[50, 50, 1]}
        >
          <planeGeometry />
          <shadowMaterial opacity={0.04} />
        </mesh>
      </group>
    </group>
  );
}

// useGLTF.preload("./gltf/BKG_01.gltf");
