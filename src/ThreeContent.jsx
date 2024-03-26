import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Html } from "@react-three/drei";
import { Perf } from "r3f-perf";

const ThreeContent = (props) => {
  return (    
      <Canvas style={{ flex: 1, }} shadows>
        <Experience />         
        {/* <Perf/> */}
      </Canvas>
   
  );
};
export default ThreeContent;
