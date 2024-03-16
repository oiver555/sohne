
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function BeoPlay(props) {
  const { nodes, materials } = useGLTF("/gltf/BeoPlay.glb");
  const [front1,  strap, button3, frame1, button5, front2, button1, button2, back, frame2 ] = useTexture([
    "/textures/livingroom/Living_Room_2_Shaded__BeoPlay_Front_1_BeoPlay_Front_1Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__BeoPlay_Strap_1_BeoPlay_Strap_Shape1_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__BeoPlay_Button_3_BeoPlay_Button_Shape3_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__BeoPlay_Frame_1_BeoPlay_Frame_1Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__BeoPlay_Button_5_BeoPlay_Button_Shape5_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__BeoPlay_Front_2_BeoPlay_Front_Shape2_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__BeoPlay_Button_1_BeoPlay_Button_Shape1_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__BeoPlay_Button_2_BeoPlay_Button_Shape2_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__BeoPlay_Back_BeoPlay_BackShape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__BeoPlay_Frame_2_BeoPlay_Frame_Shape2_rmanDefaultBakeDisplay.png",
  ]);

  front1.flipY = false;
  front2.flipY = false;
  back.flipY = false;
  strap.flipY = false;
  button1.flipY = false;
  button2.flipY = false;
  button3.flipY = false;
  button5.flipY = false;
  frame1.flipY = false;
  frame2.flipY = false;

  const front1Mat = new THREE.MeshStandardMaterial({
    lightMap: front1,
    
  });
  const front2Mat = new THREE.MeshStandardMaterial({
    lightMap: front2,
  });
  const backMat = new THREE.MeshStandardMaterial({
    lightMap: back,
  });
  const strapMat = new THREE.MeshStandardMaterial({
    lightMap: strap,
  });
  const button1Mat = new THREE.MeshStandardMaterial({
    lightMap: button1,
  });
  const button2Mat = new THREE.MeshStandardMaterial({
    lightMap: button2,
  });
  const button3Mat = new THREE.MeshStandardMaterial({
    lightMap: button3,
  });
  const button5Mat = new THREE.MeshStandardMaterial({
    lightMap: button5,
  });
  const frame1Mat = new THREE.MeshStandardMaterial({
    lightMap: frame1,
  });
  const frame2Mat = new THREE.MeshStandardMaterial({
    lightMap: frame2,
  });
  return (
    <group {...props} dispose={null}>
      <group position={[32.675, 57.541, -48.453]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BeoPlay_Strap_1PIV.geometry}
          material={strapMat}
          position={[-32.675, -57.541, 48.453]}
        />
      </group>
      <group position={[32.675, 57.541, -48.453]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BeoPlay_Front_2PIV.geometry}
          material={front2Mat}
          position={[-32.675, -57.541, 48.453]}
        />
      </group>
      <group position={[32.675, 57.541, -48.453]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BeoPlay_Front_1PIV.geometry}
          material={front1Mat}
          position={[-32.675, -57.541, 48.453]}
        />
      </group>
      <group position={[32.675, 57.541, -48.453]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BeoPlay_Frame_2PIV.geometry}
          material={frame2Mat}
          position={[-32.675, -57.541, 48.453]}
        />
      </group>
      <group position={[32.675, 57.541, -48.453]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BeoPlay_Frame_1PIV.geometry}
          material={frame1Mat}
          position={[-32.675, -57.541, 48.453]}
        />
      </group>
      <group position={[32.675, 57.541, -48.453]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BeoPlay_Button_5PIV.geometry}
          material={button5Mat}
          position={[-32.675, -57.541, 48.453]}
        />
      </group>
      <group position={[32.675, 57.541, -48.453]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BeoPlay_Button_3PIV.geometry}
          material={button3Mat}
          position={[-32.675, -57.541, 48.453]}
        />
      </group>
      <group position={[32.675, 57.541, -48.453]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BeoPlay_Button_2PIV.geometry}
          material={button2Mat}
          position={[-32.675, -57.541, 48.453]}
        />
      </group>
      <group position={[32.675, 57.541, -48.453]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BeoPlay_Button_1PIV.geometry}
          material={button1Mat}
          position={[-32.675, -57.541, 48.453]}
        />
      </group>
      <group position={[32.675, 57.541, -48.453]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BeoPlay_BackPIV.geometry}
          material={backMat}
          position={[-32.675, -57.541, 48.453]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/BeoPlay.glb");

 