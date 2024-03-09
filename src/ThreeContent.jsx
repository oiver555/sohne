import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Html } from "@react-three/drei";

const ThreeContent = (props) => {
  return (
    <>
      <Canvas style={{ flex: 1, backgroundColor: "red" }} shadows>
        <Experience />         
      </Canvas>
    </>
  );
};
export default ThreeContent;
