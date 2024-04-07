import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import {
  Html,
  Outlines,
  useGLTF,
  useTexture,
  useBounds,
  useHelper,
} from "@react-three/drei";
import * as THREE from "three";
import { animated, useSpring } from "@react-spring/three";
import { useDrag } from "react-use-gesture";
import { ArrowUpward } from "@mui/icons-material";
export const Table_A_Individual = React.forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("./gltf/Table_A.gltf");
  const head1Ref = useRef();
  const base1Ref = useRef();
  const [
    mahBase,
    mahHead,
    oakBase,
    oakHead,
    aoBase,
    aoHead,
    roughBase,
    roughHead,
  ] = useTexture([
    "/textures/Table_A_albedo_mahogany_base.png",
    "/textures/Table_A_albedo_mahogany_head.png",
    "/textures/Table_A_albedo_oak_base.png",
    "/textures/Table_A_albedo_oak_head.png",
    "/textures/Table_A_AO_base.png",
    "/textures/Table_A_AO_head.png",
    "/textures/Table_A_rough_mahogany_base.png",
    "/textures/Table_A_rough_mahogany_head.png",
  ]);
  const baseMat = new THREE.MeshStandardMaterial({
    map: mahBase,
    aoMap: aoBase,
    aoMapIntensity: 1,
    envMapIntensity: 0.2,
    roughnessMap: roughBase,
    roughness: 0.5,
  });
  const headMat = new THREE.MeshStandardMaterial({
    map: mahHead,
    aoMap: aoHead,
    aoMapIntensity: 1,
    envMapIntensity: 0.2,
    roughnessMap: roughBase,
    roughness: 0.5,
  });
  const baseMatOpa = new THREE.MeshStandardMaterial({
    map: mahBase,
    aoMap: aoBase,
    aoMapIntensity: 1,
    envMapIntensity: 0.2,
    roughnessMap: roughBase,
    roughness: 0.5,
    opacity: 0.5,
    transparent: true,
  });
  const headMatOpa = new THREE.MeshStandardMaterial({
    map: mahHead,
    aoMap: aoHead,
    aoMapIntensity: 1,
    envMapIntensity: 0.2,
    roughnessMap: roughBase,
    roughness: 0.5,
    opacity: 0.5,
    transparent: true,
  });

  mahBase.flipY = false;
  mahHead.flipY = false;
  oakBase.flipY = false;
  oakHead.flipY = false;
  aoBase.flipY = false;
  aoHead.flipY = false;
  roughBase.flipY = false;
  roughHead.flipY = false;
  const [hovered, setHovered] = useState({
    base1: false,
    head1: false,
  });
  const [clicked, setClicked] = useState({
    base1: false,
    head1: false,
  });

  const constrainBaseToHeadPlus = (distance, geo) => {
    const positionAttribute = geo.attributes.position;
    const positions = positionAttribute.array;

    for (let i = 0; i < positions.length; i += 3) {
      const y = positions[i + 1]; // Get the Y coordinate of the vertex
      if (y > 30 && positions[i + 1] + distance * 0.265 > 90) {
        positions[i + 1] = 85;
      } else if (y > 30 && positions[i + 1] + distance * 0.265 > 30) {
        positions[i + 1] += distance * 0.26;
      } else if (y > 25 && positions[i + 1] + distance * 0.265 < 30) {
        positions[i + 1] = 31;
      }
    }
    positionAttribute.needsUpdate = true;
    geo.computeBoundingSphere();
  };

  const constrainBaseToHeadMinus = (distance, geo) => {
    const positionAttribute = geo.attributes.position;
    const positions = positionAttribute.array;
    for (let i = 0; i < positions.length; i += 3) {
      const y = positions[i + 1]; // Get the Y coordinate of the vertex

      if (y > 30 && positions[i + 1] + distance * 0.265 > 105) {
        console.log(positions[i + 1] + distance);
        positions[i + 1] = 100;
      } else if (y > 25 && positions[i + 1] + distance * 0.265 < 32) {
        positions[i + 1] = 35;
      } else if (y > 30 && positions[i + 1] + distance * 0.265 < 30) {
        positions[i + 1] = 31;
      } else if (y > 30 && positions[i + 1] + distance * 0.265 > 30) {
        positions[i + 1] -= distance * 0.26;
      }
    }
    positionAttribute.needsUpdate = true;
    geo.computeBoundingSphere();
  };

  const [springBase1, setBase1Spring] = useSpring(() => ({
    position: [0, 0, 0],
    config: { friction: 10 },
  }));
  const [springHead1, setHead1Spring] = useSpring(() => ({
    position: [0, 0, 0],
    config: { friction: 10 },
  }));
  const bindBase1 = useDrag(({ down, offset: [mx, my] }) => {
    if (!clicked.base1) return;
    setBase1Spring({
      position: [my * 0.8, 0, -mx * 0.4 + my * 0.6],
      immediate: down,
    });
  });

  const bindHead1 = useDrag(
    ({
      down,
      direction: [dx, dy],
      delta: [deltaX, deltaY],
      offset: [mx, my],
    }) => {
      if (!clicked.head1 || my > 70 || my < -150) return;
      setHead1Spring({ position: [0, -my * 0.25, 0], immediate: down });
      if (dy < 0) {
        constrainBaseToHeadPlus(-deltaY, nodes.table_A_Base_1.geometry);
      } else if (dy > 0.1) {
        console.log("minus");
        constrainBaseToHeadMinus(deltaY, nodes.table_A_Base_1.geometry);
      }
    }
  );

  const deSelect = () => {
    setClicked(false);
    setHovered(false);
  };

  useEffect(() => {
    if (props.deSelects) {
      setClicked({
        head1: false,
        base1: false,
      });
      setHovered({
        head1: false,
        base1: false,
      });
    }
  }, [props.deSelects]);

 

  // const head1Box = new THREE.Box3();
  // head1Box.setFromObject(head1Ref, true);
  // useHelper(head1Box, THREE.Box3Helper, 2, "cyan");
 
  

  return (
    <animated.group {...props}>
      <animated.group {...bindBase1()} {...springBase1}>
        <animated.group {...bindHead1()} {...springHead1}>
          <mesh
            ref={head1Ref}
            name={`head${props.index}`}
            onClick={(e) => {
              if (clicked.head1) return;
              props.setSelected((prev) => [...prev, deSelect]);
              setClicked({
                base1: false,
                head1: true,
              });
              setHovered({
                base1: false,
                head1: true,
              });
              e.stopPropagation();
            }}
            onPointerEnter={(e) => {
              if (Object.values(clicked).some((value) => value)) return;
              setHovered({
                base1: false,
                head1: true,
              });
              e.stopPropagation();
            }}
            onPointerOver={(e) => {
              if (Object.values(clicked).some((value) => value)) return;
              setHovered({
                base1: false,
                head1: true,
              });
              e.stopPropagation();
            }}
            onPointerLeave={(e) => {
              if (Object.values(clicked).some((value) => value)) return;
              setHovered({
                base1: false,
                head1: false,
              });
              e.stopPropagation();
            }}
            castShadow
            receiveShadow
            geometry={nodes.table_A_Head_1.geometry}
            material={
              clicked.head1 || clicked.base1
                ? headMat
                : Object.values(clicked).some((value) => value)
                ? headMatOpa
                : headMat
            }
          >
            {(hovered.head1 ||
              clicked.head1 ||
              hovered.base1 ||
              clicked.base1) && (
              <Outlines
                angle={0}
                thickness={
                  hovered.head1 ||
                  clicked.head1 ||
                  hovered.base1 ||
                  clicked.base1
                    ? 1
                    : 0
                }
                color={clicked.head1 || clicked.base1 ? "yellow" : "white"}
              />
            )}
            {clicked.head1 && (
              <animated.group {...bindHead1()}>
                <Html position={[-22, 65, -5]}>
                  <ArrowUpward style={{ fontSize: 50, color: "cyan" }} />
                </Html>
              </animated.group>
            )}
          </mesh>
        </animated.group>
        <mesh
          ref={base1Ref}
          name={`base${props.index}`}
          onClick={(e) => {
            if (clicked.base1) return;
            props.setSelected((prev) => [...prev, deSelect]);
            setClicked({
              base1: true,
              head1: false,
            });
            setHovered({
              base1: true,
              head1: false,
            });
            e.stopPropagation();
          }}
          onPointerEnter={(e) => {
            if (Object.values(clicked).some((value) => value)) return;
            setHovered({
              base1: true,
              head1: false,
            });
            e.stopPropagation();
          }}
          onPointerOver={(e) => {
            if (Object.values(clicked).some((value) => value)) return;
            setHovered({
              base1: true,
              head1: false,
            });
            e.stopPropagation();
          }}
          onPointerLeave={(e) => {
            if (Object.values(clicked).some((value) => value)) return;
            setHovered({
              base1: false,
              head1: false,
            });
            e.stopPropagation();
          }}
          castShadow
          receiveShadow
          geometry={nodes.table_A_Base_1.geometry}
          material={
            clicked.head1 || clicked.base1
              ? baseMat
              : Object.values(clicked).some((value) => value)
              ? baseMatOpa
              : baseMat
          }
        >
          {(hovered.base1 || clicked.base1) && (
            <Outlines
              angle={0}
              thickness={hovered.base1 || clicked.base1 ? 1 : 0}
              color={clicked.base1 ? "yellow" : "white"}
              opacity={0}
            />
          )}
        </mesh>
      </animated.group>
    </animated.group>
  );
});
