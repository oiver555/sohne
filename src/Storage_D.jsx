import React, { useContext, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { StorageContext } from "./ExpContext";
import { animated } from "@react-spring/three";

export default function Storage_D(props) {
  const { nodes, materials } = useGLTF("./gltf/Storage_D.glb");
  const { storageDRef, storageRotation } = useContext(StorageContext);

  return (
    <animated.group
      position={[30, 0, 21]}
      rotation={[Math.PI / 2, 0, -1.8]}
      scale={3.3}
      visible={false}
      ref={storageDRef}
      {...props}
      dispose={null}
    >
      <animated.group
        rotation-z={storageRotation.rotate.to((value) => value * -1)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface1.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface10.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface11.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface12.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface13.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface14.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface15.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface16.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface17.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface18.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface19.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface2.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface20.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface21.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface22.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface23.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface24.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface3.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface4.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface5.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface6.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface7.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface8.geometry}
          material={materials.blinn1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface9.geometry}
          material={materials.blinn1}
        />
      </animated.group>
    </animated.group>
  );
}

useGLTF.preload("./gltf/Storage_D.glb");
