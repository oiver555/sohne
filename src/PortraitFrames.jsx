
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function PortraitFrames(props) {
  const { nodes, materials } = useGLTF("./gltf/PortraitFrames.glb");
  const [frame2, frame3, frame4,frame5,frame6, frame7,  pictures] = useTexture([
    "/textures/livingroom/Living_Room_2_Shaded__Portrait_Frame_2_Portrait_Frame_2Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Portrait_Frame_3_Portrait_Frame_3Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Portrait_Frame_4_Portrait_Frame_4Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Portrait_Frame_5_Portrait_Frame_5Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Portrait_Frame_6_Portrait_Frame_6Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Portrait_Frame_7_Portrait_Frame_7Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Portrait_Picture_Portrait_PictureShape_rmanDefaultBakeDisplay.png",
   ]);

   frame2.flipY = false;
   frame3.flipY = false;
   frame4.flipY = false;
   frame5.flipY = false;
   frame6.flipY = false;
   frame7.flipY = false;
   pictures.flipY = false;

   
  const glassMat = new THREE.MeshStandardMaterial({ 
    color: 0xffffff, // Color of the glass
    opacity: 0.5,    // Opacity (transparency) of the glass (0 = fully transparent, 1 = fully opaque)
    transparent: true, // Enable transparency
    metalness: 0,     // Metalness of the material (0 for non-metallic surfaces)
    roughness: 0.1,   // Roughness of the material (0 for perfectly smooth)
    side: THREE.DoubleSide, // Ensure both sides of the mesh are rendered    
  });
  
  const frame2Mat = new THREE.MeshStandardMaterial({
    lightMap: frame2,
  });
  
  const frame3Mat = new THREE.MeshStandardMaterial({
    lightMap: frame3,
  });
  const frame4Mat = new THREE.MeshStandardMaterial({
    lightMap: frame4,
  });
  const frame5Mat = new THREE.MeshStandardMaterial({
    lightMap: frame5,
  });
  const frame6Mat = new THREE.MeshStandardMaterial({
    lightMap: frame6,
  });
  const frame7Mat = new THREE.MeshStandardMaterial({
    lightMap: frame7,
  });
  const picturesMat = new THREE.MeshStandardMaterial({
    lightMap: pictures,
  });


  return (
    <group {...props} dispose={null}>
      <group position={[272.694, 182.702, -136.99]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Portrait_PicturePIV.geometry}
          material={picturesMat}
          position={[-272.694, -182.702, 136.99]}
        />
      </group>
      <group position={[272.246, 182.702, -136.99]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Portrait_GlassPIV.geometry}
          material={glassMat}
          position={[-272.246, -182.702, 136.99]}
        />
      </group>
      <group position={[273.949, 166.073, -119.751]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Portrait_Frame_7PIV.geometry}
          material={frame7Mat}
          position={[-273.949, -166.073, 119.751]}
        />
      </group>
      <group position={[273.949, 166.073, -153.438]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Portrait_Frame_6PIV.geometry}
          material={frame6Mat}
          position={[-273.949, -166.073, 153.438]}
        />
      </group>
      <group position={[273.949, 199.472, -153.438]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Portrait_Frame_5PIV.geometry}
          material={frame5Mat}
          position={[-273.949, -199.472, 153.438]}
        />
      </group>
      <group position={[273.949, 199.472, -119.751]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Portrait_Frame_4PIV.geometry}
          material={frame4Mat}
          position={[-273.949, -199.472, 119.751]}
        />
      </group>
      <group position={[272.454, 182.797, -40.429]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Portrait_Frame_3PIV.geometry}
          material={frame3Mat}
          position={[-272.454, -182.797, 40.429]}
        />
      </group>
      <group position={[272.982, 182.413, -234.257]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Portrait_Frame_2PIV.geometry}
          material={frame2Mat}
          position={[-272.982, -182.413, 234.257]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/PortraitFrames.glb");