import "./style.css";
import OverlayHTML from "./OverlayHTML.jsx";
import Nav from "./navigation.jsx";
import Body from "./Body.jsx";

export default () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
      }}
    >
      <OverlayHTML />
      <Nav />
      <Body />
    </div>
  );
};
