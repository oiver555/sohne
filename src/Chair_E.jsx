import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Chair_E(props) {
  const { nodes, materials } = useGLTF("./gltf/Chair_E.glb");

  const textureLoader = new THREE.TextureLoader();

  const ChairEbackbackShape = textureLoader.load(
    "/textures/Chair_E_back_backShape_rmanDefaultBakeDisplay.png"
  );
  const ChairEconnectorconnectorShape = textureLoader.load(
    "/textures/Chair_E_connector_connectorShape_rmanDefaultBakeDisplay.png"
  );
  const ChairEcushioncushionShape = textureLoader.load(
    "/textures/Chair_E_cushion_cushionShape_rmanDefaultBakeDisplay.png"
  );
  const ChairElegslegsShape = textureLoader.load(
    "/textures/Chair_E_legs_legsShape_rmanDefaultBakeDisplay.png"
  );
  const ChairEstoppersstoppersShape = textureLoader.load(
    "/textures/Chair_E_stoppers_stoppersShape_rmanDefaultBakeDisplay.png"
  );
  const MKSmartMaterialVol13Wood10BC = textureLoader.load(
    "/textures/MK_SmartMaterial_Vol13_Wood_10_BC.png"
  );
  const MKSmartMaterialVol13Wood10N = textureLoader.load(
    "/textures/MK_SmartMaterial_Vol13_Wood_10_N.png"
  );
  const MKSmartMaterialVol13Wood10R = textureLoader.load(
    "/textures/MK_SmartMaterial_Vol13_Wood_10_R.png"
  );

  const Elsafabricd = textureLoader.load("/textures/Elsa_fabric_d.jpg");
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
  const wood01 = textureLoader.load("/textures/wood_01.jpeg");
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
    <group {...props} dispose={null}  visible={false}>
      <group position={[19, 3.2, 14]} scale={8} rotation={[0, 1.5, 0]}>
        <group position={[0, -0.391, 0]}>
          <group position={[-0.008, 0.55, -0.023]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.backPIV.geometry}
              material={back}
              position={[0.008, -0.55, 0.023]}
            />
          </group>
          <group position={[-0.006, 0.226, -0.012]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.connectorPIV.geometry}
              material={connector}
              position={[0.006, -0.226, 0.012]}
            />
          </group>
          <group position={[0, 0.654, 0.007]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cushionPIV.geometry}
              material={cushion}
              position={[0, -0.654, -0.007]}
            />
          </group>
          <group position={[-0.006, 0.108, -0.012]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.legsPIV.geometry}
              material={legs}
              position={[0.006, -0.108, 0.012]}
            />
          </group>
          <group position={[-0.006, 0.005, -0.012]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.stoppersPIV.geometry}
              material={stoppers}
              position={[0.006, -0.005, 0.012]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/Chair_E.glb");
