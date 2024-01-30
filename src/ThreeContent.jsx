import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const ThreeContent = (props) => {
  return (
    <Canvas style={{ flex: 1 }} shadows>
      <Experience />
    </Canvas>
  );
};
export default ThreeContent;
