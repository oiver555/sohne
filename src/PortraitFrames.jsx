
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function PortraitFrames(props) {
  const { nodes, materials } = useGLTF("./gltf/Portrait_Frames.glb");
  const [frames, images] = useTexture([
    "/textures/livingroom/Living_Room_3_Shaded__Portrait_Frames_Portrait_FramesShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_3_Shaded__Portrait_Pictures_Portrait_PicturesShape_rmanDefaultBakeDisplay.png",
  
   ]);

   frames.flipY = false;
   images.flipY = false; 

   
  const glassMat = new THREE.MeshStandardMaterial({ 
    color: 0xffffff, // Color of the glass
    opacity: 0.1,    // Opacity (transparency) of the glass (0 = fully transparent, 1 = fully opaque)
    transparent: true, // Enable transparency
    metalness: 0,     // Metalness of the material (0 for non-metallic surfaces)
    roughness: 0.1,   // Roughness of the material (0 for perfectly smooth)
    side: THREE.DoubleSide, // Ensure both sides of the mesh are rendered    
    envMapIntensity:1,
    

  });
  
  const frameMat = new THREE.MeshStandardMaterial({
    map: frames,
    envMapIntensity:0 
  });
   
  const picturesMat = new THREE.MeshStandardMaterial({
    map: images,
    envMapIntensity:0 
  });


  return (
    <group {...props} dispose={null}>
    <mesh geometry={nodes.Portrait_Pictures.geometry} material={picturesMat} />
    <mesh geometry={nodes.Portrait_Frames.geometry} material={frameMat} />
    <mesh geometry={nodes.Portrait_Glasses.geometry} material={glassMat} />
  </group>
  );
}

// useGLTF.preload("./gltf/Portrait_Frames.glb");