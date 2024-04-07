import React, {
  useContext,
  useEffect,
  useState,
  useImperativeHandle,
} from "react";
import { Html, Outlines, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { animated, useSpring } from "@react-spring/three";
import { useDrag } from "react-use-gesture";
import { ExperienceContext, TablesContext } from "./ExpContext";
import { Select } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import useConstant from "./hooks/useConstant";
import { useThree } from "@react-three/fiber";
import { ArrowUpward, PlusOne, PlusOneOutlined } from "@mui/icons-material";
import { Table_A_Individual } from "./Table_A_individual";
import { PlusMinus } from "./PlusMinus";
export const Table_A = React.forwardRef((props, ref) => {
  const { tableRotation, tableARef } = useContext(TablesContext);
  const { tableACompRef } = useContext(ExperienceContext);
  const [amount, setAmount] = useState(1);
  const [deSelects, setDeSelects] = useState(false);
  const [selected, setSelected] = useState([]);
  const deSelect = () => {
    setDeSelects(true);
    setSelected([]);
  };
  useImperativeHandle(ref, () => {
    return { deSelect };
  });

  useEffect(() => {
    if (deSelects) {
      setDeSelects(false);
    }
  }, [deSelects]);

  useEffect(() => {
    if (selected.length > 1) {
      selected[0]();
      setSelected((prev) => prev.slice(1));
    }
  }, [selected]);

  console.log(selected);
  return (
    <animated.group
      ref={tableARef}
      dispose={null}
      scale={0.1}
      position={[20, -0, 15]}
      rotation-y={tableRotation.rotate}
    >
      {Array.from({ length: amount }).map((_, index) => (
        <Table_A_Individual
          setSelected={setSelected}
          deSelects={deSelects}
          position={[index * 30, 0, index * 30]}
          key={index}
          index={index}
        />
      ))}
      <PlusMinus setAmount={setAmount} position={[100, 8.5, 60]} type="plus" />
      <PlusMinus setAmount={setAmount} position={[100, 10, 80]} type="minus" />
    </animated.group>
  );
});
