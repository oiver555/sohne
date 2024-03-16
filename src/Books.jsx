import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";


export function Books(props) {
  const { nodes, materials } = useGLTF("./gltf/Books.glb");
  const [book1,book2,book4,book5,book6,book7,book8,book9,book10,book11,book12,book13,book14,book15,book16,book17,book18,book19,book20,book21,book22,book23,book24,book25,book26,book27,book28,book29,book30,book31,book32,book33,book34,] = useTexture([
    "/textures/livingroom/Living_Room_2_Shaded__Book_1_Book_Shape1_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_2_Book_Shape2_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_4_Book_Shape4_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_5_Book_Shape5_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_6_Book_Shape6_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_7_Book_Shape7_rmanDefaultBakeDisplay.png", 
    "/textures/livingroom/Living_Room_2_Shaded__Book_8_Book_Shape8_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_9_Book_Shape9_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_10_Book_Shape10_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_11_Book_Shape11_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_12_Book_Shape12_rmanDefaultBakeDisplay.png", 
    "/textures/livingroom/Living_Room_2_Shaded__Book_13_Book_Shape13_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_14_Book_Shape14_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_15_Book_Shape15_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_16_Book_Shape16_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_17_Book_Shape17_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_18_Book_Shape18_rmanDefaultBakeDisplay.png", 
    "/textures/livingroom/Living_Room_2_Shaded__Book_19_Book_Shape19_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_20_Book_Shape20_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_21_Book_Shape21_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_22_Book_Shape22_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_23_Book_Shape23_rmanDefaultBakeDisplay.png", 
    "/textures/livingroom/Living_Room_2_Shaded__Book_24_Book_Shape24_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_26_Book_Shape26_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_25_Book_Shape25_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_27_Book_Shape27_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_28_Book_28Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_29_Book_29Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_30_Book_30Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_31_Book_31Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_32_Book_32Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_33_Book_33Shape_rmanDefaultBakeDisplay.png",
    "/textures/livingroom/Living_Room_2_Shaded__Book_34_Book_34Shape_rmanDefaultBakeDisplay.png",
   ]);

  book1.flipY = false;
  book2.flipY = false;
  book4.flipY = false;
  book5.flipY = false;
  book6.flipY = false;
  book7.flipY = false;
  book8.flipY = false;
  book9.flipY = false;
  book10.flipY = false;
  book11.flipY = false;
  book12.flipY = false;
  book13.flipY = false;
  book14.flipY = false;
  book15.flipY = false;
  book16.flipY = false;
  book17.flipY = false;
  book18.flipY = false;
  book19.flipY = false;
  book20.flipY = false;
  book21.flipY = false;
  book22.flipY = false;
  book23.flipY = false;
  book24.flipY = false;
  book25.flipY = false;
  book26.flipY = false;
  book27.flipY = false;
  book28.flipY = false;
  book29.flipY = false;
  book30.flipY = false;
  book31.flipY = false;
  book32.flipY = false;
  book33.flipY = false;
  book34.flipY = false;

  const book1Mat = new THREE.MeshStandardMaterial({
    lightMap: book1,
  });
  const book2Mat = new THREE.MeshStandardMaterial({
    lightMap: book2,
  });
 
  const book4Mat = new THREE.MeshStandardMaterial({
    lightMap: book4,
  });
  const book5Mat = new THREE.MeshStandardMaterial({
    lightMap: book5,
  });
  const book6Mat = new THREE.MeshStandardMaterial({
    lightMap: book6,
  });
  const book7Mat = new THREE.MeshStandardMaterial({
    lightMap: book7,
  });
  const book8Mat = new THREE.MeshStandardMaterial({
    lightMap: book8,
  });
  const book9Mat = new THREE.MeshStandardMaterial({
    lightMap: book9,
  });
  const book10Mat = new THREE.MeshStandardMaterial({
    lightMap: book10,
  });
  const book11Mat = new THREE.MeshStandardMaterial({
    lightMap: book11,
  });
  const book12Mat = new THREE.MeshStandardMaterial({
    lightMap: book12,
  });
  const book13Mat = new THREE.MeshStandardMaterial({
    lightMap: book13,
  });
  const book14Mat = new THREE.MeshStandardMaterial({
    lightMap: book14,
  });
  const book15Mat = new THREE.MeshStandardMaterial({
    lightMap: book15,
  });
  const book16Mat = new THREE.MeshStandardMaterial({
    lightMap: book16,
  });
  const book17Mat = new THREE.MeshStandardMaterial({
    lightMap: book17,
  });
  const book18Mat = new THREE.MeshStandardMaterial({
    lightMap: book18,
  });
  const book19Mat = new THREE.MeshStandardMaterial({
    lightMap: book19,
  });
  const book20Mat = new THREE.MeshStandardMaterial({
    lightMap: book20,
  });
  const book21Mat = new THREE.MeshStandardMaterial({
    lightMap: book21,
  });
  const book22Mat = new THREE.MeshStandardMaterial({
    lightMap: book22,
  });
  const book23Mat = new THREE.MeshStandardMaterial({
    lightMap: book23,
  });
  const book24Mat = new THREE.MeshStandardMaterial({
    lightMap: book24,
  });
  const book25Mat = new THREE.MeshStandardMaterial({
    lightMap: book25,
  });
  const book26Mat = new THREE.MeshStandardMaterial({
    lightMap: book26,
  });
  const book27Mat = new THREE.MeshStandardMaterial({
    lightMap: book27,
  });
  const book28Mat = new THREE.MeshStandardMaterial({
    lightMap: book28,
  });
  const book29Mat = new THREE.MeshStandardMaterial({
    lightMap: book29,
  });
  const book30Mat = new THREE.MeshStandardMaterial({
    lightMap: book30,
  });
  const book31Mat = new THREE.MeshStandardMaterial({
    lightMap: book31,
  });
  const book32Mat = new THREE.MeshStandardMaterial({
    lightMap: book32,
  });
  const book33Mat = new THREE.MeshStandardMaterial({
    lightMap: book33,
  });
  const book34Mat = new THREE.MeshStandardMaterial({
    lightMap: book34,
  });
  return (
    <group {...props} dispose={null}>
      <group position={[16.024, 243.672, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_9PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-16.024, -243.672, 317.687]}
        />
      </group>
      <group position={[17.503, 243.672, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_8PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-17.503, -243.672, 317.687]}
        />
      </group>
      <group position={[19.016, 245.36, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_7PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-19.016, -245.36, 317.687]}
        />
      </group>
      <group position={[20.541, 238.464, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_6PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-20.541, -238.464, 317.687]}
        />
      </group>
      <group position={[22.477, 243.55, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_5PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-22.477, -243.55, 317.687]}
        />
      </group>
      <group position={[24.269, 243.55, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_4PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-24.269, -243.55, 317.687]}
        />
      </group>
      <group position={[77.732, 56.406, -219.224]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_32PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-77.732, -56.406, 219.224]}
        />
      </group>
      <group position={[70.55, 60.057, -216.671]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_31PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-70.55, -60.057, 216.671]}
        />
      </group>
      <group position={[-79.711, 10.867, -118.375]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_30PIV.geometry}
          material={materials["lambert1.034"]}
          position={[79.711, -10.867, 118.375]}
        />
      </group>
      <group position={[25.922, 243.55, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_3PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-25.922, -243.55, 317.687]}
        />
      </group>
      <group position={[-73.709, 10.931, -117.532]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_29PIV.geometry}
          material={materials["lambert1.034"]}
          position={[73.709, -10.931, 117.532]}
        />
      </group>
      <group position={[78.43, 63.466, -220.096]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_28PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-78.43, -63.466, 220.096]}
        />
      </group>
      <group position={[68.433, 66.434, -215.041]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_27PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-68.433, -66.434, 215.041]}
        />
      </group>
      <group position={[86.461, 53.835, -192.948]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_26PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-86.461, -53.835, 192.948]}
        />
      </group>
      <group position={[-15.6, 242.834, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_25PIV.geometry}
          material={materials["lambert1.034"]}
          position={[15.6, -242.834, 317.687]}
        />
      </group>
      <group position={[-12.337, 243.099, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_24PIV.geometry}
          material={materials["lambert1.034"]}
          position={[12.337, -243.099, 317.687]}
        />
      </group>
      <group position={[-9.119, 238.594, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_23PIV.geometry}
          material={materials["lambert1.034"]}
          position={[9.119, -238.594, 317.687]}
        />
      </group>
      <group position={[-6.685, 243.212, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_22PIV.geometry}
          material={materials["lambert1.034"]}
          position={[6.685, -243.212, 317.687]}
        />
      </group>
      <group position={[-4.834, 233.358, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_21PIV.geometry}
          material={materials["lambert1.034"]}
          position={[4.834, -233.358, 317.687]}
        />
      </group>
      <group position={[-2.778, 243.403, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_20PIV.geometry}
          material={materials["lambert1.034"]}
          position={[2.778, -243.403, 317.687]}
        />
      </group>
      <group position={[27.338, 243.55, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_2PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-27.338, -243.55, 317.687]}
        />
      </group>
      <group position={[-0.694, 241.165, -318.92]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_19PIV.geometry}
          material={materials["lambert1.034"]}
          position={[0.694, -241.165, 318.92]}
        />
      </group>
      <group position={[2.385, 240.092, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_18PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-2.385, -240.092, 317.687]}
        />
      </group>
      <group position={[3.949, 243.364, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_17PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-3.949, -243.364, 317.687]}
        />
      </group>
      <group position={[5.21, 243.204, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_16PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-5.21, -243.204, 317.687]}
        />
      </group>
      <group position={[6.358, 243.07, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_15PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-6.358, -243.07, 317.687]}
        />
      </group>
      <group position={[7.788, 243.17, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_14PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-7.788, -243.17, 317.687]}
        />
      </group>
      <group position={[9.393, 246.088, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_13PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-9.393, -246.088, 317.687]}
        />
      </group>
      <group position={[10.65, 246.088, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_12PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-10.65, -246.088, 317.687]}
        />
      </group>
      <group position={[12.583, 246.088, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_11PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-12.583, -246.088, 317.687]}
        />
      </group>
      <group position={[14.632, 243.672, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_10PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-14.632, -243.672, 317.687]}
        />
      </group>
      <group position={[29.276, 243.55, -317.687]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_1PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-29.276, -243.55, 317.687]}
        />
      </group>
      <group position={[31.266, 242.561, -317.107]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Page_PIV.geometry}
          material={materials["lambert1.034"]}
          position={[-31.266, -242.561, 317.107]}
        />
      </group>
      <group position={[10.295, 242.889, -318.128]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_9PIV.geometry}
          material={book9Mat}
          position={[-10.295, -242.889, 318.128]}
        />
      </group>
      <group position={[8.891, 242.875, -318.145]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_8PIV.geometry}
          material={book8Mat}
          position={[-8.891, -242.875, 318.145]}
        />
      </group>
      <group position={[7.417, 240.175, -318.154]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_7PIV.geometry}
          material={book7Mat}
          position={[-7.417, -240.175, 318.154]}
        />
      </group>
      <group position={[5.997, 240.146, -318.129]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_6PIV.geometry}
          material={book6Mat}
          position={[-5.997, -240.146, 318.129]}
        />
      </group>
      <group position={[4.833, 240.115, -318.189]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_5PIV.geometry}
          material={book5Mat}
          position={[-4.833, -240.115, 318.189]}
        />
      </group>
      <group position={[3.555, 240.176, -318.147]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_4PIV.geometry}
          material={book4Mat}
          position={[-3.555, -240.176, 318.147]}
        />
      </group>
      <group position={[-82.248, 11.179, -115.569]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_34PIV.geometry}
          material={book34Mat}
          position={[82.248, -11.179, 115.569]}
        />
      </group>
      <group position={[-75.236, 11.239, -115.345]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_33PIV.geometry}
          material={book33Mat}
          position={[75.236, -11.239, 115.345]}
        />
      </group>
      <group position={[82.945, 62.368, -219.702]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_32PIV.geometry}
          material={book32Mat}
          position={[-82.945, -62.368, 219.702]}
        />
      </group>
      <group position={[90.343, 54.417, -194.76]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_31PIV.geometry}
          material={book31Mat}
          position={[-90.343, -54.417, 194.76]}
        />
      </group>
      <group position={[81.95, 55.091, -219.969]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_30PIV.geometry}
          material={book30Mat}
          position={[-81.95, -55.091, 219.969]}
        />
      </group>
      <group position={[73.577, 58.742, -219.701]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_29PIV.geometry}
          material={book29Mat}
          position={[-73.577, -58.742, 219.701]}
        />
      </group>
      <group position={[70.471, 65.529, -218.573]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_28PIV.geometry}
          material={book28Mat}
          position={[-70.471, -65.529, 218.573]}
        />
      </group>
      <group position={[-2.757, 240.379, -318.188]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_27PIV.geometry}
          material={book27Mat}
          position={[2.757, -240.379, 318.188]}
        />
      </group>
      <group position={[-4.797, 235.277, -318.164]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_26PIV.geometry}
          material={book26Mat}
          position={[4.797, -235.277, 318.164]}
        />
      </group>
      <group position={[-6.71, 240.312, -318.188]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_25PIV.geometry}
          material={book25Mat}
          position={[6.71, -240.312, 318.188]}
        />
      </group>
      <group position={[-9.05, 238.588, -318.091]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_24PIV.geometry}
          material={book24Mat}
          position={[9.05, -238.588, 318.091]}
        />
      </group>
      <group position={[-12.368, 240.361, -318.095]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_23PIV.geometry}
          material={book23Mat}
          position={[12.368, -240.361, 318.095]}
        />
      </group>
      <group position={[-15.575, 228.655, -316.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_22PIV.geometry}
          material={book22Mat}
          position={[15.575, -228.655, 316.02]}
        />
      </group>
      <group position={[30.903, 236.446, -318.322]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_21PIV.geometry}
          material={book21Mat}
          position={[-30.903, -236.446, 318.322]}
        />
      </group>
      <group position={[28.938, 240.224, -318.305]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_20PIV.geometry}
          material={book20Mat}
          position={[-28.938, -240.224, 318.305]}
        />
      </group>
      <group position={[2.039, 236.828, -318.153]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_2PIV.geometry}
          material={book2Mat}
          position={[-2.039, -236.828, 318.153]}
        />
      </group>
      <group position={[26.984, 240.21, -318.328]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_19PIV.geometry}
          material={book19Mat}
          position={[-26.984, -240.21, 318.328]}
        />
      </group>
      <group position={[25.526, 240.797, -318.41]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_18PIV.geometry}
          material={book18Mat}
          position={[-25.526, -240.797, 318.41]}
        />
      </group>
      <group position={[23.984, 240.843, -318.302]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_17PIV.geometry}
          material={book17Mat}
          position={[-23.984, -240.843, 318.302]}
        />
      </group>
      <group position={[22.079, 242.467, -318.332]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_16PIV.geometry}
          material={book16Mat}
          position={[-22.079, -242.467, 318.332]}
        />
      </group>
      <group position={[20.564, 237.602, -321.961]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_15PIV.geometry}
          material={book15Mat}
          position={[-20.564, -237.602, 321.961]}
        />
      </group>
      <group position={[18.637, 242.342, -318.177]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_14PIV.geometry}
          material={book14Mat}
          position={[-18.637, -242.342, 318.177]}
        />
      </group>
      <group position={[17.17, 240.231, -318.245]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_13PIV.geometry}
          material={book13Mat}
          position={[-17.17, -240.231, 318.245]}
        />
      </group>
      <group position={[15.682, 242.847, -318.314]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_12PIV.geometry}
          material={book12Mat}
          position={[-15.682, -242.847, 318.314]}
        />
      </group>
      <group position={[14.261, 242.923, -318.318]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_11PIV.geometry}
          material={book11Mat}
          position={[-14.261, -242.923, 318.318]}
        />
      </group>
      <group position={[11.964, 242.913, -318.173]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_10PIV.geometry}
          material={book10Mat}
          position={[-11.964, -242.913, 318.173]}
        />
      </group>
      <group position={[-1.017, 237.943, -319.628]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_1PIV.geometry}
          material={book1Mat}
          position={[1.017, -237.943, 319.628]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/Books.glb");