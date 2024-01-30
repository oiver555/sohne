import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import HTMLContent from "./HTMLContent.jsx";
import ThreeContent from "./ThreeContent.jsx";

const Body = (props) => {
  return (
    <div style={{ flexDirection: "row", display: "flex", height: "100%" }}>
      <ThreeContent />
      <HTMLContent />
    </div>
  );
};

export default Body;
