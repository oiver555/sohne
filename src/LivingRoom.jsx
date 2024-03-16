import {
  PerspectiveCamera,
  useGLTF,
  useTexture,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { useContext, useEffect, useRef } from "react";
import { SceneContext } from "./ExpContext";
import { Room } from "./Room";
import { Vases } from "./Vases";
import { Windows } from "./Windows";
import { Xbox } from "./Xbox";
import { Aquarium } from "./Aquarium";
import { AretiTable } from "./AretiTable";
import { BeoPlay } from "./BeoPlay";
import { Bird } from "./Bird";
import { Books } from "./Books";
import { Can } from "./Can";
import { Carpet } from "./Carpet";
import { GramPhone } from "./GramPhone";
import { Lamp } from "./Lamp";
import { PlantStand } from "./PlantStand";
import { PlantVase1 } from "./PlantVase1";
import { PlantVase2 } from "./PlantVase2";
import { TV } from "./TV";
import { Trim } from "./Trim";
import { Table } from "./Table";
import { Suitcase } from "./Suitcase";
import { SpotLightWall } from "./SpotLightWall";
import { Shelving } from "./Shelving";
import { Shades } from "./Shades";
import { PlantVase3 } from "./PlantsVase3";
import { PlantVase4 } from "./PlantsVase4";
import { PlantVase5 } from "./PlantsVase5";
import { PlantVase6 } from "./PlantsVase6";
import { Plants } from "./Plants";
import { SpotlightCeiling } from "./SpotlightCeiling";
import { Sofa } from "./Sofa";
import { useFrame, useThree } from "@react-three/fiber";
import { PortraitFrames } from "./PortraitFrames";
import {
  EffectComposer,
  Selection,
  Outline,
  N8AO,
  TiltShift2,
  ToneMapping,
} from "@react-three/postprocessing";
import { easing } from "maath";

const LivingRoom = (props) => {
  const { nodes, materials } = useGLTF("./gltf/Room.gltf");
  const sceneRef = useRef();
  const { size } = useThree(); // Get canvas size using useThree hook
  const aspect = size.width / size.height;
  const { livingRoomCam } = useContext(SceneContext);
  const controls = useRef();
 
  return (
      <>
        <PerspectiveCamera
          ref={livingRoomCam}
          fov={50}
          filmGauge={135}
          makeDefault
          aspect={size.width / size.height}
          left={-1}
          right={1}
          top={1}
          bottom={-1}
          near={0.1}
          far={3000}
          position={[65, 137, 153]}
          rotation={[-0.2, -0, -0]}
        /> 
        <OrbitControls
          makeDefault
          ref={controls}
          position={[65, 137, 153]}
          target={[52, 101, -46]} 
        />
        <Effects />
      <axesHelper args={[5]} />
      <directionalLight
        castShadow
        position={[19, 7.7, 31]}
        intensity={1}
        scale={[0.1, 0.1, 0.1]}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0}
        shadow-camera-far={200}
        shadow-camera-top={30}
        shadow-camera-right={30}
        shadow-camera-bottom={-30}
        shadow-camera-left={-30}
        color={"white"}
      />
      <ambientLight intensity={0.4} color={"rgb(255,200,200)"} />
      <Sofa />
      <PortraitFrames />
      <Shades />
      <Shelving />
      <SpotlightCeiling />
      <SpotLightWall />
      <Suitcase />
      <Table />
      <Trim />
      <TV />
      <PlantVase6 />
      <PlantVase5 />
      <PlantVase4 />
      <PlantVase3 />
      <PlantVase2 />
      <PlantVase1 />
      <PlantStand />
      <Plants />
      <Lamp />
      <GramPhone />
      <Carpet />
      <Can />
      <Books />
      <Bird />
      <BeoPlay />
      <AretiTable />
      <Aquarium />
      <Xbox />
      <Vases />
      <Windows />
      <Room />
    </>
  );
};
export default LivingRoom;
//{x:65, y:137, z:153}
//52, 101, -46
function Effects() {
  const { size } = useThree();
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        state.pointer.x + 65,
         state.pointer.y + 137  ,
         state.pointer.x + 153,
      ],
      0.3,
      delta
    );
    state.camera.lookAt(state.camera.position.x * 1, 135, -4);
  });
  return (
    <EffectComposer
      stencilBuffer
      disableNormalPass
      autoClear={false}
      multisampling={4}
    >
      {/* <N8AO
        halfRes
        aoSamples={5}
        aoRadius={0.4}
        distanceFalloff={0.75}
        intensity={1}
      />
      <Outline
        visibleEdgeColor="white"
        hiddenEdgeColor="white"
        blur
        width={size.width * 1.25}
        edgeStrength={10}
      />
      <TiltShift2 samples={5} blur={0.1} />
      <ToneMapping /> */}
    </EffectComposer>
  );
}
