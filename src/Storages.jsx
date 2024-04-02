import { Suspense, useContext } from "react";
import { Box, useGLTF } from "@react-three/drei";
import { Storage_A } from "./Storage_A";
import { Storage_B } from "./Storage_B";
import Storage_C from "./Storage_C";
import Storage_D from "./Storage_D";
import { ExperienceContext, StorageContext } from "./ExpContext";
import { animated, useSpring } from "@react-spring/three";

const Storages = (props) => {
  const {
    storageVis,
    storageCRef,
    storageARef,
    storageDRef,
    storageRotation,
    storageBRef,
  } = useContext(StorageContext);
  const { storageCCompRef,storageACompRef, storageBCompRef } = useContext(ExperienceContext);
  const nodesA = useGLTF("./gltf/Storage_A.gltf");
  const nodesB = useGLTF("./gltf/Storage_B.glb");
  const nodesD = useGLTF("./gltf/Storage_D.gltf");
  const nodesC = useGLTF("./gltf/Storage_C.gltf");
  return (
    <group>
      {storageVis.a && (
        <Suspense
          fallback={
            <animated.group
              name="Storage_A_grp"
              position={[19.8, 0, 14]}
              scale={0.083}
              rotation-y={storageRotation.rotate}
              ref={storageARef}
            >
              <group rotation={[0, 1.6, 0]}>
                <group name="Storage_A" position={[0, 40, -1.435]}>
                  <mesh
                    name="Storage_APIV"
                    castShadow
                    receiveShadow
                    geometry={nodesA.nodes.Storage_A_Base.geometry}
                    position={[0, -40, 1.435]}
                  />
                </group>
                <group name="Storage_A_Door" position={[-29.703, 50, 19.066]}>
                  <mesh
                    name="Storage_A_DoorPIV"
                    castShadow
                    receiveShadow
                    geometry={nodesA.nodes.Storage_A_Door.geometry}
                    position={[29.703, -50, -19.065]}
                  />
                </group>
              </group>
            </animated.group>
          }
        >
          <Storage_A  ref={storageACompRef}  />
        </Suspense>
      )}
      {storageVis.b && (
        <Suspense
          fallback={
            <animated.group
              name="Storage_B_grp"
              position={[23, 0, 16]}
              scale={7.515}
              rotation-y={storageRotation.rotate}
              ref={storageBRef}
            >
              <group rotation={[-Math.PI / 2, 0, -1.4]}>
                <mesh
                  name="Storage_B_Door_1"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Door_1.geometry}
                />
                <mesh
                  name="Storage_B_Door_2"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Door_2.geometry}
                />
                <mesh
                  name="Storage_B_Drawers"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Drawers.geometry}
                />
                <mesh
                  name="Storage_B_Frame"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Frame.geometry}
                />
                <mesh
                  name="Storage_B_Glass"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Glass.geometry}
                />
                <mesh
                  name="Storage_B_Handle_1"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Handle_1.geometry}
                />
                <mesh
                  name="Storage_B_Handle_2"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Handle_2.geometry}
                />
                <mesh
                  name="Storage_B_Knob"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Knob.geometry}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                />
                <mesh
                  name="Storage_B_Leg_1"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Leg_1.geometry}
                />
                <mesh
                  name="Storage_B_Leg_2"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Leg_2.geometry}
                />
                <mesh
                  name="Storage_B_Leg_3"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Leg_3.geometry}
                />
                <mesh
                  name="Storage_B_Leg_4"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Leg_4.geometry}
                />
                <mesh
                  name="Storage_B_Leg_5"
                  castShadow
                  receiveShadow
                  geometry={nodesB.nodes.Storage_B_Leg_5.geometry}
                />
              </group>
            </animated.group>
          }
        >
          <Storage_B ref={storageBCompRef} />
        </Suspense>
      )}
      {storageVis.c && (
        <Suspense
          fallback={
            <animated.group
              ref={storageCRef}
              name="Storage_C_grp"
              position={[19.8, 0, 14]}
              scale={0.65}
              rotation-y={storageRotation.rotate}
              dispose={null}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodesC.nodes.Shelf_1_Storage_C.geometry}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodesC.nodes.Storage_C_wheels.geometry}
              />

              <mesh
                castShadow
                receiveShadow
                geometry={nodesC.nodes.Storage_C_Frame.geometry}
              />

              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodesC.nodes.Storage_C_polySurface14_Drawer_1.geometry
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodesC.nodes.Storage_C_Drawer_1_polySurface8.geometry}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodesC.nodes.Storage_C_Drawer_1_pCube1.geometry}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodesC.nodes.Storage_C_polySurface10_Drawer_2.geometry
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodesC.nodes.Storage_C_Drawer_2_polySurface7.geometry}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodesC.nodes.Storage_C_Drawer_2_pCube4.geometry}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodesC.nodes.Storage_C_polySurface13_Drawer_3.geometry
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodesC.nodes.Storage_C_Drawer_3_polySurface9.geometry}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodesC.nodes.Storage_C_Drawer_3_pCube5.geometry}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodesC.nodes.Storage_C_polySurface12_Slide_Drawer_1.geometry
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodesC.nodes.Storage_C_Slide_Drawer_1_polySurface6.geometry
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodesC.nodes.Storage_C_polySurface11_Slide_Drawer_2.geometry
                }
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodesC.nodes.Storage_C_Slide_Drawer_2_polySurface5.geometry
                }
              />
            </animated.group>
          }
        >
          <Storage_C ref={storageCCompRef} />
        </Suspense>
      )}
      {storageVis.d && (
        <Suspense
          fallback={
            <animated.group
              ref={storageDRef}
              position={[19.8, 0, 14]}
              scale={7}
              rotation-y={storageRotation.rotate}
              dispose={null}
            >
              <group rotation={[0, 1.6, 0]}>
                <mesh geometry={nodesD.nodes.Drawer_1.geometry} />
                <mesh geometry={nodesD.nodes.Drawer_4.geometry} />
                <mesh geometry={nodesD.nodes.Door_2.geometry} />
                <mesh geometry={nodesD.nodes.Door_handle_4.geometry} />
                <mesh geometry={nodesD.nodes.Door_handle_1.geometry} />
                <mesh geometry={nodesD.nodes.Door_handle_5.geometry} />
                <mesh geometry={nodesD.nodes.Door_handle_6.geometry} />
                <mesh geometry={nodesD.nodes.Drawer_2.geometry} />
                <mesh geometry={nodesD.nodes.Frame.geometry} />
                <mesh geometry={nodesD.nodes.Door_1.geometry} />
                <mesh geometry={nodesD.nodes.Door_handle_2.geometry} />
                <mesh geometry={nodesD.nodes.Door_handle_3.geometry} />
                <mesh geometry={nodesD.nodes.Drawer_3.geometry} />
              </group>
            </animated.group>
          }
        >
          <Storage_D />
        </Suspense>
      )}
    </group>
  );
};

export default Storages;
