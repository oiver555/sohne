import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import HTMLContent from "./HTMLContent.jsx";
import ThreeContent from "./ThreeContent.jsx";

const Body = (props) => {
  return (
    <div style={{height: 2000, overflow: "auto"}}>
      <div style={{ flexDirection: "row", display: "flex", height: window.outerHeight }}>
        <ThreeContent />
        <HTMLContent />
      </div>
      <div style={{ width: 500, height: 800, backgroundColor: "red" }}></div>
    </div>
  );
};

export default Body;
